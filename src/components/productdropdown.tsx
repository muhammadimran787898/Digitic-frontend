"use client";

import React, { useState } from "react";

const ProductActions = () => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [isCompared, setIsCompared] = useState(false);

  const handleWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  const handleCart = () => {
    setIsInCart(!isInCart);
  };

  const handleCompare = () => {
    setIsCompared(!isCompared);
  };

  return (
    <div className="group  ">
      <div className="product-hover ">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-2">
          <button
            type="button"
            aria-label="Add to wishlist"
            className={`p-2 rounded-full  hover:bg-orange-300`}
            onClick={handleWishlist}
          >
            {isInWishlist ? (
              <svg
                className="icon icon-solidheart added"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16px"
                height="16px"
                viewBox="0 0 512 512"
              >
                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
              </svg>
            ) : (
              <svg
                className="icon icon-cmheart not-added"
                id="Capa_1"
                width="16px"
                height="16px"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 471.701 471.701"
              >
                <g>
                  <path
                    d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
        c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
        l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
        C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
        s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
        c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
        C444.801,187.101,434.001,213.101,414.401,232.701z"
                  ></path>
                </g>
              </svg>
            )}
          </button>

          <button
            type="button"
            aria-label="Add to compare"
            className={`p-2 rounded-full hover:bg-orange-300`}
            onClick={handleCompare}
          >
            {isCompared ? (
              <svg
                className="icon icon-checked added"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26 26"
                enable-background="new 0 0 26 26"
                width="18px"
                height="18px"
              >
                <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"></path>
              </svg>
            ) : (
              <svg
                className="icon icon-cmcompare not-added"
                viewBox="0 0 512 512"
                width="18px"
                height="18px"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M412.31,291.46,478,357.15l-65.69,65.68-21-21L421.07,372h-44a87.86,87.86,0,0,1-62.53-25.9l-159.2-159.2a58.29,58.29,0,0,0-41.5-17.19H34V140h79.87a87.83,87.83,0,0,1,62.53,25.91L335.6,325.08a58.27,58.27,0,0,0,41.5,17.19h44l-29.79-29.78Zm-257,33.65a59.1,59.1,0,0,1-41.53,17.16H34V372h79.81a89,89,0,0,0,62.54-25.86l53.7-53.51-21-21.07ZM335.63,186.89a59.09,59.09,0,0,1,41.53-17.16h43.91l-29.79,29.78,21,21L478,154.86,412.31,89.17l-21,21L421.07,140H377.16a89.08,89.08,0,0,0-62.58,25.89l-53.52,53.7,21.07,21Z"></path>
              </svg>
            )}
          </button>

          <button
            type="button"
            aria-label="Add to cart"
            className={`p-2 rounded-full hover:bg-orange-300`}
            onClick={handleCart}
          >
            {isInCart ? (
              //   <svg
              //     className="icon"
              //     id="i-cart"
              //     stroke-width="0"
              //     width="18px"
              //     height="18px"
              //     viewBox="0 0 32 32"
              //     xmlns="http://www.w3.org/2000/svg"
              //   >
              //     <g id="Shops">
              //       <path
              //         d="M27.92,24.08l-2.24-13A4.73,4.73,0,0,0,21.14,7H21A5,5,0,0,0,11,7h-.14a4.73,4.73,0,0,0-4.54,4.08l-2.24,13a5.23,5.23,0,0,0,1.13,
              // 4.29A4.45,4.45,0,0,0,8.62,30H23.38a4.45,4.45,0,0,0,3.41-1.63A5.23,5.23,0,0,0,27.92,24.08ZM16,4a3,3,0,0,1,3,3H13A3,3,0,0,1,16,
              // 4Zm9.26,23.08a2.45,2.45,0,0,1-1.88.92H8.62a2.45,2.45,0,0,1-1.88-.92,3.21,3.21,0,0,1-.69-2.66l2.24-13A2.74,2.74,
              // 0,0,1,10.86,9H21.14a2.74,2.74,0,0,1,2.57,2.42l2.24,13A3.21,3.21,0,0,1,25.26,27.08Z"
              //         fill="currentColor"
              //       ></path>
              //     </g>
              //   </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M216 64h-40a48 48 0 0 0-96 0H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m-88-32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32"
                />
              </svg>
            ) : (
              //             <svg
              //               className="icon"
              //               id="i-cart"
              //               stroke-width="0"
              //               width="18px"
              //               height="18px"
              //               viewBox="0 0 32 32"
              //               xmlns="http://www.w3.org/2000/svg"
              //             >
              //               <g id="Shops">
              //                 <path
              //                   d="M27.92,24.08l-2.24-13A4.73,4.73,0,0,0,21.14,7H21A5,5,0,0,0,11,7h-.14a4.73,4.73,0,0,0-4.54,4.08l-2.24,13a5.23,5.23,0,0,0,1.13,
              //        4.29A4.45,4.45,0,0,0,8.62,30H23.38a4.45,4.45,0,0,0,3.41-1.63A5.23,5.23,0,0,0,27.92,24.08ZM16,4a3,3,0,0,1,3,3H13A3,3,0,0,1,16,
              //        4Zm9.26,23.08a2.45,2.45,0,0,1-1.88.92H8.62a2.45,2.45,0,0,1-1.88-.92,3.21,3.21,0,0,1-.69-2.66l2.24-13A2.74,2.74,
              // 0,0,1,10.86,9H21.14a2.74,2.74,0,0,1,2.57,2.42l2.24,13A3.21,3.21,0,0,1,25.26,27.08Z"
              //                 ></path>
              //               </g>
              //             </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M216 66h-42v-2a46 46 0 0 0-92 0v2H40a14 14 0 0 0-14 14v120a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14M94 64a34 34 0 0 1 68 0v2H94Zm124 136a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductActions;
