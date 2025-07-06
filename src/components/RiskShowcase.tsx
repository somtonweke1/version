
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, AlertTriangle } from 'lucide-react';

const RiskShowcase = () => {
  const riskCases = [
    {
      riskType: "Legal Hallucinations",
      expert: "Ex-FAANG AI Counsel",
      catastrophe: "$1.2M SEC violation",
      description: "AI-generated compliance document contained outdated regulations that would have triggered massive penalties during audit.",
      severity: "critical"
    },
    {
      riskType: "Toxic Content",
      expert: "Ex-Meta Safety Lead",
      catastrophe: "Brand-destroying tweet",
      description: "Customer service AI generated response with subtle bias that could have sparked viral backlash and boycotts.",
      severity: "high"
    },
    {
      riskType: "Price Discrepancies",
      expert: "Procurement Specialist",
      catastrophe: "18% supplier overcharge",
      description: "Contract AI missed market rate benchmarks, approving vendor terms $240K above fair value for 2-year deal.",
      severity: "medium"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Disasters We've Prevented
          </h2>
          <p className="text-xl text-gray-600">Real cases where human expertise saved startups from AI-driven catastrophes</p>
        </div>

        <div className="space-y-6">
          {riskCases.map((risk, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-4 gap-0">
                  {/* Risk Type */}
                  <div className="p-6 bg-red-50 border-r">
                    <div className="flex items-center mb-2">
                      <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                      <Badge variant="destructive" className="text-xs">
                        {risk.severity.toUpperCase()}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{risk.riskType}</h3>
                    <p className="text-sm text-gray-600">{risk.description}</p>
                  </div>

                  {/* Expert */}
                  <div className="p-6 bg-blue-50 border-r">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">EX</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{risk.expert}</h4>
                    <p className="text-sm text-gray-600">Domain specialist with 10+ years preventing these exact risks</p>
                  </div>

                  {/* Prevention */}
                  <div className="p-6 bg-green-50 border-r">
                    <div className="flex items-center mb-2">
                      <Check className="h-5 w-5 text-green-600 mr-2" />
                      <Badge className="bg-green-100 text-green-800 text-xs">PREVENTED</Badge>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{risk.catastrophe}</h4>
                    <p className="text-sm text-gray-600">Detected and corrected before deployment</p>
                  </div>

                  {/* Timeline */}
                  <div className="p-6 bg-gray-50">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">48hrs</div>
                      <p className="text-sm text-gray-600">Detection to<br />resolution</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-50 rounded-xl p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">$4.7M</div>
              <div className="text-sm text-gray-600">Total disasters prevented</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">127</div>
              <div className="text-sm text-gray-600">AI outputs verified</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">23min</div>
              <div className="text-sm text-gray-600">Average scan time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskShowcase;
