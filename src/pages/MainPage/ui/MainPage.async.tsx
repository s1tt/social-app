import React, { lazy } from 'react';

export const MainPageAsync = lazy(
  async () =>
    new Promise<{ default: React.ComponentType<any> }>(res => {
      setTimeout(() => {
        res(import('./MainPage'));
      }, 1500);
    })
);
