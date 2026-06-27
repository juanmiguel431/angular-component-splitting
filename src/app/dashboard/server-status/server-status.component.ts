import { Component, DestroyRef, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ServerStatus } from '../../models';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  protected currentStatus = signal<ServerStatus>('offline');
  private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  // https://angular.dev/guide/components/lifecycle
  ngOnInit() {
    console.log('OnInit');

    this.interval = setInterval(() => {
      console.log('Interval');
      switch (this.currentStatus()) {
        case 'offline':
          this.currentStatus.set('online');
          break;
        case 'online':
          this.currentStatus.set('unknown');
          break;
        default:
          this.currentStatus.set('offline');
          break;
      }
    }, 2000);

    this.destroyRef.onDestroy(() => clearInterval(this.interval));
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
    // clearInterval(this.interval);
  }
}
