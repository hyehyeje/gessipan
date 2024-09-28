import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const posts = [
  { id: 1, title: '자격증 자료 공유', date: '2024-09-01', writer: 'writer. Hyejeong', content: '자격증 자료 공유합니다.' },
  { id: 2, title: '주 3회 운동하기', date: '2024-09-05', writer: 'writer. Hyejeong', content: '두 번째 게시글 내용입니다.' },
  { id: 3, title: '토익 900점 달성', date: '2024-09-10', writer: 'writer. Hyejeong', content: '세 번째 게시글 내용입니다.' },
];

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find(post => post.id === Number(id));

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

export default PostDetail;

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
