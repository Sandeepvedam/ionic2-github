/**
 * Created by Sandeep Vedam
 */
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

// Injectable is decorator that will inject the required Https and it tell angular 2 that its to be injected
@Injectable()
export class GitHubService{

    constructor(private http : Http){

    }

    /**
     * get git repos by calling git api
     * @param username
     * @returns {*}
     */
    getGitRepos(username){
        let repos = this.http.get(`https://api.github.com/users/${username}/repos`);
        return repos;
    }

    /**
     * get git repos description
     * @param repo
     * @returns {any}
     */
    getGitDetails(repo) {
        let headers = new Headers();
        alert(repo.url);
        headers.append('Accept', 'application/vnd.github.VERSION.html');
        return this.http.get(`${repo.url}/readme`, { headers: headers });
    }
}