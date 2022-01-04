import React from "react";

import Container from "@mui/material/Container";

import DateRangeSearch from "./DateRangeSearch";
import AgencySearch from "./AgencySearch";
import NumberSearch from "./NumberSearch";
import ProductSearch from "./ProductSearch";
import HistoryTable from "./HistoryTable";

export default function History() {
  return (
    <Container maxWidth="xl">
      <DateRangeSearch />

      <AgencySearch />

      <NumberSearch />

      <ProductSearch />

      <HistoryTable />
    </Container>
  );
}
