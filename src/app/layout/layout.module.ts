import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InsideLayoutComponent } from "./inside-layout/inside-layout.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NovoVideoComponent } from "./novo-video/novo-video.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    InsideLayoutComponent,
    NavbarComponent,
    HomeComponent,
    NovoVideoComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export class LayoutModule {}
