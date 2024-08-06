import { useState } from "react";

const useStarRating = (initialRating = 0) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (rate: any) => {
    setHoverRating(rate);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (rate: any) => {
    setRating(rate);
  };

  return {
    rating,
    hoverRating,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  };
};

export default useStarRating;
