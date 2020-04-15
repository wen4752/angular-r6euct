import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Wen';
  itembuah = [{
    nama:'Kelengkeng',
    harga: 10000
  }, 
  {
    nama : 'Jeruk',
    harga: 15000
  }];

  itemArr = ['aa','bb','vv']

  show:boolean=false

  user=""

  pesan='';
  klikButton(){
    this.pesan="Tombol ditekan"
  }
  output=0
  hitung(a,b){
    this.output = Math.pow(a,b)
  }
}
