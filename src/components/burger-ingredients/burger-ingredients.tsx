import { Tab } from '@krgaa/react-developer-burger-ui-components';
import { useState } from 'react';

import { IngredientList } from './ingredient-list/ingredient-list';

import type { TIngredient } from '@utils/types';
import type React from 'react';

import styles from './burger-ingredients.module.css';

type TBurgerIngredientsProps = {
  ingredients: TIngredient[];
};

const getTypes = (ingredients: TIngredient[]): string[] => {
  return [...new Set(ingredients.map((i) => i.type))];
};

export const BurgerIngredients = ({
  ingredients,
}: TBurgerIngredientsProps): React.JSX.Element => {
  const [typeToDisplay, setTypeToDisplay] = useState(() => getTypes([...ingredients]));

  return (
    <section className={styles.burger_ingredients}>
      <nav className="mb-10">
        <ul className={styles.menu}>
          <Tab
            value="bun"
            active={typeToDisplay.length === 1 && typeToDisplay.at(0) === 'bun'}
            onClick={(value) => setTypeToDisplay([value])}
          >
            Булки
          </Tab>
          <Tab
            value="main"
            active={typeToDisplay.length === 1 && typeToDisplay.at(0) === 'main'}
            onClick={(value) => setTypeToDisplay([value])}
          >
            Начинки
          </Tab>
          <Tab
            value="sauce"
            active={typeToDisplay.length === 1 && typeToDisplay.at(0) === 'sauce'}
            onClick={(value) => setTypeToDisplay([value])}
          >
            Соусы
          </Tab>
        </ul>
      </nav>
      <div className={`${styles.ingredients_container} custom-scroll`}>
        <IngredientList list={[...ingredients]} type={typeToDisplay} />
      </div>
    </section>
  );
};
