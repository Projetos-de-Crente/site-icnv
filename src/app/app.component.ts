import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public img: string;

  ngOnInit() {
    this.img = "src/assets/img/casinhas_preto.png";
  }
}
