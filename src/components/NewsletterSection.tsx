
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, ValidationError } from '@formspree/react';

const NewsletterSection = () => {
  const [state, handleSubmit] = useForm("xzbokyja");

  if (state.succeeded) {
    return (
      <section className="py-16 relative bg-[#fff5f2] text-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-playfair mb-4 tracking-wide uppercase text-gray-800">
              JOIN THE SISTERHOOD
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/30 shadow-sm">
              <p className="text-lg text-gray-700 mb-4">Thanks for joining!</p>
              <p className="text-gray-600">Welcome to the sisterhood! You'll receive exclusive content and updates soon.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 relative bg-[#fff5f2] text-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-playfair mb-4 tracking-wide uppercase text-gray-800">
            JOIN THE SISTERHOOD
          </h2>
          
          <p className="text-base mb-8 font-light max-w-2xl mx-auto leading-relaxed text-gray-600">
            Get exclusive access to empowering content, early event announcements, 
            and resources crafted specifically for ambitious women on the rise
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/30 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                            <Input 
                              id="firstName" 
                    name="firstName"
                              className="bg-white border border-gray-200 h-11 rounded-lg text-gray-800 placeholder-gray-400 text-base px-4" 
                              placeholder="Enter first name"
                    required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                            <Input 
                              id="lastName" 
                    name="lastName"
                              className="bg-white border border-gray-200 h-11 rounded-lg text-gray-800 placeholder-gray-400 text-base px-4" 
                              placeholder="Enter last name"
                    required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                          <Input 
                            id="email" 
                  name="email"
                            className="bg-white border border-gray-200 h-11 rounded-lg text-gray-800 placeholder-gray-400 text-base px-4" 
                            type="email" 
                            placeholder="your.email@example.com"
                  required
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
                    className="bg-white border border-gray-200 h-11 rounded-lg text-gray-800 text-base px-3 min-w-[120px] focus:outline-none focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent"
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
                    className="bg-white border border-gray-200 h-11 rounded-lg text-gray-800 placeholder-gray-400 text-base px-4 flex-1" 
                    type="tel" 
                    placeholder="XXX XXX XXXX"
                  />
                </div>
                <ValidationError 
                  prefix="Phone" 
                  field="phone"
                  errors={state.errors}
                  />
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                  disabled={state.submitting}
                  className="bg-gray-800 hover:bg-gray-900 text-white uppercase tracking-wide text-sm font-medium px-8 py-4 rounded-lg transition-all duration-200 shadow-sm w-full md:w-auto disabled:opacity-50"
                  >
                  {state.submitting ? "JOINING..." : "GET ACCESS NOW"}
                  </Button>
                </div>
                
                <p className="text-gray-500 text-xs mt-4">
                  ✨ We respect your privacy. No spam, just valuable content delivered straight to your inbox.
                </p>
              </form>
          </div>
          
          {/* <div className="mt-10 flex justify-center space-x-6">
            <div className="text-center">
              <div className="text-xl font-bold text-gray-800">5K+</div>
              <div className="text-gray-600 text-xs">Empowered Women</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-800">50+</div>
              <div className="text-gray-600 text-xs">Exclusive Events</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-800">24/7</div>
              <div className="text-gray-600 text-xs">Support Community</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
