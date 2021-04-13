import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


// import { TranslateModule } from '@ngx-translate/core';
import { StatModule } from '../shared/modules/stat/stat.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { Screen2Component } from './screen2/screen2.component';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        
        StatModule
    ],
    declarations: [
        Screen2Component, 
        LayoutComponent, 
        TopnavComponent, 
        SidebarComponent, 
    ],
    exports: [
        StatModule
    ]

})
export class LayoutModule { }
