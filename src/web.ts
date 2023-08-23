import { WebPlugin } from '@capacitor/core';

import type { AlertPluginPlugin } from './definitions';

export class AlertPluginWeb extends WebPlugin implements AlertPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async showAlert(options: { title?: string; message: string }): Promise<void> {
    const formattedMessage = options.title
      ? `${options.title}\n\n${options.message}`
      : options.message;
    alert(formattedMessage);
  }
}

const AlertPlugin = new AlertPluginWeb();
export { AlertPlugin };
