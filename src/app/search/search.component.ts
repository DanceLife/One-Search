import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  queryString: any;
  searchResults: any;
  apiLimitedExceeded: boolean; 

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.queryString = this.searchService.queryString;
    this.searchService.newQueryString
    .subscribe(
      (queryString)=>{
        this.queryString = queryString;
        console.log("new query string: ", this.queryString);
      });

    console.log("on init query string: ", this.queryString);
    
    this.searchResults = this.searchService.searchResults;
    this.searchService.newSearchResults
    .subscribe(
      (newSearchResults) =>
      {
        const message = newSearchResults.message ? newSearchResults.message : null;
        if(message){
            this.apiLimitedExceeded = true;
            this.searchResults = message;
          }else{
            this.searchResults = newSearchResults;
          }
      });
    
  }


}
