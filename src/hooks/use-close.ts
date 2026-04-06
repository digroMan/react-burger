import { useEffect, useState } from 'react';

import type React from 'react';

export const useClose = (
  handlerClose: () => void
): React.Dispatch<React.SetStateAction<boolean>> => {
  const [close, setClose] = useState(true);

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') handlerClose();
  };

  useEffect(() => {
    if (close === false) handlerClose();

    document.addEventListener('keydown', handleKeyDown);

    return (): void => document.removeEventListener('keydown', handleKeyDown);
  }, [close]);

  return setClose;
};
