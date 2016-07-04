/**
 * Created by Sandeep Vedam
 * @ GitHub-details.ts
 */

// Load the required dependencies
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {GitHubService} from '../../services/githubService';

// @Components is decorator. It will load the templates and we can define some other attributes.
@Component({
    templateUrl: 'build/pages/github-details/github-details.html',
    providers: [GitHubService]                                              // providers should be used to define the services
})

/**
 * GitHubDetailsPage    - Here we can write the logic to get the git repo description.
 */
export class GitHubDetailsPage {
    public readme = '';
    public repo;

    /**
     * Passing required params
     * @param github - Initializing the GitHubService
     * @param nav - Used to navigating the pages
     * @param navParams
     */
    constructor(private github: GitHubService,
                private nav: NavController,
                private navParams: NavParams) {

        this.repo = navParams.get('repo');        // NavParams which will contain the parameters and we are using them inside of our constructor and binding it to the page

        // Call Github service and get the response
        // subscribe is the function that actually executes the observable. It takes three callback parameters as follows
        this.github.getGitDetails(this.repo).subscribe(
                data => this.readme = data.text(),
                err => {
                if (err.status == 404) {
                    this.readme = 'This repo does not have a README. :(';
                } else {
                    console.error(err);
                }
            },
            () => console.log('getDetails completed')
        );
    }
}
