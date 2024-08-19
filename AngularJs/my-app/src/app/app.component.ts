import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
// import { CommonModule } from '@angular/common';
// import { collection, Firestore, getDocs } from 'firebase/firestore';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  data: any[] = [];
  title: string = ""
  // firestore = inject(Firestore);
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.title = 'my-app';
    // getDocs(collection(this.firestore, "testPath")).then((response) => {
    //   console.log(response.docs)
    // })
    // this.dataService.getData().subscribe((data: any[]) => {
    //   this.data = data;
    //   this.title = 'my-app';
    // });
  }
}
// export class AppComponent {
//   title = 'my-app';
// }
