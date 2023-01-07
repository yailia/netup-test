import clsx from 'clsx';
import cls from './Badge.module.css';

interface BadgeProps {
  title?: string;
  bold?: string;
  color?: string;
}

export function Badge({ color = '#09BB53', ...props }: BadgeProps) {
  return (
    <div className={cls.badge} style={{ backgroundColor: color }}>
      <span className={cls.badge__title}>{props.title}</span>
      {props.bold && <span className={clsx(cls.badge__title, cls.bold)}>{props.bold}</span>}
    </div>
  );
}
