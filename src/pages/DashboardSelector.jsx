import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

export default function DashboardSelector({ axios }) {
  const [dashboardList, setDashboardList] = useState(undefined);
  useEffect(() => {
    axios.get("/api/dashboard-list").then(({ data }) => {
      setDashboardList(data);
    });
    //eslint-disable-next-line
  }, []);
  return (
    <section className="dashboard-selector">
      {dashboardList &&
        dashboardList.map(dashboard => (
          <Link className="dashboard-card" to={dashboard.path}>
            <h3 className="dash-title">{dashboard.title}</h3>
            <p className="dash-description">{dashboard.description}</p>
          </Link>
        ))}
    </section>
  );
}
