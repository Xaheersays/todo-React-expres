export const deleteTodoFromDb =async(id)=>{
    const url =`http://localhost:3000/delete/${id}`
    console.log(url)
    await fetch(url,{
        method: 'DELETE',
        headers: {
          // 'Content-Type': 'application/json',
          authorization: localStorage.getItem('token'), 
        },
    })
}