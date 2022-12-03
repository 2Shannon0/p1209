export type TransitionType<T = unknown> = [
  payload: T | undefined,
  isLoading: boolean,
  isError: boolean,
  setupAgain: VoidFunction
];
