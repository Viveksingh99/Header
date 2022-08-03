import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function List() {
  return (
    <div id="main">
      <ul>
        <li>
          NO
          <ArrowDropDownIcon fontSize="small" />
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </li>
        <li>
          ALPHA
          <ArrowDropDownIcon fontSize="small" />
          <ul>
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
            <li>E</li>
          </ul>
        </li>
        <li>
          ROMAN
          <ArrowDropDownIcon fontSize="small" />
          <ul>
            <li>i</li>
            <li>ii</li>
            <li>iii</li>
            <li>iv</li>
            <li>v</li>
          </ul>
        </li>
        <li>
          COURSE
          <ArrowDropDownIcon fontSize="small" />
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
            <li>JAVA</li>
          </ul>
        </li>
        <li>
          CITY
          <ArrowDropDownIcon fontSize="small" />
          <ul>
            <li>BUXAR</li>
            <li>ARA</li>
            <li>PATNA</li>
            <li>DELHI</li>
            <li>JAIPUR</li>
          </ul>
        </li>
        <li>
          NO
          <ArrowDropDownIcon fontSize="small" />
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
export default List;
