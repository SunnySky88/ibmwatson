import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routerapp',
  templateUrl: './routerapp.component.html',
  styleUrls: ['./routerapp.component.css']
})
export class RouterappComponent implements OnInit {
newcomponent = "Please enter the valid integers 20 or 3 or 4 as input to know the expected result";
  constructor() { }

submit(){
  let x = document.forms["myform"]["result"].value;
  if(x == 20 || x == 3 || x == 4){
  let i: any;
  for (i=1; i <21; i++){
    if (i % 12 == 0) document.write("Watson");
    else if (i % 6 == 0) document.write("Wat");
    else if (i % 8 == 0) document.write("son");
    else if (i % 9 == 0) document.write("Wat");
    else if (i % 15 == 0) document.write("Wat");
    else if (i % 20 == 0) document.write("son");
    else document.write(i);
}
}
else{alert("please enter valid input");}
}
  ngOnInit() {
  }

}
