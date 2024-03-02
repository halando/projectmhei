import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{
  user: User = { username: '', email: '', password: '' };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.register(this.user).subscribe();
  }

}
