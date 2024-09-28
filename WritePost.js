// WritePost.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 작성 후 페이지 이동을 위해 useNavigate 추가
import styled from 'styled-components';

const WritePost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  const handleSubmit = (e) => {
    e.preventDefault();

    // 현재 날짜 생성
    const currentDate = new Date().toISOString().split('T')[0]; 

    // 새 게시글 객체 생성
    const newPost = {
      id: Date.now(), // 고유 ID를 위한 시간 값 사용
      title,
      content,
      date: currentDate,
      writer: 'writer. Hyejeong', // 임시 작성자 정보
    };

    // 게시글 추가 함수 호출
    addPost(newPost);

    // 작성 완료 후 커뮤니티 페이지로 이동
    navigate('/community/goal');
  };

  return (
    <WriteContainer>
      <h1>글쓰기</h1>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <label>제목</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required
          />
        </InputWrapper>
        <InputWrapper>
          <label>내용</label>
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required
          />
        </InputWrapper>
        <SubmitButton type="submit">작성 완료</SubmitButton>
      </form>
    </WriteContainer>
  );
};

export default WritePost;

const WriteContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  textarea {
    height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;
