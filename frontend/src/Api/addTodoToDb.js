export const addTodoToDB = async(data)=>{
    console.log('addTodoToDB')
    const url = 'http://localhost:3000/addTodo'
    const id = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('token'), 
        },
        body: JSON.stringify(data),
      })
    return await id.json()
}