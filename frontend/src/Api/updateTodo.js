export const updateTodoDb = async(obj)=>{
    // console.log(obj)
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