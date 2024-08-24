// "use clients";
// import { useState } from "react";

// type Rating = number | null;

// interface StarRatingProps {
//   initialRating?: Rating;
//   maxRating?: number;
// }

// const useStarRating = ({
//   initialRating = null,
//   maxRating = 5,
// }: StarRatingProps) => {
//   const [rating, setRating] = useState<Rating>(initialRating);
//   const [hover, setHover] = useState<Rating>(null);

//   const handleMouseEnter = (newRating: Rating) => {
//     setHover(newRating);
//   };

//   const getStarIcon = (currentRating: number): JSX.Element => {
//     return (

//         <span
//           className={`${hover ? "#ffc107" : "#e4e5e9"} "cursor-pointer"`}
//           onMouseEnter={() => handleMouseEnter(currentRating)}
//           onMouseLeave={handleMouseLeave}
//         >
//           &#9733
//         </span>
//       </>
//     );
//   };

//   return {
//     rating,
//     hover,
//     onmouseenter,
//     onmouseleave,
//     handleClick,
//     getStarIcon,
//     maxRating,
//   };
// };

// export default useStarRating;
