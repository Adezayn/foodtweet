
import Button from "../../../components/Button";
import { useDispatch } from "react-redux";
import { postBookmarkTweet, postLikeTweet, postUnbookmarkTweet, postUnlikeTweet } from "../../../redux/slices/mealsfeedSlice";
const Tweet = (props) => {
    const {
      caption,
      foodImg,
      isLikedByUser,
      isBookmarkedByUser,
      likes,
      bookmarks,
      comments,
      author,
      authorImg,
      postId
    } = props;

    const dispatch = useDispatch();

    const likeTweetHandler = () => {
       isLikedByUser ? dispatch(postUnlikeTweet(postId)) : dispatch(postLikeTweet(postId))
     }
      const bookmarkTweetHandler = () => {
       isBookmarkedByUser ? dispatch(postUnbookmarkTweet(postId)) : dispatch(postBookmarkTweet(postId));
      };
  return (
    <div className="tweet">
      <p>Posted by {author}</p>
      <div className="tweet-primary-container">
        <div className="tweet-primary">
          <img src={authorImg} />
        </div>
        <img className="food-img" src={foodImg} />
      </div>
      <p>{caption}</p>
      <div className="socials-container">
        <div className="socials">
          <Button
            className={isLikedByUser ? "clicked-button" : "btn-red"}
            inputHandler={likeTweetHandler}
          >
            <ion-icon
              name={isLikedByUser ? "heart" : "heart-outline"}
            ></ion-icon>
          </Button>
          <p>{likes}</p>
        </div>
        <div className="socials">
          <Button className="btn-green">
            <ion-icon name="chatbubble-outline"></ion-icon>
          </Button>
          <p>{comments?.length}</p>
        </div>
        <div className="socials">
          <Button className={isBookmarkedByUser ? "bookmark" : "btn-cream"} inputHandler={bookmarkTweetHandler}>
            <ion-icon
              name={isBookmarkedByUser ? "bookmark" : "bookmark-outline"}
            ></ion-icon>
          </Button>
          <p>{bookmarks}</p>
        </div>
      </div>
    </div>
  );
}

export default Tweet