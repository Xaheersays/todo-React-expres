export const updateTodoDb = async(obj)=>{
    // console.log(obj)
    const url = `http://localhost:3000/update/${id}`
    fetch(url,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImE0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFzczQiLCJpYXQiOjE3MDMwNjAxMzN9.LJIvHlq88FO3eUDt8ueDpu9oe7kjfUV5zEJegQgQqkw', 
        },
        body: JSON.stringify(obj)
    })
}