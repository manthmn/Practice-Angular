import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService {
    accounts = [
      {
        name: 'Master Account',
        status: 'active'
      },
      {
        name: 'Testaccount',
        status: 'inactive'
      },
      {
        name: 'Hidden Account',
        status: 'unknown'
      }
    ];

    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService){}
  
    addAccount(newAccount: {name: string, status: string}) {
      this.accounts.push(newAccount);
      this.loggingService.statusLogging(newAccount.status);
    }
  
    changeStatus(updateInfo: {id: number, newStatus: string}) {
      this.accounts[updateInfo.id].status = updateInfo.newStatus;
      this.loggingService.statusLogging(updateInfo.newStatus);
    }
  }