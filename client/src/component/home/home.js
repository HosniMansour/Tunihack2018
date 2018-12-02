import React, { Component } from 'react';
import "./homestyle.css";
import Chatbot from "../chatbot/chatbot";
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <section id="hero">
                <div className="hero-container">
                    <h1>Bienvenue à TANIT</h1>
                    <h2>Consultez la répartition financiére en Tunisie et prendrez votre décision</h2>
                    <Link exact to="/dashboard" className="btn-get-started">Commencez</Link>
                    <Chatbot></Chatbot>
                </div>
            </section>
        );
    }
}

export default Home;
