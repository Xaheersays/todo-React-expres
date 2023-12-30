export const registerNewUser = async(obj)=>{    
    console.log(obj)
    const url = `http://localhost:3000/register`
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    const data = await resp.json()
    if (!data.success){
        return false
    }
    const token = data.token
    // console.log(token)
    localStorage.setItem('token',token)
    return true
}
