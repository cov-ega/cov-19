import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken('app.config');

export interface IAppConfig {
  apiEndpoint: string;
  applicationToken: string;
}

export const AppConfig: IAppConfig = {
  apiEndpoint: 'https://api-anticov19.azurewebsites.net/',
  applicationToken: 'AntiCovClient'
};
