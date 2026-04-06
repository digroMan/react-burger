import { Button } from '@krgaa/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';

import { DetailsOrder } from '../modal/details-order/details-order';
import { Modal } from '../modal/modal';
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
  const [visible, setVisible] = useState(false);

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
          onClick={() => setVisible(true)}
          size="large"
          type="primary"
        >
          Оформить заказ
        </Button>
        {visible && (
          <Modal onClose={() => setVisible(false)}>
            <DetailsOrder />
          </Modal>
        )}
      </div>
    </section>
  );
};
