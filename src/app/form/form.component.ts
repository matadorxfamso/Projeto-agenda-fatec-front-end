import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaaService } from '../agendaa.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{

  formGroupagendaa: FormGroup;
  isEditing: boolean = false;

  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private service: AgendaaService,
              private formBuilder: FormBuilder
             ){

     this.formGroupagendaa =  formBuilder.group({
           id      : [''],
           nome    : [''],
           compromisso   : [''],
           dia: [''],
           horario: [''],
           localizacao: ['']


     });

  }

  ngOnInit() {
    const id = Number(this.activeRoute.snapshot.paramMap.get("id"));
    if(id != 0){
      this.isEditing=true;
      this.loadagendaa(id);
    }
  }

  loadagendaa(id: number) {
    this.service.getagendaaById(id).subscribe({
       next: data => this.formGroupagendaa.setValue(data)
    });
  }

  update(){
    this.service.update(this.formGroupagendaa.value).subscribe({
        next: () => this.router.navigate(['agenda'])
    });
  }

  save(){
    this.service.save(this.formGroupagendaa.value).subscribe({
        next: () => this.router.navigate(['agenda'])
    });
  }
}

