import { Component, OnInit } from '@angular/core';
import { IPagina } from '../../models/i-pagina';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-pagina',
  templateUrl: './form-pagina.component.html',
  styleUrls: ['./form-pagina.component.css']
})
export class FormPaginaComponent implements OnInit {

  form!: FormGroup;
  pagina!: IPagina;
  submitted: boolean = false;
  showInfo: boolean = false;

  ngOnInit(): void {
    this.initForm();
  }

  showData(): void {
    this.submitted = true;
    if(this.form.valid) {
      this.showInfo = true;
      console.log(this.form.value);
    }
  }

  reset(): void {
    this.submitted = false;
    this.initForm();
  }

  constructor(private _fb: FormBuilder) {

  }

  private initForm(): void {
    this.form = this._fb.group({
      nombre: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required])
    });
  }
}
