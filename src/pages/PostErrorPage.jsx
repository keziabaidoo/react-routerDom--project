

import React from 'react'
import { useRouteError } from 'react-router-dom'

function PostErrorPage() {

    const error = useRouteError()
    return (
        <div style={{display:"flex", justifyContent:"center", padding:"3rem", border:"8px", backgroundColor:"whitesmoke", boxShadow:"1px 2px 2px green"}}>
        <h2 style={{}}>OOps! somehthing went wrong <span style={{color: "red", margin: '0.5rem'}}>{error.message} </span></h2>   
        </div>
    )
}

export default PostErrorPage
