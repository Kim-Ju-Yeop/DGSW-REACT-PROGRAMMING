import { memberListState } from 'atom/member';
import Navbar from 'components/Navbar/Navbar';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import './SignUp.scss';

const SignUp = () => {
  const setMemberList = useSetRecoilState(memberListState);
  const [request, setRequest] = useState({
    id: '',
    password: '',
    name: '',
    email: '',
    tel: '',
  });
  const history = useHistory();

  const { id, password, name, email, tel } = request;

  const onChangeRequest = useCallback((e) => {
    const { name, value } = e.target;
    setRequest((prevRequest) => ({
      ...prevRequest,
      [name]: value,
    }));
  }, []);

  const onSubmit = useCallback(() => {
    setMemberList((memberList) => ([
      ...memberList,
      request,
    ]));

    history.push('/members');
  }, [history, request, setMemberList]);

  return (
    <>
    <Navbar />
    <div className='SignUp'>
      <div className='SignUp-InputWrap'>
        <div>아이디</div>
        <input
          type='text'
          name='id'
          value={id}
          onChange={onChangeRequest}
        />
      </div>

      <div className='SignUp-InputWrap'>
        <div>패스워드</div>
        <input
          type='password'
          name='password'
          value={password}
          onChange={onChangeRequest}
        />
      </div>

      <div className='SignUp-InputWrap'>
        <div>이메일</div>
        <input
          type='email'
          name='email'
          value={email}
          onChange={onChangeRequest}
        />
      </div>

      <div className='SignUp-InputWrap'>
        <div>전화번호</div>
        <input
          type='text'
          name='tel'
          value={tel}
          onChange={onChangeRequest}
        />
      </div>

      <div className='SignUp-InputWrap'>
        <div>이름</div>
        <input
          type='text'
          name='name'
          value={name}
          onChange={onChangeRequest}
        />
      </div>

      <button onClick={onSubmit}>확인</button>
    </div>
    </>
  );
};

export default SignUp;
