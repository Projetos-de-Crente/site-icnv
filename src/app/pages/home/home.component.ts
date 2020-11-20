import { Component, OnInit } from "@angular/core";
import { IHero } from "src/app/shared/hero/hero.interface";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public heroContent: IHero;

  constructor() {}

  ngOnInit() {
    this.getHeroContent();
  }

  getHeroContent() {
    this.heroContent = {
      title: "Igreja Cristã Nova Vida de Magé",
    };
  }
}
