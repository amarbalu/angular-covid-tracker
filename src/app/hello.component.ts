import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  template: `<nav class="navbar navbar-expand-sm  navbar-light navbarStyle">
<img class="img-fluid" src="https://t3.ftcdn.net/jpg/03/32/30/52/240_F_332305234_J5iGGvfkE7fqJThWQagKyK4IZMMMrYh1.jpg" alt="logo" style="height:100px;margin:0 auto;"/>
</nav>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
