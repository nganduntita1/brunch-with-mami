import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

type ContactFormProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
};

export default function ContactForm({
  open,
  onOpenChange,
  title = "Get In Touch",
  description = "We'd love to hear from you. Send us a message and we'll respond as soon as possible."
}: ContactFormProps) {
  const [state, handleSubmit] = useForm("xzbokyja");

  if (state.succeeded) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Thank You!</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-center text-gray-700">
              Thanks for your message! We'll get back to you soon.
            </p>
          </div>
          <DialogFooter>
            <Button onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <p className="text-sm text-gray-600">{description}</p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <Input
              id="name"
              name="name"
              required
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="w-full"
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
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={state.submitting}>
              {state.submitting ? "Sending..." : "Send Message"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
