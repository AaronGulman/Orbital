import React, { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeLoading = () => {
  const products = JSON.parse(sessionStorage.getItem(`createdProducts`));

  return (
    <>
      {products &&
        products.map((_, idx) => (
          <div className="skeleton-card" key={idx}>
            <div className="skeleton-card-image-con">
              <Skeleton width={50} height={50} />
              <Skeleton width={150} />
            </div>
            <div>
              <Skeleton width={70} />
            </div>
            <div>
              <Skeleton width={10} />
            </div>
            <div>
              <Skeleton width={70} />
            </div>
            <div className="skeleton-card-image-con">
              <Skeleton width={20} />
              <Skeleton width={50} />
            </div>
          </div>
        ))}
    </>
  );
};

export default SkeLoading;
