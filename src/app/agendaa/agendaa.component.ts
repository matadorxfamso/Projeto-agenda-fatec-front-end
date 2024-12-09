import { Component } from '@angular/core';
import { agendaa } from '../agendaa';

@Component({
  selector: 'app-agendaa',
  templateUrl: './agendaa.component.html',
  styleUrl: './agendaa.component.css'
})
export class AgendaaComponent {
agendaa: agendaa[] = [

  { "id"      : 1,
    "nome"    : "Computador i7",
    "compromisso"   : "6000.00",
    "dia": "Eletrônicos",
    "horario": "Eletrônicos",
    "localizacao": "Eletrônicos",

  }
]

}
