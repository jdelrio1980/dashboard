import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/firestore';
import { exit } from 'process';
import { map, catchError } from 'rxjs/operators';


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
    
    return  this._afs.collection('Tasks', ref => ref
                                    .where('status', '==', status)
                                    .where('user', '==', user)
                                ).valueChanges();
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

  async getIdAfs(id){    
    const docRef = this._afs.collection('Tasks', ref => ref.where("id", "==", id));

    docRef.snapshotChanges().forEach((changes) => {
      changes.map((a) => {        
        console.log('codigo='+a.payload.doc.id)
        this.id = a.payload.doc.id; 

        console.log(this.id);
      });      
    });  


  }

  updateDoc(id: string, status: string) {    
      
      this._afs.collection('Tasks').doc(id).update({ status: status });    
  }

    
    
 
  
}
