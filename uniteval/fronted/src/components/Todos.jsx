import React, { useEffect } from 'react'
import axios from 'axios'
export default function Todos() {

    const fetchTodos = () => {
        axios({
            method: "get",
            url: "http://localhost:5000/"
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err);
            })

    }
    useEffect(() => {
        fetchTodos();
    }, [])
    return (
        <div>




        </div>
    )
}
