import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './constants';

const initialState = {
    banks: [],
}

const getBanksAsync = createAsyncThunk('bank/getBanksAsync', async (_, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            throw new Error("Authorization token is missing.");
        }

        const response = await axios.get(
            `${BASE_URL}/setup/bank`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error(`HTTP error! Status: ${error.response.status}`);
            console.error('Response data:', error.response.data);
            return rejectWithValue(error.response.data);
        } else if (error.request) {
            console.error('No response received:', error.request);
            return rejectWithValue('No response received from the server.');
        } else {
            console.error('Error:', error.message);
            return rejectWithValue(error.message);
        }
    }
});

// const createClientAsync = createAsyncThunk('client/createClientAsync', async ({ post, caption }, { rejectWithValue }) => {
//     try {
//         const token = localStorage.getItem("jwtToken");
//         if (!token) {
//             throw new Error("Authorization token is missing.");
//         }

//         const formData = new FormData();
//         formData.append("caption", caption);
//         formData.append("post", post);

//         const response = await axios.post(
//             `${BASE_URL}/post/create-post`,
//             formData,
//             {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                     'Authorization': `Bearer ${token}`,
//                 },
//             }
//         );
//         return response.data;
//     } catch (error) {
//         if (error.response) {
//             console.error(`HTTP error! Status: ${error.response.status}`);
//             console.error('Response data:', error.response.data);
//             return rejectWithValue(error.response.data);
//         } else if (error.request) {
//             console.error('No response received:', error.request);
//             return rejectWithValue('No response received from the server.');
//         } else {
//             console.error('Error:', error.message);
//             return rejectWithValue(error.message);
//         }
//     }
// });

const bankSlice = createSlice({
    name: 'bank',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBanksAsync.fulfilled, (state, action) => {
                state.banks = action.payload
            })
    }
});

export default bankSlice.reducer;
export { getBanksAsync }