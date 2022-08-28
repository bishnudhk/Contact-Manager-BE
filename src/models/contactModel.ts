import db from "../db/db";

import {Contact,ContactToInsert} from "../domain/Contact";

class ContactModel{
    public static table = "contacts";

    public static async getAllContacts(id:number){
        const allContacts = await db (ContactModel.table)
        .select("user_id","first_name","last_name","mobile","email","address","photo","is_favourite")
        .where({user_id:id})
        .orderBy("is_favourite","desc")
        .orderBy("first_name","desc");
        return allContacts;
    }
    

    public static async getContactById(id:number){
       const contact = await db (ContactModel.table).where({ id }).first();
       return contact; 
    }
   
    public static async getContactByName(name:string){
        const contact = await db (ContactModel.table).where({ name }).first();
        return contact; 
     }

     public static async createContact(contact:ContactToInsert){
      console.log(contact);
      
        const newContact = await db (ContactModel.table)
        .where({ user_id: contact.user_id })
        .insert(contact)
        .returning("*"); 

        return newContact;
     }

     public static async updateContact(contact:Contact){
        const updateContact = await db (ContactModel.table)
        .where({ user_id:+contact.user_id })
        .where({id:contact.id})
        .update(contact)
        .returning("*");

        return updateContact; 
     }
    
     public static async deleteContact(id:number){
         await db (ContactModel.table).where({ id }).delete();
        return ; 
     }

}

export default ContactModel;