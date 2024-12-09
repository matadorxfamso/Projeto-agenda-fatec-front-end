import { agendaa } from '../agendaa';
import { Component, OnInit } from '@angular/core';
import { AgendaaService } from '../agendaa.service';

@Component({
  selector: 'app-agendaa-tabela',
  templateUrl: './agendaa-tabela.component.html',
  styleUrl: './agendaa-tabela.component.css'
})
export class AgendaaTabelaComponent implements OnInit {

  agendaa : agendaa[] = [];

  constructor(private servise: AgendaaService){}

  ngOnInit() {

    this.loadagenda();
  }

  loadagenda() {
    this.servise.getagendaa().subscribe({
      next: data=> this.agendaa = data
    })
  }
  delete(agendaa: agendaa){
    this.servise.delete(agendaa).subscribe({
        next: () => this.loadagenda()
    })
  }
  }

