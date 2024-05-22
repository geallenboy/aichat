import { useParams } from 'react-router-dom';
import qs from 'query-string';
import { useMemo } from 'react';

export const useQuery = () => {
  const rawQuery = useParams();
  return useMemo(() => qs.parse(rawQuery.toString()), [rawQuery]);
};
