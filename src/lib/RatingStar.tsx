"use client";
import React, { useState, ChangeEvent } from "react";

interface StarRatingProps {
  initialRating?: number;
  totalStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({
  initialRating = 0,
  totalStars = 5,
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hover, setHover] = useState<number | null>(null);
  const [numStars, setNumStars] = useState<number>(totalStars);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setNumStars(value > 0 ? value : 5);
  };

  return (
    <div className="App">
      {[...Array(numStars)].map((_, index) => {
        const currentRating = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onChange={() => setRating(currentRating)}
              style={{ display: "none" }} // Hide the radio button
            />
            <span
              className="star"
              style={{
                color:
                  currentRating <= (hover ?? rating) ? "#ffc107" : "#e4e5e9",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            >
              &#9733;
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
