import { Component, Input, OnInit } from "@angular/core";
import { IRoutes } from "./header.interface";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() headerRoutes: IRoutes[];
  @Input() img: string;

  constructor() {}

  ngOnInit() {
    this.menuToggler();
  }

  menuToggler() {
    const navbarMenu = document.querySelector(".navbar ul");
    const navbarLinks = document.querySelectorAll(".navbar a");
    const navbarToggler: HTMLElement = document.querySelector(
      ".navbar-toggler"
    ) as HTMLElement;

    navbarToggler.addEventListener("click", () => {
      navbarToggler.classList.toggle("open-navbar-toggler");
      navbarMenu.classList.toggle("open");
    });

    navbarLinks.forEach((elem) =>
      elem.addEventListener("click", () => {
        if (navbarMenu.classList.contains("open")) {
          navbarToggler.click();
        }
      })
    );
  }

  closeMenuMobile() {
    const navbarMenu = document.querySelector(".navbar ul");
    const navbarToggler: HTMLElement = document.querySelector(
      ".navbar-toggler"
    ) as HTMLElement;
    navbarMenu.classList.toggle("open");
    navbarToggler.classList.toggle("open-navbar-toggler");
  }
}
