/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'environments/environment';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component( {
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.component.css'
    ],
    template: `
    <nav class="app-nav">
        <h2>Web Starter Pack</h2>
        <h3>Getting Started</h3>
        <div>
            <a [routerLink]=" ['./'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Index
            </a>
        </div>
        <h3>Guidlines</h3>
        <div>
            <a [routerLink]=" ['./accessibility'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Accessibility
            </a>
            <a [routerLink]=" ['./content'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Content
            </a>
        </div>
        <h3>Style</h3>
        <div>
            <a [routerLink]=" ['./style/color'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Color
            </a>
            <a [routerLink]=" ['./style/layer'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Layer
            </a>
            <a [routerLink]=" ['./style/motion'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Motion
            </a>
            <a [routerLink]=" ['./style/spacing'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Spacing
            </a>
            <a [routerLink]=" ['./style/typography'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Typography
            </a>
        </div>
        <h3>Components</h3>
        <div>
            <a *ngIf="showDevModule" [routerLink]=" ['./dev-module'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            DevModule
            </a>
        </div>
        <a [routerLink]=" ['./'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Index
        </a>
        <a [routerLink]=" ['./home'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Home
        </a>
        <a [routerLink]=" ['./detail'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Detail
        </a>
        <a [routerLink]=" ['./barrel'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Barrel
        </a>
        <a [routerLink]=" ['./about'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        About
        </a>
    </nav>

    <main class="app-content">
        <router-outlet></router-outlet>
    </main>

    <footer class="app-footer">
        <span>Angular Starter by <a [href]="github">@angusm73</a></span>
        <a [href]="url" class="logo">
            <img [src]="image" [alt]="name">
        </a>
    </footer>`
} )
export class AppComponent implements OnInit {
    /* App constants */
    public name = 'Web Starter Pack';
    public image = 'assets/img/uwd.png';
    public twitter = 'https://twitter.com/toxic735';
    public github = 'https://github.com/angusm73';
    public url = 'https://ulladullaweb.design';
    public showDevModule: boolean = environment.showDevModule;

    constructor(
        public appState: AppState
    ) { }

    public ngOnInit() {
        console.log( 'Initial App State', this.appState.state );
    }

}

/**
 * Please review the https://github.com/AngularClass/angular-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
