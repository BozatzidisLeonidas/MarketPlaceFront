import { Component } from '@angular/core';
import { ClickOutsideDirective } from './clickOutside.directive';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [],
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  isDropdownOpen=false;

  toggleDropdown(): void{
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  clickedOutside(): void{
    this.isDropdownOpen = false;
  }

}
