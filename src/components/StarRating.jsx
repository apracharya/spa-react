import Star from "./Star";

const StarRating = ({ value }) => {
  const totalStars = 5;
  return (
    <div className="flex">
      {Array.from({ length: totalStars }, (_, index) => (
        <Star key={index} filled={index < value} />
      ))}
    </div>
  );
};

export default StarRating;
