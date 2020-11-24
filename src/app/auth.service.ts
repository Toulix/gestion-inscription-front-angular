
// import { GET_TOKEN } from './graphql/graphql.login.query';
import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { map, switchMap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { MeGQL } from 'src/generated/graphql';
import { Observable } from 'rxjs'

export type user = {
  id: String,
  password: String,
  profile: String,
  roles: String,
  username: String
}

export const GET_TOKEN = gql`
  mutation singIn( $password: String!, $username: String!,) {
    singIn(password: $password, username: $username)
  }
`

// const GET_USER = gql`
//   query users { 
// 	users {
//     username
//     roles
//   }
// }
// `
// interface User {
//   username: string,
//   password: string,
//   roles: string
// }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //call to the gql mutation language
  // users: User[]
  loading: boolean;
  error: any;
  token: string;
  user: Observable<any>
  

  constructor(private apollo: Apollo,
              private meGQL: MeGQL,
              private router: Router) { }

  singIn(credentials: { username: string, password: string }) {
    const { username, password } = credentials;
    // return this.apollo.map( response => {
    //   let result = response;
    //   if(result && resut.access_token) {
    //     localStorage.setItem('token', result.token);
    //      return true;
    //   }
    //     return false;
    // })
    // this.apollo.watchQuery({
    //   query: GET_USER,
    // }).valueChanges.subscribe((result: any) => {
    //   console.log(result);
    //   this.users = result.data.users;
    //   this.loading = result.loading;
    //   this.error = result.error;

    // });
    return this.apollo.mutate({
      mutation: GET_TOKEN,
      variables: {
        password: password,
        username: username,
      },
    })
      .pipe(
        map((result: any) => {
          if (result.data && result.data.singIn) {
            localStorage.setItem('token', result.data.singIn);
            return true;
          }
          return false;
        })
      )
  }

  isLoggedIn() {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');
    
    if (!token) {
      return false;
    }
    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token);
    return !isExpired;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  get currentUser() {
    let token = localStorage.getItem('token')
    if(!token) return '';

    return new JwtHelperService().decodeToken(token);
  }

  get currentUserProfileFromGQL() {
    this.user = this.meGQL.fetch()
            .pipe(
                 map(result => result.data.me)
            )
       return this.user;       
}
}
