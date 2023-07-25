// import {
//   ActionReducerMapBuilder,
//   PayloadAction,
//   createSlice,
// } from "@reduxjs/toolkit";
// import {
//   actionAuthRefresh,
//   actionUserLogin,
//   actionGetSession,
// } from "./authAction";
// import { getDoctorId, getToken, removeToken, setDoctorId } from "@/utils/auth";
// import { authLogout } from "@/services/auth";
// import { RootState } from "..";

// const userToken = getToken();

// export interface AuthState {
//   loading: boolean;
//   isLogin: boolean;
//   session?: API.SessionRes;
//   selectDoctorId?: number;
//   error: API.ErrorResponse<null> | null;
//   success: boolean;
// }

// const initialState: AuthState = {
//   loading: false,
//   isLogin: !!userToken,
//   selectDoctorId: getDoctorId(),
//   error: null,
//   success: false, // for monitoring the registration process.
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       const auth = getToken();
//       authLogout(auth?.accessToken ?? "", auth?.refreshToken ?? "");
//       removeToken();
//       state.isLogin = false;
//     },
//     actionSelectDoctorId: (state, action: PayloadAction<number>) => {
//       state.selectDoctorId = action.payload;
//       setDoctorId(state.selectDoctorId);
//     },
//   },
//   extraReducers: (builder: ActionReducerMapBuilder<AuthState>) => {
//     builder
//       .addCase(actionUserLogin.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(actionUserLogin.fulfilled, (state) => {
//         state.loading = false;
//         state.isLogin = true;
//       })
//       .addCase(actionUserLogin.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as API.ErrorResponse<null>;
//       })
//       .addCase(actionAuthRefresh.rejected, (state, action) => {
//         const payload = action.payload as {
//           needLogout: boolean;
//         } & API.ErrorResponse<null>;
//         if (payload.needLogout) {
//           state.isLogin = false;
//         }
//       })
//       .addCase(actionGetSession.fulfilled, (state, action) => {
//         state.session = action.payload as API.SessionRes;
//         const doctorId = state.selectDoctorId;
//         const doctorIds = state?.session?.resources?.map((r) => r.doctorId);
//         if (!doctorId || !doctorIds?.includes(doctorId)) {
//           const newDoctorId = state?.session?.resources?.[0]?.doctorId ?? 0;
//           setDoctorId(newDoctorId);
//           state.selectDoctorId = newDoctorId;
//         }
//       });
//   },
// });

// export const { logout, actionSelectDoctorId } = authSlice.actions;
// export const selectSelectPreactinorPreferences = (state: RootState) =>
//   state.auth.session?.practitioners;
// export const selectSection = (state: RootState) => state.auth.session;
// export default authSlice.reducer;
