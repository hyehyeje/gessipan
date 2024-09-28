import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const posts = [
    { id: 1, title: '자격증 자료 공유', date: '2024-09-01', writer: 'writer. Hyejeong', content: '자격증 자료 공유합니다.' },
    { id: 2, title: '주 3회 운동하기', date: '2024-09-05', writer: 'writer. Hyejeong', content: '두 번째 게시글 내용입니다.' },
    { id: 3, title: '토익 900점 달성', date: '2024-09-10', writer: 'writer. Hyejeong', content: '세 번째 게시글 내용입니다.' },
  ];

const CommunityContent = () => {
  return (
    <PostList>
      {posts.map((post) => (
        <PostItem key={post.id}>
          <StyledLink to={`/community/post/${post.id}`}>
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

export default CommunityContent;

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
