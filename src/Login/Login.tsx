import React, { useState } from 'react'
import { Ajax } from '@/services/Ajax';
import { useDispatch, UseDispatch } from 'react-redux';
export const Login = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});
    const handleChange = (eve: any) => {
        const { id, value } = eve.target;
        setData({
            ...data,
            [id]: value
        })
    }

    const handleClick = async () => {
        try {
            const res = await Ajax.sendPostReq("std/login", data)
            console.log(res);
            if (res?.data?.length > 0) {
                if (typeof window !== 'undefined') {
                    sessionStorage.user = res?.data?.[0]?.uid
                }
                dispatch({ type: "LOGIN", payload: { isLoggedIn: true, user: res?.data?.[0]?.uid } })
            } else {
                alert("check uid and pwd")
            }
        } catch (ex) {

        }

    }
    return (
        <div>
            <h3>Login</h3>
            <p>
                uid:<input id="uid" onChange={handleChange} />
            </p>
            <p>
                pwd:<input id="pwd" type='password' onChange={handleChange} />
            </p>
            <p>
                <button onClick={handleClick}>Login</button>
            </p>
        </div>
    )
}
