import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  private authService = inject( AuthService )

  public user = computed( ()=> this.authService.currentUser())

  onLogout() {
    this.authService.logout()
  }
}
