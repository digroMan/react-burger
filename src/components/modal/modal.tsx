import { CloseIcon } from '@krgaa/react-developer-burger-ui-components';
import { createPortal } from 'react-dom';

import { ModalOverlay } from './modal-overlay/modal-overlay';

import type { ReactNode } from 'react';
import type React from 'react';

import styles from './modal.module.css';

const modal = document.getElementById('modal') as Element;

type TModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

export const Modal = ({ title, children, onClose }: TModalProps): React.JSX.Element => {
  return createPortal(
    <div className={styles.wrapper}>
      <section className={`${styles.section} p-10`}>
        <hgroup className={styles.hgroup}>
          <h3 className="text text_type_main-large">{title}</h3>
          <CloseIcon type="primary" onClick={onClose} />
        </hgroup>
        {children}
      </section>
      <ModalOverlay onClose={onClose} />
    </div>,
    modal
  );
};
