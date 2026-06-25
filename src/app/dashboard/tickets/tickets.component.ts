import { Component } from '@angular/core';
import { TicketFormComponent } from './ticket-form/ticket-form.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [
    TicketFormComponent
  ],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

}
