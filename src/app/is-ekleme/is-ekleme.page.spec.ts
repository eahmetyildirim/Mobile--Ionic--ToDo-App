import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsEklemePage } from './is-ekleme.page';

describe('IsEklemePage', () => {
  let component: IsEklemePage;
  let fixture: ComponentFixture<IsEklemePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsEklemePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsEklemePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
