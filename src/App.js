import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyAppBar from "./component/MyAppBar";
import AgencySearch from "./component/AgencySearch";
import HistoryTable from "./component/HistoryTable";
import AgencyTable from "./component/AgencyTable";
import Login from "./component/Login";

import Container from "@mui/material/Container";
import Join from "./component/Join";
import History from "./component/History";
import Opening from "./component/Opening";
import Product from "./page/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyAppBar />
        <Routes>
          <Route path="/">aaa</Route>
          <Route path="/b">bbb</Route>
          <Route path="/login" element={<Login />} />
          <Route path="/history" element={<History />} />
          <Route path="/agency" element={<AgencyTable />} />
          <Route path="/join" element={<Join />} />
          <Route path="/opening" element={<Opening />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
      {/* <AgencySearch /> */}
    </div>
  );
}

export default App;
