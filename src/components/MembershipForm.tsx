import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

type MembershipFormProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function MembershipForm({
  open,
  onOpenChange
}: MembershipFormProps) {
  const [state, handleSubmit] = useForm("xzbokyja");

  if (state.succeeded) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Welcome to the Sisterhood! 🌸</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-center text-gray-700 mb-4">
              Thanks for joining! We're excited to have you as part of our community.
            </p>
            <p className="text-center text-gray-600 text-sm">
              You'll receive a confirmation email shortly with your membership details and next steps.
            </p>
          </div>
          <DialogFooter>
            <Button onClick={() => onOpenChange(false)} className="w-full">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Join Brunch with MAMI Membership</DialogTitle>
          <p className="text-sm text-gray-600">
            Fill out the form below to join our exclusive membership community for R250/month.
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name *
              </label>
              <Input
                id="firstName"
                name="firstName"
                required
                className="w-full"
                placeholder="Enter your first name"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name *
              </label>
              <Input
                id="lastName"
                name="lastName"
                required
                className="w-full"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="w-full"
              placeholder="your.email@example.com"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="flex gap-2">
              <select
                name="countryCode"
                className="bg-white border border-gray-200 h-10 rounded-md text-gray-800 text-sm px-3 min-w-[120px] focus:outline-none focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent"
              >
                <option value="+27">🇿🇦 South Africa (+27)</option>
                <option value="+266">🇱🇸 Lesotho (+266)</option>
                <option value="+268">🇸🇿 Eswatini (+268)</option>
                <option value="+264">🇳🇦 Namibia (+264)</option>
                <option value="+267">🇧🇼 Botswana (+267)</option>
                <option value="+263">🇿🇼 Zimbabwe (+263)</option>
                <option value="+258">🇲🇿 Mozambique (+258)</option>
                <option value="+260">🇿🇲 Zambia (+260)</option>
                <option value="+265">🇲🇼 Malawi (+265)</option>
                <option value="+250">🇷🇼 Rwanda (+250)</option>
                <option value="+256">🇺🇬 Uganda (+256)</option>
                <option value="+254">🇰🇪 Kenya (+254)</option>
                <option value="+255">🇹🇿 Tanzania (+255)</option>
                <option value="+251">🇪🇹 Ethiopia (+251)</option>
                <option value="+234">🇳🇬 Nigeria (+234)</option>
                <option value="+233">🇬🇭 Ghana (+233)</option>
                <option value="+225">🇨🇮 Côte d'Ivoire (+225)</option>
                <option value="+221">🇸🇳 Senegal (+221)</option>
                <option value="+212">🇲🇦 Morocco (+212)</option>
                <option value="+213">🇩🇿 Algeria (+213)</option>
                <option value="+216">🇹🇳 Tunisia (+216)</option>
                <option value="+218">🇱🇾 Libya (+218)</option>
                <option value="+20">🇪🇬 Egypt (+20)</option>
                <option value="+27">🇿🇦 South Africa (+27)</option>
                <option value="+1">🇺🇸 United States (+1)</option>
                <option value="+1">🇨🇦 Canada (+1)</option>
                <option value="+44">🇬🇧 United Kingdom (+44)</option>
                <option value="+33">🇫🇷 France (+33)</option>
                <option value="+49">🇩🇪 Germany (+49)</option>
                <option value="+39">🇮🇹 Italy (+39)</option>
                <option value="+34">🇪🇸 Spain (+34)</option>
                <option value="+31">🇳🇱 Netherlands (+31)</option>
                <option value="+32">🇧🇪 Belgium (+32)</option>
                <option value="+41">🇨🇭 Switzerland (+41)</option>
                <option value="+43">🇦🇹 Austria (+43)</option>
                <option value="+45">🇩🇰 Denmark (+45)</option>
                <option value="+46">🇸🇪 Sweden (+46)</option>
                <option value="+47">🇳🇴 Norway (+47)</option>
                <option value="+358">🇫🇮 Finland (+358)</option>
                <option value="+61">🇦🇺 Australia (+61)</option>
                <option value="+64">🇳🇿 New Zealand (+64)</option>
                <option value="+91">🇮🇳 India (+91)</option>
                <option value="+86">🇨🇳 China (+86)</option>
                <option value="+81">🇯🇵 Japan (+81)</option>
                <option value="+82">🇰🇷 South Korea (+82)</option>
                <option value="+65">🇸🇬 Singapore (+65)</option>
                <option value="+60">🇲🇾 Malaysia (+60)</option>
                <option value="+66">🇹🇭 Thailand (+66)</option>
                <option value="+63">🇵🇭 Philippines (+63)</option>
                <option value="+62">🇮🇩 Indonesia (+62)</option>
                <option value="+84">🇻🇳 Vietnam (+84)</option>
                <option value="+55">🇧🇷 Brazil (+55)</option>
                <option value="+54">🇦🇷 Argentina (+54)</option>
                <option value="+56">🇨🇱 Chile (+56)</option>
                <option value="+57">🇨🇴 Colombia (+57)</option>
                <option value="+51">🇵🇪 Peru (+51)</option>
                <option value="+52">🇲🇽 Mexico (+52)</option>
                <option value="+1">🇺🇸 United States (+1)</option>
                <option value="+1">🇨🇦 Canada (+1)</option>
                <option value="+7">🇷🇺 Russia (+7)</option>
                <option value="+90">🇹🇷 Turkey (+90)</option>
                <option value="+966">🇸🇦 Saudi Arabia (+966)</option>
                <option value="+971">🇦🇪 UAE (+971)</option>
                <option value="+974">🇶🇦 Qatar (+974)</option>
                <option value="+965">🇰🇼 Kuwait (+965)</option>
                <option value="+973">🇧🇭 Bahrain (+973)</option>
                <option value="+968">🇴🇲 Oman (+968)</option>
                <option value="+972">🇮🇱 Israel (+972)</option>
                <option value="+961">🇱🇧 Lebanon (+961)</option>
                <option value="+963">🇸🇾 Syria (+963)</option>
                <option value="+962">🇯🇴 Jordan (+962)</option>
                <option value="+964">🇮🇶 Iraq (+964)</option>
                <option value="+98">🇮🇷 Iran (+98)</option>
                <option value="+93">🇦🇫 Afghanistan (+93)</option>
                <option value="+92">🇵🇰 Pakistan (+92)</option>
                <option value="+880">🇧🇩 Bangladesh (+880)</option>
                <option value="+94">🇱🇰 Sri Lanka (+94)</option>
                <option value="+977">🇳🇵 Nepal (+977)</option>
                <option value="+975">🇧🇹 Bhutan (+975)</option>
                <option value="+960">🇲🇻 Maldives (+960)</option>
                <option value="+27">🇿🇦 South Africa (+27)</option>
              </select>
              <Input
                id="phone"
                name="phone"
                type="tel"
                className="flex-1"
                placeholder="XXX XXX XXXX"
              />
            </div>
            <ValidationError 
              prefix="Phone" 
              field="phone"
              errors={state.errors}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="membershipType" className="block text-sm font-medium text-gray-700">
              Membership Type *
            </label>
            <select
              id="membershipType"
              name="membershipType"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent"
            >
              <option value="">Select membership type</option>
              <option value="monthly">Monthly Membership - R250/month</option>
              <option value="annual">Annual Membership - R2,500/year (Save R500!)</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Tell us about yourself (Optional)
            </label>
            <Textarea
              id="message"
              name="message"
              rows={3}
              className="w-full"
              placeholder="What are you hoping to gain from this membership? Any specific interests or goals?"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">
              <strong>What happens next?</strong>
            </p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• You'll receive a confirmation email within 24 hours</li>
              <li>• We'll send you payment details for your chosen membership</li>
              <li>• Once payment is confirmed, you'll get access to all member benefits</li>
              <li>• Your first monthly care package will be shipped within 5-7 business days</li>
            </ul>
          </div>
          
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={state.submitting}
              className="w-full sm:w-auto bg-[#9b87f5] hover:bg-[#8b7ae5] text-white"
            >
              {state.submitting ? "Joining..." : "Join the Sisterhood"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
