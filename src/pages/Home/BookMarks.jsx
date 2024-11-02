import { useSelector } from "react-redux";
import { Tweet } from "./components";

const BookMarks = () => {
  const { allMealsFeed } = useSelector((state) => state.mealsFeed);
  return (
    <div className="bookmarks-page">
      <p className="poppins-semibold">Bookmarked Tweets</p>
      <div className="meals-feed-container">
        {allMealsFeed
          ?.filter((feed) => feed.isBookmarkedByUser)
          ?.map((feed) => (
            <Tweet {...feed} key={feed.postId} />
          ))}
      </div>
    </div>
  );
};

export default BookMarks;
