import express from "express";
import { currentUser, BadRequestError } from "@yztickets/common";
import { Locker } from "../models/locker";
const router = express.Router();

router.post("/api/lockers/", currentUser, async (req, res) => {
  console.log("function work");

  const { name, location } = req.body;
  try {
    const locker = Locker.build({
      name,
      location,
    });
    if (!locker) {
      throw new BadRequestError("create locker failed");
    }
    await locker.save();

    res.status(201).send(locker);
  } catch (err) {
    throw new BadRequestError("something went wrong :/");
  }
});

export { router as createLockerRouter };
