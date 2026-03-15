import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Profile } from '../../types/types';
interface AuthState{
  
   token:string | null   
   profile:Profile |null
}
const initialState:AuthState={
  
    token:null,
    profile:null
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{token: string }>
    ) => {
      state.token = action.payload.token;
    },
    setProfile: (state, action: PayloadAction<Profile>) => { 
      state.profile = action.payload;
    },
    logout: (state) => {
  
      state.token = null;
      state.profile=null
    },
  },
});

export const { setCredentials,setProfile,logout } = authSlice.actions;
export default authSlice.reducer;