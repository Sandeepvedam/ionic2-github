import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {GitHubService} from '../../services/githubService'
import {GitHubDetailsPage} from '../github-details/github-details'

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [GitHubService]
})
export class HomePage {

  public username;
  public reposData;
    public isSuccess;

  constructor(private navController: NavController,private gitService : GitHubService) {
      this.username = '';
      this.reposData = []
  }

  private getRepos(){
    this.gitService.getGitRepos(this.username).subscribe(
        data =>{
          this.reposData = data.json();
            this.isSuccess = true;
        },
        err =>{
          console.error(err);
            this.isSuccess = false;
        },
        () => console.log("Git repos completed.")
    );
  }

    private goToDetails(repo){
        this.navController.push(GitHubDetailsPage,{repo:repo});
    }


}
