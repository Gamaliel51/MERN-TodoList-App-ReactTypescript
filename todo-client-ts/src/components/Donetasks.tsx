import { FC } from "react";
import { Taskrow } from "./Taskrow";
import axios from 'axios'

interface task{
    _id: any,
    number: number,
    time: string,
    date: string,
    task: string,
    done: boolean
}

interface Props{
    tasks?: string,
    maindata?: task[] | Array<task> | any
}

export const Donetasks: FC<Props> = (props) => {

    let count = 0
    let task = props.tasks
    let maindata = props.maindata

    const removealldonetasks = async () => {
        maindata.map((m: task, i: number) => {
            if(!m.done){
                return null
            }
            count += 1
            axios.delete('/deletetask', {data: {"number": m.number, "time": m.time, "date": m.date, "task": m.task, "done": true}})
            .then(() => {
                window.location.reload()
            })
            return null
        })
    }

    if(task){
        return <div>{task}</div>
    }

    return(
        <>
            <table className="Alltaskstable">
                <Taskrow/>
                {maindata.map((m: task, i: number) => {
                    if(!m.done){
                        return null
                    }
                    count += 1
                    return <Taskrow number={count} time={m.time} date={m.date} task={m.task} done={m.done}/>
                })}
            </table>
            <div className="trashbuttondiv"><button className="trashbutton" onClick={() => {removealldonetasks()}}><i className="fa fa-trash"></i></button></div>
        </>
    )
}