import myRequest from "../index"
import { IDataType } from "../types";
import { IAccount, ILoginResult } from "./type";

enum LoginAPI {
  AccountLogin= "/login",
  LoginUserInfo= "/users/",
  UserMenus = '/role/' // 用法: role/1/menu
}

export function accountLogin(account: IAccount){
  return myRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function getUserInfoById(id: number) {
  return myRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
  })
}

export function getUserMenusByRoleId(id: number) {
  return myRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + "/menu",
    showLoading: false
  })
}
