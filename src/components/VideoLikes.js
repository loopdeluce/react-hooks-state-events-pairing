import React, { useState } from 'react';

function VideoLikes({upvotes, downvotes}) {
  const [voteData, setVoteData] = useState({
    upvotes: upvotes,
    downvotes: downvotes
  });

  function handleClick(e){
    const voteType = e.target.name;
    let updatedVotes = voteData[voteType] +1;

    setVoteData({
      ...voteData,
      [voteType]: updatedVotes
    });
  }

  return (
    <div className = 'likebuttons videolikebuttons'>
      <button name='upvotes' onClick={handleClick}>{voteData.upvotes}<span className='emoji'>👍</span></button>
      <button name='downvotes' onClick={handleClick}>{voteData.downvotes}<span className='emoji'>👎</span></button>
    </div>
    )
};

export default VideoLikes;