import React from "react";

export const Output = ({outputValue}: {outputValue: string}) => {
  console.log("rendering Output");
  return <p>Not memoized: {outputValue}</p>
};