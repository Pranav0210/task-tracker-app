import React from "react";
import { Link } from "react-router-dom";
import '../styles/header.css';

const Header = ()=>{
    return(
        <div id="dash-header" className="header-container">
            <div className="left-wrap">
                <div className="header-left">
                    <div className="menu-button">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        {/* <div className="bar3"></div> */}
                    </div>
                    <div className="list-title">My Task</div>
                </div>
            </div>
                <div className="header-right">
                    <div className="avatar-container">
                        <img src="https://i.pravatar.cc/150?img=5" className="avatar-icon"></img>
                    </div>
                    <div className="new-task-button">
                        <div className="create-task-button">
                            {/* <div className="add-icon"> */}
                                <Link to="/new-task" className="add-icon">+</Link>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Header;