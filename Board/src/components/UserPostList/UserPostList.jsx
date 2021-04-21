import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { postListState } from 'atom/post';
import './UserPostList.scss';
import Navbar from 'components/Navbar/Navbar';

const UserPostList = () => {
  const postList = useRecoilValue(postListState);
  const [keyword, setKeyword] = useState('');
  
  return (
    <>
      <Navbar />
      <input
        type='text'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='조회할 유저 아이디 입력.'
      />

      <table>
        <tr>
          <td>아이디</td>
          <td>글쓴이</td>
          <td>제목</td>
          <td>내용</td>
        </tr>
        {
          postList.filter(({ writerId }) => writerId.includes(keyword))
          .map(({ id, writerId, title, contents }, idx) => (
            <tr key={id}>
              <td>{idx + 1}</td>
              <td>{writerId}</td>
              <td>{title}</td>
              <td>{contents}</td>
            </tr>
          ))
        }
      </table>
    </>
  );
};

export default UserPostList;
