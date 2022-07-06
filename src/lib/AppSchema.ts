import { isObject, unwrap } from "./utils";

export default class AppSchema {

  name: string;
  config: any;

  initialView = {
    name: "dashboard",
    value: {}
  }

  layout = {
    name: "defaultLayout",
    value: {}
  };

  //указываем свойства, которые нам нужно заполнить из appschema
  props: {[index:string]: any} = {
    'startView': undefined,
    'defaultLayout': undefined
  };

  constructor(config: any) {
    this.name = config.key;
    this.config = config.value;
    this.processConfig(this.config);
  }

  processConfig(o: any) {
    for (const [key, value] of Object.entries(o)) {
      if (key in this.props) {
        this.props[key] = unwrap(value);
        continue;
      }
      if (isObject(value)) {
        this.processConfig(value);
      }
    }
  }
}