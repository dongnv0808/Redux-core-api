import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { deleteStudent } from "../../redux/action";
import students from "../../redux/studentReducer";
import { deleteStudentThunk, getAllThunk } from "../../redux/thunk";
function StudentList(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const listStudent = useSelector((data) => {
        return data.students
    })

    useEffect(() => {
        dispatch(getAllThunk)
    }, [])

    const handleEdit = (id) => {
        navigate(`/students/${id}`)
    }

    const handleDelete = (id) => {
        dispatch(deleteStudentThunk(dispatch, id))
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th>
                        <th colSpan={2}></th>
                    </tr>
                </thead>
                <tbody>
                    {listStudent.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.action}</td>
                            <td><button onClick={() => handleEdit(item.id)}>Edit</button></td>
                            <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default StudentList;