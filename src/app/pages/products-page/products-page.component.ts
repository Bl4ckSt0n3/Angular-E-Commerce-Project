import { AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import { FormControl, Validator, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';
import { MessageService } from 'src/app/services/message.service';
import { FilterModalComponent } from './filter-modal/filter-modal.component';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  searchForm = new FormGroup({
    cardTitle: new FormControl('')
  });

  filterForm = new FormGroup({
    category: new FormControl('Not Selected', [Validators.required]),
  });

  filterTerm!: string;
  templists :any[];
  filteredValues = {
    cardTitle:"",
  }; 

  items = [
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0 Card title 0 Card title 0 Card title 0  Card title 0  Card title 0",
      price: 100,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 86.90,
      category: "Pipe"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 67.25,
      category: "Wood"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 3.57,
      category: "Electric"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 41.90,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 99.90,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 71.50,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 60.00,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 32.00,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 32.00,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 32.00,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 32.00,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 32.00,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 32.00,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 32.00,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 32.00,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 60.00,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 19.90,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 49.90,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 352.90,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 34.00,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 11.45,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 7.25,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 26.75,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 42.35,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 17.99,
      category: "Steel"
    },
    {
      cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardTitle: "Card title 0",
      price: 21.00,
      category: "Steel"
    },
  ]; 


  p: number = 1;
  onPageChange(page: number) {
    this.p = page;
    window.scrollTo(0, 0);
 }

  categoryDefaultOption: string = "Not Selected";
  onChangeOfCategoryOptions(newGov: any) {

    if(newGov === "pipe") {
      for (let index = 0; index <= this.items.length; index++) {
        
        if(this.items[index].category == "Pipe") {
          continue;
        }
        else if(this.items[index].category == "Wood" || this.items[index].category === "Electric" || this.items[index].category === "Steel") {
          this.items.splice(this.items.indexOf(this.items[index]), 1);
        }
      }
      // this.items.forEach(element => {
      //   if(element.category == "Pipe") {
      //     this.items.splice(this.items.indexOf(element), 1);
      //   }
      // });
    }
    console.log(this.items);
  }

  defaultOption: string = "Not Selected";
  onChangeofOptions(newGov: any) {
    if(newGov == "ascending") {
      this.templists.sort((a, b) => {return a.price - b.price});
    }
    if(newGov == "descending") {
      this.templists.sort((a, b) => {return b.price - a.price});
    }
  }

  goDetail(cardText: string, cardTitle: string, price: any, category: string, path: string) {
    const detailData = {
      "cardTitle": cardTitle,
      "cardText": cardText,
      "price": price,
      "category": category
    }
    this.messageService.setDataObs(detailData);

    this.router.navigate(
      ['/products/Card Title 0'],
      { queryParams: { order: 'category', 'category': detailData.category } } //, queryParamsHandling: 'merge'
    );
  }

  filterPopup() {
    this.modalService.open(FilterModalComponent);
  }


  myFilterPredicate = (data:any): boolean => {
    let searchString = this.filteredValues; 
    return (searchString.cardTitle===""?true:data.cardTitle.toString().trim().indexOf(searchString.cardTitle)!==-1)
  }
  constructor(
    // private elementRef: ElementRef,
    private ser: LoginService,
    private router: Router,
    private messageService: MessageService,
    private modalService: NgbModal
  ) { 
    this.templists = this.items;
  }
  // ngAfterViewInit() {
  //   this.elementRef.nativeElement.ownerDocument
  //       .body.style.backgroundColor = '#fff';
  // }

  ngOnInit(): void {
    this.searchForm.get("cardTitle")?.valueChanges.subscribe((filter_data) => {
      this.filteredValues["cardTitle"] = filter_data;
      this.templists = this.items.filter(this.myFilterPredicate);
    })
  }

  get() {
    this.ser.getSomeone().pipe(first()).subscribe(
      d => {
        console.log(d);
      }
    )
  }
}
