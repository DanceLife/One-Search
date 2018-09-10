import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { OptionsComponent } from './options/options.component';
import { EnvironmentComponent } from './environment/environment.component';
import { BrandComponent } from './core/brand/brand.component';
import { SearchComponent } from './search/search.component';
import { ActionComponent } from './actions/action/action.component';
import { AnotherActionComponent } from './actions/another-action/another-action.component';
import { OneMoreActionComponent } from './actions/one-more-action/one-more-action';
import { ActionsComponent } from './actions/actions.component';

const appRoutes: Routes = [
  {path: "Register", children:[
    {path: "Options",component: OptionsComponent},
    {path: "Environment", component: EnvironmentComponent}
  ]},
  {path: "Search", component: SearchComponent},
  {path: "About", component: BrandComponent},
  {path: "Articles", component: ActionsComponent,children:[
    {path: "Gardening", component: ActionComponent},
    {path: "Space_Exploration", component: OneMoreActionComponent},
    {path: "Dancing_Beneficts", component: AnotherActionComponent}
  ]},
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
