import React from 'react'
import { Avatar, IconButton } from "@material-ui/core"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchIcon from "@material-ui/icons/Search"
import '../index.css'

function LeftSideBar() {
    return (
        <div>
            <div className='flex flex-row space-x-60 bg-gray-400 h-16 items-center pl-5 w-4/12'>
                <Avatar />
                <div className=' flex flex-row'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>


                </div>
            </div>
            <div className='flex flex-row items-center h-16 bg-gray-800 w-4/12'>
                <SearchIcon />
                <input placeholder="Recherché ou Démarré une nouvelle conversation..." 
                className='placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-2xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'></input>
            </div>

        </div>
    )
}

export default LeftSideBar
