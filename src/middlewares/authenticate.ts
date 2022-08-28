import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import CustomError from "../misc/customError";
import {AuthRequest,DataStoredInToken} from '../domain/Users'



const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {  
  // console.log("authenticate");
  // next();
  // console.log(req.headers);
  const accessToken = req.headers.authorization?.split(" ")[1];
  // console.log(accessToken);

  try {
    const result = (await jwt.verify(
      accessToken as string,
      process.env.JWT_SECRETE as string
    )) as DataStoredInToken;
    
    // console.log(result);
    req.authUser = result.user_id;

    next();
  } catch (err) {
    next(new CustomError("Invalid access token", 401));
  }
};

export default authenticate;

