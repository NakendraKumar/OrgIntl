import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { ShareDataService } from '../../share-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  orgkey: any;
  loader: boolean = false;
  results: any[];
  message: 'Fetching Data';
  displayedColumns: string[] = ['orgkey', 'name', 'country', 'graph'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private shareData: ShareDataService
  ) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.searchForm = this.fb.group({
      companyName: ['', Validators.required],
      country: ['']
    });
    console.log('loader', this.loader);
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Company Name', form.value.companyName);
    console.log('Country', form.value.country);
    this.loader = true;
    this.apiService
      .getData(form.value.companyName, form.value.country)
      .subscribe(
        data => {
          this.loader = false;
          console.log('data', data);
          this.dataSource = data['results'];
        },
        err => {
          this.loader = false;
          console.log('err', err);
        }
      );
  }

  showGraph(data: any) {
    this.router.navigate([`/graph`]);
    this.orgkey = data;
    console.log('Graph data', data);
  }

  ngOnDestroy() {
    this.shareData.node = this.orgkey;
  }
}

// export interface PeriodicElement {
//   orgkey: string;
//   name: string;
//   country: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { orgkey: 'Hydrogen', name: 'Hydrogen', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Helium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Lithium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Beryllium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Hydrogen', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Helium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Lithium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Beryllium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Hydrogen', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Helium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Lithium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Beryllium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Hydrogen', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Helium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Lithium', country: 'Hydrogen' },
//   { orgkey: 'Hydrogen', name: 'Beryllium', country: 'Hydrogen' }
// ];
