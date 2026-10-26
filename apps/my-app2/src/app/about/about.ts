import { Component } from '@angular/core';
import { MyLib } from '@org/my-lib';

@Component({
  selector: 'app-about',
  imports: [MyLib],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About { }
