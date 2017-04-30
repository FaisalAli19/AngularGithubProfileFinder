import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService  { 
    private username:string;
    private client_id = "2d3f6b01a321be4d6ad2";
    private client_secret = "0571472ba82a4b6833005cead636d3a8c9fc972c";
    
    constructor(private http: Http) {
        console.log("Github service ready");
        this.username = "FaisalAli19"
    }
    getUser(){
        return this.http.get(`http://api.github.com/users/${this.username}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
            .map(res => res.json());
    }
    getRepos(){
        return this.http.get(`http://api.github.com/users/${this.username}/repos?sort="created:asc"&client_id=${this.client_id}&client_secret=${this.client_secret}`)
            .map(res => res.json());
    }
    updateUser(username:string){
        this.username = username;
    }
}

