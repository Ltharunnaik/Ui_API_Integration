import { CommonModule } from '@angular/common';
import { Component, Input,EventEmitter, Output, NgModule } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, FormsModule, NgModel, NgModelGroup, ReactiveFormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {provideNativeDateAdapter} from '@angular/material/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sowing',
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
    // NgModule,
    // NgModelGroup,
    // NgModel
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './sowing.component.html',
  styleUrl: './sowing.component.css',
  
})
export class SowingComponent {

  userForm: FormGroup;

  name: string= '';
  file: any;
  // date: any;
  // cost: any;
  // Data1: any;
  // showMoreControls: any;

  getFile(event: any) {
    this.file = event.target.files[0]
  }

  getName(name: string) {
      this.name = name;
  }

  @Input() show: any;
  @Output() change1 = new EventEmitter<any>()  

  // user={
  //   pic :'',
    
  // }
  CostAcer : any;
  UploadReferencepicture : any;
  Data : any ;

  //userForm: any;
  selectedOption: string='no';

  constructor(public fb: FormBuilder, private service: ApiService){
    this.userForm = new FormGroup({
      Date : new FormControl(),
      Cost : new FormControl(),
      Picture : new FormControl(),

    });

    this.change1.emit();
     // this.userForm = this.fb.group({
    //   Date:[""],
    //   Cost:[""],
    //   Picture:[""],
    // })
    
  }

  subbmitData(){
    this.service.addData(this.userForm.value).subscribe((data) =>{
      alert("add");
      console.log(data);
    }) 
  }
  
  submitForm(){
    //console.log(1000000000000000);
    console.log(this.selectedOption);
    let data=this.userForm.value;

    console.log(data.Cost);
    console.log(data.Picture);
    console.log(data.Date);
if(this.selectedOption=="yes"){
  if(data.Date==undefined ||  data.Picture==undefined){
      alert("enter all fields");
     // console.log(this.selectedOption);
    }else{
      this.change1.emit();
       this.subbmitData();
  }
}else{
  //.log(this.selectedOption);
  if(data.Date==undefined || data.Cost==undefined || data.Picture==undefined){
    alert("enter all fields");
  //  console.log(this.selectedOption);
  }else{
    this.change1.emit();
     this.subbmitData();
}
}
   
  } 
  ngOninit() {
    throw new Error('Method not implemented.');
  }

  fileToUpload: any;
  imageUrl: any;
  files = null;
  
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  handleRadio(){
    this.selectedOption='no'
  }
  handleRadio1(){
    this.selectedOption='yes'
  }
  id:any="66a6";

  delateData(){
    console.log(this.userForm);
    this.service.delateData(this.id).subscribe((id) =>{
      alert("delete");
      console.log(id);
    })

  }
  
}


