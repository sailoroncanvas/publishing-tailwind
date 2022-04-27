import React from 'react';
import { Category } from '../pages/HomePage';

type CategoryButtonProps = {
  category: Category;
  onClick: (index: number) => void;
};

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  onClick,
}) => {
  return (
    <div onClick={() => onClick(category.id)}>
      <img
        src="https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
        alt=""
        className="w-20 h-20 object-cover rounded-full"
      />
      <div className="text-center">{category.label}</div>
    </div>
  );
};
