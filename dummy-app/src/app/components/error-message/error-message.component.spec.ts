import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ErrorMessageComponent } from './error-message.component';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Should  show error message on field touche and error present',()=>{
    component.field= new FormGroup({anyField: new FormControl()});
    component.field.markAsTouched();
    component.field.setErrors({anyerror:true});
    component.error="anyError";

    expect(component.ShouldShowComponent()).toBeTruthy();
  }
  )

  it('Should hide error message on field not touche ',()=>{
    component.field= new FormGroup({anyField: new FormControl()});
   
    component.field.setErrors({anyerror:true});
    component.error="anyError";

    expect(component.ShouldShowComponent()).toBeFalsy();
  }
  )

  it('Should hide error message on field touche, but no errors',()=>{
    component.field= new FormGroup({anyField: new FormControl()});

    component.field.markAsTouched();
    component.error="anyError";

    expect(component.ShouldShowComponent()).toBeFalsy();
  }
  )
  it('Should hide error message on field touche and hass error, but it is a different error',()=>{
    component.field= new FormGroup({anyField: new FormControl()});

    component.field.markAsTouched();
    component.error="anotherError";

    expect(component.ShouldShowComponent()).toBeFalsy();
  }
  )
});
