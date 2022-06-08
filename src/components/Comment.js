
function Comment({ user, comment }) {
  return (
    <div className="comment">
      <h4>{user}</h4>
      <p>{comment}</p>
    </div>
  );
}

export default Comment;
