import React from "react";
import "./style.css";

import {Greet} from './Greet'
const name = "fikile Kentane"
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Greet name={name} />
    </div>
  );
}
