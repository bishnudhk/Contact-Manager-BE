import Success from "../domain/Success";
import logger from "../misc/logger";
import {
  Contact,
  ContactBeforeUpload,
  ContactToUpdate,
} from "../domain/Contact";
import ContactModel from "../models/contactModel";
import fs from "fs";
import { resourceLimits } from "worker_threads";

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
  name: string
): Promise<Success<Contact>> => {
  logger.info("getting all contacts by name ");
  const Contacts = await ContactModel.getContactByName(id);
  return {
    data: Contacts,
    message: "contacts festched successfully ",
  };
};

export const createContact = async (
  contact: ContactBeforeUpload,
  filePath: string
): Promise<Success<Contact>> => {
  logger.info("creating a new contact");
  try {
    // checks if the file exists
    if (!fs.existsSync(filePath)) {
      throw new Error("File not found!!");
    }
    // uploads the image to cloudinary
    // const result = await cloudinary.uploader.upload(filePath, {
    //     resource_type: "image",
    //     use_filename: true,
    //     width: 500,
    //     height: 500,
    //     crop: "limit",
    // });

    // Delets the file from the server
    fs.unlinkSync(filePath);

    // create a new contact on the database
    // const newContact = await ContactModel.createContact({
    // ...contact,
    // photo:result.url,
    // });
    // return {
    //     data: newContact,
    //     message: "Successfully created a contact",
    //   };
  } catch (error) {
    //  logs the error
    logger.error(error);

    // Delete the file from the server
    fs.unlinkSync(filePath);

    return {
      message: "could not create the contact ",
    };
  }
};

export const updateContact = async (
  contact: ContactToUpdate,
  filePath: string
): Promise<Success<Contact>> => {
  logger.info("getting contact by id");

  try {
    // check if the file exists
    if (!fs.existsSync(filePath)) {
      throw new Error("file not found ");
    }

    // uploads the image to cloudinary
    // const result = await cloudinary.uploader.upload(filePath, {
    //     resource_type: "image",
    //     uplad_preset: "contact-manager",
    //     use_filename: true,
    //     invalidate: true,
    //   });

    // delete the file from server
    fs.unlinkSync(filePath);

    // create a new contact on the database
    // const updateContact = await ContactModel.updateContact({
    //     ...contact,
    //     photo:result.url,
    // });

    // return{
    // data:updateContact,
    // message;"successfully updated a contact",
    // };
  } catch (error) {
    // logs the error
    logger.error(error);

    // delete the file from the server
    fs.unlinkSync(filePath);
    return {
      message: "could not update the contact",
    };
  }
};

export const deleteContact = async (id: number): Promise<Success<Contact>> => {
  logger.info("Deleting contact ");
  await ContactModel.deleteContact(id);
  return {
    message: "contact deleted successfully",
  };
};
