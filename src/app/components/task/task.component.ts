import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task.interface';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [UserService] 
})
export class TaskComponent implements OnInit {

  //public tasks: Task[]= [];
  public tasksToDo: Task[]= [];
  public tasksInProgress: Task[]= [];
  public tasksDone: Task[]= [];
  public identity;
  public status ;
   

  constructor(  private _taskService: TaskService,
                private _userService: UserService) {
                this.identity = this._userService.getIdentity();
                this.status = ['Nueva','En Progreso','Terminada'];
                }

  ngOnInit(): void {
    
      this._taskService.getTasksByStatus('Nueva',this.identity.email).subscribe(
       (response: any) => {        
        response.forEach(element => {
          this.tasksToDo.push(element);
        }); 
       }
     );

     this._taskService.getTasksByStatus('En Progreso',this.identity.email).subscribe(
      (response: any) => {        
        console.log(response );
       response.forEach(element => {         
         this.tasksInProgress.push(element);
       }); 
      }
    );
    
    this._taskService.getTasksByStatus('Terminada',this.identity.email).subscribe(
      (response: any) => {        
       response.forEach(element => {
         this.tasksDone.push(element);
       }); 
      }
    );

  }
  
  /*
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
  */
   drop(event: CdkDragDrop<string[]>) {
    
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    // 1. SAbiendo que con los id tenemos 0-> todo 1-> progress 2-> terminado
    // 2. buscar el destino event.container.id
    let ArrList = event.container.id.split('-');
    let numContenedor=ArrList[ArrList.length-1];
    
    //3. Recorrer event.container.data[].status
    for(let i=0;i<event.container.data.length;i++){
      if(event.container.data[i]['status'] !== this.status[numContenedor]){
        let idTaskUpd = event.container.data[i]['id'];  
       
        let idDocUpd = this._taskService.getIdAfs(idTaskUpd);
        console.log('Desde Componente');        
        console.log(idDocUpd);
        //hbgaQGFthis._taskService.updateDoc(idDocUpd,this.status[numContenedor]);
      }
    }
    

  }

}


