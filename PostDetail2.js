import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const infoPosts = [
  { id: 1, title: '시험비 지원 꿀팁 공유', date: '2024-09-01', writer: 'writer. Hyejeong', content: '첫 번째 정보 공유 게시글 내용입니다.' },
  { id: 2, title: '좋은 자리 배정 받는 법', date: '2024-09-05', writer: 'writer. Hyejeong', content: '두 번째 정보 공유 게시글 내용입니다.' },
  { id: 3, title: 'A+ 받는 법', date: '2024-09-10', writer: 'writer. Hyejeong', content: '세 번째 정보 공유 게시글 내용입니다.' },
];

const PostDetail2 = () => {
  const { id } = useParams();
  const post = infoPosts.find(post => post.id === Number(id));  // 정보 공유 게시글에서 찾기

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <DetailContainer>
      <h1>{post.title}</h1>
      <p>작성일: {post.date}</p>
      <p>작성자: {post.writer}</p>
      <Content>{post.content}</Content>
    </DetailContainer>
  );
};

export default PostDetail2;

const DetailContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-top: 20px;
`;
