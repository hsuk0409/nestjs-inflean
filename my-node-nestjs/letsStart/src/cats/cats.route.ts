import { Router } from "express";
import { Cat, CatType } from "./cats.model";

const router = Router();

router.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
});

router.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    console.log(params);
    const cats = Cat;
    const cat = cats.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
});

router.post("/cats", (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    console.log(`body.data: ${data}`);
    const msg = `body.data: ${data}`;
    console.log(msg);
    res.status(200).send({
      success: true,
      data: {},
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
});

export default router;
