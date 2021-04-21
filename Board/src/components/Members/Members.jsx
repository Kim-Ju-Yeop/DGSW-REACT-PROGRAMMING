import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { memberListState } from 'atom/member';
import './Members.scss';
import Navbar from 'components/Navbar/Navbar';

const Members = () => {
  const [memberList, setMemberList] = useRecoilState(memberListState);

  const onDelete = useCallback((id) => {
    setMemberList(memberList.filter((member) => member.id !== id));
  }, [memberList, setMemberList]);

  return (
    <>
    <Navbar />
    <table className='Members'>
      <tr>
        <td>아이디</td>
        <td>이름</td>
        <td>전번</td>
        <td>이메일</td>
        <td>수정</td>
        <td>삭제</td>
      </tr>
      {
        memberList.map(({ id, name, tel, email }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{tel}</td>
            <td>{email}</td>
            <td>수정</td>
            <td onClick={() => onDelete(id)}>삭제</td>
          </tr>
        ))
      }
    </table>
    </>
  );
};

export default Members;
