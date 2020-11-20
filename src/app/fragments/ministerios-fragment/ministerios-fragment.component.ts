import { Component, OnInit } from "@angular/core";
import { GOOGLE_DRIVE_URL } from "src/app/app.component";

@Component({
  selector: "app-ministerios-fragment",
  templateUrl: "./ministerios-fragment.component.html",
  styleUrls: ["./ministerios-fragment.component.scss"],
})
export class MinisteriosFragmentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getImgPath(id) {
    return `${GOOGLE_DRIVE_URL}${id}`;
  }
}
