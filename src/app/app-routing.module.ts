import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { OptionsComponent } from './options/options.component';
import { EnvironmentComponent } from './environment/environment.component';
import { BrandComponent } from './core/brand/brand.component';
import { SearchComponent } from './search/search.component';
import { GardeningComponent } from './gardening/gardening.component';
import { DancingComponent } from './dancing/dancing.component';
import { SpaceComponent } from './space/space.component';

const appRoutes: Routes = [
  {path: "Register", children:[
    {path: "Options",component: OptionsComponent},
    {path: "Environment", component: EnvironmentComponent}
  ]},
  {path: "Search", component: SearchComponent},
  {path: "About", component: BrandComponent},
  {path: "Gardening", component: GardeningComponent},
  {path: "Space", component: SpaceComponent},
  {path: "Dancing", component: DancingComponent}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
