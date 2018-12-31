import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  breakpoint: any;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
}

onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
}
}
