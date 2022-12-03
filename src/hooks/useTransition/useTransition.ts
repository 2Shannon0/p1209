import { useCallback, useState } from "react";

import { TransitionType } from "./types";

export const useTransition = <U, T = unknown>(
  asyncFnc: (value?: U) => Promise<T>,
  args?: U
): TransitionType<T> => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [payload, setPayload] = useState<T | undefined>();
  const [setup, setSetup] = useState(true);

  if (setup && !isLoading) {
    setSetup(false);
    try {
      setIsLoading(true);
      setIsError(false);
      setPayload(undefined);
      asyncFnc(args)
        .then((data: T) => {
          setPayload(data);
        })
        .catch((e) => setIsError(true))
        .finally(() => setIsLoading(false));
    } catch (e) {
      setIsLoading(false);
      setIsError(true);
    }
  }

  const setupAgain = useCallback(() => setSetup(true), []);
  return [payload, isLoading, isError, setupAgain];
};
