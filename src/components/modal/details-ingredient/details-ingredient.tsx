import type { TIngredient } from '@/utils/types';

import styles from './details-ingredient.module.css';

export const DetailsIngredient = ({
  ingredient,
}: {
  ingredient: TIngredient;
}): React.JSX.Element => {
  return (
    <>
      <figure className="mb-8">
        <img
          className="mb-4"
          src={ingredient.image_large}
          alt="Изображение ингредиента"
        />
        <figcaption className={`${styles.figcaption} text text_type_main-medium`}>
          {ingredient.name}
        </figcaption>
      </figure>
      <table className={styles.table}>
        <thead className="text text_type_main-default text_color_inactive">
          <tr>
            <th>Калории, ккал</th>
            <th>Белки, г</th>
            <th>Жиры, г</th>
            <th>Углеводы, г</th>
          </tr>
        </thead>
        <tbody className="text text_type_digits-default text_color_inactive">
          <tr>
            <td>{ingredient.calories}</td>
            <td>{ingredient.proteins}</td>
            <td>{ingredient.fat}</td>
            <td>{ingredient.carbohydrates}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
