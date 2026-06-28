
export type ServerStatus = 'online' | 'offline' | 'unknown';

export type Ticket = {
  id: string;
  title: string;
  request: string;
  status: 'open' | 'closed';
}

export type TicketFormDto = {
  title: string;
  request: string;
}
