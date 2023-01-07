import { DataItemModel } from '~/models/DataItemModel';
import { Badge } from './Badge';
import cls from './Item.module.css';

interface ItemProps {
  data: DataItemModel;
}

export function Item(props: ItemProps) {
  const { num_seasons, country, genres, imdb_rate, is_new, keyframe, length, min_age, poster, title, year } =
    props.data;

  const seasonSuf = num_seasons > 1 ? 'seasons' : 'season';
  return (
    <div className={cls.item}>
      <div className={cls.item__img}>
        <img className={cls.item__poster} src={poster} alt={title} />
        <img className={cls.item__keyframe} src={keyframe} alt={title} />
        <button className={cls.item__moreBtn} type='button'>
          <span className={cls.item__moreBtnText}> More details</span>
        </button>
        <div className={cls.badges}>
          {is_new && <Badge color='#DE8B0F' title='New on NetUP TV' />}

          {imdb_rate && <Badge title='IMDB' bold={`${imdb_rate}/10`} />}
        </div>
      </div>
      <div className={cls.item__attrs}>
        <h3 className={cls.item__title}>{title}</h3>
        <ul className={cls.item__mainInfo}>
          <li className={cls.item__mainInfoItem}>{country}</li>
          <li className={cls.item__mainInfoItem}>{year}</li>
          <li className={cls.item__mainInfoItem}>{`${length} min`}</li>
          <li className={cls.item__mainInfoItem}>{`${num_seasons} ${seasonSuf}`}</li>
          <li className={cls.item__mainInfoItem}>{`${min_age}+`}</li>
        </ul>
      </div>
      <div className={cls.item__genres}>{genres?.join(', ')}</div>
    </div>
  );
}
