import { Component, OnInit } from "@angular/core";
import { IHeader } from './shared/header/header.interface';

export const GOOGLE_DRIVE_URL = "https://drive.google.com/thumbnail?id=";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public headerContent: IHeader;

  ngOnInit() {
    this.getNavContent();
  }

  getNavContent() {
    this.headerContent = {
      logo: `${GOOGLE_DRIVE_URL}129-Z6Ss7Geb-Z7by0JAy3ZhGgHyVnT85`,
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
          name: "Agenda",
          route: "/agenda",
        },
        {
          name: "Contato",
          route: "/contato",
        },
        {
          name: "Novidades",
          route: "/novidades",
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
}
