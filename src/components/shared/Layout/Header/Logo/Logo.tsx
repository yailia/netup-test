import cls from './Logo.module.css';

export function Logo() {
  return (
    <h1 className={cls.logo}>
      <a href='/' className={cls.logo__logo}>
        netup
      </a>
    </h1>
  );
}
