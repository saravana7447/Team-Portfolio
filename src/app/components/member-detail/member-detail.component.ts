import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Member } from '../../models/member.model';
import { MemberService } from '../../services/member.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class MemberDetailComponent implements OnInit {
  member: Member | undefined;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private memberService: MemberService
  ) {}

  openLink(url: string): void {
    window.open(url, '_blank');
  }

  sendEmail(email: string): void {
    window.location.href = `mailto:${email}`;
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.memberService.getMemberById(id).subscribe(member => {
        this.member = member;
        this.loading = false;
        if (!member) {
          this.router.navigate(['/']);
        }
      });
    } else {
      this.router.navigate(['/']);
    }
  }

}