import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={335}
    height={626}
    viewBox="0 0 335 626"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="168" cy="174" r="157" />
    <rect x="12" y="343" rx="11" ry="11" width="311" height="27" />
    <rect x="12" y="385" rx="11" ry="11" width="311" height="59" />
    <rect x="12" y="459" rx="11" ry="11" width="311" height="91" />
    <rect x="143" y="562" rx="25" ry="25" width="179" height="49" />
    <rect x="12" y="574" rx="11" ry="11" width="112" height="32" />
  </ContentLoader>
);

export default Skeleton;
