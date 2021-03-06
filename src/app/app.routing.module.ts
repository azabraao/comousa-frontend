import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthLoginComponent } from "./auth/auth-login/auth-login.component";
import { InsideLayoutComponent } from "./layout/inside-layout/inside-layout.component";
import { HomeComponent } from "./layout/home/home.component";
import { NovoCursoComponent } from "./layout/novo-curso/novo-curso.component";
import { AuthGuard } from "./services/auth.guard";
import { CursoComponent } from "./layout/curso/curso.component";
import { EditarCursoComponent } from "./layout/editar-curso/editar-curso.component";
import { LandingPageComponent } from "./layout/landing-page/landing-page.component";

const routes: Routes = [
  {
    path: "admin",
    component: AuthLoginComponent,
  },
  {
    path: "novo-curso",
    canActivate: [AuthGuard],
    component: NovoCursoComponent,
  },
  {
    path: "lp",
    component: LandingPageComponent,
  },
  {
    path: "editar-curso/:id",
    canActivate: [AuthGuard],
    component: EditarCursoComponent,
  },

  {
    path: "",
    component: InsideLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: "curso/:url/:titulo",
        component: CursoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
