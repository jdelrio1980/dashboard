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
  public status;
  public id;
   

  constructor(  private _taskService: TaskService,
                private _userService: UserService) {
                this.identity = this._userService.getIdentity();
                this.status = ['Nueva','En Progreso','Terminada'];
                }

  ngOnInit(): void {
    
      this._taskService.getTasksByStatus('Nueva',this.identity.email).subscribe(
       (response: any) => {        
        
        let objeto: any;
        let task: Task;

        response.forEach(element => {
          objeto =  element.payload.doc._delegate._document.data.value.mapValue.fields;          
          task = {
            id:  element.payload.doc.id,
            title: objeto.title.stringValue,
            description:objeto.description.stringValue,
            status: objeto.status.stringValue,
            user: objeto.user.stringValue
          };
          
          this.tasksToDo.push(task);
        }); 
       }
     );

     this._taskService.getTasksByStatus('En Progreso',this.identity.email).subscribe(
      (response: any) => {   

        let objeto: any;
        let task: Task;

        response.forEach(element => {
          objeto =  element.payload.doc._delegate._document.data.value.mapValue.fields;          
          task = {
            id:  element.payload.doc.id,
            title: objeto.title.stringValue,
            description:objeto.description.stringValue,
            status: objeto.status.stringValue,
            user: objeto.user.stringValue
          };
          
          this.tasksInProgress.push(task);
        }); 




      }
    );
    
    this._taskService.getTasksByStatus('Terminada',this.identity.email).subscribe(
      (response: any) => {        
        let objeto: any;
        let task: Task;

        response.forEach(element => {
          objeto =  element.payload.doc._delegate._document.data.value.mapValue.fields;          
          task = {
            id:  element.payload.doc.id,
            title: objeto.title.stringValue,
            description:objeto.description.stringValue,
            status: objeto.status.stringValue,
            user: objeto.user.stringValue
          };
          
          this.tasksDone.push(task);
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
    console.log('event',event);
    debugger;
    /*let idx=event.container.data.indexOf(event.previousContainer.data[event.previousIndex]);
    console.log('idx',idx)
    if(idx != -1){
      return;//if item exist
    }
    */
/*    this.data[event.previousContainer.data.index]={...event.container.data.item}
    this.data[event.container.data.index]={...event.previousContainer.data.item}
    event.currentIndex=0;
*/
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log('moveItemInArray');
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      console.log('transferArrayItem');
    }
    
   
    let ArrList = event.container.id.split('-');
    let numContenedor=ArrList[ArrList.length-1];
    let numEle=event.container.data.length;
    console.log('num Ele',numEle);
    console.log('numContenedor',numContenedor);
    
    let idTaskUpd;
    for(let i=0;i<numEle;i++){      
      if(event.container.data[i]['status'] !== this.status[numContenedor]){
        idTaskUpd = event.container.data[i]['id'];  
      }
    }
    
    this._taskService.updateDoc(idTaskUpd,this.status[numContenedor]);

    }

  }


