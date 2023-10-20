// taskSortFilterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskSortFilter } from './yourTypes'; // Import your types

const initialState: TaskSortFilter = {
    open: 0,
    closed: 0,
    contacts: [],
    entity: [],
    products: [],
};

const taskSortFilterSlice = createSlice({
    name: 'taskSortFilter',
    initialState,
    reducers: {
        setTaskSortFilter: (state, action: PayloadAction<TaskSortFilter>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setTaskSortFilter } = taskSortFilterSlice.actions;
export default taskSortFilterSlice.reducer;
