import React from 'react'
import './Title.css'
import { Children } from 'react'

export default function Title({ children }) {
    return (
        <div>
            <h2 class="title">{children}</h2>
        </div>
    )
}
