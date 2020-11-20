import { Component, OnInit } from "@angular/core";
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
      logo: "assets/img/logos/icnv_logo.png",
      IGlogo: "assets/img/icones_sociais/ico_instagram.png",
      FBlogo: "assets/img/icones_sociais/ico_facebook.png",
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
