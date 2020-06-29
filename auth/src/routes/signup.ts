import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { validateRequest, BadRequestError } from "@yztickets/common";
import { User } from "../models/user";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    console.log("function work");

    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      password,
      imgUrl,
    } = req.body;
    try {
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        throw new BadRequestError("Email in use");
      }

      const user = User.build({
        firstName,
        lastName,
        email,
        phone,
        address,
        password,
        imgUrl,
      });
      await user.save();

      // Generate JWT
      const userJwt = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.JWT_KEY!
      );

      // Store it on session object
      req.session = {
        jwt: userJwt,
      };

      res.status(201).send(user);
    } catch (err) {
      throw new BadRequestError("something went wrong :/");
    }
  }
);

export { router as signupRouter };
