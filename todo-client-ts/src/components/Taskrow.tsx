import axios from "axios";
import { FC } from "react";

interface Props{
    number?: number,
    time?: string,
    date?: string,
    task?: string,
    done?: boolean
}

export const Taskrow:FC<Props> = (props) => {

    let number = props.number
    let time = props.time
    let date = props.date
    let task = props.task
    let done = props.done
    console.log(date)
    let CreatedAt = time! + " -> " + date!


    const taskdone = async () => {
        axios.put('/donetask', {"number": number, "time": time, "date": date, "task": task,  "done": true})
        .then((res) => {
            console.log(res)
            window.location.reload()
        })
    }

    const removetask = async () => {
        axios.delete('/deletetask', {data: {"number": number, "time": time, "date": date, "task": task, "done": true}})
        .then(() => {
            window.location.reload()
        })
    }

    if(!number){
        return(
            <tr className="Taskrow" id="tablehead">
                <td>Task</td>
                <td>CreatedAt</td>
            </tr>
        )
    }

    if(done){
        return(
            <div>
                <tr className="Taskrow">
                    <td>{task}</td>
                    <td>{CreatedAt}</td>
                    <td><input className="checkbutton" type="button" value="Remove" onClick={() => {removetask()}}/></td>
                </tr>
            </div>
        )
    }

    return(
        <div>
            <tr className="Taskrow">
                <td>{task}</td>
                <td>{CreatedAt}</td>
                <td><input className="checkbutton" type="button" value="Done" onClick={() => {taskdone()}} /></td>
            </tr>
        </div>
    )
}