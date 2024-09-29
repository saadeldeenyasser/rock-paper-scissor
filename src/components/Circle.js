import React from 'react'
const Circle = ({option ,handleChoice,id,isAdvanced}) => {
  return (
    <i className={!isAdvanced?option.style.classTrio:option.style.classPoly} key={id} onClick={()=>handleChoice(option.option)}>
          <button className={`min-w-28  md:w-32  h-auto aspect-square rounded-full flex justify-center items-center op-shadow bg-${option.style.bg}`}>

            <div className="btn w-3/4 h-auto aspect-square rounded-full flex justify-center items-center bg-white in-shdw">
                {option.img}
            </div>
          </button>
    </i>
  )
}

export default Circle