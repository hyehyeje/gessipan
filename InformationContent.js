// InformationContent.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const infoPosts = [
    { id: 1, title: '시험비 지원 꿀팁 공유', date: '2024-09-01', writer: 'writer. Hyejeong', content: '첫 번째 정보 공유 게시글 내용입니다.' },
    { id: 2, title: '좋은 자리 배정 받는 법', date: '2024-09-05', writer: 'writer. Hyejeong', content: '두 번째 정보 공유 게시글 내용입니다.' },
    { id: 3, title: 'A+ 받는 법', date: '2024-09-10', writer: 'writer. Hyejeong', content: '세 번째 정보 공유 게시글 내용입니다.' },
  ];

const InformationContent = () => {
  return (
    <PostList>
      {infoPosts.map((post) => (
        <PostItem key={post.id}>
          <StyledLink to={`/community/info/post/${post.id}`}>
            <PostContent>
              <h2>{post.title}</h2>
              <PostMeta>
                <p>{post.writer}</p>
                <p>{post.date}</p>
              </PostMeta>
            </PostContent>
          </StyledLink>
        </PostItem>
      ))}
    </PostList>
  );
};

export default InformationContent;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  h2 {
    margin: 0;
    font-size: 18px;
  }

  p {
    color: black;
    font-size: 14px;
  }
`;

const PostList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
`;

const PostItem = styled.li`
  margin: 10px 0;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 600px;
  width: 80%;
  &:hover {
    transform: scale(1.02);
  }
`;

const PostContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const PostMeta = styled.div`
  text-align: right;
  color: black;
  p {
    margin: 0;
    font-size: 14px;
  }
`;
