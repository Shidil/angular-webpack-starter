import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.less']
})
export class DashboardItemComponent implements OnInit {
  @Input() text;

  constructor() { }

  ngOnInit() {
  }

}
