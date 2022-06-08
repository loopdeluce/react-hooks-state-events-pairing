
function VideoDetails({embedUrl, title, views, createdAt}) {

  return (
    <>
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h2>{title}</h2>
      <p>{views} Views | Uploaded {createdAt}</p>
    </>
  )
};

export default VideoDetails;