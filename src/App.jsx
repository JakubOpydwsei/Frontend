import './App.css'
import RootLayout from './layouts/RootLayout.jsx'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Lab1 from './components/Lab1.jsx';
import Lab2 from './components/Lab2.jsx';
import NotFound from './components/NotFound.jsx';

function App() {

  const menuItems = [
    {id: 1, label: "Home"},
    {id: 2, label: "Laboratorium 1"}, 
    {id: 3, label: "Laboratorium 2"}
];

  return (
    <>
      
      

      <RootLayout items={menuItems}>
          <Routes>
              <Route path="/home" element={<Home></Home>}></Route>
              <Route path="/lab1" element={<Lab1></Lab1>}></Route>
              <Route path="/lab2" element={<Lab2></Lab2>}></Route>
              <Route path="/*" element={<NotFound></NotFound>}></Route>
          </Routes>
          
          {/* <SimpleLayout>
              <p>content</p>
          </SimpleLayout> */}

      </RootLayout>
        

      
    </>
  )
}


export default App
