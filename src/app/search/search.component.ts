import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { UpperCasePipe } from '@angular/common'

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
        let formattedSearchResults = [];
        const message = newSearchResults.message ? newSearchResults.message : null;
        if(message){
            this.apiLimitedExceeded = true;
            this.searchResults = message;
          }else{
            for(let i=0; i< newSearchResults.items.length; i++){
              const thisItem = newSearchResults.items[i];
              const componentPath = thisItem.path.toString().substring(0,thisItem.path.lastIndexOf("/"));
              const componentNameLowerCase = componentPath.substring(componentPath.lastIndexOf("/")+1);
              const componentName = componentNameLowerCase.charAt(0).toUpperCase() + componentNameLowerCase.substr(1);
              const pageAddress = "https://dancelife.github.io/One-Search/" + componentName;
              formattedSearchResults.push(pageAddress);
            }
            console.log(formattedSearchResults);            
            this.searchResults = formattedSearchResults;

          }
      });
    
  }


}
