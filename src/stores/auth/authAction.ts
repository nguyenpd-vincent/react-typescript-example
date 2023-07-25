// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { authRefreshToken, getSession, login } from "@/services/auth";
// import { removeToken, setToken } from "@/utils/auth";
// import { AxiosError, HttpStatusCode } from "axios";

// export const actionUserLogin = createAsyncThunk(
//   "auth/login",
//   async ({ username, password }: API.LoginInput, { rejectWithValue }) => {
//     try {
//       const { data } = await login({ username, password });
//       setToken(data);
//       return data;
//     } catch (e) {
//       const error = e as AxiosError<API.ErrorResponse<null>>;
//       if (error.response && error.response.data) {
//         return rejectWithValue(error.response.data);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// export const actionAuthRefresh = createAsyncThunk(
//   "auth/refreshToken",
//   async (refreshToken: string, { rejectWithValue }) => {
//     try {
//       const { data } = await authRefreshToken(refreshToken);
//       setToken(data);
//       return data;
//     } catch (e) {
//       const error = e as AxiosError<API.ErrorResponse<null>>;
//       let needLogout = false;
//       if (
//         error.status === HttpStatusCode.Unauthorized ||
//         error.status === HttpStatusCode.BadRequest
//       ) {
//         needLogout = true;
//         removeToken();
//       }
//       if (error.response && error.response.data) {
//         return rejectWithValue({ ...error.response.data, needLogout });
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// export const actionGetSession = createAsyncThunk(
//   "auth/getSession",
//   async (_noneArgs: string, { rejectWithValue }) => {
//     try {
//       const res = await getSession();
//       return res.data;
//     } catch (e) {
//       const error = e as AxiosError<API.ErrorResponse<null>>;
//       if (error.response && error.response.data) {
//         return rejectWithValue(error.response.data);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
