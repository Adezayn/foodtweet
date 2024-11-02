
import { useSelector } from "react-redux";
import { Tweet } from "./components";

const MealsFeed = () => {
  const { allMealsFeed } = useSelector((state) => state.mealsFeed);

  return (
    <div className="meals-feed">
      <p className="poppins-semibold">
        What are people saying about these meals?
      </p>
      <div className="meals-feed-container">{allMealsFeed?.map(feed => <Tweet {...feed} key={feed.postId}/>)}</div>
    </div>
  );
}

export default MealsFeed