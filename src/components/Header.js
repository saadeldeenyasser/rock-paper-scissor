import React from 'react'
import {ReactComponent as Logo } from '../icons/logo.svg';

const Header = ({score}) => {
  return (
    <header className='sm:w-11/12 md:w-1/2 mt-3 flex justify-between border-2 rounded-md border-neutral-HeaderOutline p-5'>
        <Logo/>
        <div id="score" className='bg-white px-6 flex items-center'>
        <p className='flex flex-col font-semibold'>Score <span className='text-3xl text-center '>{score}</span></p>
        </div>
    </header>
  )
}

export default Header