import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Member } from '../../models/member.model';
import { MemberService } from '../../services/member.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('cardHover', [
      state('normal', style({
        transform: 'scale(1) rotateY(0deg)',
        boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
      })),
      state('hovered', style({
        transform: 'scale(1.05) rotateY(5deg)',
        boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
      })),
      transition('normal <=> hovered', animate('300ms ease-in-out'))
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  members: Member[] = [];
  filteredMembers: Member[] = [];
  hoveredIndex: number = -1;
  searchQuery: string = '';
  private searchSubject = new Subject<string>();

  constructor(
    private memberService: MemberService,
    private router: Router
  ) {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(query => {
      this.performSearch(query);
    });
  }

  ngOnInit(): void {
    this.memberService.getMembers().subscribe(members => {
      this.members = members;
      this.filteredMembers = members;
    });
  }

  onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.searchSubject.next(query);
  }

  performSearch(query: string): void {
    if (!query) {
      this.filteredMembers = this.members;
      return;
    }
    this.memberService.searchMembers(query).subscribe(results => {
      this.filteredMembers = results;
    });
  }

  onMemberClick(memberId: number): void {
    if (!memberId) {
      console.error('Invalid member ID:', memberId);
      return;
    }
    console.log('Attempting to navigate to member:', memberId);
    
    try {
      this.router.navigateByUrl(`/member/${memberId}`).then(() => {
        console.log('Navigation completed successfully');
      }).catch(err => {
        console.error('Navigation failed:', err);
      });
    } catch (error) {
      console.error('Error during navigation:', error);
    }
  }

  onMouseEnter(index: number): void {
    this.hoveredIndex = index;
  }

  onMouseLeave(): void {
    this.hoveredIndex = -1;
  }

  getCardState(index: number): string {
    return this.hoveredIndex === index ? 'hovered' : 'normal';
  }
}