import './StarRating.css';

const StarRating = ({ rating, outOf = 5 }) => {
  const stars = [];

  for (let i = 1; i <= outOf; i++) {
    if (rating >= i) {
      stars.push(<span key={i} className="star full">★</span>);
    } else if (rating >= i - 0.5) {
      stars.push(<span key={i} className="star half">★</span>);
    } else {
      stars.push(<span key={i} className="star empty">★</span>);
    }
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;