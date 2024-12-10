// CourseBoradPage에서 강의 선택했을 때 다운받을 pdf를 보여주는 페이지
// searchFrame X

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useNoteDetail from "../hooks/useNoteDetail";
import useNoteDownload from "../hooks/useNoteDownload";
import { BiLike, BiDislike } from "react-icons/bi";
import useCountNoteLike from "../hooks/useCountNoteLike";

function NoteDownloadPage() {
  const { likeNote, dislikeNote } = useCountNoteLike();
  const { noteId } = useLocation().state || {};
  const {
    noteInfo,
    error: detailError,
    loading: detailLoading,
    getNoteDetail,
  } = useNoteDetail();
  const {
    downloadNote,
    error: downloadError,
    loading: downloadLoading,
  } = useNoteDownload();

  const [likesCount, setLikesCount] = useState(noteInfo?.note?.likeCount ?? 0);
  const [dislikesCount, setDislikesCount] = useState(
    noteInfo?.note?.dislikeCount ?? 0
  );

  useEffect(() => {
    getNoteDetail(noteId);
  }, [noteId]);

  useEffect(() => {
    setLikesCount(noteInfo?.note?.likeCount ?? 0);
    setDislikesCount(noteInfo?.note?.dislikeCount ?? 0);
  }, [noteInfo]);

  const handleDownload = async () => {
    await downloadNote(noteId);
  };

  const handleLike = async () => {
    const updatedLikeCount = await likeNote(noteId);
    if (updatedLikeCount) {
      setLikesCount(updatedLikeCount.likeCount);
    }
    console.log("setlikescount 수 : ", likesCount);
    console.log("like 수: ", noteInfo.note.likeCount);
  };

  const handleDislike = async () => {
    const updatedDislikeCount = await dislikeNote(noteId);
    if (updatedDislikeCount) {
      setDislikesCount(updatedDislikeCount.dislikeCount);
    }
    console.log("setdislikescount 수 : ", dislikesCount);
    console.log("dislike 수: ", noteInfo.note.dislikeCount);
  };

  if (detailLoading) {
    return <div className="text-center mt-8">로딩 중...</div>;
  }

  if (detailError) {
    return <div className="text-red-500 text-center mt-8">{detailError}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      {noteInfo && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4">{noteInfo.note.title}</h1>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-600">강의명</p>
              <p className="font-semibold">{noteInfo.course.title}</p>
            </div>
            <div>
              <p className="text-gray-600">교수명</p>
              <p className="font-semibold">{noteInfo.course.professorName}</p>
            </div>
            <div>
              <p className="text-gray-600">학년/학기</p>
              <p className="font-semibold">
                {noteInfo.course.grade}학년 {noteInfo.course.semester}학기
              </p>
            </div>
            <div>
              <p className="text-gray-600">작성자</p>
              <p className="font-semibold">{noteInfo.note.uploaderName}</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-600">설명</p>
            <p className="mt-2">{noteInfo.note.description}</p>
          </div>

          <div className="text-gray-500 text-sm mb-6">
            업로드 날짜:{" "}
            {new Date(noteInfo.note.uploadDate).toLocaleDateString()}
          </div>
          <div className="mypageprofile-reputation mt-6 mb-6">
            <div className="reputation-box" onClick={handleLike}>
              <BiLike className="icon-red" />
              <span>{likesCount}</span>
              {
                //<span>{user.likeCount}</span>
              }
            </div>
            <div className="reputation-box" onClick={handleDislike}>
              <BiDislike className="icon-red" />
              <span>{dislikesCount}</span>
              {
                //<span>{user.dislikeCount}</span>
              }
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleDownload}
              disabled={downloadLoading}
              className={`px-6 py-2 rounded-xl transition-colors ${
                downloadLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white`}
            >
              {downloadLoading ? "다운로드 중..." : "다운로드"}
            </button>
          </div>
          {downloadError && (
            <div className="text-red-500 text-center mt-4">{downloadError}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default NoteDownloadPage;
