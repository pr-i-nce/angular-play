import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  firstName = "Suren";
  imgUrl = "https://images.pexels.com/photos/5008677/pexels-photo-5008677.jpeg?auto=compress&cs=tinysrgb&w=300";
  defaultVal = "Surrender";
  isBtnDissabled = false;
  formValue = '';
  isApproved = false; 
  numbers = ["one","two","three","four","five","six","seven","eight","nine","ten"];
  luckynumber = 0;
  highlightColor = 'white'
  isStyleApplied = false;
  approve(status: boolean) {
    this.isApproved = status;
  }
  parseValueToComponent(event: any) {
    console.log(event.target.value);
  }

  changeValue(event: any) {
    this.defaultVal = event.target.value;
  }
  checkForm() {
    this.isBtnDissabled = true;
    if (this.formValue === "submited") {
      this.isBtnDissabled = true ;

    }
  }
  highlight(color: string) {
    this.highlightColor = color;
}

 toggleStyle(){
  this.isStyleApplied = !this.isStyleApplied;

 }
}
