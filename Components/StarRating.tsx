import { Star, StarFill } from "react-bootstrap-icons";
interface Rating {
  rating: number;
}

const StarRating = ({ rating }: Rating) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} style={{ cursor: "pointer" }}>
          {rating >= star ? (
            <StarFill style={{ fontSize: "1rem", color: "#ffc107" }} />
          ) : (
            <Star style={{ fontSize: "1rem", color: "#e4e5e9" }} />
          )}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
