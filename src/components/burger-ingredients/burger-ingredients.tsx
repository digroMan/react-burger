import { Tab } from '@krgaa/react-developer-burger-ui-components';
import { useState } from 'react';

import { IngredientItem } from '../ingredient-item/ingredient-item';
// import { IngredientList } from '../ingredient-list/ingredient-list';

import type { TIngredient } from '@utils/types';

import styles from './burger-ingredients.module.css';

type TBurgerIngredientsProps = {
  ingredients: TIngredient[];
};

const typesIngredients = ['bun', 'main', 'sauce'];

// const getTypes = (ingredients: TIngredient[]): Set<string> => {
//   return new Set(ingredients.map((i) => i.type));
// };

const sortIngredients = (a: TIngredient, b: TIngredient): number => {
  return typesIngredients.indexOf(a.type) - typesIngredients.indexOf(b.type);
};

export const BurgerIngredients = ({
  ingredients,
}: TBurgerIngredientsProps): React.JSX.Element => {
  const [listToDisplay, setListToDisplay] = useState([...ingredients]);
  console.log(listToDisplay);

  return (
    <section className={styles.burger_ingredients}>
      <nav className="mb-10">
        <ul className={styles.menu}>
          <Tab
            value="bun"
            active={true}
            onClick={() => {
              setListToDisplay((preState) => [...preState.sort(sortIngredients)]);
            }}
          >
            Булки
          </Tab>
          <Tab
            value="main"
            active={false}
            onClick={() => {
              /* TODO */
            }}
          >
            Начинки
          </Tab>
          <Tab
            value="sauce"
            active={false}
            onClick={() => {
              /* TODO */
            }}
          >
            Соусы
          </Tab>
        </ul>
      </nav>
      <div className={`${styles.ingredients_container} custom-scroll`}>
        {/* <IngredientList list={listToDisplay} types={getTypes(listToDisplay)} /> */}
        <h3></h3>
        <ul className={`${styles.ingredients_list}`}>
          {listToDisplay.map((i) => (
            <li key={i._id} className={styles.ingredients_list_item}>
              <IngredientItem ingredient={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
