import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { routes } from './app.routes';
import { environment } from '../environments/environment.development';



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
       provideHttpClient(),
       provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
       provideAuth(() => getAuth()),
       provideFirestore(() => getFirestore()),
       provideStorage(() => getStorage())
      ]
};
