import { ReactNode, useEffect, useState } from 'react';
import clsx from 'clsx';
import cls from './Backgrounds.module.css';

interface BackgroundsProps {
  backgrounds: Array<{
    url: string;
  }>;
  children?: ReactNode;
}

export function Backgrounds(props: BackgroundsProps) {
  const [current, setCurrent] = useState(0);
  const { length } = props.backgrounds;

  useEffect(() => {
    const interval = setInterval(() => setCurrent(i => (i >= length - 1 ? 0 : i + 1)), 5000);

    return () => clearInterval(interval);
  }, [length]);
  return (
    <div className={cls.backgrounds}>
      {props.backgrounds?.map((i, idx) => {
        return (
          <div
            key={idx}
            className={clsx(cls.backgrounds__img, { [cls.active]: idx === current })}
            style={{ backgroundImage: `url(${i.url})` }}
          />
        );
      })}
    </div>
  );
}
