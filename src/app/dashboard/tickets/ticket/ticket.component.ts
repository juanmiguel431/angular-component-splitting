import { Component, input } from '@angular/core';
import { Ticket } from '../../../models';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  item = input.required<Ticket>();
}
