import React from 'react';
import {ReactComponent as Cross} from '../icons/icon-close.svg';
import {ReactComponent as TrioRules} from '../icons/image-rules.svg';
import {ReactComponent as PolyRules} from '../icons/image-rules-bonus.svg';

const Modal = ({isModal,setIsModal,isAdvanced}) => {
  return (
    (isModal?
    <div className='z-10 absolute md:top-1/4 md:left-1/4 w-full h-full md:w-1/2 md:h-max flex flex-col flex-nowrap bg-white px-5 py-3'>
        <div className='flex justify-between'>
        <h2 className='text-3xl font-semibold text-black text-center '>Rules</h2>
        <button className='bg-none w-fit ' onClick={()=>setIsModal(false)}><Cross/></button>
        </div>
        <div className='w-full h-full flex justify-center items-center'>{(isAdvanced?<PolyRules/>:<TrioRules/>)}</div>
      </div>:null)
  )
}

export default Modal