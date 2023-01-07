import { Logo } from './Logo';
import { NavBar } from './NavBar';
import { UserBlock } from './UserBlock';
import cls from './Header.module.css';

export function Header() {
  return (
    <header className={cls.header}>
      <Logo />
      <NavBar />
      <UserBlock />
    </header>
  );
}
