import {
  Component,
  contentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick($event)'
  }
})
export class ControlComponent {
  // @HostBinding('class') private className = 'control';
  private element = inject(ElementRef);
  public label = input.required<string>();

  private content = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  // @HostListener('click', ['$event'])
  protected onClick(event: MouseEvent) {
    console.log('Control clicked', event);
    console.log(this.element);

    console.log(this.content()?.nativeElement);
  }
}
