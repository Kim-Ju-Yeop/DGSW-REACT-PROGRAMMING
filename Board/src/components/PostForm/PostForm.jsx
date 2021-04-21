import { postListState } from 'atom/post';
import Navbar from 'components/Navbar/Navbar';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import './PostForm.scss';

const PostForm = () => {
  const history = useHistory();
  const [postList, setPostList] = useRecoilState(postListState);
  
  const [request, setRequest] = useState({
    id: '',
    writerId: '',
    title: '',
    contents: '',
  });

  const onChangeRequest = useCallback((e) => {
    const { name, value } = e.target;

    setRequest((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const onSubmit = useCallback(() => {
    setPostList([
      ...postList,
      {
        ...request,
        id: postList[postList.length - 1] ? postList[postList.length - 1].id + 1 : 0,
      }
    ]);

    history.push('/user-post');
  }, [history, postList, request, setPostList]);

  return (
    <div>
      <Navbar />
      <div className='PostForm-InputWrap'>
        <div>아이디</div>
        <input
          type='text'
          value={request.writerId}
          name='writerId'
          onChange={onChangeRequest}
        />
      </div>

      <div className='PostForm-InputWrap'>
        <div>글제목</div>
        <input
          type='text'
          value={request.title}
          name='title'
          onChange={onChangeRequest}
        />
      </div>

      <div className='PostForm-InputWrap'>
        <div>내용</div>
        <textarea
          name='contents'
          value={request.contents}
          onChange={onChangeRequest}
        ></textarea>
      </div>

      <button onClick={onSubmit}>확인</button>
    </div>
  );
};

export default PostForm;
