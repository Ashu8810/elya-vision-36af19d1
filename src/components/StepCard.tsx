interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

const StepCard = ({ number, title, description }: StepCardProps) => {
  return (
    <div className="relative flex flex-col items-center text-center p-6">
      {/* Number circle */}
      <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mb-4">
        <span className="text-xl font-bold text-primary">{number}</span>
      </div>
      
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default StepCard;
