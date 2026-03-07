import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
interface AuthState{
  
   token:string | null   
}
const initialState:AuthState={
  
    token:null
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{token: string }>
    ) => {
      console.log("Dữ liệu dispatch vào Redux:", action.payload);
      state.token = action.payload.token;
    },
    logout: (state) => {
  
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;