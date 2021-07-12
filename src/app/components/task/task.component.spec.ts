import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskService } from '../../services/task.service';
import { TaskComponent } from './task.component';
import { UserService } from '../../services/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

class MockTaskService{    
    id: '1625084381'; 
    description:'Descripcion de las necesidades';
    status:'Terminada';
    user:'admin@admin.com';
    }



  describe('TaskComponent', () => {
    let component: TaskComponent;
    let fixture: ComponentFixture<TaskComponent>;
    let taskService: TaskService;
    let angularFirestore: AngularFirestore;
    
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ TaskComponent ],
        providers:[
            TaskComponent, 
            UserService
            
                    ]
        // Failed: R3InjectorError(DynamicTestModule)[WelcomeComponent -> UserService -> HttpClient -> HttpClient]: 
        // NullInjectorError: No provider for HttpClient!
        // providers:[WelcomeComponent, UserService]
      })
      .compileComponents();
      component = TestBed.inject(TaskComponent);
      taskService = TestBed.inject(TaskService);
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(TaskComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    xit('shoud obtain Terminated task',()=>{
        component.ngOnInit();
        expect(component.tasksDone.length).toBeGreaterThan(0);

    });

   
  });
  