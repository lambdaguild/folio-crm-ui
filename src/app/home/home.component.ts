import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  activeLinkIndex = -1; 
  background: ThemePalette = 'primary';
  links = ['accounts', 'client-list', 'shareclass'];
  activeLink = this.links[0];



  constructor(private quoteService: QuoteService,
    private router: Router) {
    
  }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
    
  }
}
