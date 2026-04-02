import { useEffect, useState } from 'react';

import type React from 'react';

export const useClose = (
  handlerClose: () => void
): React.Dispatch<React.SetStateAction<boolean>> => {
  const [close, setClose] = useState(true);

  useEffect(() => {
    if (close === false) handlerClose();
  }, [close]);

  return setClose;
};
