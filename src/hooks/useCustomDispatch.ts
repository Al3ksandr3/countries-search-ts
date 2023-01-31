import { useDispatch } from "react-redux";

import { Dispatcher } from "../store/store";

// ------ HOOK: START ------ //

export function useCustomDispatch() {
  return useDispatch<Dispatcher>();
}

// ------ HOOK: END ------ //
