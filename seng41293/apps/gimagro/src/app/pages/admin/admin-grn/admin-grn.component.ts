import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../services/app/app.service';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngxs/store';
import { ChangeEmail, ShowLoading } from '../../../state/app/app.actions';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'seng41293-admin-grn',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './admin-grn.component.html',
  styleUrls: ['./admin-grn.component.scss']
})
export class AdminGrnComponent {
  email = '';
  //How you communicate from the parent
  @Input({required: true}) label!:string;

  //To Do: How you communicate back with the parent
  // @Output() update = new EventEmitter<string>();

  constructor(private store: Store) {}
  
  toggle(){
    this.store.dispatch(new ShowLoading(true))
  }

  emailChange(){
    this.store.dispatch(new ChangeEmail(this.email))
  }
}
