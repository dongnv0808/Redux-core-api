const initialState = [
    {
        id: "",
        name: "",
        description: "",
        action: ""
    }
]

const students = (state = initialState, action) => {
    switch (action.type) {
        case "getAll":
            return action.payload
        case "add":
            return [
                ...state,   
                action.payload
            ]
        case "edit":
            console.log(action.id, action.payload);
            let students = state.splice(action.id, 1, action.payload);
            return students;
        case "delete": 
            let student = state.filter((item) => item.id !== action.id)
            return student;
        default:
            return state
    }
}

export default students;