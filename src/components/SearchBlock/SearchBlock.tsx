import { FormEvent, useCallback, useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import clsx from 'clsx';
import { DataItemModel } from '~/models/DataItemModel';
import { useCleanup } from '~/hooks/cleanup';
import { SearchInput } from '$shared/SearchInput';
import { ItemsList } from '$shared/ItemsList';

import { SearchResults } from './SearchResults';
import cls from './SearchBlock.module.css';
import { Loader } from '$shared/Loader';

interface SearchBlockProps {
  data: DataItemModel[];
}
export function SearchBlock(props: SearchBlockProps) {
  const cleanup = useCleanup();
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState<DataItemModel[] | null>(null);
  const [isAnimated, setAnimated] = useState(false);

  const transition = useTransition(!isAnimated, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const handleSearch = useCallback(
    (e: FormEvent) => {
      setIsLoading(true);
      e.preventDefault();
      setTimeout(() => {
        if (cleanup) {
          return;
        }
        const lValue = value.toLowerCase();
        setFilteredData(props.data.filter(i => i.title.toLowerCase().includes(lValue)));
        setIsLoading(false);
      }, Math.round(Math.random() * 1000));
    },
    [value]
  );

  return (
    <div
      className={clsx(cls.searchBlock, {
        [cls.active]: isAnimated,
      })}
    >
      <div className={cls.searchBlock__input}>
        <SearchInput
          handleChange={e => setValue(e.currentTarget.value)}
          value={value}
          handleClick={() => setAnimated(true)}
          isVisible={!isAnimated}
          handleSearch={handleSearch}
          handleClear={() => setValue('')}
          touched={isAnimated}
          className={clsx(cls.searchBlock__searchInput, {
            [cls.active]: isAnimated,
          })}
        />
      </div>

      {transition((style, item) =>
        item ? (
          <animated.div style={style} className={cls.searchBlock__hide}>
            <h2 className={cls.searchBlock__title}>in the spotlight</h2>
            <div className={cls.searchBlock__main}>
              <ItemsList data={props.data} />
            </div>
          </animated.div>
        ) : (
          filteredData && (isLoading ? <Loader /> : <SearchResults data={filteredData ?? []} />)
        )
      )}
    </div>
  );
}
