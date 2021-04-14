import React, { memo, useState } from 'react';
import classNames from 'classnames';
import style from './TodoList.scss';
import TodoTitle from 'components/TodoTitle';
import TodoInput from 'components/TodoInput';
import TodoItem from './TodoItem/TodoItem';
import NoTodos from 'components/NoTodos';
import TodoInfo from 'components/TodoInfo';

const cx = classNames.bind(style);

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className={cx('TodoList')}>
      <TodoTitle title='Todo 3209 김주엽' />

      <div className={cx('TodoList-ContentBox')}>
        <TodoInput todos={todos} setTodos={setTodos} />
        {
          todos.length > 0 &&
          <TodoInfo todos={todos} />
        }

        <div className={cx('TodoList-ContentBox-List')}>
          {
            todos.length > 0 ? todos.map(({ id, text, isCompleted }, index) => (
              <TodoItem
                key={id}
                id={id}
                index={index + 1}
                text={text}
                isCompleted={isCompleted}
                setTodos={setTodos}
              />
            )) : <NoTodos />
          }
        </div>
      </div>
    </div>
  );
};

export default memo(TodoList);
