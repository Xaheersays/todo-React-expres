export const validateTokenFromServer = async(token)=>{
    console.log('updateTodoDb')
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