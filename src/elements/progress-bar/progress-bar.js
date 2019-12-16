import React from "react";

import { Tracker, ProgressInTracker } from "./styles";

export default ({ percentage }) => {
  return (
    <Tracker>
      <ProgressInTracker percentage={percentage} />
    </Tracker>
  );
};
