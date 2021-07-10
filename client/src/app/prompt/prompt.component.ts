import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromptComponent {
  constructor(public auth: AuthService) {}
}
