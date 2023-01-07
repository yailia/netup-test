import _ from 'lodash';
import { DataItemModel } from '~/models/DataItemModel';
import { ItemsList } from '$shared/ItemsList';
import cls from './SearchResults.module.css';

interface SearchResultsProps {
  data: DataItemModel[];
}

export function SearchResults(props: SearchResultsProps) {
  const sortResults = Object.entries(_.groupBy(props.data, 'type'));
  if (sortResults.length === 0) {
    return <div>Not found</div>;
  }
  return (
    <div className={cls.searchResults}>
      {sortResults.map(i => {
        const [key, value] = i;
        return (
          <div key={key} className={cls.searchResults__title}>
            <h2 className={cls.searchResults__title}>{`${key} (${value.length})`}</h2>
            <ItemsList data={i[1]} />
          </div>
        );
      })}
    </div>
  );
}
