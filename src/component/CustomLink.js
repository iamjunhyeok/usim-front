import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
export default function CustomLink(props) {
  return <StyledLink {...props} />;
}
