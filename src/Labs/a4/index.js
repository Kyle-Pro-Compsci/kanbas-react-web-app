import Add from "./Add";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

import React from "react";

function Assignment4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div>
      <h1>Assignment 4</h1>
      <Add a={11} b={2} />
      <ClickEvent/>
      <PassingDataOnEvent/>
      <PassingFunctions theFunction={() => sayHello()}/>
      <EventObject/>
      <Counter/>
      <BooleanStateVariables/>
      <StringStateVariables/>
      <DateStateVariable/>
      <ObjectStateVariable/>
      <ArrayStateVariable/>
      <ParentStateComponent/>
      <hr/>
      <ReduxExamples/>
    </div>
  );
}
export default Assignment4;