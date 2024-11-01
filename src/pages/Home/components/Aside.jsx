import MealCard from "./MealCard";


const Aside = () => {
  return (
    <div className="aside">
      <p>Healthy eating blogs</p>
      {/* List of meals */}
      <MealCard />
      {/* maybe a food blog */}
    </div>
  )
}

export default Aside