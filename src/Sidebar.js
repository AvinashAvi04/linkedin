import { Avatar } from '@mui/material';
import React from 'react';
import "./Sidebar.css";
import background from "./background.jpg"

function Sidebar() {

    const recentItems = (topic)=>(
        <div className="sidebar_recentItems">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar' >
        <div className="sidebar_top">
            <img src={background} alt="" />
             <Avatar className="sidebar_avatar"/>
             <h2>Avinash Kumar</h2>
             <h4>avinash.kumar@gmail.com</h4>

        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className="sidebar_statNumber">2,543</p>
            </div>
            <div className="sidebar_stat">
                <p>Views on post</p>
                <p className="sidebar_statNumber">2,443</p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItems('reactjs')}
            {recentItems('programming')}
            {recentItems('software engineering')}
            {recentItems('design')}
            {recentItems('developer')}

        </div>
    </div>
  )
}

export default Sidebar
