import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export interface Program {
  id: number;
}

const programsAdapter = createEntityAdapter<Program>({
  selectId: (program) => program.id,
});

const programsSlice = createSlice({
  name: 'programs',
  initialState: programsAdapter.getInitialState(),
  reducers: {
    programAdd: programsAdapter.addOne,
  },
});

export const programsReducer = programsSlice.reducer;
export const programsActions = programsSlice.actions;
