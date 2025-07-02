const express =require("express")
const multer  = require('multer')
const path=require("path")

const PORT=8000
const app=express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage: storage })

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    return res.render("home")
})

app.post("/upload",upload.single('filename'),(req,res)=>{
    console.log(req.file)
     res.send(req.file ? "✅ Upload success" : "❌ Upload failed");
})

app.listen(PORT,()=>console.log("Server started"))