import { CheckMarkIcon } from '@krgaa/react-developer-burger-ui-components';

import styles from './details-order.module.css';

export const DetailsOrder = (): React.JSX.Element => {
  return (
    <div className="pl-10 pr-10 pb-5">
      <p className="text text_type_digits-large mb-8">034536</p>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <div className={`${styles.wrapper} pt-15 pb-15`}>
        <CheckMarkIcon type="primary" />
      </div>
      <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};
