import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Idle, WindowInterruptSource } from '@ng-idle/core';

class CustomInterrup extends WindowInterruptSource {
  protected override filterEvent(event: any): boolean {
    console.log(event);
    return false;
  }
}

@Component({
  selector: 'cegeka-user-idle',
  templateUrl: './user-idle.component.html',
  styleUrls: ['./user-idle.component.scss']
})
export class UserIdleComponent implements OnInit {
  // some fields to store our state so we can display it in the UI
  idleState = 'NOT_STARTED';
  countdown?: number = undefined;
  lastPing?: Date = undefined;

  // add parameters for Idle and Keepalive (if using) so Angular will inject them from the module
  constructor(private idle: Idle, keepalive: Keepalive, cd: ChangeDetectorRef, private element: ElementRef) {
    // set idle parameters
    idle.setIdle(3); // how long can they be inactive before considered idle, in seconds
    idle.setTimeout(4); // how long can they be idle before considered timed out, in seconds

    //Custom created interruption checker
    idle.setInterrupts([new CustomInterrup('mousedown')]);
    //Much more sensible default interruption checker
    // idle.setInterrupts(DEFAULT_INTERRUPTSOURCES); // provide sources that will "interrupt" aka provide events indicating the user is active

    // do something when the user becomes idle
    idle.onIdleStart.subscribe(() => {
      this.idleState = 'IDLE';
    });
    // do something when the user is no longer idle
    idle.onIdleEnd.subscribe(() => {
      this.idleState = 'NOT_IDLE';
      console.log(`${this.idleState} ${new Date()}`);
      this.countdown = undefined;
      cd.detectChanges(); // how do i avoid this kludge?
    });

    idle.onTimeoutWarning.subscribe(seconds => this.countdown = seconds);
    idle.onTimeout.subscribe(() => this.idleState = 'TIMED_OUT');

    // set keepalive parameters, omit if not using keepalive
    keepalive.interval(15); // will ping at this interval while not idle, in seconds
    keepalive.onPing.subscribe(() => this.lastPing = new Date()); // do something when it pings
  }

  reset() {
    // we'll call this method when we want to start/reset the idle process
    // reset any component state and be sure to call idle.watch()
    this.idle.watch();
    this.idleState = 'ACTIVE';
    this.countdown = undefined;
    this.lastPing = undefined;
  }

  ngOnInit(): void {
    // right when the component initializes, start reset state and start watching
    this.reset();
  }
}
