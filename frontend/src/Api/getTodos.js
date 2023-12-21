export const getTodos =async ()=>{
    
    const url = 'http://localhost:3000/getAll';
    const headers = new Headers({
        // 'Content-Type': 'application/json',
        authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImE0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFzczQiLCJpYXQiOjE3MDMwNjAxMzN9.LJIvHlq88FO3eUDt8ueDpu9oe7kjfUV5zEJegQgQqkw', 
      });
    const reqOptions = {
        method:'GET',
        headers:headers
    }
    const resp =await fetch(url,reqOptions)
    console.log(resp)
    if (!resp.ok){
        return []
    }
    const data = await resp.json()
    return data;
}