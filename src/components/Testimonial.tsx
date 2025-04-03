
interface TestimonialProps {
  quote: string;
  author: string;
  delay?: number;
}

const Testimonial = ({ quote, author, delay = 0 }: TestimonialProps) => {
  const delayStyle = {
    animationDelay: `${delay}ms`,
  };

  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow appear" 
      style={delayStyle}
    >
      <blockquote className="relative">
        <div className="text-3xl text-primary absolute -top-2 -left-2">"</div>
        <p className="italic pl-4 text-gray-600">{quote}</p>
        <div className="text-3xl text-primary absolute -bottom-6 right-0">"</div>
      </blockquote>
      <p className="text-right font-medium text-gray-800 mt-4">– {author}</p>
    </div>
  );
};

export default Testimonial;
