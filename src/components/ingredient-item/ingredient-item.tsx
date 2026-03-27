import { Counter, CurrencyIcon } from '@krgaa/react-developer-burger-ui-components';

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
      <figure className={`${styles.ingredient_img_container} pl-4 pr-4 mb-1`}>
        <img src={ingredient.image} alt={ingredient.name} width={240} height={120} />
      </figure>
      <div className={`${styles.ingredient_price_container} mb-1`}>
        <span className="text text_type_digits-default">{ingredient.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={`${styles.ingredient_name} text text_type_main-default`}>
        {ingredient.name}
      </h3>
    </>
  );
};
