export const  deleteAllTodosFromDb = ()=>{
    const url = `http://localhost:3000/deleteAll`
    fetch(url,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('token'), 
        },
    }
    )

}