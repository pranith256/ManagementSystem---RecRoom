import AdminLogin from "./AdminLogin";
import AdminChoose from "./AdminChoose";
import React from 'react';
import {useState} from 'react';

export default function AdminPage() {

    const [move, setMove]= useState(false)

    const handle = (val) => {
        console.log(val);
        setMove(val);
    };

    return (
        <div>
            {move === false && <AdminLogin func={handle}  /> }
            {move === true && <AdminChoose/>}
        </div>
    );
}