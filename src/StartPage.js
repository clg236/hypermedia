import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import {tokenState} from './_state'

export const StartPage = () => {

    const [name, setName] = useState();
    const [room, setRoom] = useState();
    const [token, setToken] = useRecoilState(tokenState)
    const navigate = useNavigate();

    const api = axios.create({
        baseURL: 'http://54.167.44.11:3001',
        timeout: 5000,
    })

    const handleConnect = () => {
        //get a token and update our token state, or error out and join the party
        api.post('/join', {'name': name, 'room': room}).then((req, res) => {
            console.log(req.data)
            setToken(req.data)
            navigate('/room')
        }).catch(err => console.log(err))
    }

    return (
        <div>
            <h1>hypermedia</h1>
            <input onChange={(e) => setName(e.target.value)} placeholder="enter your name" />
            <input onChange={(e) => setRoom(e.target.value)} placeholder="enter a room name" />
            <button onClick={handleConnect}>connect</button>
        </div>
    )
}