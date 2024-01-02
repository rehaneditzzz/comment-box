import React, { useState } from "react";

function CommentInput({ onNewComment }) {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddNewComment = () => {
    if (comment.trim() !== "") {
      // Call the prop function with the new comment
      onNewComment(comment);
      // Clear the input field
      setComment("");
    }
  };

  return (
    <>
      <input
        className="input-box border-2 border-purple-700 m-3"
        type="text"
        placeholder="Leave A Comment"
        onChange={handleCommentChange}
        value={comment}
      />

      <button
        className="btn rounded-md px-3 bg-blue-400 text-slate-50"
        onClick={handleAddNewComment}
      >
        Share
      </button>
    </>
  );
}

export default CommentInput;
