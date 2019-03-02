import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const config: ExtraOptions = {
  useHash: true
};

const routes: Routes = [
  { path: "", loadChildren: "./pages/customers/customers.module#CustomersModule" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
