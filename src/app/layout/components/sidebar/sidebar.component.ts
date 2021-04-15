import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    public showMenu: string;
    public user = {}
    public uid: string;

    constructor(private service: UserService) {
        this.service.userLogged.subscribe(user => {
            console.log(user)
            this.uid = user['user']['uid'];        
        });
    }

    ngOnInit() {
        this.showMenu = '';
        console.log(this.uid)
        this.service.getCustomers()
            .subscribe(res => {
                res.forEach(item => {
                    if(item.id == this.uid) {                        
                        this.user = item;
                    }
                })
            });
    }


    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
