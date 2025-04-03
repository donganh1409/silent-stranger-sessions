
import { ReactNode } from 'react';

interface PriceCardProps {
  title: string;
  price: string;
  description: string;
  color?: string;
  delay?: number;
}

const PriceCard = ({ 
  title, 
  price, 
  description, 
  color = "bg-blue-50", 
  delay = 0 
}: PriceCardProps) => {
  const delayStyle = {
    animationDelay: `${delay}ms`,
  };

  return (
    <div 
      className={`rounded-2xl p-6 card-shadow appear ${color}`} 
      style={delayStyle}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-2xl font-bold text-primary mb-2">{price}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default PriceCard;
