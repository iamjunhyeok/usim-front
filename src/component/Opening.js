import React from "react";

import Container from "@mui/material/Container";
import AgencySearch from "./AgencySelect";
import NumberSearch from "./BarCodeServiceNumberSelect";
import ProductSearch from "./ProductSelect";

import Button from "@mui/material/Button";
import CustomInput from "./CustomInput";

export default function Opening() {
  return (
    <Container maxWidth="md">
      <CustomInput>임대 번호</CustomInput>

      <AgencySearch />

      <CustomInput>여권 번호</CustomInput>

      <NumberSearch />

      <ProductSearch />
      <Button variant="contained" size="large">
        신청
      </Button>
    </Container>
  );
}
