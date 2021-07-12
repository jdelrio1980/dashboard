import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { UserService } from '../../services/user.service';



describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let _userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent,
                      { provide: UserService },
                    ]
      

      
    })
    .compileComponents();
    _userService = TestBed.inject(UserService);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should the server return error on Login', (done: DoneFn) => {
    
    let fakeData;
    fakeData ={"email":"aprendix@hotmail.com","password":"123"};

    _userService.signup(fakeData).subscribe((response) =>{
      console.log('response',response);
      expect(response.status).toBe('error');
      done();
    });
    //  

    
  });
});
