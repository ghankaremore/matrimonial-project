import { Component, OnInit } from '@angular/core';
// import { ReplyService } from './reply.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  newReplyNotification = false;

  constructor(private replyService: ReplyService) {}

  ngOnInit(): void {
    const rid = sessionStorage.getItem('rid');
    if (rid) {
      this.replyService.checkForNewReplies(rid).subscribe(response => {
        if (response.hasNewReplies) {
          this.newReplyNotification = true;
          this.showNewReplyToast();
        }
      });
    }
  }

  showNewReplyToast(): void {
    Swal.fire({
      title: 'New Notification',
      text: 'You have a new reply from admin!',
      icon: 'info',
      timer: 5000,
      showConfirmButton: false
    });
  }
}
