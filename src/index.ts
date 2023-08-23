import { registerPlugin } from '@capacitor/core';

import type { AlertPluginPlugin } from './definitions';

const AlertPlugin = registerPlugin<AlertPluginPlugin>('AlertPlugin', {
  web: () => import('./web').then(m => new m.AlertPluginWeb()),
});

export * from './definitions';
export { AlertPlugin };
