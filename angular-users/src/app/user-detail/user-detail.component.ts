import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user';
import { UserService }  from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input()user!: User;
  
  constructor(
    private route: ActivatedRoute,
  private userService: UserService,
  private location: Location
  ) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
     
     this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.userService.updateUser(this.user)
      .subscribe(() => this.goBack());
  }

}
