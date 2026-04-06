import type React from 'react';

import styles from './modal-overlay.module.css';

type TModalOverlayProps = {
  handleClose: () => void;
};
export const ModalOverlay = ({ handleClose }: TModalOverlayProps): React.JSX.Element => {
  return (
    <div
      className={styles.container}
      onClick={handleClose}
      onKeyDown={handleClose}
    ></div>
  );
};
