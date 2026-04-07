import { Fragment, memo } from 'react';

import { IngredientItem } from '../ingredient-item/ingredient-item';

import type { TIngredient } from '@/utils/types';
import type React from 'react';

import styles from './ingredient-list.module.css';

type TIngredientListProps = {
  list: TIngredient[];
  type: string[];
  showModal: (id: string) => void;
};

const getNameType = (type: string): string => {
  switch (type) {
    case 'bun':
      return 'Булки';
    case 'main':
      return 'Начинки';
    case 'sauce':
      return 'Соусы';
    default:
      throw new Error('Нет типа ингредиента!');
  }
};

const IngredientList = memo(
  ({ list, type, showModal }: TIngredientListProps): React.JSX.Element => {
    return (
      <>
        {type.map((t, index) => (
          <Fragment key={index}>
            <h3 className="text text_type_main-medium mb-6">{getNameType(t)}</h3>
            <ul className={`${styles.ingredients_list} mb-15`}>
              {list
                .filter((i) => i.type === t)
                .map((i) => (
                  <li
                    key={i._id}
                    className={styles.ingredients_list_item}
                    onClick={() => showModal(i._id)}
                  >
                    <IngredientItem ingredient={i} />
                  </li>
                ))}
            </ul>
          </Fragment>
        ))}
      </>
    );
  }
);

IngredientList.displayName = 'IngredientList';
export { IngredientList };
