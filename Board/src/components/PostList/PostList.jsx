import React from 'react';
import { useRecoilValue } from 'recoil';
import { postListState } from 'atom/post';
import './PostList.scss';
import Navbar from 'components/Navbar/Navbar';

const PostList = () => {
  const postList = useRecoilValue(postListState);
  
  return (
    <>
    <Navbar />
    <table>
      <tr>
        <td>아이디</td>
        <td>글쓴이</td>
        <td>제목</td>
        <td>내용</td>
      </tr>
      {
        postList.map(({ id, writerId, title, contents }, idx) => (
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

export default PostList;
