import React, { useRef, useEffect } from "react";
import { mount } from "dashboard/DashboardApp";

export default () => {
  const ref = useRef(null);
  console.log("default dashboardapp export");

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};
