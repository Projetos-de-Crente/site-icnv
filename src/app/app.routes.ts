import { Routes } from "@angular/router";
import { AgendaComponent } from "./pages/agenda/agenda.component";
import { ContatoComponent } from "./pages/contato/contato.component";
import { HomeComponent } from "./pages/home/home.component";
import { MensagensComponent } from "./pages/mensagens/mensagens.component";
import { MinisteriosComponent } from "./pages/ministerios/ministerios.component";
import { NovidadesComponent } from "./pages/novidades/novidades.component";
import { SobreComponent } from "./pages/sobre/sobre.component";

export const ROUTES: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "sobre", component: SobreComponent },
  { path: "agenda", component: AgendaComponent },
  { path: "contato", component: ContatoComponent },
  { path: "novidades", component: NovidadesComponent },
  { path: "ministerios", component: MinisteriosComponent },
  { path: "mensagens", component: MensagensComponent },
];
