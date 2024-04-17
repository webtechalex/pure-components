import React, {memo} from "react";

export const MemoOutput = memo(({outputValue}: {outputValue: string}) => {
  console.log("rendering MemoOutput");
  return <p>Memoized: {outputValue}</p>
});