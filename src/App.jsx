import React, { useState } from "react";
import Heading from "./components/Heading";
import CommentInput from "./components/CommentInput";
import SampleComment from "./components/SampleComment";

function App() {
  const [comments, setComments] = useState([]);

  const handleNewComment = (newComment) => {
    setComments([...comments, { com: newComment }]);
  };

  return (
    <>
      <center className="conatiner text-center m-5">
        <Heading />
        <CommentInput onNewComment={handleNewComment} />
        <SampleComment comments={comments} />
      </center>
    </>
  );
}

export default App;
