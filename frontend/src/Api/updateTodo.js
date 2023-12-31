export const updateTodoDb = async(obj)=>{
    console.log('updateTodoDb')
    const url = `http://localhost:3000/update/${obj._id}`
    fetch(url,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('token'), 
        },
        body: JSON.stringify(obj)
    })
}