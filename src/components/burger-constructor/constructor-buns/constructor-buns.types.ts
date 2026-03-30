import type { TIngredient } from '@/utils/types';
import type { ReactNode } from 'react';

export type TConstructorItemProps = {
  text: string;
  thumbnail: string;
  price: number;
  type: 'top' | 'bottom';
  isLocked?: boolean;
  extraClass?: string;
  handleClose?: () => void;
};

export type TConstructorBuns = {
  buns: TIngredient[];
  children: ReactNode;
};

export type TConstructorItemArguments = {
  ingredient: TIngredient;
  position: 'top' | 'bottom';
  extraClass?: string;
};
