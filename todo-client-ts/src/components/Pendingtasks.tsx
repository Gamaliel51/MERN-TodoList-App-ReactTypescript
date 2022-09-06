import { FC } from "react";
import { Taskrow } from "./Taskrow";

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

export const Pendingtasks: FC<Props> = (props) => {

    let count = 0
    let task = props.tasks
    let maindata = props.maindata

    if(task){
        return <div>{task}</div>
    }

    return(
        <table className="Alltaskstable">
            <Taskrow/>
            {maindata.map((m: task, i: number) => {
                if(m.done){
                  return null  
                }
                count += 1
                return <Taskrow number={count} time={m.time} date={m.date} task={m.task} done={m.done}/>
            })}
        </table>
    )
}