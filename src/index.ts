import express, {Request, Response, NextFunction} from "express";
import promoRouter from "./routes/promoCodeRoute";

const app = express();

app.use(express.json());

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log("someone tried to send info but failed");
  if (err instanceof SyntaxError) {
    // Erreur de syntaxe JSON
    return res.status(400).json({ error: "Invalid JSON" });
  }
  return res.status(400).json({ error: "an error occurs", err });
});

app.get('/',(req,res)=>{
    const date1:Date = new Date('2024-06-30');
    const date2:Date = new Date('2022-06-30');
    console.log(date1<date2)
});

app.use("/api", promoRouter);

const normalizePort = (val: any) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

export const server = app.listen(port);

const errorHandler = (error: any) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === "string" ? "pipe " + address : "port: " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges.");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use.");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

server.on("error", errorHandler);
