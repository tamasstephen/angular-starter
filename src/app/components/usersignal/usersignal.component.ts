import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-usersignal',
  imports: [],
  templateUrl: './usersignal.component.html',
  styleUrl: './usersignal.component.scss',
})
export class UsersignalComponent {
  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser() {
    console.log('Clicked...');
  }
}
