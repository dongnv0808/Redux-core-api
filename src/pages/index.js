import {Outlet, useNavigate} from "react-router-dom"
function StudentPage(){
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => {
                navigate("list")
            }}>Student List</button>
            <button onClick={() => {
                navigate("create")
            }}>Create Student</button>
            <Outlet></Outlet>
        </div>
    )
}

export default StudentPage;