import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Wen';
  itembuah = [{
    nama: 'Kelengkeng',
    harga: 10000
  },
  {
    nama: 'Jeruk',
    harga: 15000
  }];

  itemArr = ['aa', 'bb', 'vv']

  show: boolean = false

  user = ""

  pesan = '';

  klikButton() {
    this.pesan = "Tombol ditekan"
  }
  output
  pola = ""
  bentukPola = ""
  hitung(a, b) {
    this.output = Math.pow(a, b)
    var max
    var min
    if (a > b){
      max = a
      min=b
    }
    else{
      max = b
      min=a
    }
      
    if (Math.pow(a, b) % 2 == 0) {
      this.pola = "B"
      for (var i = 0; i < Math.pow(a, b) - 2; i++) {
        for (var j = 0; j < max + i; j++) {
          this.bentukPola += '*'
        }
        this.bentukPola += '<br>'
      }
    }
    else {
      this.bentukPola=""
      this.pola = "A"
      var count=0
      for(var i = 0;i<max;i++){
        for(var j=0;j<max-i;j++){
          this.bentukPola += "*"
        }
        if(count< min){
          for(var j=0;j<=count;j++){
            this.bentukPola+="o"
          }
        }
        
        count++
        this.bentukPola+="<br>"
      }
    }




  }



}
