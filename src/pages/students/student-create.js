import {Formik, Form, Field} from "formik"
import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"
import { addStudent } from "../../redux/action";
import { addStudentThunk } from "../../redux/thunk";

function CreateStudent(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleCreate = (values) => {
        dispatch(addStudentThunk(dispatch, values))
        navigate("/students/list")
    }
    return (
        <div>
            <Formik
                initialValues= {{
                    name: "",
                    description: "",
                    action: ""
                }}
                onSubmit={(values) => {
                    handleCreate(values);
                }}
            >
                <Form>
                    <label>Name</label>
                    <Field name="name"></Field>
                    <label>Description</label>
                    <Field name="description"></Field>
                    <label>Action</label>
                    <Field name="action"></Field>
                    <button>Create</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreateStudent;