import React from "react";

import { ProfileImageWrapper, UserImage } from "./styles";

export default ({ img }) => (
  <ProfileImageWrapper>
    <UserImage src={img} />
  </ProfileImageWrapper>
);
