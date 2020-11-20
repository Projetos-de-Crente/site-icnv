import { Component, OnInit } from "@angular/core";
import { IHeader } from "./header/header.interface";
import { IHero } from "./hero/hero.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public headerContent: IHeader;
  public heroContent: IHero;

  ngOnInit() {
    this.getNavContent();
    this.getHeroContent();
  }

  getNavContent() {
    this.headerContent = {
      logo: "",
      routes: [
        {
          name: "Início",
          route: "/home",
        },
        {
          name: "Sobre",
          route: "/sobre",
        },
        {
          name: "Novidades",
          route: "/novidades",
        },
        {
          name: "Agenda",
          route: "/agenda",
        },
        {
          name: "Ministérios",
          route: "/ministerios",
        },
        {
          name: "Mensagens",
          route: "/mensagens",
        },
      ],
    };
  }

  getHeroContent() {
    this.heroContent = {
      img: "",
      title: "Igreja Cristã Nova Vida de Magé",
    };
  }
}
