import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import MyPage from './pages/MyPage';
import "./index.css";
import './App.css';

function App() {
    return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/MyPage" element={<MyPage />} />
            <Route path="/Search" element={<SearchPage />} />
            {/* <Route path="/Signup" element={<Signup />} /> */}
            {/* <Route path="*" element={<Error />} /> */}
          </Routes>
        </Layout>
      </Router>
  );
 }



export default App;