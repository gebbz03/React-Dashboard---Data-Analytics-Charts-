import React from "react";

export default function Chart({ config, children }) {
  const { height, width } = config;

  return <section style={{ height, width }}>{children}</section>;
}
