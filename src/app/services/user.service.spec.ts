import { TestBed } from '@angular/core/testing';
import { UserService } from '../services/user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';



describe('UserService', () => {
    let httpTestingController: HttpTestingController;
    let userService: UserService;
    let httpClientSpy: {get: jasmine.Spy};

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports:[HttpClientTestingModule],
        providers:[UserService]
      });
      httpTestingController = TestBed.inject(HttpTestingController);
      userService = TestBed.inject(UserService);
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    });
  
    // Se libera el espia despues de cada prueba
    afterEach(() =>  httpTestingController.verify());

    it('should set url from global services',()=>{
        expect(userService.url).toBeDefined();
    });

    

  
  });
  