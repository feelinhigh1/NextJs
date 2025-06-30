import React from "react";

const LineChart = () => {
  return <div>Line Chart</div>;
};

export default LineChart;

// without the page.tsx file on the same level, this component will not be rendered. In the dashboard route, it will show Not Found if the page.tsx file is not present.
// This is because Next.js expects a page component to be exported from the file at the route
