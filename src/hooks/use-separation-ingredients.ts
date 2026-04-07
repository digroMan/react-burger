import { useEffect, useState } from 'react';

import type { TIngredient } from '@/utils/types';

export const useSeparationIngredients = (
  ingredients: TIngredient[]
): [TIngredient[], TIngredient[]] => {
  const [buns, setBuns] = useState<TIngredient[]>([]);
  const [middleIngredients, setMiddleIngredients] = useState<TIngredient[]>([]);

  useEffect(() => {
    setBuns([...ingredients].filter((i) => i.type === 'bun'));
    setMiddleIngredients([...ingredients].filter((i) => i.type !== 'bun'));
  }, [ingredients]);

  return [buns, middleIngredients];
};
