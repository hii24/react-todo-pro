import { useCallback, useReducer } from "react";

interface State<T> {
  past: T[];
  present: T;
  future: T[];
}

type Action<T> =
  | { type: "set"; value: T }
  | { type: "undo" }
  | { type: "redo" }
  | { type: "reset"; value: T };

const HISTORY_LIMIT = 20;

function reducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case "set":
      return {
        past: [...state.past.slice(-HISTORY_LIMIT + 1), state.present],
        present: action.value,
        future: [],
      };
    case "undo":
      if (state.past.length === 0) return state;
      return {
        past: state.past.slice(0, -1),
        present: state.past[state.past.length - 1],
        future: [state.present, ...state.future],
      };
    case "redo":
      if (state.future.length === 0) return state;
      return {
        past: [...state.past, state.present],
        present: state.future[0],
        future: state.future.slice(1),
      };
    case "reset":
      return { past: [], present: action.value, future: [] };
  }
}

export function useUndoableState<T>(initial: T) {
  const [state, dispatch] = useReducer(reducer<T>, {
    past: [],
    present: initial,
    future: [],
  });

  const set = useCallback((value: T) => dispatch({ type: "set", value }), []);
  const undo = useCallback(() => dispatch({ type: "undo" }), []);
  const redo = useCallback(() => dispatch({ type: "redo" }), []);
  const reset = useCallback((value: T) => dispatch({ type: "reset", value }), []);

  return {
    value: state.present,
    set,
    undo,
    redo,
    reset,
    canUndo: state.past.length > 0,
    canRedo: state.future.length > 0,
  };
}
