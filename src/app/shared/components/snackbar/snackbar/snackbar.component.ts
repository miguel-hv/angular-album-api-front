import { SnackbarService } from './../../../services/snackbar/snackbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  messageDisplay: string = "";

  constructor( private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    // this.snackbarService.open().subscribe();  
  }

}
