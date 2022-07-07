import { isObject, unwrap } from "./utils";

export default class AppSchema {

  name: string;
  config: any;

  
  //указываем свойства, которые нам нужно заполнить из appschema
  props: {[index:string]: any} = {
    'startView': undefined,
    'defaultLayout': undefined
  };
  
  // initialView = {
  //   name: this.props['startView'].key,
  //   context: this.props['startView'].value
  // }

  // layout = {
  //   name: this.props['defaultLayout'].key,
  //   context: this.props['defaultLayout'].value
  // };

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