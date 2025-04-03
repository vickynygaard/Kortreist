import useSWR, { SWRConfiguration } from 'swr';
import { fetcher } from '@/services/api';

export function useApi<Data>(
  endpoint: string,
  token?: string,
  config?: SWRConfiguration & { enabled?: boolean }
) {
  const enabled = config?.enabled ?? true;

  const key = enabled && endpoint && token ? [endpoint, token] : null;

  const { data, error, mutate } = useSWR<Data>(
    key,
    () => fetcher(endpoint, token!), // fetcher only runs if key is not null
    config
  );

  return {
    data,
    isLoading: !data && !error,
    error,
    mutate,
  };
}
