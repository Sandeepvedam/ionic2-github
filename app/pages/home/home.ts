/**
 * Created by Sandeep vedam
 */

// Load the required dependencies
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {GitHubService} from '../../services/githubService'
import {GitHubDetailsPage} from '../github-details/github-details'

// @Components is decorator. It will load the templates and we can define some other attributes.
@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [GitHubService]                      // providers should be used to define the services
})

/**
 * HomePage    - Here we can write the logic to get the git repos.
 */
export class HomePage {

  public username;
  public reposData;
  public isSuccess;

  constructor(private navController: NavController,private gitService : GitHubService) {
      this.username = '';
      this.reposData = []
  }

  /**
   * Make a githubservice call
   */
  private getRepos(){
    this.gitService.getGitRepos(this.username).subscribe(
        data =>{
          this.reposData = data.json();       // repos data
            this.isSuccess = true;
        },
        err =>{
          console.error(err);
            this.isSuccess = false;
        },
        () => console.log("Git repos completed.")
    );
  }

    /**
     * We are pushing repo in nav stack storage.
     * @param repo
     */
    private goToDetails(repo){
        this.navController.push(GitHubDetailsPage,{repo:repo});
    }


}
