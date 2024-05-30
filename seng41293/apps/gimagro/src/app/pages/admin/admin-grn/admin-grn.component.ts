import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../services/app/app.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'seng41293-admin-grn',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './admin-grn.component.html',
  styleUrls: ['./admin-grn.component.scss']
})
export class AdminGrnComponent {
  //How you communicate from the parent
  @Input({required: true}) label!:string;

  //To Do: How you communicate back with the parent
  // @Output() update = new EventEmitter<string>();

  constructor(protected appService: AppService) {}
}