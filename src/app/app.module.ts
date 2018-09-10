import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { OptionsComponent } from './options/options.component';
import { EnvironmentComponent } from './environment/environment.component';
import { SearchComponent } from './search/search.component';
import { ActionComponent } from './actions/action/action.component';
import { AnotherActionComponent } from './actions/another-action/another-action.component';
import { OneMoreActionComponent } from './actions/one-more-action/one-more-action';
import { ActionsComponent } from './actions/actions.component';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { GardeningComponent } from './articles/gardening/gardening.component';
import { SpaceTravelingComponent } from './articles/space-traveling/space-traveling.component';
import { DancingBenefitsComponent } from './articles/dancing-benefits/dancing-benefits.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    EnvironmentComponent,
    ActionsComponent,
    ActionComponent,
    AnotherActionComponent,
    OneMoreActionComponent,
    SearchComponent,
    ArticlesComponent,
    GardeningComponent,
    SpaceTravelingComponent,
    DancingBenefitsComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AuthModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
