import React from 'react'

const Scroll =(props) => {
    // console.log(props)
    // return props.children
    return (
        <div style={{overflow: 'scroll', border:'0px', height:'450px'}}>
            <br/>
            {props.children}
        </div>
    )
}

export default Scroll