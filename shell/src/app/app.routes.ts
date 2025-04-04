import {
  loadRemote,
  registerRemotes,
} from '@module-federation/enhanced/runtime';
import { Route } from '@angular/router';

registerRemotes([
  {
    name: 'remote1',
    entry: 'http://localhost:4201/remoteEntry.mjs?v=1234.js',
    type: 'module',
  },
]);

export const appRoutes: Route[] = [
  {
    path: 'remote1',
    loadChildren: () =>
      loadRemote(`remote1/Routes`).then((m: any) => m.remoteRoutes),
  },
];
