import { FC } from "react";

interface Props{
    text: string
}

export const Navbar:FC<Props> = (props) => {
    return(
        <div>
            <nav className="Navbar">
                <a className="Navlink" id="All" href="/">
                    <div>
                        All Tasks
                    </div>
                </a>
                <a className="Navlink" href="/pending">
                    <div>
                        Pending Tasks
                    </div>
                </a>
                <a className="Navlink" id="Done" href="/done">
                    <div>
                        Completed Tasks
                    </div>
                </a>
            </nav>
        </div>
    )
}
