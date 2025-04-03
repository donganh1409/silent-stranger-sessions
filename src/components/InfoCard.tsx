
import { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

const InfoCard = ({ title, children, delay = 0 }: InfoCardProps) => {
  const delayStyle = {
    animationDelay: `${delay}ms`,
  };

  return (
    <div 
      className="bg-white rounded-2xl p-6 sm:p-8 card-shadow appear" 
      style={delayStyle}
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
      {children}
    </div>
  );
};

export default InfoCard;
