import React from 'react';
import {testSum,testDiff} from './testing-under-the-hood1/set1';
import {testSum2,testDiff2} from './testing-under-the-hood1/set2';
import {tests3} from './testing-under-the-hood1/set3';
import {tests4} from './testing-under-the-hood1/set4';
import Number from './number/number';
import './App.css';

function App() {
  // testSum();
  // testDiff();
  // testSum2();
  // testDiff2();
  // tests3();
  // tests4();

  return (
    <div className="App">
      <header className="App-header">
        testing component
      </header>
      <Number/>
    </div>
  );
}

export default App;
