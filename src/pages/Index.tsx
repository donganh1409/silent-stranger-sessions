
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";
import Testimonial from "@/components/Testimonial";
import PriceCard from "@/components/PriceCard";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  const benefits = [
    "Effortless scheduling via Calendly",
    "100% confidential, anonymous environment",
    "Zero judgment, zero unsolicited advice",
    "Empathetic listeners, trained and selected"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto space-y-24">
          <section>
            <InfoCard title="What We Offer" delay={100}>
              <p className="text-lg mb-6 text-gray-600">
                30-minute anonymous conversations with trusted listeners. 
                No pressure, no judgment, no advice unless requested. 
                Book easily via Calendly.
              </p>
              <Button className="bg-primary hover:bg-primary/90 rounded-full px-6 py-2">
                Book a Session Now
              </Button>
            </InfoCard>
          </section>
          
          <section>
            <h2 className="text-3xl font-semibold mb-10 text-center">Who Is This For?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <PriceCard 
                title="Students (Grades 6–12)" 
                price="Free" 
                description="Free sessions to release academic or social stress."
                color="bg-accent"
                delay={100}
              />
              <PriceCard 
                title="University Students" 
                price="$5" 
                description="Emotional support about career, life, or love."
                color="bg-blue-50"
                delay={200}
              />
              <PriceCard 
                title="Stay-at-home & Retired" 
                price="From $3" 
                description="Connect with someone who understands."
                color="bg-purple-50"
                delay={300}
              />
              <PriceCard 
                title="Entrepreneurs" 
                price="0.15% of annual income" 
                description="Deep, confidential business chats."
                color="bg-green-50"
                delay={400}
              />
              <PriceCard 
                title="Everyone Else" 
                price="Starting at $5" 
                description="A safe space for anyone seeking connection."
                color="bg-yellow-50"
                delay={500}
              />
            </div>
          </section>
          
          <section className="appear" style={{ animationDelay: '200ms' }}>
            <h2 className="text-3xl font-semibold mb-10 text-center">Why Choose Us?</h2>
            <div className="bg-white rounded-2xl p-8 card-shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white">
                        <Check className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section className="appear" style={{ animationDelay: '300ms' }}>
            <HowItWorks />
          </section>
          
          <section>
            <h2 className="text-3xl font-semibold mb-10 text-center">What People Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Testimonial 
                quote="I talked about my exam anxiety and felt lighter right away." 
                author="High School Student"
                delay={100}
              />
              <Testimonial 
                quote="$5 to unload my thoughts? Totally worth it." 
                author="University Student"
                delay={200}
              />
              <Testimonial 
                quote="Talking to a stranger helped me process my startup stress." 
                author="Entrepreneur"
                delay={300}
              />
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
