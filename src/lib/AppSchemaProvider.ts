import { Resolver } from '@stoplight/json-ref-resolver';
import appSettings from '../appSettings.json';
import AppSchema from './AppSchema';
import {unwrap} from './utils';

export default class AppSchemaProvider {

  static async fetchConfig(type: string, url: string) {
    const resolver = new Resolver();
    // if (type === "file") {
    //   const result = await import('../data/generalMedicalPerspective.json');
    //   const unwrapped = unwrap(result);
    //   const dataToResolve = {[unwrapped.key]:unwrapped.value};
    //   const data = await resolver.resolve(dataToResolve);
    //   const config = unwrap(data.result);
    //   return config;
    // };
    const response = await fetch(url);
    const result = await response.json();
    const data = await resolver.resolve(result);
    const config = unwrap(data.result);
    return config;
  };

  static async getAppSchema(modelId: string|number): Promise<AppSchema> {

    //1. получаем из appsettings путь к appschema
    let {type, url} = appSettings.appSchema;
    url = url.replace('{modelId}', modelId.toString());

    // 2. загружаем AppSchema
    const config = await AppSchemaProvider.fetchConfig(type,url);
    return new AppSchema(config);
  }
}

