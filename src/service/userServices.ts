import Success from "../domain/Success";
import { User, UserToGet, UserToCreate } from "../domain/Users";
import logger from "../misc/logger";
import UserModel from "../models/userModel";
import dotent from "dotenv";

dotent.config({
  path: __dirname + "/../../.env",
});
/**
 * Get all users
 * @returns promise
 */
export const getAllUsers = async (): Promise<Success<UserToGet>> => {
  logger.info("Getting all users");
  try {
    const users = await UserModel.getAllUsers();
   
    return {
      data: users,
      message: "User fetched successfully",
    };
  } catch (err) {
    logger.info(err);
    return {
      message: "Error while fetching user",
    };
  }
};

export const createUser = async (
  user: UserToCreate
): Promise<Success<UserToGet>> => {
  // create password hash
  const { password } = user;
  console.log(password);

  logger.info("Creating a new user");

  try {
    const newUser: UserToGet = await UserModel.createUser({
      ...user,
      password,
    });

    return {
      data: newUser,
      message: "New user created successfully",
    };
  } catch (err) {
    logger.info(err);
    return {
      message: "Error creating new user",
    };
  }
};

export const updateUser = async (user: User): Promise<Success<UserToGet>> => {
  const { password } = user;

  
  logger.info("Updating user");
  try {
    const updatedUser: UserToGet = await UserModel.updateUser({
      ...user,
      password,
    });

    return {
      data: updatedUser,
      message: "User updated successfully",
    };
  } catch (err) {
    logger.info(err);
    return {
      message: "Error updating user",
    };
  }
};


export const deleteUser = async (id: number) => {
  logger.info("Deleting user!!");
  await UserModel.deleteUser(id);

  return {
    message: "User deleted successfully",
  };
};

export const getUserById = async (id: number): Promise<Success<User>> => {
  logger.info("Getting user by id!!");
  const user = await UserModel.getUserById(id);

  if (user) {
    return {
      data: user,
      message: "User fetched successfully",
    };
  }

  return {
    message: "User not found",
  };
};

export const getUserByEmail = async (email: string): Promise<Success<User>> => {
  const user = await UserModel.getUserByEmail(email);

  return {
    data: user,
    message: "User fetched successfully",
  };
};

/**
 * Create new user
 * @param {UserToCreate}
 * @returns {Promise}
 */

// login user

// export const loginUser = async (
//   email: string,
//   password: string
// ): Promise<Success<Token>> => {
//   logger.info("Logging in");
//   const user = await UserModel.getUserByEmail(email);

//   if (!user) {
//     return {
//       message: "User not Found",
//     };
//   }
//   // const isPasswordMatched = await bcrypt.compare(password, user.password);
//   // if (!isPasswordMatched) {
//   //   return {
//   //     message: "Password doesn't match",
//   //   };
//   // // }
// };


export const loginUser = async(email:string,password:string)=>{
  const user = await UserModel.getUserByEmail(email);
  if(!user){
    console.log(user);
      return{
          message:"Invalid email or password!"
  
      }
  }

  
  // if(!isPasswordMatch){
  //     return{
  //         message:"Password do not match"
  //     }
  // }

  // const accessToken  =  jwt.sign({userId:user.id},process.env.JWT_SECRET as string);

  // return {
      // data:{accessToken,userId:user.id},
      // message:"User logged in"
  // }

}