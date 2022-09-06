import React, { FC } from 'react'

interface Props{
    show?: boolean,
    close?: () => void
}

export const Addtaskform:FC<Props> = (props) => {

    let show = props.show
    let close = props.close

    if(!show){
        return null
    }
  return (
        <>
        <div className='Addtaskform1'>
            <div  className='Addtaskform'>
                <form method='POST' action='/addtask'>
                    <p className='formtext'>Enter New Task</p><hr/>
                    <input id="taskforminput" name="task" placeholder='Enter New task' type="text"/><br/>
                    <button className='formbutton' type='submit'>Submit</button>
                    <button className='formbutton' onClick={close}>close</button>
                </form>
            </div>
        </div>
        </>
    )
}
