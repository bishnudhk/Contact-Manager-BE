import { NextFunction, Request, Response } from "express";
import * as contactService from "../service/contactService";

export const getAllContacts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.body;
  contactService
    .getAllContacts(+id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

export const getContactById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  contactService
    .getContactById(+id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

export const getContactByName = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;
  contactService
    .getContactByName(name)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

export const createContact = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  contactService.createContact(req.body).then((data )=> res.json(data)).catch((err)=>next(err))
};

export const updateContact = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  contactService.updateContact({...req.body, id})
  .then((data)=> res.json(data))
  .catch((err) => next (err));    
};

export const deleteContact = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  contactService
    .deleteContact(+id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
