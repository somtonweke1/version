
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Scale, DollarSign } from 'lucide-react';

const ExpertiseNetwork = () => {
  const experts = [
    {
      icon: Heart,
      domain: "Healthcare AI",
      name: "Dr. Lena Torres",
      background: "Ex-FDA digital health lead",
      specialty: "Medical compliance alignment",
      style: "I embed with your team for 2 sprints",
      color: "from-red-50 to-pink-50 border-red-100",
      iconColor: "bg-red-50 text-red-600"
    },
    {
      icon: Scale,
      domain: "Legal Tech",
      name: "James Chen, JD",
      background: "Former OpenAI counsel",
      specialty: "Contract hallucination prevention",
      style: "Co-drafting protocols together",
      color: "from-blue-50 to-indigo-50 border-blue-100",
      iconColor: "bg-blue-50 text-blue-600"
    },
    {
      icon: DollarSign,
      domain: "Financial Systems",
      name: "Priya Singh, CFA",
      background: "Ex-Stripe risk architect",
      specialty: "Regulatory alignment",
      style: "Fortnightly syncs during deployments",
      color: "from-green-50 to-emerald-50 border-green-100",
      iconColor: "bg-green-50 text-green-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Our Verification Partners
          </h2>
          <p className="text-xl text-gray-600 font-light">Domain experts ready to collaborate with your team</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <Card key={index} className={`bg-gradient-to-br ${expert.color} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-xl group`}>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${expert.iconColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <expert.icon className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                  <Badge variant="outline" className="text-xs font-light">
                    {expert.domain}
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">{expert.name}</h3>
                    <p className="text-sm text-gray-600 font-light">{expert.background}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-800 mb-1">Specializes:</p>
                    <p className="text-sm text-gray-600 font-light">{expert.specialty}</p>
                  </div>
                  
                  <div className="bg-white/60 p-4 rounded-lg border border-white/20 group-hover:bg-white/80 transition-colors duration-300">
                    <p className="text-sm font-medium text-gray-800 mb-1">Collaboration Style:</p>
                    <p className="text-sm text-gray-700 font-light italic">"{expert.style}"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 font-light">
            Our network includes 200+ verified experts across all major domains
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseNetwork;
