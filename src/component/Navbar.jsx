import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Bussiness from './Bussiness'
import Entertainment from './Entertainment'
import Health from './Health'
import Sceience from './Sceience'
import Sports from './Sports'
import Home from './Home'

const Navbar = () => {
   
    return (
        <>
            <div class="nav">
                <ul>
                    <Routes>   
                        <Route exact path="/" element={<Home />} />             
                        <Route exact path="/bussiness" element={<Bussiness />} />
                        <Route exact path="/entertainment" element={<Entertainment />} />
                        <Route exact path="/health" element={<Health />} />
                        <Route exact path="/sceience" element={<Sceience />} />
                        <Route exact path="/sports" element={<Sports />} />
                    </Routes>
                </ul>
            </div>
        </>
    );
}

export default Navbar
