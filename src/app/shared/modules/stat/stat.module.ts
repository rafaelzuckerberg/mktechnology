import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from './stat.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { TranslateModule } from '@ngx-translate/core';
import { CepDirective } from '../../directives/cep.directive';
import { MoneyDirective } from '../../directives/money.directive';
import { CpfDirective } from '../../directives/cpf.directive';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DateDirective } from '../../directives/date.directive';

@NgModule({
    imports: [
        CommonModule, 
        MatCardModule, 
        MatGridListModule, 
        MatIconModule,

        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatSnackBarModule,
        MatBadgeModule,
        MatCheckboxModule,

        TranslateModule,        
    ],
    declarations: [
        StatComponent, 
        CepDirective, 
        MoneyDirective, 
        CpfDirective, 
        DateDirective
    ]
        ,
    exports: [
        StatComponent,
        MatTableModule,
        MatGridListModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        MatIconModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatSnackBarModule,
        MatBadgeModule,
        MatCheckboxModule,

        TranslateModule,

        CepDirective,
        MoneyDirective,
        CpfDirective,
        DateDirective
    ]
})
export class StatModule {}
