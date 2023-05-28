/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import '../node_modules/bootstrap/dist/js/bootstrap.js';
// import  {Bootstrap} from '../node_modules/bootstrap/dist/js/bootstrap';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
