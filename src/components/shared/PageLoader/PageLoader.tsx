import { Loader } from '$shared/Loader';
import cls from './PageLoader.module.css';

export function PageLoader() {
  return (
    <div className={cls.pageLoader}>
      <Loader />
    </div>
  );
}
