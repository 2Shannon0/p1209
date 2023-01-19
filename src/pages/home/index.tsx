import { lazy, Suspense } from "react";

import { CircularProgress } from "../../components/progress";

const LazyLoaded = lazy(() => /* HomePage */ import("./Home"));

export const Home = () => (
  <Suspense fallback={<CircularProgress />}>
    <LazyLoaded />
  </Suspense>
);
