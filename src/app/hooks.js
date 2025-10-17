import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
export const useActions = (actions) => {
  const dispatch = useAppDispatch();
  return bindActionCreators(actions, dispatch);
};
