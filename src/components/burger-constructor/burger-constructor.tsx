import {
  Button,
  ConstructorElement,
  DragIcon,
} from '@krgaa/react-developer-burger-ui-components';

import { PriceContainer } from '../price-container/price-container';

import type { TIngredient } from '@utils/types';

import styles from './burger-constructor.module.css';

type TBurgerConstructorProps = {
  ingredients: TIngredient[];
};

export const BurgerConstructor = ({
  ingredients,
}: TBurgerConstructorProps): React.JSX.Element => {
  console.log(ingredients);

  return (
    <section className={styles.burger_constructor}>
      <ul className={`${styles.list} mb-10`}>
        {[...ingredients].map((i) => (
          <li key={i._id} className={`${styles.item} mb-4`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={i.name}
              price={i.price}
              thumbnail={i.image}
              isLocked={false}
              type={'bottom'}
              handleClose={() => {
                // TODO:
              }}
            />
          </li>
        ))}
      </ul>
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
