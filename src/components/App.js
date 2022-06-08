import video from "../data/video.js";
import CommentList from "./CommentList.js";
import VideoDetails from "./VideoDetails.js";
import VideoLikes from "./VideoLikes.js";

function App() {

  return (
    <div className="App">
      <VideoDetails 
        embedUrl={video.embedUrl} 
        title={video.title} 
        views={video.views} 
        createdAt={video.createdAt}
      />
      <VideoLikes upvotes={video.upvotes} downvotes={video.downvotes} />
      <CommentList comments={video.comments}/>
    </div>
  );
}

export default App;
