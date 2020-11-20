import { Component, OnInit } from "@angular/core";
import { GOOGLE_DRIVE_URL } from "src/app/app.component";

@Component({
  selector: "app-news-card",
  templateUrl: "./news-card.component.html",
  styleUrls: ["./news-card.component.scss"],
})
export class NewsCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getImgPath(id) {
    return `${GOOGLE_DRIVE_URL}${id}`;
  }
}
