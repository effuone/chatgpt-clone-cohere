import React from 'react';

interface SuggestedActionButtonProps {
  title: string;
  description: string;
}

const SuggestedActionButton: React.FC<SuggestedActionButtonProps> = ({
  title,
  description,
}) => {
  return (
    <div className="p-4 rounded-lg shadow border hover:bg-secondary transition">
      <h2 className="text-lg font-medium text-primary">{title}</h2>
      <p className="text-primary">{description}</p>
    </div>
  );
};

export default SuggestedActionButton;
