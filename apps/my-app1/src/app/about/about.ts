import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  private readonly httpClient = inject<HttpClient>(HttpClient);
  
  public ngOnInit(): void {
    this.httpClient.get("https://nx-nestjs-five.vercel.app/api/user")
      .subscribe((result) => {
        console.log(result);
      });
  }
}
