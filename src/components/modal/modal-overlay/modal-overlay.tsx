import { useClose } from '@/hooks/use-close';

import type React from 'react';

import styles from './modal-overlay.module.css';

type TModalOverlayProps = {
  onClose: () => void;
};
export const ModalOverlay = ({ onClose }: TModalOverlayProps): React.JSX.Element => {
  const setClose = useClose(onClose);

  return (
    <div
      className={styles.container}
      onClick={() => setClose(false)}
      onKeyDown={() => setClose(false)}
    ></div>
  );
};
