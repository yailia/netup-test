import clsx from 'clsx';
import { EUserBlockItem } from '~/enums/UserBlockItems';
import { UserBlockItem, UserBlockItemProps } from './UserBlockItem';
import cls from './UserBlock.module.css';

const userBlockItems: UserBlockItemProps[] = [
  {
    href: '/',
    isActive: true,
    mod: EUserBlockItem.search,
  },
  {
    href: '/',
    mod: EUserBlockItem.user,
    notify: true,
  },
];

export function UserBlock() {
  return (
    <nav className={cls.userBlock}>
      <ul className={cls.userBlock__list}>
        {userBlockItems.map(i => {
          return (
            <li
              key={i.mod}
              className={clsx(cls.userBlockItem, {
                [cls.active]: i.isActive,
                [cls.notify]: i.notify,
              })}
            >
              <UserBlockItem href={i.href} mod={i.mod} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
