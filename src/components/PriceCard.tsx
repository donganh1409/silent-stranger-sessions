
import { ReactNode } from 'react';

interface PriceCardProps {
  title: string;
  price: string;
  description: string;
  color?: string;
  delay?: number;
  icon?: ReactNode;
}

const PriceCard = ({ 
  title, 
  price, 
  description, 
  color = "bg-blue-50", 
  delay = 0,
  icon
}: PriceCardProps) => {
  const delayStyle = {
    animationDelay: `${delay}ms`,
  };

  return (
    <div 
       className={`rounded-2xl p-6 card-shadow appear flex-shrink-0 w-[288px] h-[236px] ${color}`} 
      style={delayStyle}
    >
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/50 text-primary">
            {icon}
          </div>
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-2xl font-bold text-primary mb-2">{price}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default PriceCard;
