import React from "react";

function SampleComment({ comments }) {
  return (
    <>
      <ul className="mt-3">
        {comments.map((item, index) => (
          <li key={index} >{item.com}</li>
        ))}
      </ul>
    </>
  );
}

export default SampleComment;
