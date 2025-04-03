
import { CalendarIcon, Video, PercentIcon } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Book a time",
    description: "Select a convenient time slot via Calendly",
    icon: CalendarIcon,
  },
  {
    id: 2,
    title: "Connect online",
    description: "Join via Zalo or Google Meet for your session",
    icon: Video,
  },
  {
    id: 3,
    title: "Get started affordably",
    description: "Enjoy 50% off your first session",
    icon: PercentIcon,
  }
];

const HowItWorks = () => {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-semibold mb-10 text-center">How It Works</h2>
      
      <div className="relative">
        {/* Connection line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>
        
        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 relative z-10">
          {steps.map((step, index) => (
            <div key={step.id} className="appear" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                  {<step.icon className="w-8 h-8" />}
                </div>
                <span className="text-sm font-medium text-primary mb-1">Step {step.id}</span>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
