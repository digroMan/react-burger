import { CurrencyIcon } from '@krgaa/react-developer-burger-ui-components';

import type React from 'react';

type TPriceContainer = {
  price: number;
  classWrapper: string;
  classNumber: string;
  classIcon: string;
};

export const PriceContainer = ({
  price,
  classWrapper,
  classNumber,
  classIcon,
}: TPriceContainer): React.JSX.Element => {
  return (
    <div className={`${classWrapper}`}>
      <span className={`text ${classNumber}`}>{price}</span>
      <CurrencyIcon className={`${classIcon} `} type="primary" />
    </div>
  );
};
