import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Community = () => {
  const location = useLocation();
  
  return (
    <CommunityContainer>
      <TabWrapper>
        <TabNavigation>
          <TabButton active={location.pathname === '/community/goal'}>
            <Link to="/community/goal">목표 인증</Link>
          </TabButton>
          <TabButton active={location.pathname === '/community/info'}>
            <Link to="/community/info">정보 공유</Link>
          </TabButton>
        </TabNavigation>
        {/* 글쓰기 버튼 추가 */}
        <WriteButton>
          <Link to="/community/write">글쓰기</Link>
        </WriteButton>
      </TabWrapper>

      <ContentWrapper>
        <Outlet /> {/* 중첩 라우팅된 페이지 렌더링 */}
      </ContentWrapper>
    </CommunityContainer>
  );
};

export default Community;

const CommunityContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
`;

const TabWrapper = styled.div`
  background-color: #eaeaea;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const TabNavigation = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 500px;
`;

const TabButton = styled.div`
  padding: 10px 40px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#ffffff' : '#dddddd')};
  color: ${({ active }) => (active ? 'black' : '#777')};
  border: none;
  border-radius: 10px 10px 0 0;
  box-shadow: ${({ active }) => (active ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none')};
  &:hover {
    background-color: ${({ active }) => (active ? '#ffffff' : '#eeeeee')};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const WriteButton = styled.div`
  padding: 10px 20px;
  background-color: #4CAF50;
  border-radius: 5px;
  text-align: center;

  a {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  &:hover {
    background-color: #45a049;
  }
`;

const ContentWrapper = styled.div`
  padding: 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 0 0 10px 10px;
`;
