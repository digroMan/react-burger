import {
  ConstructorElement,
  DragIcon,
} from '@krgaa/react-developer-burger-ui-components';

import type { TIngredient } from '@/utils/types';
import type React from 'react';

type TConstructorItemProps = Pick<TIngredient, 'name' | 'price' | 'image'> & {
  onclick?: () => void;
};

export const ConstructorItem = ({
  name,
  price,
  image,
  onclick,
}: TConstructorItemProps): React.JSX.Element => {
  return (
    <>
      <DragIcon type="primary" />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        isLocked={false}
        handleClose={onclick}
      />
    </>
  );
};
