import { Component } from '@angular/core';
import { ServerStatus } from '../../models';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  protected currentStatus: ServerStatus = 'offline';

  constructor() {
    setInterval(() => {
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
  }
}
