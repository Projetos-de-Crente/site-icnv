import { Component, OnInit } from "@angular/core";
import { GOOGLE_DRIVE_URL } from "../app.component";
import { IHero } from "../hero/hero.interface";

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
      // img: `${GOOGLE_DRIVE_URL}1jaN-P5K1YvsqOjhDtKfQdJmc2yb_zpHy`,
      title: "Igreja Cristã Nova Vida de Magé",
    };
  }
}
