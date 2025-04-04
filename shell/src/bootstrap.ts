import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { init } from '@module-federation/enhanced/runtime';

init({
  name: 'shell',
  remotes: [],
});

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
