

const Tweet = (props) => {
    const {caption, foodImg, isLiked, isBookmarked, likes, bookmarks, comments, author, authorImg} = props;
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
          <ion-icon name="heart"></ion-icon>
          <p>{likes}</p>
        </div>
        <div className="socials">
          <ion-icon name="chatbubble"></ion-icon>
          <p>{comments?.length}</p>
        </div>
        <div className="socials">
          <ion-icon name="bookmark"></ion-icon>
          <p>{bookmarks}</p>
        </div>
      </div>
    </div>
  );
}

export default Tweet