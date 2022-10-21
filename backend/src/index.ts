import { config } from "dotenv";
import { app } from "./lib/server";

// .env
config(); 

app.listen(process.env.PORT, function () {
  console.log("server listen to port " + process.env.PORT);
});
