import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Album } from 'src/models/album';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Album
  ) { }

  ngOnInit(): void {
  }

}
