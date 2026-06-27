import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [
    ButtonComponent,
    ControlComponent,
    FormsModule
  ],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent {
  @ViewChild('form')
  private form?: ElementRef<HTMLFormElement>;

  @ViewChildren(ControlComponent)
  private controls?: QueryList<ControlComponent>;

  protected submit(title: string, request: string) {
    console.log({ title: title, request: request });

    this.form?.nativeElement.reset();

    console.log(this.controls?.toArray())
  }
}
