import { FormEvent } from 'react';
import clsx from 'clsx';
import cls from './SearchInput.module.css';

interface SearchInputProps {
  value: string;
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
  className?: string;
  handleClick?: () => void;
  isVisible?: boolean;
  handleSearch: (e: FormEvent) => void;
  handleClear: () => void;
  touched?: boolean;
}

export function SearchInput(props: SearchInputProps) {
  return (
    <form
      onSubmit={props.handleSearch}
      className={clsx(cls.searchInput, props.className && props.className, {
        [cls.active]: !props.isVisible,
      })}
    >
      <input
        className={cls.searchInput__input}
        type='text'
        value={props.value}
        onChange={props.handleChange}
        placeholder='Search'
        onClick={props.handleClick}
      />

      <button
        type='button'
        className={clsx(cls.searchInput__clearBtn, {
          [cls.active]: props.value,
        })}
        onClick={props.handleClear}
        aria-label='Clear search value'
      />
      <button type='submit' className={cls.searchInput__btn} disabled={!props.value && props.touched}>
        <span className={cls.searchInput__btnText}>search</span>
      </button>
    </form>
  );
}
