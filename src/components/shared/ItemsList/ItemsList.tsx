import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css';
import { DataItemModel } from '~/models/DataItemModel';
import { Item } from './Item';
import cls from './ItemsList.module.css';

interface ItemsListProps {
  data: DataItemModel[];
}

export function ItemsList(props: ItemsListProps) {
  return (
    <ScrollContainer style={{ width: '100vw' }}>
      <div className={cls.itemsList__list}>
        {props.data.map((i, idx) => (
          <Item data={i} key={idx} />
        ))}
      </div>
    </ScrollContainer>
  );
}
