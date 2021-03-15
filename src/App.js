import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import reducer, { initialState } from './reducers';
import { applyNumber, changeOperation, clearDisplay, afm, atm, clearMemory } from './actions';

function App() {

  const [value, impetus] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={value.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {value.operation}</span>
              <span id="memory"><b>Memory:</b> {value.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={()=>{
                impetus(atm())
              }}/>
              <CalcButton value={"MR"} onClick={()=>{
                impetus(afm())
              }}/>
              <CalcButton value={"MC"} onClick={()=>{
                impetus(clearMemory())
              }}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=>{
                impetus(applyNumber(1))
              }}/>
              <CalcButton value={2} onClick={()=>{
                impetus(applyNumber(2))
              }}/>
              <CalcButton value={3} onClick={()=>{
                impetus(applyNumber(3))
              }}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=>{
                impetus(applyNumber(4))
              }}/>
              <CalcButton value={5} onClick={()=>{
                impetus(applyNumber(5))
              }}/>
              <CalcButton value={6} onClick={()=>{
                impetus(applyNumber(6))
              }}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=>{
                impetus(applyNumber(7))
              }}/>
              <CalcButton value={8} onClick={()=>{
                impetus(applyNumber(8))
              }}/>
              <CalcButton value={9} onClick={()=>{
                impetus(applyNumber(9))
              }}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=>{
                impetus(changeOperation("+"))
              }}/>
              <CalcButton value={"*"} onClick={()=>{
                impetus(changeOperation("*"))
              }}/>
              <CalcButton value={"-"} onClick={()=>{
                impetus(changeOperation("-"))
              }}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=>{
                impetus(clearDisplay())
              }}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
