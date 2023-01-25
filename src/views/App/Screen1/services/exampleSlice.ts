import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';
import {ExampleIntialState, Quote} from './types';

export const initialState: ExampleIntialState = {
  quotes: [],
  error: '',
  loading: false,
};

export const fetchQuotes = createAsyncThunk('user/fetchQuotes', () => {
  return axios
    .get('https://quote-garden.herokuapp.com/api/v3/quotes')
    .then(response => {
      return response.data.data;
    });
});

export const exampleSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchQuotes.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      fetchQuotes.fulfilled,
      (state, action: PayloadAction<Quote[]>) => {
        state.loading = false;
        state.quotes = action.payload;
      },
    );
    builder.addCase(fetchQuotes.rejected, (state, action: AnyAction) => {
      state.loading = false;
      state.quotes = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default exampleSlice.reducer;
