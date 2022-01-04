import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import axios from "axios";

export default function ProductSearch() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    axios
      .get("http://192.168.0.24:8080/products")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [product, setProduct] = useState(null);
  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  if (!items) return <div>상품 로딩 중...</div>;

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="demo-simple-select-label">상품</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={product}
        label="상품"
        onChange={handleChange}
      >
        {items.map((item) => (
          <MenuItem value={item.ID}>{item.PRODUCT_NAME}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
