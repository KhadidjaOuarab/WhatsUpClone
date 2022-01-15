import React from 'react'
import RightChat from './RightChat'
import RightInput from './RightInput'
import RightSideBar from './RightSideBar'

function RightSide() {
    return (
        <div>
            <RightSideBar />
            <RightChat />
            <RightInput />
        </div>
    )
}

export default RightSide
