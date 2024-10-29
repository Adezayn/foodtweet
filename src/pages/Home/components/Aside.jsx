import MealCard from "./MealCard";
import "../styles.css"


const Aside = () => {
  return (
    <div className="aside">
      <p>list of meals</p>
      {/* List of meals */}
      <MealCard />
      {/* maybe a food blog */}
    </div>
  )
}

export default Aside