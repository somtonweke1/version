
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Shield, ArrowRight, RefreshCw, Handshake, Sprout, Lock } from 'lucide-react';
import ExpertiseNetwork from '@/components/ExpertiseNetwork';
import CaseStudySection from '@/components/CaseStudySection';
import CollaborationFlow from '@/components/CollaborationFlow';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const partnerLogos = [
    { name: "YC", color: "text-orange-500" },
    { name: "a16z", color: "text-blue-600" },
    { name: "Stripe", color: "text-purple-600" },
    { name: "OpenAI", color: "text-green-600" },
    { name: "Anthropic", color: "text-red-500" }
  ];

  const benefits = [
    {
      icon: RefreshCw,
      title: "Iterative refinement cycles",
      description: "Continuous improvement through expert feedback loops"
    },
    {
      icon: Handshake,
      title: "Shared ownership of outputs",
      description: "True partnership in creating trustworthy AI systems"
    },
    {
      icon: Sprout,
      title: "Knowledge transfer to your team",
      description: "Build internal capabilities while we collaborate"
    },
    {
      icon: Lock,
      title: "Continuous verification framework",
      description: "Ongoing confidence in your AI implementations"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-system">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" strokeWidth={1.5} />
            <span className="text-2xl font-light tracking-tight">Inversion</span>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" className="rounded-full font-light">
              Become an Expert Partner
            </Button>
            <Button variant="outline" className="rounded-full font-light">
              Request Collaboration
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-16">
              <h1 className="text-6xl font-light tracking-tight text-gray-900 mb-6 leading-tight">
                Human Intelligence for<br />
                <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                  AI Confidence
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed font-light">
                Inversion connects you with domain specialists to verify and refine your AI outputs.<br />
                <strong className="font-medium">Together, we build trustworthy systems.</strong>
              </p>
              
              {/* Partner Logos */}
              <div className="mb-8">
                <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide font-light">
                  Trusted by Innovation Leaders
                </p>
                <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
                  {partnerLogos.map((logo, index) => (
                    <div key={index} className="flex items-center space-x-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
                      <div className={`w-2 h-2 rounded-full bg-blue-500`}></div>
                      <span className={`text-lg font-light ${logo.color}`}>{logo.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-light shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse">
                Request Collaboration
                <ArrowRight className="ml-2 h-5 w-5" strokeWidth={1.5} />
              </Button>
            </div>

            {/* Abstract Waveform Visual */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-gray-100 via-blue-50 to-green-50 rounded-2xl p-12 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2 font-light">Before Collaboration</div>
                    <div className="h-16 w-32 bg-gradient-to-r from-red-200 to-orange-200 rounded-lg flex items-center justify-center">
                      <div className="w-full h-8 bg-gradient-to-r from-red-300 to-orange-300 opacity-70 rounded" style={{clipPath: 'polygon(0% 50%, 10% 20%, 20% 80%, 30% 10%, 40% 90%, 50% 30%, 60% 70%, 70% 40%, 80% 85%, 90% 15%, 100% 60%)'}}></div>
                    </div>
                  </div>
                  <ArrowRight className="h-8 w-8 text-blue-600 mx-8" strokeWidth={1.5} />
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2 font-light">After Collaboration</div>
                    <div className="h-16 w-32 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                      <div className="w-full h-4 bg-gradient-to-r from-blue-400 to-green-400 opacity-70 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-600 font-light italic">We don't audit - we co-create confidence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Flow */}
      <CollaborationFlow />

      {/* Expertise Network */}
      <ExpertiseNetwork />

      {/* Collaboration Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Build Better AI, Together
            </h2>
            <p className="text-xl text-gray-600 font-light">Partnership benefits that compound over time</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-xl">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-6 w-6 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-medium mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <CaseStudySection />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Co-Create Confidence?
          </h2>
          <p className="text-xl text-blue-100 mb-8 font-light">
            Join our partner network or request your first collaboration session
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-light shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Become an Expert Partner
              <ArrowRight className="ml-2 h-5 w-5" strokeWidth={1.5} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl text-lg font-light transition-all duration-300 hover:scale-105">
              Start Verification Project
              <ArrowRight className="ml-2 h-5 w-5" strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6" strokeWidth={1.5} />
              <span className="text-lg font-light">Inversion</span>
            </div>
            <p className="text-gray-400 font-light">Building trustworthy AI through human partnership.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
