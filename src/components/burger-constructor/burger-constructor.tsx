import { Button } from '@krgaa/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';

import { PriceContainer } from '../price-container/price-container';
import { ConstructorBuns } from './constructor-buns/constructor-buns';
import { ConstructorItem } from './constructor-item/constructor-item';

import type { TIngredient } from '@utils/types';

import styles from './burger-constructor.module.css';

type TBurgerConstructorProps = {
  ingredients: TIngredient[];
};

export const BurgerConstructor = ({
  ingredients,
}: TBurgerConstructorProps): React.JSX.Element => {
  const [buns, setBuns] = useState<TIngredient[]>([]);
  console.log(ingredients);

  useEffect(() => {
    setBuns([...ingredients].filter((i) => i.type === 'bun'));
  }, [ingredients]);

  return (
    <section className={styles.burger_constructor}>
      {buns.length > 1 && (
        <ConstructorBuns buns={buns}>
          <ul className={`${styles.list} mb-4`}>
            {[...ingredients].map((i) => (
              <li key={i._id} className={`${styles.item} mb-4`}>
                <ConstructorItem
                  image={i.image}
                  name={i.name}
                  price={i.price}
                  onclick={() => {
                    // TODO:
                  }}
                />
              </li>
            ))}
          </ul>
        </ConstructorBuns>
      )}
      <div className={styles.price_container}>
        <PriceContainer
          price={576}
          classWrapper={`${styles.price_wrapper} mr-10`}
          classNumber="text_type_digits-medium"
          classIcon={`${styles.price_icon}`}
        />
        <Button
          htmlType="button"
          onClick={() => {
            // TODO:
          }}
          size="large"
          type="primary"
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};
