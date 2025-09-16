
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
// Supabase temporarily disabled
// import { supabase } from "@/integrations/supabase/client";
type Session = any;
type User = any;
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
    // No backend for now; treat as logged-out non-admin
    setSession(null);
    setUser(null);
    setIsAdmin(false);
    setLoading(false);
  }, []);

  const checkIfAdmin = async (email: string) => {
    // No backend; only allow hardcoded admin for local use
    const isHardcodedAdmin = email === 'brunchwithus';
    setIsAdmin(isHardcodedAdmin);
  };

  const signIn = async (email: string, password: string) => {
    // No backend; support hardcoded admin only
    if (email === 'brunchwithus' && password === 'admin1234') {
      const mockUser = { id: 'admin-hardcoded', email, role: 'admin' };
      setUser(mockUser as any);
      setIsAdmin(true);
      toast.success("Logged in as admin");
      return { error: null };
    }
    return { error: { message: 'Authentication disabled' } } as any;
  };

  const signOut = async () => {
    // Clear local admin state
    setIsAdmin(false);
    setUser(null);
    setSession(null);
    toast.success("Logged out successfully");
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
