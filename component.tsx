// SomeComponent.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTaskSortFilter } from "./taskSortFilterSlice"; // Import your action

const SomeComponent: React.FC = () => {
  const taskSortFilter = useSelector((state) => state.taskSortFilter);
  const dispatch = useDispatch();

  // Use taskSortFilter in your component

  // Example: Dispatch an action to update the taskSortFilter state
  const updateTaskSortFilter = (newFilter) => {
    dispatch(setTaskSortFilter(newFilter));
  };

  return <div>{/* Your component content */}</div>;
};

export default SomeComponent;
