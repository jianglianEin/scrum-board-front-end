import UserMutation from "graphql/mutation/UserMutation";
import UserQuery from "graphql/query/UserQuery";
import ResultOutput from "models/ResultOutput";
import UserModel from "models/User";
import client from "./client";

export async function login(
  loginInfo: UserModel.LoginInfo
): Promise<UserModel.PrivateInfo> {
  const data = await client.request(UserQuery.loginQuery, loginInfo);
  return data.login;
}

export async function logout(username: {
  username: string;
}): Promise<ResultOutput> {
  const data = await client.request(UserQuery.logoutQuery, username);
  return data.logout;
}

export async function register(
  registerInfo: UserModel.RegisterInfo
): Promise<ResultOutput> {
  const data = await client.request(
    UserMutation.registerMutation,
    registerInfo
  );
  return data.register;
}

export async function update(
  updateInfo: UserModel.UpdateInfo
): Promise<ResultOutput> {
  const data = await client.request(UserMutation.updateMutation, updateInfo);
  return data.updateUser;
}