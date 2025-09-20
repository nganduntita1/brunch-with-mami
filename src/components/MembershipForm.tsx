import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import CountryCodeReference from './CountryCodeReference';

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
              <Input
                id="countryCode"
                name="countryCode"
                type="tel"
                className="w-20 text-center"
                placeholder="+"
                maxLength={5}
              />
              <Input
                id="phone"
                name="phone"
                type="tel"
                className="flex-1"
                placeholder="XXX XXX XXXX"
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">
                Enter your country code (e.g., + for South Africa, +1 for US/Canada, +44 for UK)
              </p>
              <CountryCodeReference />
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
