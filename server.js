import app from "./index.js"
import { connectUsingMongoose } from "./src/config/mongooseConfig.js";

app.listen(process.env.PORT,()=>{
    console.log("Server is listening at port 3000");
    connectUsingMongoose();
})