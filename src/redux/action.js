export const getAll = (data) => {
    return {
        type: "getAll",
        payload: data
    }
}

export const addStudent = (data) => {
    return {
        type: "add",
        payload: data
    }
}

export const editStudent = (data, id) => {
    return {
        type: "edit",
        payload: data,
        id: id
    }
}

export const deleteStudent = (id) => {
    return {
        type: 'delete',
        id: id
    }
}

export const getDetailStudent = (id) => {
    return {
        type: "getDetail",
        id: id
    }
}
