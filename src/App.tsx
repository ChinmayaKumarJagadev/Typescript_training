import React from 'react';
import './App.css';
import User from './Component/basic';
import ArrayObject from './Component/arrayObject';
import InputWithButton from './Component/input';
import StyledBox from './Component/style';
import Login from './Component/login';
import UseReducer from './Component/useReducer'
import RefComponent from './Component/useRef'

function App() {
  const initialValues = ['one', 'two', 'three'];

  return (
    <div className="App">

      <h1>Typsscript Training</h1>
      <User name="John Doe" age={25} />

      <div>
        <ArrayObject initialValues={initialValues} />
      </div>

      <div className="container mt-5">
        <InputWithButton />
      </div>

      <div className="container mt-5">
        <StyledBox backgroundColor="lightblue" color="darkblue" padding="20px">
          This is a styled box with custom styles.
        </StyledBox>

        <StyledBox backgroundColor="lightgreen" color="darkgreen" padding="15px">
          Another styled box with different styles.
        </StyledBox>
      </div>

      <div className='mt-5'>
        <Login />
      </div>

      <div className='mt-5'>
        <UseReducer />
      </div>

      <div className='my-5 py-5 bg-success'>
        <RefComponent />
      </div>

    
    </div>
  );
}

export default App;
