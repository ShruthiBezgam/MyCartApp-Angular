import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthComponent } from './auth/auth.component';
import { CallbackComponent } from './callback.component';
import { HeaderComponent } from './header/header.component';
//import { OktaAuthGuard } from './auth/auth-okta.guard';
import { OktaAuthGuard, OktaCallbackComponent} from '@okta/okta-angular';


const appRoutes: Routes = [
  // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: '', component: HeaderComponent },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent,
  },
  { path: 'shopping-list', component: ShoppingListComponent, canActivate: [OktaAuthGuard] },
  { path: 'callback', component: CallbackComponent, canActivate: [OktaAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
