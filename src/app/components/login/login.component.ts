import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import {Router,ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent implements OnInit {

  public page_title: string;
  public user: User;
  public status: string;
  public token;
  public identity;

  constructor(
    private _userService: UserService,
    private _router:Router,
    private _route: ActivatedRoute
  ) { 
    this.page_title = 'Identificate';
    this.user = new User(1, '','','','ROLE_USER','','','','');
  }

  ngOnInit(): void {
    // se ejecuta siempore y cierra sesion solo cuando le llega el parametro sure por la url
    this.logout();
  }

  onSubmit(form){
    // Mejora: si se envia false en el signup deberia funcionar como si fuera null
    this._userService.signup(this.user).subscribe(
      response => {
        console.log(response);
        // tokem 
        // Pregunta: Donde se asigna al status diferente de error
        if(response.status != 'error'){
          this.status = 'success';
          this.token = response;

          // objeto usuario identificado
          this._userService.signup(this.user,true).subscribe(
            response => {
              console.log(response);
              // tokem 
                this.identity = response;
                console.log(this.token);
                console.log(this.identity);
                localStorage.setItem('token',this.token);
                localStorage.setItem('identity',JSON.stringify(this.identity));
                this._router.navigate(['/dashboard']);
            },
            error  => {
              this.status='error';
              console.log(<any>error);
            } 
          );
          
        }else{
          this.status='error';
        }
      },
      error  => {
        this.status='error';
        console.log(<any>error);
      } 
    );
  }

  logout(){
    this._route.params.subscribe(params => {
      let logout = +params['sure'];
      if(logout == 1){
          localStorage.removeItem('identity');
          localStorage.removeItem('token');
          this.identity = null;
          this.token = null;

          //Redireccion
          this._router.navigate(['/inicio']);
      }
    });
  }

}
