import { useDispatch, useSelector } from "react-redux";
import {Formik, Form, Field} from "formik"
import {useParams, useNavigate} from "react-router-dom"
import { editStudent } from "../../redux/action";
import { editStudentThunk, getDetailStudentThunk } from "../../redux/thunk";
function EditStudent(){
    const navigate = useNavigate()
    const students = useSelector(data => {
        return data.students
    })
    let {id} = useParams();
    console.log(id);
    let student = students.filter((item) => {
        return item.id == id
    })

    const dispatch = useDispatch();
    const handleEdit = (values) => {
        console.log(values);
        dispatch(editStudentThunk(dispatch, values, id))
        navigate("/students/list")
    }
    return (
        <div>
            <Formik
                initialValues = {student[0]}
                enableReinitialize
                onSubmit = {(values) => {
                    handleEdit(values)
                }}
            >
                <Form>
                    <label>Name</label>
                    <Field name="name"></Field>
                    <label>Description</label>
                    <Field name="description"></Field>
                    <label>Action</label>
                    <Field name="action"></Field>
                    <button>Save</button>
                </Form>
            </Formik>
        </div>
    )
}

export default EditStudent;