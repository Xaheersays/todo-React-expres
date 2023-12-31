export const getTodos =async ()=>{
  console.log('getTodos')
    
    const url = 'http://localhost:3000/getAll';
    const headers = new Headers({
        // 'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'), 
      });
    const reqOptions = {
        method:'GET',
        headers:headers
    }
    const resp =await fetch(url,reqOptions)
    // console.log(resp)
    if (!resp.ok){
        return []
    }
    const data = await resp.json()
    return data.data;
}