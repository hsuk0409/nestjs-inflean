import * as express from "express";
import { Cat, CatType } from "./cats/cats.model";
import catsRouter from "./cats/cats.route";

const app: express.Express = express();
const port: number = 8000;

//* Readable json middleware
app.use(express.json());

app.use(catsRouter);

app.use((req, res, next) => {
  console.log("this is error midleware");
  res.send({ error: "404 not found error" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
