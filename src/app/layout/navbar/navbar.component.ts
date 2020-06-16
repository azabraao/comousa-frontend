import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  public menuAtivo: boolean = false;
  public isLogged: boolean = !!localStorage.loggedUser;

  constructor() {}

  ngOnInit() {}

  handleMenuClick() {
    this.menuAtivo === true
      ? (this.menuAtivo = false)
      : (this.menuAtivo = true);
  }
}