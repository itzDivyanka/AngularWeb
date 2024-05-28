import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(userId).subscribe(user => {
      this.user = user;
    });
  }

  editProfile() {
    this.router.navigate(['/register', this.user.id]);
  }

  editPhoto() {
    
  }
}
