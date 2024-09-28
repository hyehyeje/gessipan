import './App.css';
import TodoMain from "./Components/Todo/TodoMain";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react'; // 상태 관리를 위한 useState 추가
import Community from './Components/community/Community';
import WritePost from './Components/community/WritePost'; // 글쓰기 컴포넌트
import PostDetail from './Components/community/PostDetail';
import PostDetail2 from './Components/community/PostDetail2';
import CommunityContent from './Components/community/CommunityContent'; // 목표 인증 탭 게시글
import InformationContent from './Components/community/InformationContent'; // 정보 공유 탭 게시글

function App() {
  // 게시글 목록을 상태로 관리
  const [posts, setPosts] = useState([
    { id: 1, title: '!!자격증 자료 공유', date: '2024-09-01', writer: 'writer. Hyejeong', content: '자격증 자료 공유합니다.' },
    { id: 2, title: '두 번째 게시글', date: '2024-09-05', writer: 'writer. Hyejeong', content: '두 번째 게시글 내용입니다.' }
  ]);

  // 새 게시글 추가 함수
  const addPost = (newPost) => {
    setPosts([...posts, newPost]); // 기존 게시글에 새 게시글 추가
  };

  return (
    <BrowserRouter>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/community/goal">Community</Link>
      </Navigation>
      <Routes>
        <Route path="/" element={<TodoMain />} />
        
        {/* Community 페이지 하위 라우트 설정 */}
        <Route path="/community/*" element={<Community posts={posts} />}> {/* 상태 전달 */}
          <Route path="goal" element={<CommunityContent posts={posts} />} /> {/* 목표 인증 게시글 목록 */}
          <Route path="post/:id" element={<PostDetail posts={posts} />} /> {/* 목표 인증 게시글 상세 보기 */}
          
          <Route path="info" element={<InformationContent posts={posts} />} /> {/* 정보 공유 게시글 목록 */}
          <Route path="info/post/:id" element={<PostDetail2 posts={posts} />} /> {/* 정보 공유 게시글 상세 보기 */}
          
          {/* 글쓰기 페이지에 새 게시글 추가 함수를 전달 */}
          <Route path="write" element={<WritePost addPost={addPost} />} /> {/* 글쓰기 페이지 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const Navigation = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-around;
  background-color: #f0f0f0;
  padding: 10px;
`;
