import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {provideNativeDateAdapter} from '@angular/material/core';
import { SeedComponent } from './seed/seed.component';
import { SowingComponent } from './sowing/sowing.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    SeedComponent,
    SowingComponent,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  // applyFilter($event: KeyboardEvent) {
  // throw new Error('Method not implemented.');
  // }

  displayedColumns: string[] = ['position', 'date', 'cost', 'picture','action'];
  displayedColumns2: string[] = ['position', 'select', 'seedquantity', 'amountseed','seedtreatement','picture','chemicalseed','action'];
  dataSource : any;
 
  title = 'task';
  service: any;
  sowingData: any;
  seedData:any;
   
  constructor(public getApi: ApiService) {}

  // ngOnInit() {
  //   this.loadData();
  // }

  ngOnInit(): void {    
    this.getApi.getProduct().subscribe((response)=>{
          this.sowingData=response;          
    })
    this.getApi.getSeeds().subscribe((response)=>{
      this.seedData=response;
      console.log(this.seedData);
    })
   
  }

  // public loadData() {
  //   this.getApi.getProduct().subscribe((response)=>{
  //     this.sowingData=response;          
  //     })
  //   this.getApi.getSeeds().subscribe((response)=>{
  //   this.seedData=response;
  //   console.log(this.seedData);
  //     })
  // }

  isComponent1Visible: boolean = true;
  isComponent2Visible: boolean = false;

  collect($event: string){
    this.isComponent1Visible=false;
    this.isComponent2Visible = true;
    console.log($event);
  }

  delateData(id: any){
   
    this.getApi.delateData(id).subscribe(() =>{
      alert("delete");
      this.ngOnInit();
    })
    
  }

  delateDataSeed(id: any){
    this.getApi.delateDataSeed(id).subscribe(() =>{
      alert("delete");
    this.ngOnInit();
      
    })
    // this.loadData();
  
  }
  
}

