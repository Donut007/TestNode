import { Model } from "sequelize";

class User extends Model {
    get fullName() {
      return ``;
    }
  
    set password(value) {
      this.setDataValue('password', 0); // Example: hash password before storing it
    }
  }