import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;

  displayedColumns: string[] = ['orgkey', 'name', 'country', 'graph'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.searchForm = this.fb.group({
      companyName: ['', Validators.required],
      country: ['']
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Company Name', form.value.companyName);
    console.log('Country', form.value.country);
    this.apiService.getData().subscribe(data => {
      console.log('data', data);
    });
  }

  showGraph(data: any) {
    console.log('Graph data', data);
  }
}

export interface PeriodicElement {
  orgkey: string;
  name: string;
  country: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { orgkey: 'Hydrogen', name: 'Hydrogen', country: 'Hydrogen' },
  { orgkey: 'Hydrogen', name: 'Helium', country: 'Hydrogen' },
  { orgkey: 'Hydrogen', name: 'Lithium', country: 'Hydrogen' },
  { orgkey: 'Hydrogen', name: 'Beryllium', country: 'Hydrogen' },
  { orgkey: 'Hydrogen', name: 'Hydrogen', country: 'Hydrogen' },
  { orgkey: 'Hydrogen', name: 'Helium', country: 'Hydrogen' },
  { orgkey: 'Hydrogen', name: 'Lithium', country: 'Hydrogen' },
  { orgkey: 'Hydrogen', name: 'Beryllium', country: 'Hydrogen' },
  { orgkey: 'Hydrogen', name: 'Hydrogen', country: 'Hydrogen' },
  { orgkey: 'Hydrogen', name: 'Helium', country: 'Hydrogen' },
  { orgkey: 'Hydrogen', name: 'Lithium', country: 'Hydrogen' },
  { orgkey: 'Hydrogen', name: 'Beryllium', country: 'Hydrogen' },
  { orgkey: 'Hydrogen', name: 'Hydrogen', country: 'Hydrogen' },
  { orgkey: 'Hydrogen', name: 'Helium', country: 'Hydrogen' },
  { orgkey: 'Hydrogen', name: 'Lithium', country: 'Hydrogen' },
  { orgkey: 'Hydrogen', name: 'Beryllium', country: 'Hydrogen' }
];
