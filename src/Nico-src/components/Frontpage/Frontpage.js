import React from "react";
import Header from "../Header";
import Container from "../Container";
import "./Frontpage.css";

function Frontpage() {
    return (
        <div>
            <div className = "container">
            <Header />
            </div>
            <Container />
        </div>
    );
}

export default Frontpage;