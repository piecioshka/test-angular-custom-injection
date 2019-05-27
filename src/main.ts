// Shim the environment
import 'core-js/features/reflect';

// Angular requires Zones to be pre-configured in the environment
import 'zone.js/dist/zone';

// Loading modules in browser
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Main entry point
import { CoreModule } from './core.module';

// Go go go!!1
platformBrowserDynamic().bootstrapModule(CoreModule);
