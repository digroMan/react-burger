import { ConstructorElement } from '@krgaa/react-developer-burger-ui-components';

import type {
  TConstructorBuns,
  TConstructorItemArguments,
  TConstructorItemProps,
} from './constructor-buns.types';
import type React from 'react';

import styles from './constructor-buns.module.css';

const getConstructorItemProps = ({
  ingredient,
  position,
  extraClass,
}: TConstructorItemArguments): TConstructorItemProps => {
  const positionText = position === 'top' ? '(верх)' : '(низ)';
  return {
    type: position,
    text: `${ingredient.name} ${positionText}`,
    price: ingredient.price,
    isLocked: true,
    thumbnail: ingredient.image,
    extraClass,
  };
};

export const ConstructorBuns = ({
  buns,
  children,
}: TConstructorBuns): React.JSX.Element => {
  return (
    <div className={`${styles.wrapper} mb-10`}>
      <ConstructorElement
        {...getConstructorItemProps({
          ingredient: buns[0],
          position: 'top',
          extraClass: 'mb-4',
        })}
      />
      {children}
      <ConstructorElement
        {...getConstructorItemProps({
          ingredient: buns[0],
          position: 'bottom',
        })}
      />
    </div>
  );
};
