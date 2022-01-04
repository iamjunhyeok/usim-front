import React from "react";

import Container from "@mui/material/Container";
import AgencySearch from "./AgencySearch";
import PassportNumberSearch from "./PassportNumberSearch";
import NumberSearch from "./NumberSearch";
import ProductSearch from "./ProductSearch";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Opening() {
  return (
    <Container maxWidth="md">
      <AgencySearch />

      <PassportNumberSearch />

      <NumberSearch />

      <ProductSearch />
      <Button variant="contained" size="large">
        신청
      </Button>
    </Container>
  );
}
