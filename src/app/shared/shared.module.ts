import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { LoaderComponent } from './loader/loader.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserProfileComponent } from './header/user-profile/user-profile.component';
import { ProfileImageComponent } from './profile-image/profile-image.component';
import { HomeComponent } from '../core/home/home.component';
import { GraphComponent } from '../core/graph/graph.component';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    FormsModule,
    MatTableModule,
    MatIconModule
  ],
  declarations: [
    LoaderComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    UserProfileComponent,
    ProfileImageComponent,
    HomeComponent,
    GraphComponent
  ],
  exports: [LoaderComponent]
})
export class SharedModule {}
