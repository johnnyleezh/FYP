import React from 'react'
import './Title.css'

export default function Title(props) {
    const title = props.title;
    return (
        <div>
            <h2 class="title">{title}</h2>
        </div>
    )
}
