import { useClose } from '@/hooks/use-close';
import { CloseIcon } from '@krgaa/react-developer-burger-ui-components';
import { createPortal } from 'react-dom';

import { ModalOverlay } from './modal-overlay/modal-overlay';

import type { ReactNode } from 'react';
import type React from 'react';

import styles from './modal.module.css';

const modal = document.getElementById('modal') as Element;

type TModalProps = {
  title?: string;
  children: ReactNode;
  onClose: () => void;
};

export const Modal = ({ title, children, onClose }: TModalProps): React.JSX.Element => {
  const setClose = useClose(onClose);

  return createPortal(
    <div className={styles.wrapper}>
      <section className={`${styles.section} p-10`}>
        <hgroup className={styles.hgroup}>
          {title && <h3 className="text text_type_main-large">{title}</h3>}
          <CloseIcon
            className={styles.close}
            type="primary"
            onClick={() => setClose(false)}
          />
        </hgroup>
        {children}
      </section>
      <ModalOverlay handleClose={() => setClose(false)} />
    </div>,
    modal
  );
};
