import { useSelector } from "react-redux";
import { Tweet } from "./components";

const Likes = () => {
  const { allMealsFeed } = useSelector((state) => state.mealsFeed);
  return (
    <div className="likes-page">
      <p className="poppins-semibold">Liked Tweets</p>
      <div className="meals-feed-container">
        {allMealsFeed
          ?.filter((feed) => feed.isLikedByUser)
          ?.map((feed) => (
            <Tweet {...feed} key={feed.postId} />
          ))}
      </div>
    </div>
  );
};

export default Likes;
