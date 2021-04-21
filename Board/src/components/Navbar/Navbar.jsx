import React from 'react';
import { useHistory } from 'react-router';
import './Navbar.scss';

const navMenus = [
  {
    text: '글 작성',
    route: '/post-form',
  },

  {
    text: '회원가입',
    route: '/sign-up',
  },

  {
    text: '유저 목록',
    route: '/members',
  },

  {
    text: '유저 포스트 목록',
    route: '/user-post',
  },

  {
    text: '유저 검색',
    route: '/user-search',
  },

  {
    text: '모든 글 조회',
    route: '/all-post',
  },
];

const Navbar = () => {
  const history = useHistory();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1rem',
        backgroundColor: 'green',
        color: 'white',
        padding: '1rem',
      }}
    >
      {
        navMenus.map(({ text, route }, idx) => (
          <div
            key={idx}
            onClick={() => history.push(route)}
            style={{ cursor: 'pointer' }}
          >
            {text}
          </div>
        ))
      }
    </div>
  );
};

Navbar.propTypes = {

};

export default Navbar;
