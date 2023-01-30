import * as React from "react";
import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FetchApi from "./FetchApi";
export const Header = () => {
  const [search, setsearch] = useState("Kesari");
  const [load, setload] = useState([]);
  const extract = useRef("");
  window.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
      setsearch(event.target.value);
    }
  });
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="realtive">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "5", sm: "block" } }}
            >
              Love Music
            </Typography>
            <input
              ref={extract}
              type="text"
              style={{ width: "30vw" }}
              className="form-control"
            />
            &nbsp;
            <button
              className="btn btn-primary"
              onClick={() => {
                setsearch(extract.current.value);
              }}
            >
              Search
            </button>
          </Toolbar>
        </AppBar>
      </Box>

      <FetchApi
        search={search}
        setsearch={setsearch}
        load={load}
        setload={setload}
      />
    </>
  );
};
