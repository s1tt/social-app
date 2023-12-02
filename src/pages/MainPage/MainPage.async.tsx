import { lazy } from 'react';

export const MainPageAsync = lazy(
  () =>
    new Promise<{ default: React.ComponentType<any> }>(res => {
      setTimeout(() => res(import('./MainPage')), 1500);
    })
);
