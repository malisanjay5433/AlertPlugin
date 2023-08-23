export interface AlertPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  showAlert(options: { title?: string; message: string }): Promise<void>;
}
