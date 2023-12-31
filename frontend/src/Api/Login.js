export const LoginToDb = async(obj)=>{
    console.log(obj)
    const url = `http://localhost:3000/signin`
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });
    const data = await resp.json();
    if (!data.success){
        console.log(data)
        return false
        
    }
    const token = data.token
    localStorage.setItem('token',token)
    return true
}