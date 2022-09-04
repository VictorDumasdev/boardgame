import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MyGamesComponent } from './my-games/my-games.component';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'game-list', component: GameListComponent },
  { path: 'my-groups', component: MyGroupsComponent },
  { path: 'my-games', component: MyGamesComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
