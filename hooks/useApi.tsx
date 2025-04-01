import useSWR, { SWRConfiguration } from 'swr';
import { fetcher } from '@/services/api';

export function useApi<Data>(
    endpoint: string | null,
    token?: string,
    config?: SWRConfiguration
  ) {
    // If either endpoint or token is null, disabling the fetch
    const key = endpoint && token ? [endpoint, token] : null;
  
    const { data, error, mutate } = useSWR<Data>(
      key,
      // Pass the token to the fetcher if valid endpoint
      key ? () => fetcher(endpoint!, token) : null,
      config
    );
  
    return {
      data,
      isLoading: !data && !error,
      error,
      mutate,
    };
  }
  