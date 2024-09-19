import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { routes } from './app.routes';
import { environment } from '../environments/environment.development';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { tokenInterceptor } from './token.interceptor';
import { AuthService } from './auth.service';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';


function jwtOptionsFactory() {
  return {
    // Your JWT options here
    tokenGetter: () => localStorage.getItem('JWT')
    // allowedDomains: ['yourdomain.com'],
    // disallowedRoutes: ['http://yourdomain.com/api/auth']
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
       provideHttpClient(),
       provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
       provideAuth(() => getAuth()),
       provideFirestore(() => getFirestore()),
       provideStorage(() => getStorage()), 
       provideAnimationsAsync(),
       provideHttpClient(withInterceptors([tokenInterceptor])),
       AuthService,
       JwtHelperService,
       {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory
      }, provideAnimationsAsync()
       
      ]
};
