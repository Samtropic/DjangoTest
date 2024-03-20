import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar.js';
import UserList from './components/UserList/UserList.js';
import UserProfile from './components/UserProfile/userProfile.js'; // Import your UserProfile component

const appContext = createContext();
const API_URL = "http://localhost:8000"

function App() {
  const [value,setValue] = useState([]);
  const updateValue = (data) =>{
    setValue(data)
  }
  return (
    
      <div>
          <appContext.Provider value={{value,updateValue}}>
            <SearchBar />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<UserList />} /> 
                <Route path="/user/:userId" element={<UserProfile />} />
              </Routes>
          </BrowserRouter>
          </appContext.Provider>
      </div>
  );
}

export default App;
export {appContext, API_URL}