import {
  loginService,
  logoutService,
  registerService,
} from "../service/UsersService.js";

//! Register
export const register = async (req, res) => {
  let result = await registerService(req);
  return res.json(result);
};

//! Login
export const login = async (req, res) => {
  let result = await loginService(req, res);
  return res.json(result);
};

//! Logout
export const logout = async (req, res) => {
  let result = await logoutService(req, res);
  return res.json(result);
};
