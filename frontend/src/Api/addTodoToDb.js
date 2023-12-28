export const addTodoToDB = async(data)=>{
    const url = 'http://localhost:3000/addTodo'
    const id = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImE0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFzczQiLCJpYXQiOjE3MDMwNjAxMzN9.LJIvHlq88FO3eUDt8ueDpu9oe7kjfUV5zEJegQgQqkw', 
        },
        body: JSON.stringify(data),
      })
    return await id.json()
}