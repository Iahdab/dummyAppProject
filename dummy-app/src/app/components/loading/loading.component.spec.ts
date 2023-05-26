import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Store, StoreModule } from '@ngrx/store';
import { hide, show } from 'src/store/loading/loading.actions';
import { lodaingReducer } from 'src/store/loading/loading.reducers';

import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let store : Store;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ],
      imports: [
        IonicModule.forRoot(),
        StoreModule.forRoot([]),
        StoreModule.forFeature("loading", lodaingReducer)
      
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingComponent);
    store = TestBed.get(Store)
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('it should hide loading components when its not loading ', () => {
    const compiled = fixture.nativeElement;
    store.dispatch(hide());
    fixture.detectChanges();
    expect(compiled.qurySelected(".backdrop")).toBeNull();
  });

  it('it should show loading components when its  loading ', () => {
    const compiled = fixture.nativeElement;
    store.dispatch(show());
    fixture.detectChanges();

    expect(compiled.qurySelected(".backdrop")).not.toBeNull();
  });
});
