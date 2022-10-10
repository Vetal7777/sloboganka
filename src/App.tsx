import React, {useEffect, useState} from 'react';
import './App.css';
import API from "./utils/API";

function App() {
  const [state,setState] = useState('')
  useEffect(() => {
    API.get('header')
        .then(({data}) => setState(data[0].title))
  },[])
  return (
    <>
      {state}
    </>
  );
}

export default App;
