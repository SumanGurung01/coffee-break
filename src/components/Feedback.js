import React from "react";
import { randomColor, reviews } from "../libs/constant";

function Feedback() {
  return (
    <div className="no-scrollbar flex w-full flex-row overflow-x-scroll">
      {reviews.map((review) => {
        return (
          <div className="m-2 h-40 w-96 shrink-0 rounded-xl p-5 shadow-lg">
            <div className="mb-2 flex items-center">
              <div className="full flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 font-bold">
                {review.name[0]}
              </div>

              <p className="ml-2 font-semibold text-amber-800">{review.name}</p>
            </div>

            <p className="line-clamp-3 italic">{review.comment}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Feedback;
