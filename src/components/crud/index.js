import React from 'react'
import User from './User'
import Admin from './Admin'

export default function SuperAdmin(){
    return(
        <div>
            <h1> Super Admin </h1>
            <User/>
            <hr/>
            <Admin/>
        </div>
    )
}