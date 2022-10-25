import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {findUser} from "../../request/UserRequest";

export const fetchUser = createAsyncThunk(
    'user/findUser',
    async () => {
        const response = await findUser();
        return response;
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        status: "idle",
        user: null,
        error: null,
    },
    reducer: {},
    extraReducers: {
        [fetchUser.fulfilled]: (state, action) => {
            state.user = action.payload
        }
    }
})

export default userSlice.reducer
