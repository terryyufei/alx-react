import React from 'react';
import './Notifications.css'
import { getLatestNotification } from './utilis';
import closeIcon from './close-icon.png';
import NotificationItem from "./NotificationItem";

function Notifications() {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <button
                style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                }}
                aria-label="Close"
                onClick={console.log('Close button has been clicked')}>
                    <img style={{ display: 'inline', marginTop: '5px', marginRight: '5px', padding: '0' }} src={closeIcon} alt='Close' width="15px"/>
                </button>

                <ul>
                    <NotificationItem data-priority="default">New course available</NotificationItem>
                    <NotificationItem data-priority="urgent">New resume available</NotificationItem>
                    <NotificationItem data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></NotificationItem>
                    
                </ul>
        </div>
    );
}

export default Notifications;
