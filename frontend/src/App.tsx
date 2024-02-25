import React from "react";
import {Route, Routes} from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import HomePage from "./components/HomePage";
import TestPage from "./components/TestPage";
import PropertyPage from "./components/PropertyPage";
import SettingPage from "./components/SettingPage";
import SwipePropertyPage from "./components/SwipePropertyPage";
import SwipeUserPage from "./components/SwipeUserPage";


function App() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/test" element={<TestPage/>}/>
                <Route path="/property" element={<PropertyPage/>}/>
                <Route path="/setting" element={<SettingPage/>}/>
                <Route path="/swipeproperty" element={<SwipePropertyPage/>}/>
                <Route path="/swipeuser" element={<SwipeUserPage/>}/>


            </Routes>
        </main>
    );
}

// @ts-ignore
export default App;