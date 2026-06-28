import { Component, signal } from '@angular/core';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { TicketFormDto, Ticket } from '../../models';
import { v4 as uuidv4 } from 'uuid';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [
    TicketFormComponent,
    TicketComponent
  ],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  protected tickets = signal<Ticket[]>([]);

  protected submitTicketForm(payload: TicketFormDto) {
    this.tickets.update(tickets => [
      ...tickets, {
        id: uuidv4(),
        ...payload,
        status: 'open'
      }]);

    console.log(this.tickets());
  }
}
