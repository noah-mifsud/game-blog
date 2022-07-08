//Main component, specifies Routes and what components they should render

//React (Hooks) imports
import React from 'react';
//Styles imports
import './styles/App.scss';

//Routes imports
import EditPost from './routes/EditPost/EditPost';
//Component imports
import Loader from './components/Loader/Loader'

function App() {
  return (
    <EditPost />
  )
}

export default App
