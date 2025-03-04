// components/VisuallyHidden.tsx
import React, { ReactNode } from 'react';

interface VisuallyHiddenProps {
  children: ReactNode;
}

export const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({ children }) => {
  return (
    <span className="absolute w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden border-0 whitespace-nowrap">
      {children}
    </span>
  );
};
