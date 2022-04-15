import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  // @Input() home: any;
  @Input() model: MenuItem[];
  
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log('model', this.model);
  }
}
