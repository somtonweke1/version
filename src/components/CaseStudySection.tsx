
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const CaseStudySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Partnership Story
          </h2>
          <p className="text-xl text-gray-600 font-light">Real collaboration, measurable impact</p>
        </div>

        <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-0 shadow-xl rounded-2xl">
          <CardContent className="p-12">
            <Quote className="h-12 w-12 text-blue-600 mb-8 opacity-60" strokeWidth={1.5} />
            
            <blockquote className="text-2xl text-gray-800 mb-8 leading-relaxed font-light">
              "Working weekly with Inversion's healthcare expert transformed our AI compliance. 
              We didn't just fix errors - we built a new validation protocol together."
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center text-white font-medium text-lg mr-6">
                MR
              </div>
              <div>
                <div className="text-lg font-medium text-gray-900">Maya Rodriguez</div>
                <div className="text-gray-600 font-light">CEO, HealthAI Labs</div>
                <div className="text-sm text-gray-500 font-light mt-1">YC S22 • Series A</div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/30">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-light text-blue-600 mb-1">8 weeks</div>
                  <div className="text-sm text-gray-600 font-light">Collaboration period</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-green-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600 font-light">Compliance achieved</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-purple-600 mb-1">2.3M</div>
                  <div className="text-sm text-gray-600 font-light">Series A raised</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CaseStudySection;
