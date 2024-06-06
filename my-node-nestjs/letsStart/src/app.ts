import * as express from "express";
import catsRouter from "./cats/cats.route";

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoutes() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("this is logging middleware");
      next();
    });

    //* Readable json middleware
    this.app.use(express.json());

    this.setRoutes();

    this.app.use((req, res, next) => {
      console.log("this is error midleware");
      res.send({ error: "404 not found error" });
    });
  }

  public listen() {
    this.setMiddleware();

    this.app.listen(8000, () => {
      console.log(`Serverf is on...`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
