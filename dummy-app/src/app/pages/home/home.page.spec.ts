import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router; 
   

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    router= TestBed.get(Router); 
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

it('Should go to pickup-calls on see all ', () => {
  spyOn(router,'navigate');
  component.goToPickupCalls();
  expect(router.navigate).toHaveBeenCalledWith(['pickup-calls']);
})

it('Should go to new pickup call on create pickup call ', () => {
  spyOn(router,'navigate');
  component.newPickupCall();
  expect(router.navigate).toHaveBeenCalledWith(['pickup-call']);
})

});
