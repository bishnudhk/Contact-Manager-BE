import db from "../db/db";
import { UserToCreate, UserToGet, User } from "../domain/Users";

class UserAccount {
  public static table = "user_account";

  /**
   * return id, email, firstname and lastname of all users
   * @return promise
   */
  public static async getAllUsers(): Promise<UserToGet[]> {
    const users: UserToGet[] = await db(UserAccount.table).select(
      "id",
      "email"
    );
  console.log(users);
    return users;
  }

  public static async createUser(user: UserToCreate): Promise<UserToGet> {
    const newUser: UserToGet = await db(UserAccount.table).insert(user, [
      "user_id",
      "email",
    ]);

    return newUser;
  }

  public static async updateUser(user: User): Promise<UserToGet> {
    const updatedUser: UserToGet = await db(UserAccount.table)
      .where({ user_id: user.user_id })
      .update(user)
      .returning(["user_id", "email"]);

    return updatedUser;
  }

  public static async deleteUser(user_id: number): Promise<String> {
    await db(UserAccount.table).where({ user_id: user_id }).delete();
    return "User Deleted Successfully";
  }

  public static async getUserById(id: number) {
    const user = await db(UserAccount.table).where({ id }).first();

    return user;
  }

  public static async getUserByEmail(email: string): Promise<User> {
    const user = await db(UserAccount.table)
      .where({ email: email })
      .select()
      .first();

    return user;
  }
}
export default UserAccount;
