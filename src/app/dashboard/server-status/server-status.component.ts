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
}
