import axios from "axios"
import { addStudent, deleteStudent, editStudent, getAll, getDetailStudent } from "./action";

const API="http://localhost:8080/students"

export async function getAllThunk(dispatch){
    let students = await axios.get(`${API}`);
    return dispatch(getAll(students.data));
}

export async function addStudentThunk(dispatch, data){
    await axios.post(`${API}`, data);
    dispatch(addStudent(data))
}

export async function editStudentThunk(dispatch, data, id){
    await axios.put(`${API}/${id}`, data)
    dispatch(editStudent(data, id))
}

export async function deleteStudentThunk(dispatch, id){
    await axios.delete(`${API}/${id}`);
    dispatch(deleteStudent(id));
}

export async function getDetailStudentThunk(dispatch, id){
    await axios.get(`${API}/${id}`);
    dispatch(getDetailStudent(id));
}