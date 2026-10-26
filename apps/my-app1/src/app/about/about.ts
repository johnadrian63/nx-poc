import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from '@angular/core';
import { catchError, throwError } from "rxjs";

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  private readonly httpClient = inject<HttpClient>(HttpClient);

  public ngOnInit(): void {
    const API_URL = "https://nx-nestjs-five.vercel.app/api/user";

    this.httpClient.get(API_URL)
      .pipe(
        catchError((e) => {
          console.log(e);

          return throwError(() => e);
        })
      )
      .subscribe((result) => {
        console.log("Result:", result);
      });
  }
}
