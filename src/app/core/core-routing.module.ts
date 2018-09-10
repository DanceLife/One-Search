import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import{ HomeComponent } from './home/home.component';
import { BrandComponent } from './brand/brand.component';
import { SignUpComponent } from '../auth/signup/signup.component';

const coreRoutes: Routes = [
{ path: 'Home', component: HomeComponent },
{ path: 'Register/SignUp', component: SignUpComponent },
{ path: '', component: HomeComponent }
];

@NgModule({
 imports: [
     RouterModule.forChild(coreRoutes),
 ],
 exports: [RouterModule]
})
export class CoreRoutingModule{}