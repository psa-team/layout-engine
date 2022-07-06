export interface LayoutEngineProps {
  modelId: string | number;
  createLayout: (componentName: string) => any;
  createView: (componentName: string) => any;
}