import React, { useMemo } from 'react';

interface RatingProps {
  rating: number;
}

const Rating = (props: RatingProps) => {
  const ratingBag = useMemo(() => {
    if (props.rating >= 4.5) {
      return '⭐⭐⭐⭐';
    } else {
      return '⭐⭐⭐⭐⭐';
    }
  }, []);

  return (
    <div>
      <h1>{ratingBag}</h1>
    </div>
  );
};
export default Rating;
