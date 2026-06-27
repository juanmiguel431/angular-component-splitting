import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { ServerStatus } from '../../models';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  protected currentStatus: ServerStatus = 'offline';
  private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  // https://angular.dev/guide/components/lifecycle
  ngOnInit() {
    console.log('OnInit');

    this.interval = setInterval(() => {
      switch (this.currentStatus) {
        case 'offline':
          this.currentStatus = 'online';
          break;
        case 'online':
          this.currentStatus = 'unknown';
          break;
        default:
          this.currentStatus = 'offline';
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
