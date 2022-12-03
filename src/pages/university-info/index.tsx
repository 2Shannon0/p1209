import { lazy, Suspense } from "react";

import { CircularProgress } from "../../components/progress";

const LazyLoaded = lazy(
  () => /* UniversityInfoPage */ import("./UniversityInfo")
);

export const UniversityInfo = () => (
  <Suspense fallback={<CircularProgress />}>
    <LazyLoaded />
  </Suspense>
);
