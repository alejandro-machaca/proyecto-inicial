import { Component, OnInit, ViewChild } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public anchuraToSlider: any;
  public captions: boolean;
  public autor: any;

  @ViewChild('textos') textos;

  constructor() {
  	this.captions = true;
  }

  ngOnInit() {
  	var opcion_clasica = document.querySelector('#texto').innerHTML;
  	console.log(this.textos.nativeElement.textContent);
  }

  cargarSlider(){
  	this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
  	this.anchuraToSlider = false;
  }

  getAutor(event){
  	this.autor = event;
  }

}
