/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
 *
 * ESTA WebJS: Hauptkomponente
 *
 * @author u220374 (Reto Lehmann)
 * @version: 2.0.0
 * @since 23.10.2015, 2015.
 */

// Angular imports
import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

// ESTA imports
// FIXME: Disabled weil @angular sich nicht mit Nexus mischen laesst
// import 'esta-webjs-style/build/css/style.css';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
