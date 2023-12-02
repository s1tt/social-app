import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () =>
    new Promise<{ default: React.ComponentType<any> }>(res => {
      setTimeout(() => res(import('./AboutPage')), 1500);
    })
);
