import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Chart from "../components/Chart";

export default function Dashboard({ dashboardName, axios }) {
  const config = useSelector(({ DashboardReducer }) => DashboardReducer.config);
  const dispatch = useDispatch();

  console.log(dashboardName);

  useEffect(() => {
    axios.get(`/api/dashboard/${dashboardName}`).then(({ data }) => {
      dispatch({
        type: "SET_CONFIG",
        payload: data
      });
      const getData = ({ endpoint }, index) => {
        axios.get(endpoint).then(({ data }) => {
          dispatch({
            type: "SET_DATA",
            payload: [index, data]
          });
        });
      };
      data.forEach((config, index) => {
        getData(config, index);
      });
    });
  }, []);
  return (
    <section className="dashboard">
      {config &&
        config.map((settings, index) => {
          const component = require(`../components/${settings.type}.jsx`)
            .default;
          return (
            <Chart config={settings}>
              {settings.data
                ? React.createElement(component, {
                    config: settings,
                    key: index
                  })
                : ""}
            </Chart>
          );
        })}{" "}
    </section>
  );
}
