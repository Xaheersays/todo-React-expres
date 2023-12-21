export const getTodos =async ()=>{
    const url = 'http://localhost:3000/getAll';
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'YOUR_ACCESS_TOKEN', 
      });
    const reqOptions = {
        method:'GET',
        headers:headers
    }
    const resp =await fetch(url,reqOptions)
    if (!resp.ok){
        return []
    }
    const data = await resp.json()
    return data;
}