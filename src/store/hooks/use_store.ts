import { useContext } from "react";
import { GlobalContext } from "../context/global_context";

export const useStore = () => useContext(GlobalContext);
