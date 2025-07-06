
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Users, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

const CollaborationFlow = () => {
  const steps = [
    {
      icon: Upload,
      title: "Share AI Output",
      description: "Upload your AI-generated content for collaborative review",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Users,
      title: "Match with Expert",
      description: "Connect with a domain specialist aligned to your needs",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: MessageSquare,
      title: "Joint Review Session",
      description: "Collaborative refinement through structured dialogue",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: CheckCircle,
      title: "Refined Implementation",
      description: "Deploy with confidence and ongoing verification support",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Our Collaboration Process
          </h2>
          <p className="text-xl text-gray-600 font-light">Simple, transparent partnership in four steps</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-xl">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <step.icon className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-gray-300" strokeWidth={1.5} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 font-light italic">
            "We don't audit - we co-create confidence"
          </p>
        </div>
      </div>
    </section>
  );
};

export default CollaborationFlow;
