
import { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  children: ReactNode;
  delay?: number;
  icon?: ReactNode;
}

const InfoCard = ({ title, children, delay = 0, icon }: InfoCardProps) => {
  const delayStyle = {
    animationDelay: `${delay}ms`,
  };

  return (
    <div 
      className="bg-white rounded-2xl p-6 sm:p-8 card-shadow appear" 
      style={delayStyle}
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-accent text-primary">
            {icon}
          </div>
        )}
        <div className="flex-grow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
