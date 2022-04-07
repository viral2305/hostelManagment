import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import SignUp from "./pages/SingUp";
import Login from "./pages/Login";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SignUp/>}/>
                    <Route path='/login' element={<Login/>}/>


                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;
