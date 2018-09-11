import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { SearchService } from "../../search/search.service";

@Component({
    selector: 'app-navigation',
    templateUrl: 'navigation.component.html',
    styleUrls: [ 'navigation.component.scss' ]
})
export class NavigationComponent implements OnInit{
    
    searchForm: FormGroup;
    queryString = new FormControl();
    
    constructor(private router: Router, private searchService: SearchService){}

    ngOnInit(): void {
        this.searchForm = new FormGroup({
            'queryString': this.queryString
        })
        this.searchService.newQueryString.next(this.queryString) 
    }

    OnSearch(){
        this.searchService.runSearch(this.queryString);
        //console.log(this.queryString);
        this.searchForm.reset();
        //(<FormControl>this.searchForm.controls["queryString"]) = null;
        this.router.navigate(["/Search"]);
    }

}