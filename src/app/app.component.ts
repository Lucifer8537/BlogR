import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './mobile.component.css'],
})
export class AppComponent implements OnInit {
  width!: number;
  mobileView!: boolean;
  menu = false;
  product!: boolean;
  connect!: boolean;
  company!: boolean;
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  constructor(private cdr: ChangeDetectorRef) {}
  submenu() {
    this.trigger.openMenu();
    console.log('trigger : ', this.trigger);
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = screen.width;
    // console.log('width : ', this.width);
    this.mobileView = this.width < 679 || window.innerWidth < 679;
    // console.log('mobileView : ', this.mobileView);
    console.log('screen : ', screen.width);
    console.log('window : ', window.innerWidth);
  }
  ngOnInit(): void {
    this.connect = false;
    this.product = false;
    this.company = false;
    this.onResize();
  }
  onClickMenu = () => {
    this.menu = !this.menu;
  };
  onClickConnect = () => {
    this.connect = !this.connect;
  };
  onClickProduct = () => {
    this.product = !this.product;
  };
  onClickCompany = () => {
    this.company = !this.company;
  };
}
