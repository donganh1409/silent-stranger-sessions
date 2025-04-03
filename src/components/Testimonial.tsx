
import { UserIcon } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  delay?: number;
  avatarColor?: string;
}

const Testimonial = ({ 
  quote, 
  author, 
  delay = 0,
  avatarColor = "bg-accent" 
}: TestimonialProps) => {
  const delayStyle = {
    animationDelay: `${delay}ms`,
  };

  // Get the first letter of the author name
  const firstLetter = author.charAt(0);

  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow appear relative overflow-hidden" 
      style={delayStyle}
    >
      {/* Large quote mark in background */}
      <div className="absolute -top-6 -right-6 text-8xl text-gray-100 font-serif z-0">"</div>
      
      <div className="relative z-10">
        <blockquote className="mb-4">
          <p className="italic text-gray-600">{quote}</p>
        </blockquote>
        
        <div className="flex items-center mt-4">
          <div className={`w-10 h-10 rounded-full ${avatarColor} flex items-center justify-center text-white font-bold mr-3`}>
            {firstLetter || <UserIcon size={16} />}
          </div>
          <p className="font-medium text-gray-800">– {author}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
