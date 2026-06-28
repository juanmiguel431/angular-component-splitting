import { Component, input, signal } from '@angular/core';
import { Ticket } from '../../../models';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  public item = input.required<Ticket>();

  protected showDetails = signal(false);

  protected toggleShowDetails() {
    this.showDetails.update((value) => !value);
  }
}
