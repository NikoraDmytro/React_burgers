import React from "react";
import ContentLoader from "react-content-loader";

export const BurgersLoader = () => (
  <ContentLoader
    speed={2}
    width={240}
    height={320}
    viewBox="0 0 240 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="10" y="0" rx="10" ry="10" width="220" height="160" />
    <rect x="30" y="170" rx="8" ry="8" width="180" height="18" />
  </ContentLoader>
);
