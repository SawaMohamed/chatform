import React from "react";
import Header from "../components/Header";
import axios from "axios";
import { useState, useEffect, useFetch } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Home() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://localhost:3000/sections`);
      let Sections = await response.json();
      setSections(Sections);

      //console.log(actualData)
    }
    getData();
  }, []);

  return (
    <div>
      <div className="Home-container">
        <Header />
        <div>
          {sections.map((section) => {
            return <div>{section.name}</div>;
          })}
        </div>
        |
      </div>
    </div>
  );
}

export default Home;
