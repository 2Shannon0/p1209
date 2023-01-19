import { lazy, Suspense } from 'react';

import { CircularProgress } from '../../components/progress';

const LazyLoaded = lazy(
  () => /* EduProgramInfoPage */ import('./EduProgramInfo')
);

export const EduProgramInfo = () => (
  <Suspense fallback={<CircularProgress />}>
    <LazyLoaded />
  </Suspense>
);
