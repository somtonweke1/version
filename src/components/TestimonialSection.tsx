
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Inversion found undetected contract errors 48hrs before our $3M funding close. They're our AI insurance policy.",
      author: "Sarah K.",
      role: "CTO @ HealthTech Startup",
      company: "Backed by a16z"
    },
    {
      quote: "Our legal AI was hallucinating compliance requirements. Inversion's expert caught what would have been a $800K regulatory fine.",
      author: "Michael R.",
      role: "Founder",
      company: "Y Combinator S23"
    },
    {
      quote: "The customer service AI was generating responses that could have triggered a discrimination lawsuit. Caught it just in time.",
      author: "Jessica L.",
      role: "Head of Operations",
      company: "Techstars Alumni"
    }
  ];

  const logos = [
    { name: "Y Combinator", color: "orange" },
    { name: "a16z", color: "blue" },
    { name: "Techstars", color: "purple" },
    { name: "500 Global", color: "green" },
    { name: "First Round", color: "red" },
    { name: "Bessemer", color: "indigo" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Top Startups
          </h2>
          <p className="text-xl text-gray-600">When millions are on the line, founders choose human verification</p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-blue-600 mb-4 opacity-60" />
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.company}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Logo Wall */}
        <div className="text-center">
          <p className="text-gray-500 mb-8 text-sm uppercase tracking-wide font-medium">
            Backed by World-Class Investors
          </p>
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center space-x-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <div className={`w-3 h-3 rounded-full bg-${logo.color}-500`}></div>
                <span className="text-lg font-medium text-gray-700">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.7%</div>
              <div className="text-sm text-gray-600">Error detection rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">$12M+</div>
              <div className="text-sm text-gray-600">Losses prevented</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">48hrs</div>
              <div className="text-sm text-gray-600">Average turnaround</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">200+</div>
              <div className="text-sm text-gray-600">Expert network</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
