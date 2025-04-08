const logoChill = "/assets/assetgambar/logochill.png";
const avatar = "/assets/assetgambar/assetgambarberanda/avatar.png";
const keyboardarrowdown = "/assets/assetgambar/assetgambarberanda/KeyboardArrowDown.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./cssComponents/navbar.css"


function Navbar({onLogout, user}){
    const navigate = useNavigate();
    const [optionDown, setOptionDown] = useState(false)
    const handleOptionDown = () => {
        setOptionDown(prevState => !prevState);
    }

    const confirmLogout = () => { navigate("/login");} 


    return (
    <>
        <nav className="navbar">
            <ul>
                <img src={logoChill} width="30%"/>
                <li>Series</li>
                <li>Film</li>
                <li>Daftar Saya</li>
            </ul>
            <div className="profile">
                <p className="welcomename">Welcome {user.username}</p>
                <img src={avatar} width="50" height="50" alt="avatar" className="avatar"/>
                <div className="optionbar" onClick={handleOptionDown}>
                    <img src={keyboardarrowdown} width="25" height="25" alt="KeyboardArrowDown" className="KeyboardArrowDown"/>
                    {optionDown && 
                        <div className="optiondownbox">
                            <div className="profileoption">Profil</div>
                            <div className="ubahkepremiumoption">Ubah Ke Premium</div>
                            <div className="keluaroption" onClick={() => {onLogout(); confirmLogout();}}>Keluar</div>
                        </div>
                            }
                </div>
            </div>
        </nav>
    </>
    )
}

export default Navbar