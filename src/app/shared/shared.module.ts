import { NgModule } from '@angular/core';

// From Angular
import { CommonModule } from '@angular/common'; // ngif, ngfor
import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from "@angular/forms" // ngmodel

const modules = [
  CommonModule,
  ReactiveFormsModule,
  // FormsModule
];

// Shared Pipes: Declare and export
import { FilterPipe } from './pipes/filter.pipe';
// import { LengthPipe } from "./pipes/length.pipe"
import { ObservableFilterPipe } from './pipes/observable-filter.pipe';
// import { StringSearchPipe } from "./pipes/string-search.pipe"
import { TrueFalsePipe } from './pipes/true-false.pipe';
import { MultiFilterPipe } from './pipes/mulFilter.pipe';
const pipes = [
  FilterPipe,
  MultiFilterPipe,
  // LengthPipe,
  ObservableFilterPipe,
  // StringSearchPipe,
  TrueFalsePipe,
];

// Shared Directives: Declare and export
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { DropdownDirective } from './directives/dropdown.directive';

const directives = [ClickOutsideDirective, DropdownDirective];

// Shared Components: Declare and export
import { LoaderComponent } from './components/loader/loader.component';

// import { BtnDropdownComponent } from './components/btn-dropdown/btn-dropdown.component';

const cmps = [
  LoaderComponent,
  // BtnDropdownComponent,
];

@NgModule({
  imports: [...modules],
  declarations: [...pipes, ...directives, ...cmps],
  exports: [...modules, ...pipes, ...directives, ...cmps],
})
export class SharedModule {}
