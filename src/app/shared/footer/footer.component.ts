import { Component, OnInit } from "@angular/core";
import { GOOGLE_DRIVE_URL } from "src/app/app.component";
import { IFooter } from "./footer.interface";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  get footerContent(): IFooter {
    return {
      logo: `${GOOGLE_DRIVE_URL}1h7XOnAPJy8cPlwYrRBe1y2gBGxLvHwbG`,
      IGlogo: `${GOOGLE_DRIVE_URL}1j0eoWgN1yfVaggo3f35og7U8jOrRsY5D`,
      FBlogo: `${GOOGLE_DRIVE_URL}1lqbMGx_RWbwakCpyyjxlhZSWkVu6T2pO`,
      copyright: "Copyright 2020. Todos os direitos reservados.",
      footerDetalhe: [
        {
          titulo: "Sobre",
          descricao: `Somos uma igreja cristã, 
                      fundada em 17 de junho de 2000. 
                      Fazemos parte da Aliança das 
                      Igrejas Cristãs Nova Vida.`,
        },
        {
          titulo: "Endereço",
          descricao: `Igreja Cristã Nova Vida<br />
          Av. Farmacêutico Deodoro Pinto, Nº 245<br />
          Magé, Rio de Janeiro`,
        },
      ],
    };
  }
}
