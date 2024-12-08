// import { IoIosClose } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import base64 from "base-64";
// import api from "../../api/axios";

// function PostCreateTopbar({ courseInfo, fileInfo }) {
//   const navigate = useNavigate();

//   const clickComplete = async () => {
//     const userGrade = courseInfo.grade;
//     const semester = courseInfo.semester;
//     const title = courseInfo.courseName;
//     const professorName = courseInfo.professor;
//     const description = courseInfo.info;
//     //게시글 업로드 정보 추출

//     const token = localStorage.getItem("token");
//     let payload = token.substring(
//       token.indexOf(".") + 1,
//       token.lastIndexOf(".")
//     );
//     let decodingInfo = base64.decode(payload);
//     let decodingInfoJson = JSON.parse(decodingInfo);
//     //jwt 토큰 디코딩

//     const response = await api.get("http://localhost:3000/api/courses", {
//       headers: { Authorization: `Bearer ${token}` },
//       params: {
//         grade: userGrade,
//         semester: semester,
//       },
//     });
//     const result = response.data;

//     let courseID = "";
//     if (result.length !== 1) {
//       const selectCourse = result.find(
//         (course) =>
//           course.professorName == professorName && course.title == title
//       );
//       if (selectCourse) {
//         courseID = selectCourse.id;
//       } else {
//         console.error("해당 조건에 맞는 강의를 찾을 수 없습니다.");
//       }
//     } else {
//       courseID = result[0].id;
//     }
//     // courseID 추출

//     const formData = new FormData();
//     formData.append("uploaderID", decodingInfoJson.userId);
//     formData.append("courseID", courseID);
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("file", fileInfo[0]);

//     /*
//    값 확인
//     console.log("uploader ID: ", decodingInfoJson.userId);
//     console.log("usergrade: ", userGrade);
//     console.log("description: ", description);
//     console.log("title: ", title);
//     console.log("courseid: ", courseID);
//     */

//     try {
//       const uploadResponse = await api.post(
//         "http://localhost:3000/api/notes",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       alert("게시물이 등록되었습니다.");
//       console.log(uploadResponse.data);
//       navigate("/home");
//     } catch (error) {
//       console.error("파일 업로드 실패:", error);
//     }
//   };
//   // 완료 버튼을 눌렀을 때
//   // pdf 파일과 정보(학기, 교수명, 강의명)를 데이터베이스에 저장 후 다운로드 창으로 이동.
//   // 글 제목도 같이 데이터베이스 창에 저장됨
//   // courseID는 get함수로, userID는 토큰을 복호화해서 불러오기

//   const clickClose = () => {
//     navigate("/");
//   };
//   // X 버튼을 눌렀을 때

//   return (
//     <div className="flex flex-col">
//       <div className="flex justify-between items-center">
//         <IoIosClose className="cursor-pointer" size={50} onClick={clickClose} />
//         <div
//           className="
//           text-2xl
//           font-bold
//           text-center
//           flex-grow
//           mx-4
//           bg-transparent"
//         >
//           글 작성
//         </div>
//         <button
//           className="px-2 py-1 mr-2 bg-button-red rounded-xl border border-black"
//           onClick={clickComplete}
//         >
//           <div className="text-white">완료</div>
//         </button>
//       </div>
//       <div className="border-b my-3 border-black"></div>
//     </div>
//   );
// }

// export default PostCreateTopbar;
