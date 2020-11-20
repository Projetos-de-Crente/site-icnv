import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"],
})
export class HeroComponent implements OnInit {
  @Input() img: string;
  @Input() title: string;

  constructor() {}

  ngOnInit() {}

  get imgPath() {
    return `background-image: url(${this.img})`;
  }
}
