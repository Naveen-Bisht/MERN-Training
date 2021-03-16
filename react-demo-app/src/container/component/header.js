import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';
import { Menu } from '@material-ui/core';
import {Route} from "react-router-dom";

// class header extends React.Component{
//     render(){
//         return <h1>Home</h1>;
//     }
// }

// export default header;

const links=(
    <div>
        <button><a href="https://facebook.com/bisht7">Facebook</a></button> &emsp;
        <button><a href="https://linkedin.com/in/nbisht7">LinkedIn</a></button> &emsp;
        <button><a href="mailto:navinbisht7@gmail.com">Email: navinbisht7@gmail.com</a></button>
        
    </div>
    )
export const Header=()=>{
    return (<div>
        {links}
        <Menu>
            <MenuItem component={Link} to={'/first'}>Team 1</MenuItem>
            <MenuItem component={Link} to={'/second'}>Team 2</MenuItem>
        </Menu>
    </div>);
}