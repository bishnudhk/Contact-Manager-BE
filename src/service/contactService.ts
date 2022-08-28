import Success from "../domain/Success";
import logger from "../misc/logger";
import { Contact, ContactToInsert, ContactToUpdate } from "../domain/Contact";
import ContactModel from "../models/contactModel";
// import fs from "fs";
// import { resourceLimits } from "worker_threads";

export const getAllContacts = async (id: number): Promise<Success<Contact>> => {
  logger.info("getting all contacts ");
  const allContacts = await ContactModel.getAllContacts(id);
  return {
    data: allContacts,
    message: "contacts festched successfully ",
  };
};

export const getContactById = async (id: number): Promise<Success<Contact>> => {
  logger.info("getting all contacts by ID ");
  const Contacts = await ContactModel.getContactById(id);
  return {
    data: Contacts,
    message: "contacts festched successfully ",
  };
};

export const getContactByName = async (
  id: string
): Promise<Success<Contact>> => {
  logger.info("getting all contacts by name ");
  const contacts = await ContactModel.getContactByName(id);
  return {
    data: contacts,
    message: "contacts festched successfully ",
  };
};

export const createContact = async (
  contact: ContactToInsert
  // filePath: string
) => {
  logger.info("creating a new contact");

  const data = await ContactModel.createContact(contact);
  return {
    data: data,
    message: "contact create successfully  ",
  };
};

export const updateContact = async (contact: ContactToUpdate) => {
  logger.info("getting contact by id");
  console.log(contact);
  const data = await ContactModel.updateContact(contact);
  

  return {
    data:data,
    message: " update the contact",
  };
};

export const deleteContact = async (id: number): Promise<Success<Contact>> => {
  logger.info("Deleting contact ");
  await ContactModel.deleteContact(id);
  return {
    message: "contact deleted successfully",
  };
};
