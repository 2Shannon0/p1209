import { lazy, Suspense } from "react";

import { CircularProgress } from "../../components/progress";

const LazyLoaded = lazy(() => /* AboutPage */ import("./About"));

export const About = () => (
  <Suspense fallback={<CircularProgress />}>
    <LazyLoaded />
  </Suspense>
);
