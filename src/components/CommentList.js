import React, { useState } from 'react';
import Comment from './Comment';

function CommentList({ comments }) {
  const [isShowingComments, setIsShowingComments] = useState(true);

  const buttonLabel = isShowingComments ? 'Hide Comments' : 'Show Comments';
  const commentDisplay = isShowingComments ? 'block' : 'none';

  const numOfComments = comments.length;
  const commentArray = comments.map(comment => {
    return (<Comment key={comment.id} user={comment.user} comment={comment.comment}/>)}
  );

  function handleCommentClick() {
    setIsShowingComments((isShowingComments) => !isShowingComments);
  }

  return (
    <>
      <button onClick={handleCommentClick}>{buttonLabel}</button>
      <container style={{display:commentDisplay}}>
        <h3>{numOfComments} {numOfComments === 1 ? 'Comment' : 'Comments'}</h3>
        {commentArray}
      </container>
    </>
  );
};

export default CommentList