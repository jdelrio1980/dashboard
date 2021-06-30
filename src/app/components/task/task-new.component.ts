import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css'],
  providers: [UserService] 
})
export class TaskNewComponent implements OnInit {

  forma: FormGroup;
  public identity;

  constructor(private fb: FormBuilder,
              private _userService: UserService,
              private _taskService: TaskService) { 

    this.identity = this._userService.getIdentity();
    this.crearFormulario();
    console.log(this.identity.email);
    
  }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.forma = this.fb.group({
      title: ['',[Validators.required,Validators.minLength(10)]],
      description: ['',[Validators.required]],
      status: ['',[Validators.required]],
      user:['',[Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),Validators.required]]
    });

    this.forma.get('user').setValue(this.identity.email);
    this.forma.get('status').setValue('Nueva');
  }

  guardar(){
    console.log(this.forma.controls);
    if(this.forma.invalid){
      return Object.values(this.forma.controls).forEach(control => {
        //console.log(control);
        if(control instanceof FormGroup){
          Object.values(control.controls).forEach(control => control.markAsTouched() );
        }else{
            control.markAsTouched();
        }        
      });
    }
    
    //Posteo de informacion, aqui va el llamado al servicio web

    this._taskService.saveTask({
      id: Math.floor(Date.now()/1000),
      title:this.forma.controls.title.value,
      description: this.forma.controls.description.value,
      status: this.forma.controls.status.value,
      user: this.forma.controls.user.value
    });
    
    


    this.forma.reset({      
      status: 'Nueva',
      user: this.identity.email      
  });
  }



  get titleNoValid(){
    return this.forma.get('title').invalid && this.forma.get('title').touched

  }

  get descriptionNoValid(){
    return this.forma.get('description').invalid && this.forma.get('description').touched

  }


  get statusNoValid(){
    return this.forma.get('status').invalid && this.forma.get('status').touched

  }


  get userNoValid(){
    return this.forma.get('user').invalid && this.forma.get('user').touched

  }

}


