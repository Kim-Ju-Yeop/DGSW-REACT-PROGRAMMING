import React, { useState } from 'react';
import Navbar from 'components/Navbar/Navbar';
import './UserSearch.scss';
import { useRecoilValue } from 'recoil';
import { memberListState } from 'atom/member';

const UserSearch = () => {
  const [keyword, setKeyword] = useState('');
  const userList = useRecoilValue(memberListState);

  return (
    <>
      <Navbar />
      <input
        type='text'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='조회할 아이디 입력.'
      />

      <table>
        <tr>
          <td>번호</td>
          <td>아이디</td>
          <td>이름</td>
          <td>이메일</td>
          <td>전화번호</td>
        </tr>
        {
          userList.filter(({ id }) => id.includes(keyword))
          .map(({ id, tel, name, email }, idx) => (
            <tr key={id}>
              <td>{idx + 1}</td>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{tel}</td>
            </tr>
          ))
        }
      </table>
    </>
  );
};

export default UserSearch;
