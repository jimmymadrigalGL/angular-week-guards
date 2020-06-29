import { Component, HostListener } from '@angular/core';
import { StateService } from './shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  public isExpanded = true;
  public isShowing = false;

  // @HostListener allows us to also guard against browser refresh, close, etc.
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    this.stateService.saveState();
  }

  constructor(private router: Router, public stateService: StateService) { }

  public mouseenter(): void {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  public mouseleave(): void {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  public toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }


  public toggleMaskOn(): void {
    this.stateService.state.maskOn = !this.stateService.state.maskOn;
  }

  public toggleHandsWashed(): void {
    this.stateService.state.handsWashed = !this.stateService.state.handsWashed;
  }


  public clear(): void {
    this.stateService.defaultState();
    this.router.navigate(['/home/profile']);
  }
}
