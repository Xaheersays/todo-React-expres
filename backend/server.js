const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const app = express()
const jwtPassword = 'djafd343m4m'
app.use(express.json())
mongoose.connect('mongodb+srv://shzaheer514:zaheer514@cluster0.jgq64hk.mongodb.net/todoDB')
const ObjectId = mongoose.Types.ObjectId;

const cors = require('cors')
app.use(cors(
    {
        origin : "http://localhost:5173"
    }
))

const Data = mongoose.model('users',{
    name:String,
    username:String,
    password:String,
    todos:[{task:String,completed:Boolean}]
})


// middlewares 

const isValidObjectId = (req,res,next) => {
    const id = req.params.id
    if (!ObjectId.isValid(id)){
        return res.status(403).json({
            success:false,
            message:"invalid todoId"
        })
    }
    next()
    console.log('isValidObjectId Done')

    return
}

const checkUserExists = async (req,res,next)=>{
    const {username,password} = req.body
    const user = await userExists(username,password)
    if (user){
        res.status(403).json({
            success :false,
            message:'username already in use'
        })
        return 
    }
    next()
}
const validateUserFromToken = (req,res,next)=>{
    // const { task, taskCompleted } = req.body;
    const token = req.headers.authorization;
    // console.log(task,taskCompleted,token)
    console.log('ok bhai yha tk hu')
    if (!token) {
        return res.status(403).json({
            success: false,
            message: "Token is missing",
        });
        
    }
    next()
    console.log('validateUserFromToken Done')
}


// utility functions
const verifyToken = (token) => {
    try {
        const result = jwt.verify(token, jwtPassword);
        console.log(result)
        // const { username, password } = result.username;
        return result
    } catch (e) {
        console.log('error for verify token')
        return null;
    }
}

const getToken = (uname,pass)=>{
    return jwt.sign({username:uname,password:pass},jwtPassword)
}
const userExists = async (username,password)=>{
    const user = await Data.findOne({username:username,password:password})
    // console.log(user)
    if(user)return true
    // console.log(111111)
    return false
}

const updateTodoList = async (doc, task, taskCompleted) => {
    const obj = {task:task,completed:taskCompleted}
    if (Object.keys(obj).length===1 || (task===undefined && taskCompleted===undefined)){
        return false
    }
    doc.todos.push(obj)
    try {
        await doc.save();
        return true;
    } catch (e) {
        return false;
    }
}


const giveDocfromToken = async (token) =>{    
    
    const result =  verifyToken(token)
    // console.log("result",result)
    // result is either true or false
    if (!result){
        console.log('not verified')
        return null
    }
    const {username,password} = result
    const document = await Data.findOne({username:username,password:password})
    // console.log(document)
    return document

}

const deleteAll = async(token)=>{
    const doc = await giveDocfromToken(token)
    if (!doc){
        return false
    }
    doc.todos = [];
    try{
        doc.save()
        return true;
    }catch(e){
        return false
    }
}



app.get('/getAll',validateUserFromToken,async(req,res)=>{
    const token = req.headers.authorization
    const doc = await giveDocfromToken(token);
    if (!doc){
        return res.status.json({
            success:false,
            message:"could not fetch results"
        })
    }
    return res.status(201).json({
        success:true,
        message:"successfully fetched data",
        data : doc.todos
    })
})

// app.logout('/logout',(req,res)=>{
// })

// delete specific
app.delete('/delete/:id',validateUserFromToken,isValidObjectId,async(req,res)=>{   
    const todoId = new ObjectId(req.params.id);
    console.log(todoId)
    const token = req.headers.authorization
    console.log(todoId,token)
    if (!todoId){
        return res.status(403).json({
            success:false,
            message:"todoId not provided"

        })
    }
    const doc =await giveDocfromToken(token)
    todoList = doc.todos;
    console.log(todoList)
    const tindex = todoList.findIndex((obj)=>{
        return obj._id.toString() === todoId.toString();
    })
    console.log(tindex)
    if (tindex===-1){
        return res.status(403).json({
            success:false,
            message:`no todo task found with todoId ${todoId}`
        })
    }
    todoList.splice(tindex,1);
    try{
        await doc.save()
        return res.status(200).json({
            success:false,
            message:"todo task deleted successfully"
        })
    }catch(e){
        return res.status(403).json({
            success:false,
            message:"could not delete task with todoid" + `${todoId}`
        })
    }
    
})

// delete all todos
app.delete('/deleteAll',validateUserFromToken,async(req,res)=>{
    const token = req.headers.authorization;
    const responseResult = await deleteAll(token)
    if (!responseResult){
        return res.status(403).json({
            success:false,
            message:"could not delete todos"
        })
    }
    return res.status(200).json({
        success:true,
        message:"Deleted All todos succesfully"
    })


})
// update specific
app.put('/update/:id',validateUserFromToken,isValidObjectId,async(req,res)=>{
    const {task,taskCompleted} =  req.body
    const token = req.headers.authorization
    const todoId = new ObjectId(req.params.id)

    const doc = await giveDocfromToken(token);
    todoList = doc.todos;
    console.log(todoList)
    const tindex = todoList.findIndex((obj)=>{
        return obj._id.toString() === todoId.toString();
    })
    if (tindex===-1){
        return res.status(403).json({
            success:false,
            message:`no todo task found with todoId ${todoId}`
        })
    }
    todoList = doc.todos;
    todoList[tindex].task = task;
    todoList[tindex].completed=taskCompleted;
    try{
        await doc.save()
        return res.status(200).json({
            success:false,
            message:"todo task updated successfully"
        })
    }catch(e){
        return res.status(403).json({
            success:false,
            message:"could not update task with todoid" + `${todoId}`
        })
    }



})



// regisernewUsr
app.post('/register',checkUserExists,(req,res)=>{
    const {name,username,password} = req.body
    const data = new Data({
        name:name,username:username,password:password,todos:[]
    })
    data.save()
        .then(()=>{
            res.status(200).json({
                success:true,
                message:'successfully regisetred',
                token : getToken(username,password)
            })

        })
        .catch((e)=>{
            res.status(403).json({
                success : false,
                message:'something is goin wrong,user not registered'
            })
        })
    
})

// authorization sending back token it to user
app.post('/signin',async (req,res)=>{
    const {username,password} = req.body
    if (!(await userExists(username,password))){
        res.status(403).json({
            success:false,
            message:'user name not registered'
        })
        return
    }
    res.status(201).json({
        success:true,
        token : getToken(username,password)
    })
    return 
    
})

// create new todo
app.post('/addTodo', validateUserFromToken,async (req, res) => {
    const { task, taskCompleted } = req.body;
    const token = req.headers.authorization;
    console.log(task,taskCompleted,token)
    // res.send('ok bhai yha tk hu')

    const doc = await giveDocfromToken(token);
    console.log(doc)

    if (!doc) {
        return res.status(403).json({
            success: false,
            message: "Invalid or expired token",
        });
    }

    const responseResult = await updateTodoList(doc, task, taskCompleted);

    if (responseResult) {
        return res.status(200).json({
            success: true,
            message: 'Todo task added to list',
            // id:
        });
    } else {
        return res.status(500).json({
            success: false,
            message: "Error adding todo task",
        });
    }
});

app.listen(3000)


