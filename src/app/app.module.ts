import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, LOCALE_ID } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ROUTES } from "./app.routes";

import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HeroComponent } from "./shared/hero/hero.component";
import { HomeComponent } from "./pages/home/home.component";
import { WelcomeComponent } from "./fragments/welcome/welcome.component";
import { SobreComponent } from "./pages/sobre/sobre.component";
import { AgendaComponent } from "./pages/agenda/agenda.component";
import { ContatoComponent } from "./pages/contato/contato.component";
import { NovidadesComponent } from "./pages/novidades/novidades.component";
import { MinisteriosComponent } from "./pages/ministerios/ministerios.component";
import { MensagensComponent } from "./pages/mensagens/mensagens.component";
import { NewsCardComponent } from "./fragments/news-card/news-card.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    WelcomeComponent,
    SobreComponent,
    AgendaComponent,
    ContatoComponent,
    NovidadesComponent,
    MinisteriosComponent,
    MensagensComponent,
    NewsCardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
