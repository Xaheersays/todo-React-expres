export const validateTokenFromServer = async(token)=>{
    const url = `http://localhost:3000/validateToken`
    const resp = await fetch(url,{
        method:'GET',
        headers:{
            authorization :token
        }
    })
    const result = await resp.json()
    return result
}