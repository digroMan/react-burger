import { memo } from 'react';

import type React from 'react';

import styles from './modal-overlay.module.css';

type TModalOverlayProps = {
  handleClose: () => void;
};
const ModalOverlay = memo(({ handleClose }: TModalOverlayProps): React.JSX.Element => {
  return (
    <div
      className={styles.container}
      onClick={handleClose}
      onKeyDown={handleClose}
    ></div>
  );
});

ModalOverlay.displayName = 'ModalOverlay';
export { ModalOverlay };
