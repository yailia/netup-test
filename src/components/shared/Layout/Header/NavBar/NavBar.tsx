import clsx from 'clsx';
import cls from './NavBar.module.css';

type TAppRoutesMod = 'discover' | 'live-tv' | 'shows' | 'movies' | 'my-stuff';
interface AppRoutesModel {
  href: string;
  title: string;
  additionalClass: TAppRoutesMod;
}

export const routes: AppRoutesModel[] = [
  {
    title: 'Discover',
    href: '/',
    additionalClass: 'discover',
  },
  {
    title: 'Live TV',
    href: '/',
    additionalClass: 'live-tv',
  },
  {
    title: 'TV Shows',
    href: '/',
    additionalClass: 'shows',
  },
  {
    title: 'Movies',
    href: '/',
    additionalClass: 'movies',
  },
  {
    title: 'My Stuff',
    href: '/',
    additionalClass: 'my-stuff',
  },
];

export function NavBar() {
  return (
    <nav className={cls.navbar}>
      <ul className={cls.navbar__list}>
        {routes.map(i => {
          return (
            <li className={cls.navbar__item} key={i.title}>
              <a href={i.href} className={clsx(cls.navbar__link, cls[i.additionalClass])}>
                {i.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
