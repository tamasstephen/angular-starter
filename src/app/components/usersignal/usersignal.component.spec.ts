import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersignalComponent } from './usersignal.component';

describe('UsersignalComponent', () => {
  let component: UsersignalComponent;
  let fixture: ComponentFixture<UsersignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
