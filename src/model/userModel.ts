import { IsPositive, IsAlpha, IsEnum, IsBoolean, IsString } from "class-validator";

enum Roles {
  Admin = "admin",
  User = "user",
  Guest = "guest",
}

export default class GetUsersQuery {

  @IsString()
  username!: string;

  @IsString()
  password!: string;

  @IsEnum(Roles)
  role!: Roles;

  @IsBoolean()
  isActive!: boolean;

}