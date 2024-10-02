import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import "@db-ui/foundations/build/css/default-theme.css";
import "@db-ui/foundations/build/css/db-ui-foundations.css";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
