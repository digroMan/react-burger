import { useCallback, useEffect, useState } from 'react';

type TUseModalResult = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useModal = (): TUseModalResult => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') closeModal();
    };

    document.addEventListener('keydown', handleKeyDown);

    return (): void => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return {
    isModalOpen,
    closeModal,
    openModal,
  };
};
