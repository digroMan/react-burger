import { Counter } from '@krgaa/react-developer-burger-ui-components';

import { PriceContainer } from '../price-container/price-container';

import type { TIngredient } from '@/utils/types';
import type React from 'react';

import styles from './ingredient-item.module.css';

type TBurgerIngredientProps = {
  ingredient: TIngredient;
};

export const IngredientItem = ({
  ingredient,
}: TBurgerIngredientProps): React.JSX.Element => {
  return (
    <>
      <Counter count={1} />
      <figure className={`${styles.img_container} pl-4 pr-4 mb-1`}>
        <img src={ingredient.image} alt={ingredient.name} width={240} height={120} />
      </figure>
      <PriceContainer
        price={ingredient.price}
        classWrapper={`${styles.price_container} mb-1`}
        classNumber={'text_type_digits-default'}
        classIcon={`${styles.price_icon}`}
      />
      <h3 className={`${styles.name} text text_type_main-default`}>{ingredient.name}</h3>
    </>
  );
};
