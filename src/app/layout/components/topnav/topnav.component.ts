import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

    public pushRightClass: string;
    public countItem = null;

    constructor(public router: Router, private translate: TranslateService, private service: ProductService, private _service: UserService) {
        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
        this.service.itemEvent.subscribe(event => {
            if(event) {
                this.countItem++;
            } else {
                this.countItem = null;
            }
        });
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
    

    onLoggedout() {
        this._service.logout()
            .then(()=> {
                localStorage.clear();
                this.router.navigate(['/login']);
            });
    }


    changeLang(language: string) {
        this.translate.use(language);
    }
}
