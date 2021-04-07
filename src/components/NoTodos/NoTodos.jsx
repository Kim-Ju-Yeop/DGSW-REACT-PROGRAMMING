import React, { memo } from 'react';
import classNames from 'classnames';
import style from './NoTodos.scss';

const cx = classNames.bind(style);

const NoTodos = () => {
  return (
    <div className={cx('NoTodos')}>
      <div>Todo를 추가해주세요!</div>
    </div>
  );
};

export default memo(NoTodos);