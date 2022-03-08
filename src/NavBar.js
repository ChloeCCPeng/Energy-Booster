import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink exact to="/" activeStyle={{background: "gray"}} >
                Home
            </NavLink>
            <NavLink exact to="/inspirationalquote" activeStyle={{background: "gray"}} >
                Get Inspired
            </NavLink>
            <NavLink exact to="/getjokes" activeStyle={{background: "gray"}} >
                Get Jokes
            </NavLink>
            <NavLink exact to="/kanyequote" activeStyle={{background: "gray"}} >
                WWKanyeDo
            </NavLink>
            <NavLink exact to="/inputquote" activeStyle={{background: "gray"}} >
                Input Quote
            </NavLink>
        </div>
    )
}

export default NavBar;