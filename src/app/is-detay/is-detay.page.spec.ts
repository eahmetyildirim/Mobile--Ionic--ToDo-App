import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsDetayPage } from './is-detay.page';

describe('IsDetayPage', () => {
  let component: IsDetayPage;
  let fixture: ComponentFixture<IsDetayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsDetayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsDetayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
