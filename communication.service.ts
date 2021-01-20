import { Injectable ,EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  id: number;
  name:string;
     
     
    receivedFilter: EventEmitter<string>;
    constructor() {
        this.receivedFilter = new EventEmitter<string>();
    }
    // 2
    raiseEvent(name: string): void {
        this.name=name;
        this.receivedFilter.emit(name);
    }

  
}
