import React, { useContext, useEffect } from 'react'
import Header from './components/Header/Header'

import Routering from './Router';
import { DataContext } from './components/DataProvider/DataProvider';
import { auth } from './Utility/firebase';
import { Type } from './Utility/action.type';
function App() {
  const [{user}, dispatch]= useContext(DataContext)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type: Type.SET_USER,
          user: authUser
        })
      }
      else{
        dispatch({
          type: Type.SET_USER,
          user: null
        })
      }
    })
  }, [])


  return (
    <div className="App">
      <Routering/>     
    </div>
  );
}

export default App;
