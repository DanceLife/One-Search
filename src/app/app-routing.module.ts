import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { OptionsComponent } from './options/options.component';
import { EnvironmentComponent } from './environment/environment.component';
import { BrandComponent } from './core/brand/brand.component';
import { SearchComponent } from './search/search.component';
import { ActionComponent } from './actions/action/action.component';
import { AnotherActionComponent } from './actions/another-action/another-action.component';
import { OneMoreActionComponent } from './actions/one-more-action/one-more-action';
import { ArticlesComponent } from './articles/articles.component';
import { DancingBenefitsComponent } from './articles/dancing-benefits/dancing-benefits.component';
import { GardeningComponent } from './articles/gardening/gardening.component';
import { SpaceTravelingComponent } from './articles/space-traveling/space-traveling.component';

const appRoutes: Routes = [
  {path: "Register", children:[
    {path: "Options",component: OptionsComponent},
    {path: "Environment", component: EnvironmentComponent}
  ]},
  {path: "Search", component: SearchComponent},
  {path: "About", component: BrandComponent},
  {path: "Articles", component: ArticlesComponent,children:[
    {path: "Gardening", component: GardeningComponent},
    {path: "Space_Traveling", component: SpaceTravelingComponent},
    {path: "Dancing_Benefits", component: DancingBenefitsComponent}
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
