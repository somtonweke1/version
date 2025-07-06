
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, AlertTriangle, Shield, ArrowRight, Eye, Users, Clock } from 'lucide-react';
import RiskShowcase from '@/components/RiskShowcase';
import TestimonialSection from '@/components/TestimonialSection';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 font-system">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-semibold tracking-tight">Inversion</span>
          </div>
          <Button variant="outline" className="rounded-full">
            Contact Sales
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-16">
              <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                Stop AI Hallucinations from<br />
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  Bankrupting Your Startup
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Inversion deploys domain experts in 48 hours to verify contracts, compliance docs, 
                and customer-facing AI outputs.<br />
                <strong>Pay only when we catch costly errors.</strong>
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Scan My AI for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Split Screen Visual */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Chaotic AI Side */}
              <Card className="relative overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                    <span className="font-semibold text-red-800">AI-Generated Output</span>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-white/60 p-3 rounded-lg border border-red-200">
                      <span className="line-through">Contract clause: Payment due in 30 days</span>
                      <span className="text-red-600 font-medium"> → Actually 15 days (penalty risk)</span>
                    </div>
                    <div className="bg-white/60 p-3 rounded-lg border border-red-200">
                      <span className="line-through">Compliance: GDPR Article 12 applies</span>
                      <span className="text-red-600 font-medium"> → Article 17 required ($4M fine avoided)</span>
                    </div>
                    <div className="bg-white/60 p-3 rounded-lg border border-red-200">
                      <span className="line-through">Customer email: "We guarantee 99.9% uptime"</span>
                      <span className="text-red-600 font-medium"> → SLA only covers 99% (lawsuit risk)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Human-Verified Side */}
              <Card className="relative overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Check className="h-6 w-6 text-green-600 mr-2" />
                    <span className="font-semibold text-green-800">Human-Verified</span>
                    <Badge className="ml-2 bg-green-100 text-green-800">Certified</Badge>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-white/80 p-3 rounded-lg border border-green-200">
                      <Check className="h-4 w-4 text-green-600 inline mr-2" />
                      <span>Contract reviewed by legal expert</span>
                    </div>
                    <div className="bg-white/80 p-3 rounded-lg border border-green-200">
                      <Check className="h-4 w-4 text-green-600 inline mr-2" />
                      <span>Compliance verified by ex-regulator</span>
                    </div>
                    <div className="bg-white/80 p-3 rounded-lg border border-green-200">
                      <Check className="h-4 w-4 text-green-600 inline mr-2" />
                      <span>Customer comms approved by CX lead</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              We're the airbags for your AI workflows
            </h2>
            <p className="text-xl text-gray-600">Three-step verification that prevents disasters</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI Vulnerability Scan</h3>
                <p className="text-gray-600">Upload your AI output and our system instantly identifies potential risk patterns and hallucination markers.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Expert Matching</h3>
                <p className="text-gray-600">Critical risks trigger our network of domain experts—ex-FAANG lawyers, compliance officers, and industry specialists.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">48-Hour Audit</h3>
                <p className="text-gray-600">Receive detailed human verification report with specific corrections and risk mitigation strategies.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Risk Prevention Showcase */}
      <RiskShowcase />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Your AI Has Been Lying to You
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Free scan reveals your top 3 hidden risks
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Uncover Blindspots
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6" />
              <span className="text-lg font-semibold">Inversion</span>
            </div>
            <p className="text-gray-400">Making AI trustworthy, one verification at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
