
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Session, User } from "@supabase/supabase-js";
import { toast } from "@/components/ui/sonner";

type AuthContextType = {
  session: Session | null;
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any | null }>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // Check if user is admin
        if (session?.user) {
          setTimeout(() => {
            checkIfAdmin(session.user.email as string);
          }, 0);
        } else {
          setIsAdmin(false);
        }
      }
    );

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        checkIfAdmin(session.user.email as string);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const checkIfAdmin = async (email: string) => {
    try {
      // Check against the hardcoded admin credentials
      const isHardcodedAdmin = email === 'brunchwithus';
      
      if (isHardcodedAdmin) {
        setIsAdmin(true);
        return;
      }

      // Fallback to database check for other admin users
      const { data, error } = await supabase
        .from('admins')
        .select('*')
        .eq('email', email)
        .single();

      if (error) {
        console.error("Error checking admin status:", error);
        setIsAdmin(false);
      } else {
        setIsAdmin(!!data);
      }
    } catch (error) {
      console.error("Error checking admin status:", error);
      setIsAdmin(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      // Special case for hardcoded admin
      if (email === 'brunchwithus' && password === 'admin1234') {
        // For the hardcoded admin, we'll set admin status directly
        setIsAdmin(true);
        
        // Try to sign in with Supabase
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        // If there's an error (likely because the admin user doesn't exist in auth),
        // we'll create a fake session to bypass authentication
        if (error) {
          console.log("Setting up admin session manually");
          
          // Create a mock user and session for the admin
          const mockUser = {
            id: 'admin-hardcoded',
            email: email,
            role: 'admin',
          };
          
          setUser(mockUser as any);
          setIsAdmin(true);
          
          // Still return the error so the component knows to handle it
          return { error };
        }
        
        return { error: null };
      }
      
      // Regular sign in for non-hardcoded admins
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error("Login failed", {
          description: error.message,
        });
        return { error };
      }

      return { error: null };
    } catch (error) {
      console.error("Sign in error:", error);
      return { error };
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setIsAdmin(false);
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Sign out error:", error);
      toast.error("Failed to log out");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        isAdmin,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
