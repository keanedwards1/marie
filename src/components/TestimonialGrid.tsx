import React, { useState, useEffect } from "react";
import Image from "next/image";
import Masonry from 'react-masonry-css';

type Review = {
  id: number;
  first_name: string;
  last_name: string;
  job_title: string;
  review: string;
  status: string;
  created_at: number;
};

const TestimonialGrid: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://159.89.233.75.nip.io/api/reviews');
        if (response.status === 429) {
          console.log('Too many submissions. Try again in a little while.');
          return;
        }
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
  
    fetchReviews();
  }, []);

  const getCardClass = (index: number) => {
    const classes = [
      "review-card1 text-black",
      "review-card2 text-white",
      "review-card3",
      "review-card4",
      "review-card5 text-white"
    ];
    return classes[index % classes.length];
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="">
          <h2 className="text-4xl text-black font-serif pb-3 ml-2 italic">Reviews:</h2>
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {reviews.map((review, index) => (
            <div 
              key={review.id} 
              className={`${getCardClass(index)} transition-colors duration-300 p-8 rounded-lg shadow-lg mb-6`}
            >
              <div className="flex items-center mb-6">
                <Image
                  className="w-10 h-10 rounded-full mr-4"
                  src="/images/profile.png"
                  alt={`${review.first_name} ${review.last_name}`}
                  width={100}
                  height={100}
                />
                <div>
                  <p className="font-semibold">{`${review.first_name} ${review.last_name}`}</p>
                  <p className={index === 1 ? "text-gray-200" : index === 4 ? "text-gray-200" : "text-gray-600"}>{review.job_title}</p>
                </div>
              </div>
              <p className={index === 1 ? "text-gray-200" : index === 4 ? "text-gray-100" : "text-gray-600"}>
                {review.review}
              </p>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default TestimonialGrid;