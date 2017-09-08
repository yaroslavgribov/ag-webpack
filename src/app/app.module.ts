import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule }  from '@angular/platform-browser';

import {coreRoutes} from './coreRoutes.routing';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import {rootReducer} from './store/rootReducer';
 
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
        coreRoutes
    ),
      StoreModule.forRoot({
        root: rootReducer
      }),
      StoreDevtoolsModule.instrument()
  ],
  declarations: [
    AppComponent,
    IndexComponent
  ],
  bootstrap: [ AppComponent ],
  providers: []
})
export class AppModule { }