import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction  } from '@angular/fire/firestore';
import { exit } from 'process';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public identity;
  public Post_collection;
  public Posts: any;
  public taskCollection;
  public id: string = '';
  constructor(  private _afs:AngularFirestore) {}

  getTasksByStatus(status: string, user: string){
    
    return this._afs.collection('Tasks', ref => ref
                    .where('status', '==', status)
                    .where('user', '==', user)).snapshotChanges();    
  }

  saveTask(task){
    this._afs.collection('Tasks').add(task)
        .then(res => {
            console.log(res);            
        })
        .catch(e => {
            console.log(e);
        })

  }

  updateDoc(id: string, status: string) {    
      
    console.log('id',id);
    console.log('status',status);
    this._afs.collection('Tasks').doc(id).update({ status: status }); 
       
  }

    
    
 
  
}
