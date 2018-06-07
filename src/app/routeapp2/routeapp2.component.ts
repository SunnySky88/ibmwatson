import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routeapp2',
  templateUrl: './routeapp2.component.html',
  styleUrls: ['./routeapp2.component.css']
})
export class Routeapp2Component implements OnInit {
newcomponent = "Please enter the valid integers 7 or 2 or 3 as input to know the expected result";
  constructor() { }

submit(){
  let x = document.forms["myform"]["result"].value;
  if(x == 7 || x == 2 || x == 3){
  let i: any;
  for (i=1; i <8; i++){
    if (i % 12 == 0) document.write("Watson");
    else if (i % 4 == 0) document.write("Wat");
    else if (i % 6 == 0) document.write("Watson");
    else document.write(i);
}
}
else{alert("please enter valid input");}
}

  ngOnInit() {
  }

}
