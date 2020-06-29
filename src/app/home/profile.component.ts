import { Component } from '@angular/core';
import { StateService } from '../shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(private router: Router, public stateService: StateService) { }

  public setAge(value: string): void {
    this.stateService.state.profileAge = +value;
  }

  public setPlate(value: string): void {
    this.stateService.state.carPlate = +value;
  }

  public continue(): void {
    const route = this.stateService.redirectUrl;
    this.stateService.redirectUrl = null;
    this.router.navigateByUrl(route);

  }
}
