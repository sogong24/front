import { useState } from 'react';
import api from '../api/axios';

function useCourseDetail() {
    const [courseInfo, setCourseInfo] = useState(null);
    const [error, setError] = useState(null);

    const getCourseDetail = async (courseID) => {
        try {
            setError(null);
            const token = localStorage.getItem('token');

            console.log('요청 URL:', `/api/courses/detail/${courseID}`);
            console.log('courseID:', courseID);

            if (!token) {
                setError('로그인이 필요합니다.');
                return null;
            }

            const response = await api.get(`/api/courses/detail/${courseID}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log('응답 데이터:', response.data);
            console.log(courseInfo);

            const data = await response.data;
            setCourseInfo(data);
            return response.data;
        } catch (err) {
            console.error('강좌 정보 조회 실패:', err);
            console.error('에러 응답:', err.response?.data);  // 에러 응답 확인
            console.error('상태 코드:', err.response?.status);
            setError(err.response?.data?.message || '강좌 정보를 불러오지 못했습니다.');
            return null;
        }
    };

    return { courseInfo, error, getCourseDetail };
}

export default useCourseDetail;