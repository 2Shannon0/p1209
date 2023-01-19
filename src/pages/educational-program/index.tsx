import { lazy, Suspense } from "react";

import { CircularProgress } from "../../components/progress";

const LazyLoaded = lazy(
  () => /* EducationalProgramPage */ import("./EducationalProgram")
);

export const EducationalProgram = () => (
  <Suspense fallback={<CircularProgress />}>
    <LazyLoaded />
  </Suspense>
);
