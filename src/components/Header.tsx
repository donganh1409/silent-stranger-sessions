
import { CalendarIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative overflow-hidden gradient-bg pt-16 pb-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-blue-200 mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full bg-purple-200 mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-4">
          Stranger Listening Platform
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-600">
          A place where you are heard — without judgment.
        </p>
        <Button className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90">
          <CalendarIcon className="mr-2 h-5 w-5" />
          Book a Session Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
