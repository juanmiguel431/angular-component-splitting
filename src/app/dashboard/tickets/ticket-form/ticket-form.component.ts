import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit, output,
  QueryList,
  viewChild,
  ViewChild,
  viewChildren,
  ViewChildren
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { TicketFormDto } from '../../../models';

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
export class TicketFormComponent implements OnInit, AfterViewInit {
  @ViewChild('form')
  private formByDecorator?: ElementRef<HTMLFormElement>;

  // @ViewChildren(ControlComponent)
  // private controls?: QueryList<ControlComponent>;

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  private controls = viewChildren(ControlComponent);

  public submit = output<TicketFormDto>();

  ngOnInit(): void {
    console.log('On init');
    console.log(this.form()); // Populated
    console.log(this.formByDecorator); // Undefined
  }

  ngAfterViewInit(): void {
    console.log('After view init');
    console.log(this.form()) // Populated
    console.log(this.formByDecorator); // Populated
  }

  protected submitForm(title: string, request: string) {
    console.log({ title: title, request: request });

    this.form().nativeElement.reset();

    console.log(this.controls())

    this.submit.emit({ title, request });
  }
}
