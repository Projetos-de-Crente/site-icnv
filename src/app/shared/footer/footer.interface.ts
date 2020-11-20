export interface IFooter {
  logo: string;
  IGlogo: string;
  FBlogo: string;
  copyright: string;
  footerDetalhe: IFooterDetalhe[];
}

export interface IFooterDetalhe {
  titulo: string;
  descricao: string;
}
