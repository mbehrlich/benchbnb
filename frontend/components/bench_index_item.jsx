import React from 'react';

const BenchIndexItem = ({bench}) => (
  <li>
    <div className="bench">
      <p>{bench.description}</p>
      <p>location: {bench.lat}, {bench.lng}</p>
    </div>
  </li>
);

export default BenchIndexItem;
