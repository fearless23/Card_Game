import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: 'loader.component.html',
  styleUrls: ['./loader.component.css']
})

export class WTLoaderComponent implements OnInit {
  @Input('inline') isInline
  constructor() { }

  ngOnInit() {
    if(!this.isInline){
      this.isInline = false
    }
   }
}