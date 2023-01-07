import clsx from 'clsx';
import { EUserBlockItem } from '~/enums/UserBlockItems';
import cls from './UserBlockItem.module.css';

export interface UserBlockItemProps {
  href: string;
  mod?: EUserBlockItem;
  isActive?: boolean;
  notify?: boolean;
}

export function UserBlockItem(props: UserBlockItemProps) {
  return (
    <a className={clsx(cls.userBlockItem, props.mod && cls[props.mod])} href={props.href}>
      {props.mod}
    </a>
  );
}
