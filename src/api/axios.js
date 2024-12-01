// import axios from 'axios';

// const api = axios.create({
//     baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000',
//     withCredentials: true,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });

// // 요청 인터셉터 - 설정 추가하거나 수정할 수 있는 기능 ; 지금 이게 필요한 지는 잘 모르겠다.
// // 인증 토큰 추가
// // localStorage에 저장을 시키는 게 맞는지 체크 -> 쿠키 사용하거나 메모리에만 저장 고려
// api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         if(token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     }, 
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// export default api;