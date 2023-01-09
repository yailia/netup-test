import { useEffect, useState } from 'react';
import { DataModel } from '~/models/DataModel';
import { SearchBlock } from '~/components/SearchBlock';
import { Backgrounds } from '$shared/Backgrounds';
import { PageLoader } from '$shared/PageLoader';
import { Layout } from '$shared/Layout';

interface Resource {
  loading: boolean;
  data: DataModel | null;
  error: unknown;
}

export function Search() {
  const [resource, setResource] = useState<Resource>({
    loading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();
    setResource(r => ({
      ...r,
      loading: true,
    }));
    fetch('/api/discover', { signal: controller.signal })
      .then(r => r.json())
      .then(r =>
        setResource({
          loading: false,
          error: null,
          data: r,
        })
      )
      .catch(e => {
        if (e.name !== 'AbortError') {
          setResource({
            loading: false,
            error: e,
            data: null,
          });
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <Layout>
      {resource.loading ? (
        <PageLoader />
      ) : resource.data ? (
        <>
          <Backgrounds backgrounds={resource.data.backgrounds} />
          <SearchBlock data={resource.data.items} />
        </>
      ) : (
        'Произошла ошибка'
      )}
    </Layout>
  );
}
