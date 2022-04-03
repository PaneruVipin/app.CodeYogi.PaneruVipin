import React from 'react';
import Path from './Path';
import{ BrowserRouter } from 'react-router-dom';
function App({user}) {
  return (
    <BrowserRouter> 
<Path/>
    </BrowserRouter>
  );
}
export default App;