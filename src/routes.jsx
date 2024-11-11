import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./components/layout/layout";
import CreateTask from "./components/createTask/CreateTask";
import CreateGroup from "./components/createGroup/CreateGroup"
import Group from "./components/group/Group";
import UpdateTask from "./components/updateTask/UpdateTask";


const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            // {path:"",
            // element:<Home/>,
            // children:[
                {
                    path:"",
                    element:<Home/>
                },
                {
                    path:"tasks",
                    children:[
                        {
                            path:"new",
                            element: <CreateTask/>
                        },
                        {
                            path:"update/:taskId",
                            element:<UpdateTask/>
                        }
                    ]
                },
                {
                    path:"groups",
                    children:[
                        {
                            path:"all"
                        },
                        {
                            path:"new",
                            element:<CreateGroup/>
                        },
                        {
                            path:"update/:groupId",
                            element:"update"
                        },
                        {
                            path:":groupId",
                            element:<Group/>
                        }
                    ]
                },
                {
                    path:"/dates/:date",
                    element:"date"
                // }]
            }
        ]
    } 
])

export default router

/*

/ -> shows all task
/group/id -> shows task from a certain group /
/dates/date
/task/new -> create new task
/group/new -> create new task

/task/upgrade
/group/update 


CUD
- create task -
- create 
*/