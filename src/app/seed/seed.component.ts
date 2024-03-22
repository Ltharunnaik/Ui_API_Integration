import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-seed',
  standalone: true,
  
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
   HttpClientModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './seed.component.html',
  styleUrl: './seed.component.css'
})
export class SeedComponent {
  
  name: string= '';
    file: any;  
  selected: any;
selected1: any;
selected2: any;
  // showMoreControls: any;

  getFile(event: any) {
    this.file = event.target.files[0]
  }

  getName(name: string) {
      this.name = name;
  }

  // arr = new FormControl('');
  // data11 = new FormControl('');
  // toppings2 = new FormControl('');

  // arrList: string[] = ['Option-1', 'Option-2', 'Option-3',];
  // dataList11: string[] = ['Option-11', 'Option-22', 'Option-33',];
  // toppingList2: string[] = ['Option-1', 'Option-2', 'Option-3',];


  userForm : any    



  SeedVeriety : any;
  Quantity: any;
  AmounttIncurredForSeed: any;
  UploadReferencepicture: any;
 Treatment: any;
  chemical: any;

  selectedOption: string='no';

  constructor(public fb: FormBuilder, private service: ApiService){
    this.selectedOption = 'no'; 
    this.userForm = this.fb.group({
      SeedVeriety:[""],
      Quantity:[""],
      AmounttIncurredForSeed:[""],
      Treatment:[""],
      UploadReferencepicture:[""],
      chemical:[""]
    })    
  }
  subbmitData(){
    this.service.addDataSeed(this.userForm.value).subscribe((data) =>{
      alert("add");
      console.log(data);
    })  
  }

  Save(){
  var data1=this.userForm.value;

    if(this.selectedOption=="yes"){
      if(data1.SeedVeriety==undefined ||  data1.Quantity==undefined || data1.AmounttIncurredForSeed==undefined || data1.Treatment==undefined || data1.UploadReferencepicture==undefined || data1.chemical==undefined){
          alert("enter all fields");
         // console.log(this.selectedOption);
        }else{
          
           this.subbmitData();
      }
    }else{
      //.log(this.selectedOption);
      if(data1.SeedVeriety==undefined || data1.Quantity==undefined || data1.AmounttIncurredForSeed==undefined){
        alert("enter all fields");
      //  console.log(this.selectedOption);
      }else{
       
         this.subbmitData();
    }
  }

  //  let data=this.userForm.value;
  //  console.log(this.selectedOption);
  //   console.log(data.date);
  //   if(data.Date=='' && data.Cost=='' && data.Picture==''){
  //     alert("enter all fields");
  //   }
  //   this.service.addDataSeed(this.userForm.value).subscribe((data) =>{
  //     alert("add");
  //     console.log(data);
  //   })   
  //  console.log("adaedaedaead");
  }

  id:any="968d";
  delateData(){
    console.log(this.userForm);
    this.service.delateDataSeed(this.id).subscribe((id) =>{
      alert("delete");
      console.log(id);
    })

  }
  
  handleRadio(){
    this.selectedOption='no'
  }
  handleRadio1(){
    this.selectedOption='yes'
  }
}
