import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'btn-dropdown',
  templateUrl: 'btn-dropdown.component.html',
  styleUrls: ['./btn-dropdown.component.css']
})

export class BtnDropdownComponent implements OnInit {
  @Input('heading') heading:string
  @Input('links') links:string[]
  @Input('selected') selected:string
  @Output() onSelected =  new EventEmitter<string>()
  constructor() { }

  ngOnInit() { }

  onSelect(link:string){
    this.selected = link
    this.onSelected.emit(link)
  }
}