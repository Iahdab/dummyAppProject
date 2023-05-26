import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Store, StoreModule } from '@ngrx/store';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppState } from 'src/store/AppState';
import { lodaingReducer } from 'src/store/loading/loading.reducers';
import { recoverPassword } from 'src/store/login/Login.actoins';
import { loginReducer } from 'src/store/login/login.reducers';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;
  let page;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
        StoreModule.forRoot([]),
        StoreModule.forFeature("loading", lodaingReducer),
        StoreModule.forFeature("login", loginReducer)
      
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    router=TestBed.get(Router);
    store = TestBed.get(Store);
    


    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should create form on init', ()=>{
    component.ngOnInit();
    expect(component.form).not.toBeUndefined();
  })

 it('should go to home page after login',()=>{
  spyOn(router, 'navigate');
  component.login();
  expect(router.navigate).toHaveBeenCalledWith(['home'])
 })

 it('should go to register page pressing register button',()=>{
  spyOn(router, 'navigate');
  component.register();
  expect(router.navigate).toHaveBeenCalledWith(['register'])
 })

 it('should recover email/password on forgot email/password',()=>{
// start page
fixture.detectChanges();
// user set vaild email
component.form.get('email').setValue("valid@email.com");
// user clicked on forgot email/password button 
page.querySelector("#recoverPasswordButton").click();
//wxpact loginstate.isRecoveringPassword is true
store.select('login').subscribe(loginState =>{
  expect(loginState.isRecoveringPassword).toBeTruthy();
})

 })

 it("should show loading when recovering password",()=>{
  //start page
  fixture.detectChanges();
  //change isRecoveringPassword to true
  store.dispatch(recoverPassword());
  // verify loadingState.show == true
  store.select('loading').subscribe(loadingState =>{
    expect(loadingState.show).toBeTruthy();

  })
 })
 

 it("should hide loading and show success message when has recoverd password",()=>{
  // start
  // set login state as recovering password
  // set login state as recoverd passwored 
  
 })
});
