export const createRow = (id,columns,nextId) => ({
    type: 'CREATE_ROW',
    payload: {
        id,
        columns,
        nextId,
    }
})