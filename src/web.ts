import { WebPlugin } from '@capacitor/core';

import type { AlertPluginPlugin } from './definitions';

export class AlertPluginWeb extends WebPlugin implements AlertPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
