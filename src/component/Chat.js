import React, { useEffect, useState } from 'react'
// import {over} from 'stompjs';
// import SockJS from 'sockjs-client';

var stompClient = null;
const Chat = () => {

    const [privateChats, setPrivateChats] = useState(new Map());     
    const [publicChats, setPublicChats] = useState([]); 
    const [tab,setTab] = useState("CHATROOM");
    const [userData, setUserData] = useState({
        username: '',
        receivername: '',
        connected: false,
        message: ''
    });

    

    return (
        <div className="container">
        <div className ="chat">
            <div className="chat-users">
                <ul className="list-users">
                    <li className="member">
                        <label href="#">Eduard</label>
                    </li>
                    <li className="member">
                        <label href="#">John</label>
                    </li>
                    <li className="member">
                        <label href="#">Nikolai</label>
                    </li>
                    <li className="member">
                        <label href="#">Bill</label>
                    </li>
                    <li className="member">
                        <label href="#">Filip</label>
                    </li>
                    <li className="member">
                        <label href="#">Andrey</label>
                    </li>
                </ul>
            </div>
            <div className="chat-box">
                <div className="chat-content">
                    <ul className="chat-messages">
                        <li className="message self">
                            <div className="message-data">erlkwierr</div>
                            <div className="avatar self">vlernvi5n</div>
                        </li>
                        <li className="message">
                            <div className="avatar">John</div>
                            <div className="message-data">erlkwierr</div>
                        </li>
                        <li className="message self">
                            <div className="message-data">erlkwierr</div>
                            <div className="avatar self">vlernvi5n</div>
                        </li>
                    </ul>
                </div>
                <div className="send-message">
                    <input type="text" className="enter-text" placeholder="Enter the message"/>
                    <button type="button" className="button">Send</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Chat