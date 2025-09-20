import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const CountryCodeReference = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const countryCodes = [
    { country: "South Africa", code: "+27" },
    { country: "Lesotho", code: "+266" },
    { country: "Eswatini", code: "+268" },
    { country: "Namibia", code: "+264" },
    { country: "Botswana", code: "+267" },
    { country: "Zimbabwe", code: "+263" },
    { country: "Mozambique", code: "+258" },
    { country: "Zambia", code: "+260" },
    { country: "Malawi", code: "+265" },
    { country: "Rwanda", code: "+250" },
    { country: "Uganda", code: "+256" },
    { country: "Kenya", code: "+254" },
    { country: "Tanzania", code: "+255" },
    { country: "Ethiopia", code: "+251" },
    { country: "Nigeria", code: "+234" },
    { country: "Ghana", code: "+233" },
    { country: "Côte d'Ivoire", code: "+225" },
    { country: "Senegal", code: "+221" },
    { country: "Morocco", code: "+212" },
    { country: "Algeria", code: "+213" },
    { country: "Tunisia", code: "+216" },
    { country: "Libya", code: "+218" },
    { country: "Egypt", code: "+20" },
    { country: "United States", code: "+1" },
    { country: "Canada", code: "+1" },
    { country: "United Kingdom", code: "+44" },
    { country: "France", code: "+33" },
    { country: "Germany", code: "+49" },
    { country: "Italy", code: "+39" },
    { country: "Spain", code: "+34" },
    { country: "Netherlands", code: "+31" },
    { country: "Belgium", code: "+32" },
    { country: "Switzerland", code: "+41" },
    { country: "Austria", code: "+43" },
    { country: "Denmark", code: "+45" },
    { country: "Sweden", code: "+46" },
    { country: "Norway", code: "+47" },
    { country: "Finland", code: "+358" },
    { country: "Australia", code: "+61" },
    { country: "New Zealand", code: "+64" },
    { country: "India", code: "+91" },
    { country: "China", code: "+86" },
    { country: "Japan", code: "+81" },
    { country: "South Korea", code: "+82" },
    { country: "Singapore", code: "+65" },
    { country: "Malaysia", code: "+60" },
    { country: "Thailand", code: "+66" },
    { country: "Philippines", code: "+63" },
    { country: "Indonesia", code: "+62" },
    { country: "Vietnam", code: "+84" },
    { country: "Brazil", code: "+55" },
    { country: "Argentina", code: "+54" },
    { country: "Chile", code: "+56" },
    { country: "Colombia", code: "+57" },
    { country: "Peru", code: "+51" },
    { country: "Mexico", code: "+52" },
    { country: "Russia", code: "+7" },
    { country: "Turkey", code: "+90" },
    { country: "Saudi Arabia", code: "+966" },
    { country: "UAE", code: "+971" },
    { country: "Qatar", code: "+974" },
    { country: "Kuwait", code: "+965" },
    { country: "Bahrain", code: "+973" },
    { country: "Oman", code: "+968" },
    { country: "Israel", code: "+972" },
    { country: "Lebanon", code: "+961" },
    { country: "Syria", code: "+963" },
    { country: "Jordan", code: "+962" },
    { country: "Iraq", code: "+964" },
    { country: "Iran", code: "+98" },
    { country: "Afghanistan", code: "+93" },
    { country: "Pakistan", code: "+92" },
    { country: "Bangladesh", code: "+880" },
    { country: "Sri Lanka", code: "+94" },
    { country: "Nepal", code: "+977" },
    { country: "Bhutan", code: "+975" },
    { country: "Maldives", code: "+960" },
  ];

  const filteredCountries = countryCodes.filter(country =>
    country.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.includes(searchTerm)
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="text-xs">
          Country Codes
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Country Code Reference</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search country or code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="max-h-96 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {filteredCountries.map((country, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-md"
                >
                  <span className="text-sm font-medium">{country.country}</span>
                  <span className="text-sm text-gray-600 font-mono">{country.code}</span>
                </div>
              ))}
            </div>
            {filteredCountries.length === 0 && (
              <p className="text-center text-gray-500 py-4">No countries found matching your search.</p>
            )}
          </div>
          <div className="text-xs text-gray-500 text-center">
            Can't find your country? You can enter any valid country code manually.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CountryCodeReference;
