import { Component, input, output, signal } from '@angular/core';
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

  public onCompleted = output<void>();

  protected toggleShowDetails() {
    this.showDetails.update((value) => !value);
  }

  protected markAsCompleted() {
    this.onCompleted.emit();
  }
}
