"use client"
import { Ajax } from '@/services/Ajax'
import React, { useState } from 'react'
import { useDispatch, UseDispatch } from 'react-redux'
export const Register = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({})

    const fnRegister = async () => {
        try {
            var dataObj = {
                "data": data
            }
            dispatch({ type: "LOADER", payload: true })
            const res = await Ajax.sendPostReq('std/register', dataObj)
            const { acknowledged, insertedId } = res?.data;
            if (acknowledged && insertedId) {
                dispatch({ type: "GET_STUDENTS" })
                alert('success')
            } else {
                alert('fail')
            }


        } catch (ex: any) {
            console.error(ex);
            alert(ex.message);
        }
        finally {
            dispatch({ type: "LOADER", payload: false })
        }
    }

    const handleChange = (eve: any) => {
        const { name, value } = eve.target;
        setData({ ...data, [name]: value })
    }
    return (
        <div>
            <h3>Register</h3>
            <p>
                <b>Name:</b><input name="name" onChange={handleChange} />
            </p>
            <p>
                <b>Rno:</b><input name="rno" type='number' onChange={handleChange} />
            </p>
            <p>
                <b>Location:</b><textarea name="loc" onChange={handleChange} />
            </p>
            <p>
                <button onClick={fnRegister}>register</button>
            </p>
        </div>
    )
}
