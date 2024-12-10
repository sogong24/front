import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/common/Layout";
import HomePage from "./pages/HomePage";
import SearchResultPage from "./pages/SearchResultPage";
import MyPage from "./pages/MyPage";
import PostCreatePage from "./pages/PostCreatePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CourseBoardPage from './pages/CourseBoardPage';
import NoteDownloadPage from './pages/NoteDownloadPage';


import "./index.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/search" element={<SearchResultPage />} />
                <Route path="/courseboard/:courseId" element={<CourseBoardPage />} />
                <Route path="/notedownload/:noteID" element={<NoteDownloadPage />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/post/create" element={<PostCreatePage />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;