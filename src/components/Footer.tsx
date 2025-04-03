
import { CalendarIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="gradient-bg py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Ready to be heard?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Take the first step towards feeling better. 
          Book a session today and experience what it's like to be truly heard.
        </p>
        <Button className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 mb-12">
          <CalendarIcon className="mr-2 h-5 w-5" />
          Book Your Session
        </Button>
        
        <div className="border-t border-gray-200 pt-8 text-sm text-gray-500">
          &copy; {currentYear} Stranger Listening Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
