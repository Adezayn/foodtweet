

const MealCard = (props) => {
  const {image, name, rating, description} = props;
  return (
    <div>
      <img src={image} alt={name} />
      <div>
         <p>{name}</p>
         <div>
            {/* rating start */}
            <p>{rating}</p>
         </div>
      </div>
    </div>
  );
}

export default MealCard