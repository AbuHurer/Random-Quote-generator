import { ReactNode } from 'react';

export interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  className?: string;
}