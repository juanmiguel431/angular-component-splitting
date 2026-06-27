import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    // '(click)': 'onClick($event)'
  }
})
export class ControlComponent {
  // @HostBinding('class') private className = 'control';

  public label = input.required<string>();

  @HostListener('click', ['$event'])
  protected onClick(event: MouseEvent) {
    console.log('Control clicked', event);
  }
}
