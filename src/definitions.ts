export interface AlertPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
