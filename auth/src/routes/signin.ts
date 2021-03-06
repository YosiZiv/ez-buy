import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";

import { Password } from "../services/password";
import { User } from "../models/user";
import { validateRequest, BadRequestError } from "@yztickets/common";

const router = express.Router();

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("You must supply a password"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      console.log(existingUser);

      if (!existingUser) {
        throw new BadRequestError("Invalid credentials");
      }

      const passwordsMatch = await Password.compare(
        existingUser.password,
        password
      );
      if (!passwordsMatch) {
        throw new BadRequestError("Invalid Credentials");
      }

      // Generate JWT
      const userJwt = jwt.sign(
        {
          ...existingUser,
          password: "",
        },
        process.env.JWT_KEY!
      );

      // Store it on session object
      req.session = {
        jwt: userJwt,
      };

      res.status(200).send(existingUser);
    } catch (err) {
      console.log(err);

      throw new BadRequestError("something went wrong :/");
    }
  }
);

export { router as signinRouter };
