import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoaderPage } from './loader.page';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let router : Router; 
  let fixture: ComponentFixture<LoaderPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderPage ],
      imports: [IonicModule.forRoot()
      ,AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderPage);
    router= TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => { expect(component).toBeTruthy();});

  it('should go to login page after the loader page',fakeAsync(()=>{
   spyOn(router,'navigate')
    component.ngOnInit();
    tick(2000);
    expect(router.navigate).toHaveBeenCalledWith(['login'])
  }));

});
