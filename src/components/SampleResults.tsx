
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Check, Info } from "lucide-react";

const SampleResults = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-naija-blue mb-4">
            What Our Analysis Provides
          </h2>
          <p className="text-lg text-naija-dark max-w-3xl mx-auto">
            See a sample of the comprehensive analysis our AI provides for Nigerian legal documents
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto shadow-md border-gray-200">
          <CardContent className="p-0">
            <Tabs defaultValue="explanation">
              <TabsList className="w-full rounded-none grid grid-cols-4">
                <TabsTrigger value="explanation">Explanation</TabsTrigger>
                <TabsTrigger value="clauses">Key Clauses</TabsTrigger>
                <TabsTrigger value="risks">Risk Analysis</TabsTrigger>
                <TabsTrigger value="references">Legal References</TabsTrigger>
              </TabsList>
              
              <TabsContent value="explanation" className="p-6">
                <h3 className="text-xl font-bold mb-4">Plain Language Explanation</h3>
                <p className="mb-4 text-gray-700">
                  This document is a <span className="font-medium">Commercial Lease Agreement</span> between the landlord 
                  (Lagoon Properties Ltd) and the tenant (SmallBiz Enterprises). The lease is for retail space at 
                  Victoria Island Mall for a period of 3 years.
                </p>
                
                <div className="bg-naija-blue/5 p-4 rounded-md mb-4">
                  <h4 className="font-medium mb-2">Key Terms in Plain Language:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex">
                      <span className="text-naija-blue mr-2">•</span>
                      <strong className="mr-2">Monthly Rent:</strong> ₦1,500,000 due on the 1st of each month
                    </li>
                    <li className="flex">
                      <span className="text-naija-blue mr-2">•</span>
                      <strong className="mr-2">Security Deposit:</strong> ₦4,500,000 (3 months' rent)
                    </li>
                    <li className="flex">
                      <span className="text-naija-blue mr-2">•</span>
                      <strong className="mr-2">Rent Increase:</strong> 10% annually
                    </li>
                    <li className="flex">
                      <span className="text-naija-blue mr-2">•</span>
                      <strong className="mr-2">Utilities:</strong> Tenant responsible for electricity, water, internet
                    </li>
                    <li className="flex">
                      <span className="text-naija-blue mr-2">•</span>
                      <strong className="mr-2">Early Termination:</strong> Requires 3 months' notice and penalty of 2 months' rent
                    </li>
                  </ul>
                </div>
                
                <p className="text-gray-700">
                  This agreement binds both parties to specific obligations, with the tenant responsible for most maintenance 
                  and the landlord handling structural repairs. The tenant must obtain written permission for any alterations 
                  or improvements to the property.
                </p>
              </TabsContent>
              
              <TabsContent value="clauses" className="p-6">
                <h3 className="text-xl font-bold mb-4">Key Clauses Identified</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-naija-blue pl-4">
                    <h4 className="font-medium mb-1">Section 5.2: Maintenance Obligations</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      "Tenant shall maintain the interior of the Premises in good condition, including all non-structural 
                      repairs and routine maintenance. Landlord shall be responsible for structural repairs, including the 
                      roof, foundation, and exterior walls."
                    </p>
                    <div className="flex items-center text-naija-teal text-xs">
                      <Info className="h-4 w-4 mr-1" />
                      <span>Standard maintenance clause with balanced responsibilities</span>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-naija-blue pl-4">
                    <h4 className="font-medium mb-1">Section 7.3: Default and Remedies</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      "If Tenant fails to pay rent within five (5) days of the due date, a late fee of 5% of the monthly 
                      rent shall be imposed. After fifteen (15) days, Landlord may initiate eviction proceedings and seek 
                      damages as provided under Nigerian law."
                    </p>
                    <div className="flex items-center text-amber-600 text-xs">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      <span>Strict payment terms with significant penalties</span>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-naija-blue pl-4">
                    <h4 className="font-medium mb-1">Section 9.1: Assignment and Subletting</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      "Tenant shall not assign this Lease or sublet any portion of the Premises without prior written 
                      consent from Landlord, which shall not be unreasonably withheld. Any approved assignment does not 
                      release Tenant from obligations under this Lease."
                    </p>
                    <div className="flex items-center text-naija-teal text-xs">
                      <Check className="h-4 w-4 mr-1" />
                      <span>Standard clause with reasonable consent requirement</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="risks" className="p-6">
                <h3 className="text-xl font-bold mb-4">Risk Analysis</h3>
                
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-md border-l-4 border-red-500">
                    <h4 className="font-medium flex items-center text-red-700 mb-2">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      High Risk: Annual Rent Increase Provision
                    </h4>
                    <p className="text-gray-700 text-sm">
                      The automatic 10% annual rent increase is significantly above current market trends for 
                      commercial properties in Victoria Island (typically 5-7%). This may create financial strain 
                      in years 2 and 3 of the lease term.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 p-4 rounded-md border-l-4 border-amber-500">
                    <h4 className="font-medium flex items-center text-amber-700 mb-2">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      Medium Risk: Dispute Resolution Mechanism
                    </h4>
                    <p className="text-gray-700 text-sm">
                      The agreement specifies arbitration in Lagos without detailing the arbitration process or 
                      governing rules. This vagueness could lead to procedural disputes if conflicts arise.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 p-4 rounded-md border-l-4 border-amber-500">
                    <h4 className="font-medium flex items-center text-amber-700 mb-2">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      Medium Risk: Insurance Requirements
                    </h4>
                    <p className="text-gray-700 text-sm">
                      The tenant's insurance requirements exceed standard market practices for similar 
                      commercial properties in Lagos, potentially increasing operating costs.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-500">
                    <h4 className="font-medium flex items-center text-green-700 mb-2">
                      <Check className="h-5 w-5 mr-2" />
                      Low Risk: Force Majeure Clause
                    </h4>
                    <p className="text-gray-700 text-sm">
                      The force majeure clause adequately protects both parties in case of unforeseen 
                      circumstances and aligns with current Nigerian legal standards.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="references" className="p-6">
                <h3 className="text-xl font-bold mb-4">Nigerian Law References</h3>
                
                <div className="space-y-6">
                  <div className="bg-naija-blue/5 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Relevant Legislation</h4>
                    <ul className="space-y-3">
                      <li>
                        <p className="font-medium">Tenancy Law of Lagos State (2011)</p>
                        <p className="text-sm text-gray-700">
                          Sections 13-17 govern commercial lease agreements in Lagos State, establishing baseline 
                          rights and obligations for landlords and tenants.
                        </p>
                      </li>
                      <li>
                        <p className="font-medium">Lagos State Land Use Act</p>
                        <p className="text-sm text-gray-700">
                          This agreement complies with land use regulations for commercial properties in 
                          Victoria Island.
                        </p>
                      </li>
                      <li>
                        <p className="font-medium">Nigerian Contract Law</p>
                        <p className="text-sm text-gray-700">
                          The agreement forms a valid contract under Nigerian law with mutual consideration and 
                          clear terms.
                        </p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-naija-blue/5 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Relevant Case Law</h4>
                    <ul className="space-y-3">
                      <li>
                        <p className="font-medium">Ekwunife v. Wayne (West Africa) Ltd (1989)</p>
                        <p className="text-sm text-gray-700">
                          Established precedent regarding commercial lease termination and notice periods in Nigeria, 
                          relevant to Section 12 of this agreement.
                        </p>
                      </li>
                      <li>
                        <p className="font-medium">Johnson Properties Ltd v. Lagos State (2014)</p>
                        <p className="text-sm text-gray-700">
                          Addresses landlord responsibilities for structural maintenance in commercial properties, 
                          supporting the provisions in Section 5.2.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SampleResults;
