const express=require("express");
const cors=require("cors");
const Signup=require("../server/model/signup");
const userRoute=require("../server/Routes/userRoutes");
const{default: mongoose}=require("mongoose");

const app=express();

mongoose
.connect("mongodb://localhost:27017")
.then(()=>console.log("mongodb connected successfully"))
.catch((error)=>console.log(error));
const coreOptions={
  origin: ["http://localhost:5173" ,"http://localhost:5173"], 
  methods: ["POST", "GET"], 
  allowedHeaders:[" Content-Type" , " Authorization "], 
  credentials: true, 
  };
  
  app.use(cors(coreOptions)) ;
  app.use(express.json()) ;

app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("Hello world");
});
  app.use("/user",userRoute)

app.listen(2000,()=>{
    console.log("Server is running");
})