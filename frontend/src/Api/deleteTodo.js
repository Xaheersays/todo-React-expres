export const deleteTodoFromDb =async(id)=>{
    const url =`http://localhost:3000/delete/${id}`
    console.log(url)
    await fetch(url,{
        method: 'DELETE',
        headers: {
          // 'Content-Type': 'application/json',
          authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImE0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFzczQiLCJpYXQiOjE3MDMwNjAxMzN9.LJIvHlq88FO3eUDt8ueDpu9oe7kjfUV5zEJegQgQqkw', 
        },
    })
}