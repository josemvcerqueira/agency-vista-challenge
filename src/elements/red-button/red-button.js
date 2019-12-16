import React from "react";

import { RedButtonWrapper } from "./styles";

export default ({ text, ...props }) => (
  <RedButtonWrapper {...props}>{text}</RedButtonWrapper>
);
