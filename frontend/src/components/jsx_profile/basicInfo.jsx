import React, {useContext, useState, useEffect} from "react";
import axios from "axios";
import { UserContext } from "../../contexts/userContext";
import { ApiContext } from "../../contexts/apiContext";

function BasicInfo() {
    const {apiUrl} = useContext(ApiContext);
    
    const {user } = useContext(UserContext);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [coins, setCoins] = useState(null);
    const [equiptSkin, setEquiptSkin] = useState("hulabalu");

    useEffect(() => {
        if(user) {
            axios.get(`${apiUrl}/api/user/${user}`)
                .then(response => {
                    setUsername(response.data.username);
                    setPassword(response.data.password);
                })
                .catch(error => {
                    console.log('Error fetching user info:', error);
                });
            
            axios.get(`${apiUrl}/api/userProfile/${user}`)
                .then(response => {
                    setCoins(response.data.coins);
                    setEquiptSkin(response.data.equiptSkin)
                })
                .catch(error => {
                    console.log('Error fetching user info:', error);
                });
        }
    })

    return <div>
        <h3>Username: {username}</h3>
        <h3>Password: {password}</h3>
        <h3>Coins: {coins}</h3>
        <h3>Equipt Skin: {equiptSkin}</h3>
    </div>
}

export default BasicInfo;
