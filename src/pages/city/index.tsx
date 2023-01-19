import { lazy, Suspense } from "react";

import { CircularProgress } from "../../components/progress";

const LazyLoaded = lazy(() => /* CityPage */ import("./City"));

export const City = () => (
  <Suspense fallback={<CircularProgress />}>
    <LazyLoaded />
  </Suspense>
);
