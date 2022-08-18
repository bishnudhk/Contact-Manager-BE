import { StatusCodes } from "http-status-codes";
import { NextFunction, Request, Response } from "express";
import CustomError from "../misc/customError";

// make error and throw a error 

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new CustomError(
    `Not Found - $ {req.originalUrl}`,
    StatusCodes.NOT_FOUND
  );
  next(error);
};