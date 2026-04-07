import { URL_STELLAR } from '@/utils/constants';
import axios from 'axios';
import { useEffect, useState } from 'react';

import type { TIngredient, TIngredientsDTO } from '@/utils/types';

export const useGetIngredients = (): [TIngredient[], boolean] => {
  const [ingredients, setIngredients] = useState<TIngredient[]>([]);
  const [isLoading, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get<TIngredientsDTO>(`${URL_STELLAR}/api/ingredients`)
      .then((res) => {
        setIngredients(res.data.data);
        setLoader(!isLoading);
      })
      .catch(console.error);
  }, []);

  return [ingredients, isLoading];
};
