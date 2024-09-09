import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';
import { FuseConfigService } from '@fuse/services/config.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';

// import { UsersService } from 'app/main/apps/master-data/users/list/users.service';
// import { UserEntryDialogComponent } from 'app/main/apps/master-data/users/entry/user-entry-dialog.component';

import { navigation } from 'app/navigation/navigation';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ToolbarComponent implements OnInit, OnDestroy {
  horizontalNavbar: boolean;
  rightNavbar: boolean;
  hiddenNavbar: boolean;
  languages: any;
  navigation: any;
  selectedLanguage: any;
  userStatusOptions: any[];
  session: any;
  private profiles: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {FuseConfigService} _fuseConfigService
   * @param {FuseSidebarService} _fuseSidebarService
   * @param {TranslateService} _translateService
   */
  constructor(
    private _router: Router,
    private _fuseConfigService: FuseConfigService,
    private _fuseSidebarService: FuseSidebarService,
    private _fuseNavigationService: FuseNavigationService,
    private _matSnackBar: MatSnackBar,
    private _dialog: MatDialog,
    private _httpClient: HttpClient,
    private _translateService: TranslateService
  ) {
    // Set the defaults
    this.userStatusOptions = [
      {
        'title': 'Online',
        'icon': 'icon-checkbox-marked-circle',
        'color': '#4CAF50'
      },
      {
        'title': 'Away',
        'icon': 'icon-clock',
        'color': '#FFC107'
      },
      {
        'title': 'Do not Disturb',
        'icon': 'icon-minus-circle',
        'color': '#F44336'
      },
      {
        'title': 'Invisible',
        'icon': 'icon-checkbox-blank-circle-outline',
        'color': '#BDBDBD'
      },
      {
        'title': 'Offline',
        'icon': 'icon-checkbox-blank-circle-outline',
        'color': '#616161'
      }
    ];

    this.languages = [
      {
        id: 'en',
        title: 'English',
        flag: 'us'
      },
      {
        id: 'tr',
        title: 'Turkish',
        flag: 'tr'
      }
    ];

    this.navigation = navigation;
    // Set the private defaults
    this._unsubscribeAll = new Subject();
    this.session = {
      user: {
        fullname: ''
      }
    };
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    /*
    this._settings.get({ app: 'user_profile', id: 1 })
      .then( r => {
        if (r.success === true) {
          this.profiles = r.data;
        }
      });
    */
    // this._fuseNavigationService.setCurrentNavigation('main');

    // Subscribe to the config changes
    this._fuseConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((settings) => {
        this.horizontalNavbar = settings.layout.navbar.position === 'top';
        this.rightNavbar = settings.layout.navbar.position === 'right';
        this.hiddenNavbar = settings.layout.navbar.hidden === true;
      });

    // Set the selected language from default languages
    this.selectedLanguage = _.find(this.languages, { 'id': this._translateService.currentLang });
    if (localStorage.getItem('user.session') !== null) {
      this.session = JSON.parse(localStorage.getItem('user.session'));
      console.log(this.session);
     
    } 
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebarOpen(key): void {
    this._fuseSidebarService.getSidebar(key).toggleOpen();
  }

  /**
   * Search
   *
   * @param value
   */
  search(value): void {
    // Do your search here...
    console.log(value);
  }

  /**
   * Set the language
   *
   * @param lang
   */
  setLanguage(lang): void {
    // Set the selected language for the toolbar
    this.selectedLanguage = lang;

    // Use the selected language for translations
    this._translateService.use(lang.id);
  }

  onProfile(): void {
    /*
    this._usersService.get(this.session.user.id)
      .then( r => {
        if (r.success === true) {
          console.log(JSON.stringify(r));
          const data = r.data[0];
          data.profiles = this.profiles;
          data.edit = true;
          data.profile = data.profile.toString();
          const dialogRef = this._dialog.open(UserEntryDialogComponent, { 
            width: '500px', 
            data: data
          });
          dialogRef.afterClosed().subscribe( result => {
            if (result !== undefined) {
              this._usersService.save(result)
                .then( s => {
                  if (s.success === false) {
                    this._matSnackBar.open(r.message, 'OK', {
                      verticalPosition: 'top',
                      duration: 2000
                    });
                  } else {
                    const user = JSON.parse(JSON.stringify(result));
                    user.password         = undefined;
                    user.password_compare = undefined;
                    this.session.user = user;
                    localStorage.setItem('user.session', this.session);
                  }
                });
            }
          });    
        }
      });
      */
  }



}
