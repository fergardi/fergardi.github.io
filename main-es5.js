(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmage"] = self["webpackChunkmage"] || []).push([["main"], {
    /***/
    98255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "routes": function routes() {
          return (
            /* binding */
            _routes
          );
        },

        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _user_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user/auth.guard */
      32881);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _routes = [{
        path: '',
        redirectTo: 'user/landing',
        pathMatch: 'full'
      }, {
        path: 'user',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_user_encyclopedia_tome_component_ts"), __webpack_require__.e("src_app_user_user_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./user/user.module */
          88524)).then(function (m) {
            return m.UserModule;
          });
        }
      }, {
        path: 'world',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_world_world_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./world/world.module */
          94303)).then(function (m) {
            return m.WorldModule;
          });
        },
        canActivate: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
      }, {
        path: 'kingdom',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_user_encyclopedia_tome_component_ts"), __webpack_require__.e("src_app_kingdom_kingdom_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./kingdom/kingdom.module */
          34669)).then(function (m) {
            return m.KingdomModule;
          });
        },
        canActivate: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
      }, {
        path: '**',
        redirectTo: ''
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(_routes, {
          scrollPositionRestoration: 'top',
          // relativeLinkResolution: 'legacy',
          onSameUrlNavigation: 'reload',
          anchorScrolling: 'enabled' // not working https://github.com/angular/angular/issues/33240

        })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _services_cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./services/cache.service */
      12622);
      /* harmony import */


      var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/firebase.service */
      19446);
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/loading.service */
      4471);
      /* harmony import */


      var _services_tutorial_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/tutorial.service */
      80595);
      /* harmony import */


      var _shared_tour_tour_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/tour/tour.component */
      69078);
      /* harmony import */


      var _shared_shell_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/shell/shell.component */
      24337);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      80181);

      function AppComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-spinner", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(firebaseService, loadingService, tutorialService, router, platformId) {
          _classCallCheck(this, _AppComponent);

          this.firebaseService = firebaseService;
          this.loadingService = loadingService;
          this.tutorialService = tutorialService;
          this.router = router;
          this.platformId = platformId;
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // anchors
            this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd && event.url !== '/user/landing') {
                localStorage.setItem('route', event.url);
              }

              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.Scroll && event.anchor && (0, _angular_common__WEBPACK_IMPORTED_MODULE_8__.isPlatformBrowser)(_this.platformId)) {
                setTimeout(function () {
                  var anchor = document.querySelector('#' + event.anchor);

                  if (!anchor) {
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  } else {
                    anchor.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }
                }, 1000);
              }
            }); // fixtures

            this.tutorialService.initialize();
            this.firebaseService.loadFixtures([// CollectionType.FACTIONS,
            // CollectionType.ATTACKS,
            // CollectionType.CATEGORIES,
            // CollectionType.FAMILIES,
            // CollectionType.GODS,
            // CollectionType.GUILDS,
            // CollectionType.RESOURCES,
            // CollectionType.STRUCTURES,
            // CollectionType.SKILLS,
            _services_cache_service__WEBPACK_IMPORTED_MODULE_0__.CollectionType.UNITS, _services_cache_service__WEBPACK_IMPORTED_MODULE_0__.CollectionType.SPELLS, _services_cache_service__WEBPACK_IMPORTED_MODULE_0__.CollectionType.ITEMS // CollectionType.HEROES,
            // CollectionType.STORES,
            // CollectionType.LOCATIONS,
            // CollectionType.LEGENDS,
            // CollectionType.PERKS,
            // CollectionType.PACKS,
            ]);
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__.FirebaseService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_tutorial_service__WEBPACK_IMPORTED_MODULE_3__.TutorialService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 4,
        vars: 1,
        consts: [["class", "loading-screen", 4, "ngIf"], [1, "loading-screen"], ["mode", "indeterminate"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-tour");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "app-shell");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loadingService.loading);
          }
        },
        directives: [_shared_tour_tour_component__WEBPACK_IMPORTED_MODULE_4__.TourComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_shell_shell_component__WEBPACK_IMPORTED_MODULE_5__.ShellComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner],
        styles: [".loading-screen[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 9999;\n  pointer-events: all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmctc2NyZWVuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    36747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "httpLoaderFactory": function httpLoaderFactory() {
          return (
            /* binding */
            _httpLoaderFactory
          );
        },

        /* harmony export */
        "appInitializerFactory": function appInitializerFactory() {
          return (
            /* binding */
            _appInitializerFactory
          );
        },

        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/shared.module */
      44466);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../environments/environment */
      92340);
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/fire */
      18690);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/fire/database */
      60716);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      49476);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngxs/store */
      14835);
      /* harmony import */


      var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngxs/devtools-plugin */
      62912);
      /* harmony import */


      var _shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/auth/auth.state */
      35917);
      /* harmony import */


      var ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-ui-tour-md-menu */
      81252);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);
      /* harmony import */


      var _shared_custom_paginator_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shared/custom/paginator.intl */
      68922);
      /* harmony import */


      var ngx_currency__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-currency */
      49816);
      /* harmony import */


      var ngx_disqus__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ngx-disqus */
      45916); // AOT compilation support


      function _httpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http);
      } // i18n initializer to force translations to be loaded before startup


      function _appInitializerFactory(translateService) {
        return function () {
          translateService.setDefaultLang('es');
          return translateService.use('es').toPromise();
        };
      }

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.ErrorStateMatcher,
          useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.ShowOnDirtyErrorStateMatcher
        }, {
          provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorIntl,
          useClass: _shared_custom_paginator_intl__WEBPACK_IMPORTED_MODULE_7__.PaginatorIntl
        }, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.APP_INITIALIZER,
          useFactory: _appInitializerFactory,
          deps: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_fire__WEBPACK_IMPORTED_MODULE_15__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__.AngularFireAuthModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.AngularFirestoreModule, _angular_fire_database__WEBPACK_IMPORTED_MODULE_18__.AngularFireDatabaseModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule.forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateLoader,
            useFactory: _httpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient]
          },
          isolate: false
        }), _ngxs_store__WEBPACK_IMPORTED_MODULE_4__.NgxsModule.forRoot([_shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_6__.AuthState], {
          developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production
        }), _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_5__.NgxsReduxDevtoolsPluginModule.forRoot({
          name: 'Legendarium',
          disabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production
        }), ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_20__.TourMatMenuModule.forRoot(), ngx_currency__WEBPACK_IMPORTED_MODULE_21__.NgxCurrencyModule, ngx_disqus__WEBPACK_IMPORTED_MODULE_22__.DisqusModule.forRoot('legendarium-test')]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_fire__WEBPACK_IMPORTED_MODULE_15__.AngularFireModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__.AngularFireAuthModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.AngularFirestoreModule, _angular_fire_database__WEBPACK_IMPORTED_MODULE_18__.AngularFireDatabaseModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["ɵk"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_5__.NgxsReduxDevtoolsPluginModule, ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_20__.TourMatMenuModule, ngx_currency__WEBPACK_IMPORTED_MODULE_21__.NgxCurrencyModule, ngx_disqus__WEBPACK_IMPORTED_MODULE_22__.DisqusModule]
        });
      })();
      /***/

    },

    /***/
    44685: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TroopAssignmentType": function TroopAssignmentType() {
          return (
            /* binding */
            _TroopAssignmentType
          );
        },

        /* harmony export */
        "ArmyComponent": function ArmyComponent() {
          return (
            /* binding */
            _ArmyComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      99758);
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      80395);
      /* harmony import */


      var angular_animations__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! angular-animations */
      9641);
      /* harmony import */


      var src_app_shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/auth/auth.state */
      35917);
      /* harmony import */


      var _recruit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./recruit.component */
      2796);
      /* harmony import */


      var _disband_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./disband.component */
      46609);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      57850);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/notification.service */
      12013);
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngxs/store */
      14835);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830);
      /* harmony import */


      var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/loading.service */
      4471);
      /* harmony import */


      var src_app_services_tutorial_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/tutorial.service */
      80595);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/chips */
      79243);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/list */
      28417);
      /* harmony import */


      var ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ngx-ui-tour-md-menu */
      81252);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      89460);
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/badge */
      90330);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../pipes/icon.pipe */
      38262);
      /* harmony import */


      var _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../pipes/long.pipe */
      16757);
      /* harmony import */


      var _pipes_short_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../pipes/short.pipe */
      61357);

      function ArmyComponent_button_27_img_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var family_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, family_r10.name))("src", family_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, family_r10.name));
        }
      }

      function ArmyComponent_button_27_img_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var skill_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, skill_r11.name))("src", skill_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, skill_r11.name));
        }
      }

      function ArmyComponent_button_27_img_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var category_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, category_r12.name))("src", category_r12.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, category_r12.name));
        }
      }

      function ArmyComponent_button_27_img_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 2, "category.legendary.name"))("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 4, "category.legendary.name"));
        }
      }

      function ArmyComponent_button_27_div_13_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
        }

        if (rf & 2) {
          var category_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, "category.resistance.name") + _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, category_r14.name))("src", category_r14.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 7, "category.resistance.name"));
        }
      }

      function ArmyComponent_button_27_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ArmyComponent_button_27_div_13_img_1_Template, 4, 9, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var troop_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r4.unit.resistances);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return [a0, a1];
      };

      function ArmyComponent_button_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ArmyComponent_button_27_Template_button_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r17);

            var troop_r4 = restoredCtx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

            return ctx_r16.openDisbandDialog(troop_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "short");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, ArmyComponent_button_27_img_9_Template, 3, 7, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, ArmyComponent_button_27_img_10_Template, 3, 7, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, ArmyComponent_button_27_img_11_Template, 3, 7, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, ArmyComponent_button_27_img_12_Template, 3, 6, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, ArmyComponent_button_27_div_13_Template, 2, 1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "open_with");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var troop_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", troop_r4.fid)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](17, _c0, troop_r4.unit.faction.id, troop_r4.unit.legendary ? "legendary" : "common"));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 11, troop_r4.quantity));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", troop_r4.unit.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 13, troop_r4.unit.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 15, troop_r4.unit.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r4.unit.families);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r4.unit.skills);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r4.unit.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", troop_r4.unit.legendary);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", troop_r4.unit.resistances && troop_r4.unit.resistances.length);
        }
      }

      function ArmyComponent_mat_list_item_60_img_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var family_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, family_r24.name))("src", family_r24.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, family_r24.name));
        }
      }

      function ArmyComponent_mat_list_item_60_img_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var skill_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, skill_r25.name))("src", skill_r25.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, skill_r25.name));
        }
      }

      function ArmyComponent_mat_list_item_60_img_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var category_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, category_r26.name))("src", category_r26.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, category_r26.name));
        }
      }

      function ArmyComponent_mat_list_item_60_img_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 2, "category.legendary.name"))("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 4, "category.legendary.name"));
        }
      }

      function ArmyComponent_mat_list_item_60_div_13_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
        }

        if (rf & 2) {
          var category_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, "category.resistance.name") + _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, category_r28.name))("src", category_r28.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 7, "category.resistance.name"));
        }
      }

      function ArmyComponent_mat_list_item_60_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ArmyComponent_mat_list_item_60_div_13_img_1_Template, 4, 9, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var troop_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r18.unit.resistances);
        }
      }

      function ArmyComponent_mat_list_item_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-list-item", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "short");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, ArmyComponent_mat_list_item_60_img_9_Template, 3, 7, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, ArmyComponent_mat_list_item_60_img_10_Template, 3, 7, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, ArmyComponent_mat_list_item_60_img_11_Template, 3, 7, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, ArmyComponent_mat_list_item_60_img_12_Template, 3, 6, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, ArmyComponent_mat_list_item_60_div_13_Template, 2, 1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "open_with");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var troop_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", troop_r18.fid)("ngClass", troop_r18.unit.faction.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 11, troop_r18.quantity));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", troop_r18.unit.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 13, troop_r18.unit.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 15, troop_r18.unit.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r18.unit.families);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r18.unit.skills);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r18.unit.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", troop_r18.unit.legendary);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", troop_r18.unit.resistances && troop_r18.unit.resistances.length);
        }
      }

      function ArmyComponent_mat_list_item_91_img_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var family_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, family_r36.name))("src", family_r36.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, family_r36.name));
        }
      }

      function ArmyComponent_mat_list_item_91_img_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var skill_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, skill_r37.name))("src", skill_r37.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, skill_r37.name));
        }
      }

      function ArmyComponent_mat_list_item_91_img_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var category_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, category_r38.name))("src", category_r38.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, category_r38.name));
        }
      }

      function ArmyComponent_mat_list_item_91_img_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 2, "category.legendary.name"))("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 4, "category.legendary.name"));
        }
      }

      function ArmyComponent_mat_list_item_91_div_13_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
        }

        if (rf & 2) {
          var category_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, "category.resistance.name") + _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, category_r40.name))("src", category_r40.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 7, "category.resistance.name"));
        }
      }

      function ArmyComponent_mat_list_item_91_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ArmyComponent_mat_list_item_91_div_13_img_1_Template, 4, 9, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var troop_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r30.unit.resistances);
        }
      }

      function ArmyComponent_mat_list_item_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-list-item", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "short");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, ArmyComponent_mat_list_item_91_img_9_Template, 3, 7, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, ArmyComponent_mat_list_item_91_img_10_Template, 3, 7, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, ArmyComponent_mat_list_item_91_img_11_Template, 3, 7, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, ArmyComponent_mat_list_item_91_img_12_Template, 3, 6, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, ArmyComponent_mat_list_item_91_div_13_Template, 2, 1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "open_with");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var troop_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", troop_r30.fid)("ngClass", troop_r30.unit.faction.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 11, troop_r30.quantity));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", troop_r30.unit.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 13, troop_r30.unit.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 15, troop_r30.unit.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r30.unit.families);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r30.unit.skills);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r30.unit.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", troop_r30.unit.legendary);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", troop_r30.unit.resistances && troop_r30.unit.resistances.length);
        }
      }

      function ArmyComponent_button_122_img_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var family_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, family_r48.name))("src", family_r48.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, family_r48.name));
        }
      }

      function ArmyComponent_button_122_img_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var skill_r49 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, skill_r49.name))("src", skill_r49.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, skill_r49.name));
        }
      }

      function ArmyComponent_button_122_img_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var category_r50 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, category_r50.name))("src", category_r50.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, category_r50.name));
        }
      }

      function ArmyComponent_button_122_img_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 2, "category.legendary.name"))("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 4, "category.legendary.name"));
        }
      }

      function ArmyComponent_button_122_div_12_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
        }

        if (rf & 2) {
          var category_r52 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, "category.resistance.name") + _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, category_r52.name))("src", category_r52.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 7, "category.resistance.name"));
        }
      }

      function ArmyComponent_button_122_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ArmyComponent_button_122_div_12_img_1_Template, 4, 9, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unit_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", unit_r42.resistances);
        }
      }

      function ArmyComponent_button_122_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ArmyComponent_button_122_Template_button_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r55);

            var unit_r42 = restoredCtx.$implicit;

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

            return ctx_r54.openRecruitDialog(unit_r42);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, ArmyComponent_button_122_img_8_Template, 3, 7, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, ArmyComponent_button_122_img_9_Template, 3, 7, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, ArmyComponent_button_122_img_10_Template, 3, 7, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, ArmyComponent_button_122_img_11_Template, 3, 6, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, ArmyComponent_button_122_div_12_Template, 2, 1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "long");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, " [alt]=\"'resource.gold.name' | translate\"> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unit_r42 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", unit_r42.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 10, unit_r42.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 12, unit_r42.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", unit_r42.families);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", unit_r42.skills);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", unit_r42.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", unit_r42.legendary);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", unit_r42.resistances && unit_r42.resistances.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 14, unit_r42.gold));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](16, 16, "resource.gold.name"));
        }
      }

      var _TroopAssignmentType;

      (function (TroopAssignmentType) {
        TroopAssignmentType[TroopAssignmentType["NONE"] = 0] = "NONE";
        TroopAssignmentType[TroopAssignmentType["ATTACK"] = 1] = "ATTACK";
        TroopAssignmentType[TroopAssignmentType["DEFENSE"] = 2] = "DEFENSE";
      })(_TroopAssignmentType || (_TroopAssignmentType = {}));

      var MAXIMUM_TROOPS = 5;

      var _ArmyComponent = /*#__PURE__*/function () {
        function ArmyComponent(angularFirestore, notificationService, store, dialog, apiService, loadingService, tutorialService) {
          _classCallCheck(this, ArmyComponent);

          this.angularFirestore = angularFirestore;
          this.notificationService = notificationService;
          this.store = store;
          this.dialog = dialog;
          this.apiService = apiService;
          this.loadingService = loadingService;
          this.tutorialService = tutorialService;
          this.uid = this.store.selectSnapshot(src_app_shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.getUserUID);
          this.kingdomTroops = [];
          this.attackTroops = [];
          this.defenseTroops = [];
          this.recruitUnits = [];
        }

        _createClass(ArmyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            (0, rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this.angularFirestore.collection("kingdoms/".concat(this.uid, "/troops")).valueChanges({
              idField: 'fid'
            }), this.angularFirestore.collection("units", function (ref) {
              return ref.where('recruitable', '==', true);
            }).valueChanges({
              idField: 'fid'
            })]).pipe((0, _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.untilDestroyed)(this)).subscribe(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  troops = _ref2[0],
                  units = _ref2[1];

              _this2.kingdomTroops = troops.filter(function (troop) {
                return troop.assignment === _TroopAssignmentType.NONE || !troop.assignment;
              }).sort(function (a, b) {
                return a.sort - b.sort;
              });
              _this2.attackTroops = troops.filter(function (troop) {
                return troop.assignment === _TroopAssignmentType.ATTACK;
              }).sort(function (a, b) {
                return a.sort - b.sort;
              });
              _this2.defenseTroops = troops.filter(function (troop) {
                return troop.assignment === _TroopAssignmentType.DEFENSE;
              }).sort(function (a, b) {
                return a.sort - b.sort;
              });
              _this2.recruitUnits = units.sort(function (a, b) {
                return a.gold - b.gold;
              });
            });
          }
        }, {
          key: "assignTroop",
          value: function assignTroop($event) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!($event.container && (Number($event.container.id) === 0 || $event.previousContainer === $event.container || $event.container.data.length < MAXIMUM_TROOPS))) {
                        _context.next = 6;
                        break;
                      }

                      if ($event.previousContainer === $event.container) {
                        (0, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__.moveItemInArray)($event.container.data, $event.previousIndex, $event.currentIndex);
                      } else {
                        (0, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__.transferArrayItem)($event.previousContainer.data, $event.container.data, $event.previousIndex, $event.currentIndex);
                      }

                      _context.next = 4;
                      return this.updateArmy();

                    case 4:
                      _context.next = 7;
                      break;

                    case 6:
                      this.notificationService.warning('kingdom.army.maximum');

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "updateArmy",
          value: function updateArmy() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var army, assigned;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.loadingService.startLoading();
                      _context2.prev = 1;
                      army = [];
                      this.kingdomTroops.forEach(function (kingdomTroop, index) {
                        army.push({
                          troopId: kingdomTroop.fid,
                          sort: 1000 + index,
                          assignment: _TroopAssignmentType.NONE
                        });
                      });
                      this.attackTroops.forEach(function (attackTroop, index) {
                        army.push({
                          troopId: attackTroop.fid,
                          sort: 2000 + index,
                          assignment: _TroopAssignmentType.ATTACK
                        });
                      });
                      this.defenseTroops.forEach(function (defenseTroop, index) {
                        army.push({
                          troopId: defenseTroop.fid,
                          sort: 3000 + index,
                          assignment: _TroopAssignmentType.DEFENSE
                        });
                      });
                      _context2.next = 8;
                      return this.apiService.assignArmy(this.uid, army);

                    case 8:
                      assigned = _context2.sent;
                      this.notificationService.success('kingdom.army.success');
                      _context2.next = 16;
                      break;

                    case 12:
                      _context2.prev = 12;
                      _context2.t0 = _context2["catch"](1);
                      console.error(_context2.t0);
                      this.notificationService.error('kingdom.army.error');

                    case 16:
                      this.loadingService.stopLoading();

                    case 17:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[1, 12]]);
            }));
          }
        }, {
          key: "openRecruitDialog",
          value: function openRecruitDialog(unit) {
            var dialogRef = this.dialog.open(_recruit_component__WEBPACK_IMPORTED_MODULE_1__.RecruitComponent, {
              panelClass: 'dialog-responsive',
              data: unit
            });
          }
        }, {
          key: "openDisbandDialog",
          value: function openDisbandDialog(troop) {
            var dialogRef = this.dialog.open(_disband_component__WEBPACK_IMPORTED_MODULE_2__.DisbandComponent, {
              panelClass: 'dialog-responsive',
              data: troop
            });
          }
        }]);

        return ArmyComponent;
      }();

      _ArmyComponent.ɵfac = function ArmyComponent_Factory(t) {
        return new (t || _ArmyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_tutorial_service__WEBPACK_IMPORTED_MODULE_7__.TutorialService));
      };

      _ArmyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
        type: _ArmyComponent,
        selectors: [["app-army"]],
        decls: 127,
        vars: 88,
        consts: [["fxLayout", "row wrap", "fxLayoutGap", "10px grid", "cdkDropListGroup", "", 1, "kingdom-army"], ["fxFlex.xl", "33", "fxFlex.lg", "33", "fxFlex.md", "50", "fxFlex.sm", "100", "fxFlex.xs", "100"], ["mat-card-avatar", "", "src", "/assets/images/cards/army.png", 3, "alt"], [1, "mat-card-extras"], ["mat-icon-button", "", 3, "click"], ["color", "primary"], ["matSubheader", ""], ["dense", "", "id", "0", "tourAnchor", "tour.army", "cdkDropList", "", "cdkDropListOrientation", "vertical", 1, "dotted", 3, "cdkDropListData", "cdkDropListDropped"], ["mat-list-item", "", "cdkDrag", "", "class", "handle", 3, "id", "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "innerHTML"], ["fxFlex.xl", "66", "fxFlex.lg", "66", "fxFlex.md", "50", "fxFlex.sm", "100", "fxFlex.xs", "100"], ["fxLayout", "row wrap", "fxLayoutGap", "10px grid"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "100", "fxFlex.sm", "100", "fxFlex.xs", "100"], ["mat-card-avatar", "", "src", "/assets/images/cards/attack.png", 3, "alt"], ["dense", "", "id", "1", "tourAnchor", "tour.attack", "cdkDropList", "", "cdkDropListOrientation", "vertical", 1, "dotted", 3, "cdkDropListData", "cdkDropListDropped"], ["cdkDrag", "", "class", "handle", 3, "id", "ngClass", 4, "ngFor", "ngForOf"], ["mat-card-avatar", "", "src", "/assets/images/cards/defense.png", 3, "alt"], ["dense", "", "id", "2", "tourAnchor", "tour.defense", "cdkDropList", "", "cdkDropListOrientation", "vertical", 1, "dotted", 3, "cdkDropListData", "cdkDropListDropped"], ["mat-card-avatar", "", "src", "/assets/images/cards/recruit.png", 3, "alt"], ["dense", "", "tourAnchor", "tour.recruit"], ["mat-list-item", "", "class", "common", 3, "click", 4, "ngFor", "ngForOf"], ["mat-list-item", "", "cdkDrag", "", 1, "handle", 3, "id", "ngClass", "click"], ["mat-list-avatar", "", "matBadgePosition", "above before", 3, "matBadge"], ["mat-list-avatar", "", 1, "animated", "pulse", "infinite", 3, "src", "alt"], ["mat-line", ""], ["mat-line", "", 1, "mat-card-subtitle"], ["class", "icon", 3, "title", "src", "alt", 4, "ngFor", "ngForOf"], ["class", "icon", "src", "/assets/images/icons/legendary.png", 3, "title", "alt", 4, "ngIf"], ["mat-line", "", "class", "mat-card-subtitle", 4, "ngIf"], [1, "icon", 3, "title", "src", "alt"], ["src", "/assets/images/icons/legendary.png", 1, "icon", 3, "title", "alt"], ["class", "icon grayscale", 3, "title", "src", "alt", 4, "ngFor", "ngForOf"], [1, "icon", "grayscale", 3, "title", "src", "alt"], ["cdkDrag", "", 1, "handle", 3, "id", "ngClass"], ["mat-list-item", "", 1, "common", 3, "click"], ["mat-list-avatar", "", "matBadge", "?", "matBadgePosition", "above before"], ["mat-list-avatar", "", "matBadgePosition", "above after", 3, "matBadge"], ["mat-list-avatar", "", "src", "/assets/images/resources/gold.png", 3, "alt"]],
        template: function ArmyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ArmyComponent_Template_button_click_13_listener() {
              return ctx.tutorialService.start("tour.army");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "mat-chip", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "filter_9_plus");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](21, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](25, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "mat-action-list", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("cdkDropListDropped", function ArmyComponent_Template_mat_action_list_cdkDropListDropped_26_listener($event) {
              return ctx.assignTroop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, ArmyComponent_button_27_Template, 16, 20, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](29, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](30, "icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](31, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](38, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](41, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](44, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ArmyComponent_Template_button_click_46_listener() {
              return ctx.tutorialService.start("tour.attack");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "mat-chip", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52, "filter_5");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](54, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](58, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "mat-list", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("cdkDropListDropped", function ArmyComponent_Template_mat_list_cdkDropListDropped_59_listener($event) {
              return ctx.assignTroop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](60, ArmyComponent_mat_list_item_60_Template, 16, 17, "mat-list-item", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](62, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](63, "icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](64, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](65, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](68, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](69, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](70, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](71);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](72, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](73, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](75, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](77, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ArmyComponent_Template_button_click_77_listener() {
              return ctx.tutorialService.start("tour.defense");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](78, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](79, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "mat-chip", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](83, "filter_5");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](84);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](85, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](86, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](87, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](88);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](89, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](90, "mat-list", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("cdkDropListDropped", function ArmyComponent_Template_mat_list_cdkDropListDropped_90_listener($event) {
              return ctx.assignTroop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](91, ArmyComponent_mat_list_item_91_Template, 16, 17, "mat-list-item", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](92, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](93, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](94, "icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](95, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](96, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](97, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](98, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](99, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](100, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](101, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](102);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](103, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](104, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](105);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](106, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](107, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](108, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ArmyComponent_Template_button_click_108_listener() {
              return ctx.tutorialService.start("tour.recruit");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](109, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](110, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](111, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](112, "mat-chip", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](113, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](114, "list");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](115);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](116, "long");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](117, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](118, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](119);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](120, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](121, "mat-action-list", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](122, ArmyComponent_button_122_Template, 18, 18, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](123, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](124, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](125, "icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](126, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@fadeInOnEnter", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 32, "kingdom.army.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](8, 34, "kingdom.army.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 36, "kingdom.army.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](21, 38, "kingdom.army.max"));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](25, 40, "card.list.troops"), ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("cdkDropListData", ctx.kingdomTroops);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.kingdomTroops);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](30, 42, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](31, 44, "kingdom.army.help")), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](38, 46, "kingdom.attack.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](41, 48, "kingdom.attack.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](44, 50, "kingdom.attack.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](54, 52, "kingdom.attack.max"));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](58, 54, "card.list.troops"), ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("cdkDropListData", ctx.attackTroops);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.attackTroops);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](63, 56, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](64, 58, "kingdom.attack.help")), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](69, 60, "kingdom.defense.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](72, 62, "kingdom.defense.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](75, 64, "kingdom.defense.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](85, 66, "kingdom.defense.max"));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](89, 68, "card.list.troops"), ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("cdkDropListData", ctx.defenseTroops);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.defenseTroops);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](94, 70, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](95, 72, "kingdom.defense.help")), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](100, 74, "kingdom.recruit.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](103, 76, "kingdom.recruit.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](106, 78, "kingdom.recruit.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](116, 80, ctx.recruitUnits.length));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](120, 82, "card.list.troops"), ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.recruitUnits);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](125, 84, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](126, 86, "kingdom.recruit.help")), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeHtml"]);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__.DefaultLayoutGapDirective, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__.CdkDropListGroup, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardSubtitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__.MatChip, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardContent, _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListSubheaderCssMatStyler, _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatList, ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_24__.TourAnchorMatMenuDirective, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__.CdkDropList, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListItem, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__.CdkDrag, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__.DefaultClassDirective, _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListAvatarCssMatStyler, _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__.MatBadge, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatLine, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslatePipe, _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_8__.IconPipe, _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_9__.LongPipe, _pipes_short_pipe__WEBPACK_IMPORTED_MODULE_10__.ShortPipe],
        styles: [".kingdom-army[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFybXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoiYXJteS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5raW5nZG9tLWFybXkge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIl19 */"],
        data: {
          animation: [(0, angular_animations__WEBPACK_IMPORTED_MODULE_30__.fadeInOnEnterAnimation)({
            duration: 250,
            delay: 250
          })]
        }
      });
      _ArmyComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0, _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.UntilDestroy)()], _ArmyComponent);
      /***/
    },

    /***/
    46609: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DisbandComponent": function DisbandComponent() {
          return (
            /* binding */
            _DisbandComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/auth/auth.state */
      35917);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/notification.service */
      12013);
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngxs/store */
      14835);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830);
      /* harmony import */


      var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/loading.service */
      4471);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/list */
      28417);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      89460);
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/badge */
      90330);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var ngx_currency__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ngx-currency */
      49816);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/chips */
      79243);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../pipes/icon.pipe */
      38262);
      /* harmony import */


      var _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../pipes/long.pipe */
      16757);

      function DisbandComponent_img_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          var family_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, family_r8.name))("src", family_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        }
      }

      function DisbandComponent_img_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          var skill_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, skill_r9.name))("src", skill_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        }
      }

      function DisbandComponent_img_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          var category_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, category_r10.name))("src", category_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        }
      }

      function DisbandComponent_img_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "category.legendary.name"));
        }
      }

      function DisbandComponent_div_23_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var category_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, "category.resistance.name") + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 4, category_r12.name))("src", category_r12.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        }
      }

      function DisbandComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DisbandComponent_div_23_img_1_Template, 3, 6, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.troop.unit.resistances);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          number: a0
        };
      };

      function DisbandComponent_mat_chip_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-chip", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "long");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 1, "user.tome.goldMaintenance", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 4, ctx_r5.troop.unit.goldMaintenance * ctx_r5.troop.quantity))));
        }
      }

      function DisbandComponent_mat_chip_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-chip", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "long");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 1, "user.tome.manaMaintenance", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 4, ctx_r6.troop.unit.manaMaintenance * ctx_r6.troop.quantity))));
        }
      }

      function DisbandComponent_mat_chip_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-chip", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "long");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 1, "user.tome.populationMaintenance", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 4, ctx_r7.troop.unit.populationMaintenance * ctx_r7.troop.quantity))));
        }
      }

      var _c1 = function _c1(a0, a1) {
        return [a0, a1];
      };

      var _DisbandComponent = /*#__PURE__*/function () {
        function _DisbandComponent(troop, dialogRef, formBuilder, notificationService, store, apiService, loadingService) {
          _classCallCheck(this, _DisbandComponent);

          this.troop = troop;
          this.dialogRef = dialogRef;
          this.formBuilder = formBuilder;
          this.notificationService = notificationService;
          this.store = store;
          this.apiService = apiService;
          this.loadingService = loadingService;
          this.form = null;
          this.uid = this.store.selectSnapshot(src_app_shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.getUserUID);
        }

        _createClass(_DisbandComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.formBuilder.group({
              quantity: [this.troop.quantity, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(this.troop.quantity)]]
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }, {
          key: "disband",
          value: function disband() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var disbanded;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!this.form.valid) {
                        _context3.next = 17;
                        break;
                      }

                      this.loadingService.startLoading();
                      _context3.prev = 2;
                      _context3.next = 5;
                      return this.apiService.disbandTroop(this.uid, this.troop.fid, this.form.value.quantity);

                    case 5:
                      disbanded = _context3.sent;
                      this.notificationService.success('kingdom.disband.success', disbanded);
                      this.close();
                      _context3.next = 14;
                      break;

                    case 10:
                      _context3.prev = 10;
                      _context3.t0 = _context3["catch"](2);
                      console.error(_context3.t0);
                      this.notificationService.error('kingdom.disband.error');

                    case 14:
                      this.loadingService.stopLoading();
                      _context3.next = 18;
                      break;

                    case 17:
                      this.notificationService.error('kingdom.disband.error');

                    case 18:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[2, 10]]);
            }));
          }
        }]);

        return _DisbandComponent;
      }();

      _DisbandComponent.ɵfac = function DisbandComponent_Factory(t) {
        return new (t || _DisbandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService));
      };

      _DisbandComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _DisbandComponent,
        selectors: [["app-disband"]],
        decls: 58,
        vars: 57,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "innerHTML"], ["matSubheader", ""], ["dense", ""], [3, "ngClass"], ["mat-list-avatar", "", "matBadgePosition", "above before", 3, "matBadge"], ["mat-list-avatar", "", 3, "src"], ["mat-line", ""], ["mat-line", "", 1, "mat-card-subtitle"], ["class", "icon", 3, "title", "src", 4, "ngFor", "ngForOf"], ["class", "icon", "src", "/assets/images/icons/legendary.png", 3, "title", 4, "ngIf"], ["mat-line", "", "class", "mat-card-subtitle", 4, "ngIf"], ["mat-list-avatar", "", "matBadgePosition", "above after", 3, "matBadge"], ["mat-list-avatar", "", "src", "/assets/images/resources/turn.png"], [3, "formGroup"], ["currencyMask", "", "matInput", "", "formControlName", "quantity", 3, "placeholder"], ["color", "primary", "selected", "", 4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "icon", 3, "title", "src"], ["src", "/assets/images/icons/legendary.png", 1, "icon", 3, "title"], ["class", "icon grayscale", 3, "title", "src", 4, "ngFor", "ngForOf"], [1, "icon", "grayscale", 3, "title", "src"], ["color", "primary", "selected", ""], ["src", "/assets/images/resources/gold.png", 1, "icon"], ["src", "/assets/images/resources/mana.png", 1, "icon"], ["src", "/assets/images/resources/population.png", 1, "icon"]],
        template: function DisbandComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-list", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-list-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "long");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, DisbandComponent_img_19_Template, 2, 4, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, DisbandComponent_img_20_Template, 2, 4, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, DisbandComponent_img_21_Template, 2, 4, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, DisbandComponent_img_22_Template, 2, 3, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, DisbandComponent_div_23_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](34, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](36, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](39, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](42, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](46, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, DisbandComponent_mat_chip_48_Template, 5, 8, "mat-chip", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, DisbandComponent_mat_chip_49_Template, 5, 8, "mat-chip", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, DisbandComponent_mat_chip_50_Template, 5, 8, "mat-chip", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DisbandComponent_Template_button_click_52_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](54, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DisbandComponent_Template_button_click_55_listener() {
              return ctx.disband();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](57, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 26, "kingdom.disband.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 28, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 30, "kingdom.disband.description")), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 32, "kingdom.disband.troop"), ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](54, _c1, ctx.troop.unit.faction.id, ctx.troop.unit.legendary ? "legendary" : "common"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 34, ctx.troop.quantity));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx.troop.unit.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 36, ctx.troop.unit.name));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.troop.unit.families);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.troop.unit.skills);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.troop.unit.categories);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.troop.unit.legendary);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.troop.unit.resistances && ctx.troop.unit.resistances.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matBadge", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 38, "kingdom.disband.platoon"), ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](34, 40, "kingdom.disband.quantity"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](36, 42, "kingdom.disband.quantity"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](39, 44, "kingdom.disband.hint"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](42, 46, "kingdom.disband.invalid"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](46, 48, "kingdom.disband.maintenances"), ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.troop.unit.goldMaintenance > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.troop.unit.manaMaintenance > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.troop.unit.populationMaintenance > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](54, 50, "kingdom.disband.cancel"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.troop.unit.populationMaintenance > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](57, 52, "kingdom.disband.disband"));
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogContent, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListSubheaderCssMatStyler, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListItem, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__.DefaultClassDirective, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListAvatarCssMatStyler, _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__.MatBadge, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatLine, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, ngx_currency__WEBPACK_IMPORTED_MODULE_18__.CurrencyMaskDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatError, _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__.MatChipList, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__.MatChip],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe, _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_5__.IconPipe, _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_6__.LongPipe],
        styles: [".mat-form-field[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2JhbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLFdBQVc7SUFDYiIsImZpbGUiOiJkaXNiYW5kLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICJdfQ== */"]
      });
      /***/
    },

    /***/
    2796: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RecruitComponent": function RecruitComponent() {
          return (
            /* binding */
            _RecruitComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/auth/auth.state */
      35917);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/notification.service */
      12013);
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngxs/store */
      14835);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830);
      /* harmony import */


      var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/loading.service */
      4471);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/list */
      28417);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      89460);
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/badge */
      90330);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var ngx_currency__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ngx-currency */
      49816);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/chips */
      79243);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../pipes/icon.pipe */
      38262);
      /* harmony import */


      var _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../pipes/long.pipe */
      16757);

      function RecruitComponent_img_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          var family_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, family_r5.name))("src", family_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        }
      }

      function RecruitComponent_img_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          var skill_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, skill_r6.name))("src", skill_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        }
      }

      function RecruitComponent_img_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          var category_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, category_r7.name))("src", category_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        }
      }

      function RecruitComponent_img_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "category.legendary.name"));
        }
      }

      function RecruitComponent_div_22_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var category_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, "category.resistance.name") + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 4, category_r9.name))("src", category_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        }
      }

      function RecruitComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RecruitComponent_div_22_img_1_Template, 3, 6, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.unit.resistances);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return [a0, a1];
      };

      var _RecruitComponent = /*#__PURE__*/function () {
        function _RecruitComponent(unit, dialogRef, formBuilder, notificationService, store, apiService, loadingService) {
          _classCallCheck(this, _RecruitComponent);

          this.unit = unit;
          this.dialogRef = dialogRef;
          this.formBuilder = formBuilder;
          this.notificationService = notificationService;
          this.store = store;
          this.apiService = apiService;
          this.loadingService = loadingService;
          this.form = null;
          this.uid = this.store.selectSnapshot(src_app_shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.getUserUID);
          this.kingdomGold = this.store.selectSnapshot(src_app_shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.getKingdomGold);
        }

        _createClass(_RecruitComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.formBuilder.group({
              quantity: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(Math.floor(this.kingdomGold.quantity / this.unit.gold))]]
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }, {
          key: "gold",
          value: function gold() {
            return this.form.value.quantity * this.unit.gold;
          }
        }, {
          key: "recruit",
          value: function recruit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var recruited;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!(this.form.valid && this.gold() <= this.kingdomGold.quantity)) {
                        _context4.next = 17;
                        break;
                      }

                      this.loadingService.startLoading();
                      _context4.prev = 2;
                      _context4.next = 5;
                      return this.apiService.recruitUnit(this.uid, this.unit.id, this.form.value.quantity);

                    case 5:
                      recruited = _context4.sent;
                      this.notificationService.success('kingdom.recruit.success', recruited);
                      this.close();
                      _context4.next = 14;
                      break;

                    case 10:
                      _context4.prev = 10;
                      _context4.t0 = _context4["catch"](2);
                      console.error(_context4.t0);
                      this.notificationService.error('kingdom.recruit.error');

                    case 14:
                      this.loadingService.stopLoading();
                      _context4.next = 18;
                      break;

                    case 17:
                      this.notificationService.error('kingdom.recruit.error');

                    case 18:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[2, 10]]);
            }));
          }
        }]);

        return _RecruitComponent;
      }();

      _RecruitComponent.ɵfac = function RecruitComponent_Factory(t) {
        return new (t || _RecruitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService));
      };

      _RecruitComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _RecruitComponent,
        selectors: [["app-recruit"]],
        decls: 59,
        vars: 56,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "innerHTML"], ["matSubheader", ""], ["dense", ""], [3, "ngClass"], ["mat-list-avatar", "", "matBadge", "?", "matBadgePosition", "above before"], ["mat-list-avatar", "", 3, "src"], ["mat-line", ""], ["mat-line", "", 1, "mat-card-subtitle"], ["class", "icon", 3, "title", "src", 4, "ngFor", "ngForOf"], ["class", "icon", "src", "/assets/images/icons/legendary.png", 3, "title", 4, "ngIf"], ["mat-line", "", "class", "mat-card-subtitle", 4, "ngIf"], ["mat-list-avatar", "", "matBadgePosition", "above after", 3, "matBadge"], ["mat-list-avatar", "", "src", "/assets/images/resources/gold.png"], [3, "formGroup"], ["currencyMask", "", "matInput", "", "formControlName", "quantity", 3, "placeholder"], ["color", "primary", "selected", ""], ["src", "/assets/images/resources/gold.png", 1, "icon"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "icon", 3, "title", "src"], ["src", "/assets/images/icons/legendary.png", 1, "icon", 3, "title"], ["class", "icon grayscale", 3, "title", "src", 4, "ngFor", "ngForOf"], [1, "icon", "grayscale", 3, "title", "src"]],
        template: function RecruitComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-list", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-list-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, RecruitComponent_img_18_Template, 2, 4, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, RecruitComponent_img_19_Template, 2, 4, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, RecruitComponent_img_20_Template, 2, 4, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, RecruitComponent_img_21_Template, 2, 3, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, RecruitComponent_div_22_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](24, "long");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](34, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](36, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](39, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](42, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](46, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "mat-chip", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](51, "long");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RecruitComponent_Template_button_click_53_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](55, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RecruitComponent_Template_button_click_56_listener() {
              return ctx.recruit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](58, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 23, "kingdom.recruit.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 25, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 27, "kingdom.recruit.help")), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 29, "kingdom.recruit.troop"), ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](53, _c0, ctx.unit.faction.id, ctx.unit.legendary ? "legendary" : "common"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx.unit.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 31, ctx.unit.name));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.unit.families);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.unit.skills);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.unit.categories);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.unit.legendary);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.unit.resistances && ctx.unit.resistances.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](24, 33, ctx.unit.gold));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 35, "kingdom.recruit.platoon"), ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](34, 37, "kingdom.recruit.quantity"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](36, 39, "kingdom.recruit.quantity"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](39, 41, "kingdom.recruit.hint"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](42, 43, "kingdom.recruit.invalid"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](46, 45, "kingdom.recruit.costs"), ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](51, 47, ctx.gold()));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](55, 49, "kingdom.recruit.cancel"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.form.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](58, 51, "kingdom.recruit.recruit"));
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogContent, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListSubheaderCssMatStyler, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListItem, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__.DefaultClassDirective, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListAvatarCssMatStyler, _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__.MatBadge, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatLine, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, ngx_currency__WEBPACK_IMPORTED_MODULE_18__.CurrencyMaskDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatError, _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__.MatChip, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe, _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_5__.IconPipe, _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_6__.LongPipe],
        styles: [".mat-form-field[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY3J1aXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLFdBQVc7SUFDYiIsImZpbGUiOiJyZWNydWl0LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICJdfQ== */"]
      });
      /***/
    },

    /***/
    38262: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IconPipe": function IconPipe() {
          return (
            /* binding */
            _IconPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      var _IconPipe = /*#__PURE__*/function () {
        function _IconPipe(domSanitizer, translateService) {
          _classCallCheck(this, _IconPipe);

          this.domSanitizer = domSanitizer;
          this.translateService = translateService;
        }

        _createClass(_IconPipe, [{
          key: "transform",
          value: function transform() {
            var _this3 = this;

            var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var object = arguments.length > 1 ? arguments[1] : undefined;

            if (text && object) {
              var terms = [object.skills || [], object.families || [], object.categories || [], object.units || [], object.resources || [], object.spells || [], object.adjacents || [], object.opposites || [], object.resistances || []].reduce(function (a, b) {
                return a.concat(b);
              }, []);
              terms.forEach(function (term) {
                return text = text.replace("<".concat(term.id, ">"), "<img class=\"icon\" title=\"".concat(_this3.translateService.instant(term.name), "\" src=\"").concat(term.image, "\">"));
              });
            }

            text = (text || '').replace(/<gold>/g, "<img class=\"icon\" title=\"".concat(this.translateService.instant('resource.gold.name'), "\" src=\"/assets/images/resources/gold.png\">")).replace(/<mana>/g, "<img class=\"icon\" title=\"".concat(this.translateService.instant('resource.mana.name'), "\" src=\"/assets/images/resources/mana.png\">")).replace(/<population>/g, "<img class=\"icon\" title=\"".concat(this.translateService.instant('resource.population.name'), "\" src=\"/assets/images/resources/population.png\">")).replace(/<land>/g, "<img class=\"icon\" title=\"".concat(this.translateService.instant('resource.land.name'), "\" src=\"/assets/images/resources/land.png\">")).replace(/<turn>/g, "<img class=\"icon\" title=\"".concat(this.translateService.instant('resource.turn.name'), "\" src=\"/assets/images/resources/turn.png\">")).replace(/<gem>/g, "<img class=\"icon\" title=\"".concat(this.translateService.instant('resource.gem.name'), "\" src=\"/assets/images/resources/gem.png\">")).replace(/<power>/g, "<img class=\"icon\" title=\"".concat(this.translateService.instant('icon.power.name'), "\" src=\"/assets/images/icons/power.png\">")).replace(/<attack>/g, "<img class=\"icon\" title=\"".concat(this.translateService.instant('type.attack.name'), "\" src=\"/assets/images/icons/attack.png\">")).replace(/<defense>/g, "<img class=\"icon\" title=\"".concat(this.translateService.instant('type.defense.name'), "\" src=\"/assets/images/icons/defense.png\">")).replace(/<health>/g, "<img class=\"icon\" title=\"".concat(this.translateService.instant('type.health.name'), "\" src=\"/assets/images/icons/health.png\">")).replace(/<initiative>/g, "<img class=\"icon\" title=\"".concat(this.translateService.instant('type.initiative.name'), "\" src=\"/assets/images/icons/initiative.png\">")).replace(/<skeleton>/g, "<img class=\"icon\" title=\"".concat(this.translateService.instant('unit.skeleton.name'), "\" src=\"/assets/images/units/black/skeleton.png\">")).replace(/<sheep>/g, "<img class=\"icon\" title=\"".concat(this.translateService.instant('unit.sheep.name'), "\" src=\"/assets/images/units/grey/sheep.png\">"));
            return this.domSanitizer.bypassSecurityTrustHtml(text);
          }
        }]);

        return _IconPipe;
      }();

      _IconPipe.ɵfac = function IconPipe_Factory(t) {
        return new (t || _IconPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService, 16));
      };

      _IconPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "icon",
        type: _IconPipe,
        pure: true
      });
      /***/
    },

    /***/
    79690: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LegendaryPipe": function LegendaryPipe() {
          return (
            /* binding */
            _LegendaryPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _LegendaryPipe = /*#__PURE__*/function () {
        function _LegendaryPipe() {
          _classCallCheck(this, _LegendaryPipe);
        }

        _createClass(_LegendaryPipe, [{
          key: "transform",
          value: function transform(object) {
            // return object && object.categories && object.categories.length && object.categories.find((category: any) => category.id === 'legendary') !== undefined;
            return object && object.legendary;
          }
        }]);

        return _LegendaryPipe;
      }();

      _LegendaryPipe.ɵfac = function LegendaryPipe_Factory(t) {
        return new (t || _LegendaryPipe)();
      };

      _LegendaryPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "legendary",
        type: _LegendaryPipe,
        pure: true
      });
      /***/
    },

    /***/
    16757: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LongPipe": function LongPipe() {
          return (
            /* binding */
            _LongPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _LongPipe = /*#__PURE__*/function () {
        function _LongPipe() {
          _classCallCheck(this, _LongPipe);
        }

        _createClass(_LongPipe, [{
          key: "transform",
          value: function transform(value) {
            var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
            return value !== undefined && value !== null ? value.toLocaleString('de-DE', {
              useGrouping: true,
              minimumIntegerDigits: 1,
              minimumFractionDigits: value % 1 !== 0 ? decimals : 0,
              maximumFractionDigits: value % 1 !== 0 ? decimals : 0
            }) : '';
          }
        }]);

        return _LongPipe;
      }();

      _LongPipe.ɵfac = function LongPipe_Factory(t) {
        return new (t || _LongPipe)();
      };

      _LongPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "long",
        type: _LongPipe,
        pure: true
      });
      /***/
    },

    /***/
    61357: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShortPipe": function ShortPipe() {
          return (
            /* binding */
            _ShortPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ShortPipe = /*#__PURE__*/function () {
        function _ShortPipe() {
          _classCallCheck(this, _ShortPipe);
        }

        _createClass(_ShortPipe, [{
          key: "transform",
          value: function transform(value) {
            var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            if (Number.isNaN(value)) return null;
            if (value < 1000) return value.toString();
            var suffixes = ['K', 'M', 'G', 'T', 'P', 'E'];
            var exp = Math.floor(Math.log(value) / Math.log(1000));
            return (value / Math.pow(1000, exp)).toFixed(decimals) + suffixes[exp - 1];
          }
        }]);

        return _ShortPipe;
      }();

      _ShortPipe.ɵfac = function ShortPipe_Factory(t) {
        return new (t || _ShortPipe)();
      };

      _ShortPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "short",
        type: _ShortPipe,
        pure: true
      });
      /***/
    },

    /***/
    14344: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TurnPipe": function TurnPipe() {
          return (
            /* binding */
            _TurnPipe
          );
        },

        /* harmony export */
        "calculate": function calculate() {
          return (
            /* binding */
            _calculate
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngxs/store */
      14835);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      49005);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _TurnPipe = /*#__PURE__*/function () {
        function _TurnPipe() {
          _classCallCheck(this, _TurnPipe);
        }

        _createClass(_TurnPipe, [{
          key: "transform",
          value: function transform(timestamp, max, ratio) {
            return this.clock$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (time) {
              return _calculate(timestamp.toMillis(), time, max, ratio);
            }));
          }
        }]);

        return _TurnPipe;
      }();

      _TurnPipe.ɵfac = function TurnPipe_Factory(t) {
        return new (t || _TurnPipe)();
      };

      _TurnPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefinePipe"]({
        name: "turn",
        type: _TurnPipe,
        pure: true
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Select)(function (state) {
        return state.auth.clock;
      })], _TurnPipe.prototype, "clock$", void 0);

      var _calculate = function _calculate(from, to, max, ratio) {
        var start = moment__WEBPACK_IMPORTED_MODULE_0__(from);
        var end = moment__WEBPACK_IMPORTED_MODULE_0__(to);
        var minutes = moment__WEBPACK_IMPORTED_MODULE_0__.duration(end.diff(start)).asMinutes();
        return max ? Math.min(max, Math.floor(minutes / ratio)) : Math.floor(minutes / ratio);
      };
      /***/

    },

    /***/
    5830: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiService": function ApiService() {
          return (
            /* binding */
            _ApiService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _ApiService = /*#__PURE__*/function () {
        function _ApiService(httpClient) {
          _classCallCheck(this, _ApiService);

          this.httpClient = httpClient;
        }

        _createClass(_ApiService, [{
          key: "createKingdom",
          value: function createKingdom(kingdomId, factionId, name, latitude, longitude) {
            return this.httpClient.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/world/kingdom"), {
              kingdomId: kingdomId,
              name: name,
              factionId: factionId,
              latitude: latitude,
              longitude: longitude
            }).toPromise();
          }
        }, {
          key: "exploreLand",
          value: function exploreLand(kingdomId, turns) {
            return this.httpClient.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/explore/").concat(turns)).toPromise();
          }
        }, {
          key: "chargeMana",
          value: function chargeMana(kingdomId, turns) {
            return this.httpClient.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/charge/").concat(turns)).toPromise();
          }
        }, {
          key: "taxGold",
          value: function taxGold(kingdomId, turns) {
            return this.httpClient.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/tax/").concat(turns)).toPromise();
          }
        }, {
          key: "recruitUnit",
          value: function recruitUnit(kingdomId, unitId, quantity) {
            return this.httpClient.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/army/").concat(unitId, "/recruit/").concat(quantity)).toPromise();
          }
        }, {
          key: "disbandTroop",
          value: function disbandTroop(kingdomId, troopId, quantity) {
            return this.httpClient["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/army/").concat(troopId, "/disband/").concat(quantity), undefined).toPromise();
          }
        }, {
          key: "dischargeContract",
          value: function dischargeContract(kingdomId, contractId) {
            return this.httpClient["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/tavern/").concat(contractId, "/discharge"), undefined).toPromise();
          }
        }, {
          key: "researchCharm",
          value: function researchCharm(kingdomId, charmId, turns) {
            return this.httpClient.patch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/sorcery/").concat(charmId, "/research/").concat(turns), undefined).toPromise();
          }
        }, {
          key: "conjureCharm",
          value: function conjureCharm(kingdomId, charmId, targetId) {
            return this.httpClient.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/sorcery/").concat(charmId, "/conjure/").concat(targetId), undefined).toPromise();
          }
        }, {
          key: "activateArtifact",
          value: function activateArtifact(kingdomId, artifactId, targetId) {
            return this.httpClient.request('delete', "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/sorcery/").concat(artifactId, "/activate/").concat(targetId), undefined).toPromise();
          }
        }, {
          key: "bidAuction",
          value: function bidAuction(kingdomId, auctionId, gold) {
            return this.httpClient.patch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/auction/").concat(auctionId, "/bid/").concat(gold), undefined).toPromise();
          }
        }, {
          key: "offerGod",
          value: function offerGod(kingdomId, godId, gold) {
            return this.httpClient.patch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/temple/").concat(godId, "/offer/").concat(gold), undefined).toPromise();
          }
        }, {
          key: "buildStructure",
          value: function buildStructure(kingdomId, buildingId, quantity) {
            return this.httpClient.patch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/city/").concat(buildingId, "/build/").concat(quantity), undefined).toPromise();
          }
        }, {
          key: "demolishStructure",
          value: function demolishStructure(kingdomId, buildingId, quantity) {
            return this.httpClient.patch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/city/").concat(buildingId, "/demolish/").concat(quantity), undefined).toPromise();
          }
        }, {
          key: "assignContract",
          value: function assignContract(kingdomId, contractId, assignmentId) {
            return this.httpClient.patch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/tavern/").concat(contractId, "/assign/").concat(assignmentId), undefined).toPromise();
          }
        }, {
          key: "assignArmy",
          value: function assignArmy(kingdomId, army) {
            return this.httpClient.patch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/army"), {
              army: army
            }).toPromise();
          }
        }, {
          key: "buyEmporium",
          value: function buyEmporium(kingdomId, itemId) {
            return this.httpClient.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/emporium/").concat(itemId)).toPromise();
          }
        }, {
          key: "battleKingdom",
          value: function battleKingdom(kingdomId, targetId, battleId) {
            return this.httpClient.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/battle/").concat(battleId, "/target/").concat(targetId), undefined).toPromise();
          }
        }, {
          key: "populateMap",
          value: function populateMap(latitude, longitude) {
            return this.httpClient.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/world/map"), {
              latitude: latitude,
              longitude: longitude
            }).toPromise();
          }
        }, {
          key: "addKingdom",
          value: function addKingdom(kingdomId, factionId, latitude, longitude, name) {
            return this.httpClient.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/world/kingdom"), {
              kingdomId: kingdomId,
              factionId: factionId,
              latitude: latitude,
              longitude: longitude,
              name: name
            }).toPromise();
          }
        }, {
          key: "addShop",
          value: function addShop(fid, storeType, latitude, longitude, name) {
            return this.httpClient.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/world/shop"), {
              fid: fid,
              storeType: storeType,
              latitude: latitude,
              longitude: longitude,
              name: name
            }).toPromise();
          }
        }, {
          key: "addQuest",
          value: function addQuest(fid, locationType, latitude, longitude, name) {
            return this.httpClient.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/world/quest"), {
              fid: fid,
              locationType: locationType,
              latitude: latitude,
              longitude: longitude,
              name: name
            }).toPromise();
          }
        }, {
          key: "refreshAuction",
          value: function refreshAuction() {
            return this.httpClient.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/world/auction"), undefined).toPromise();
          }
        }, {
          key: "sendLetter",
          value: function sendLetter(kingdomId, subject, message, fromId) {
            return this.httpClient.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/archive"), {
              subject: subject,
              message: message,
              fromId: fromId
            }).toPromise();
          }
        }, {
          key: "readLetter",
          value: function readLetter(kingdomId, letterId) {
            return this.httpClient.patch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/archive/").concat(letterId), undefined).toPromise();
          }
        }, {
          key: "removeLetters",
          value: function removeLetters(kingdomId, letterIds) {
            return this.httpClient["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/archive"), {
              body: {
                letterIds: letterIds
              }
            }).toPromise();
          }
        }, {
          key: "favorGuild",
          value: function favorGuild(kingdomId, guildId) {
            return this.httpClient.patch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/guild/").concat(guildId), undefined).toPromise();
          }
        }, {
          key: "foundateClan",
          value: function foundateClan(kingdomId, name, description, image) {
            return this.httpClient.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/world/clan"), {
              kingdomId: kingdomId,
              name: name,
              description: description,
              image: image
            }).toPromise();
          }
        }, {
          key: "joinClan",
          value: function joinClan(kingdomId, clanId) {
            return this.httpClient.patch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/clan/").concat(clanId, "/join"), undefined).toPromise();
          }
        }, {
          key: "leaveClan",
          value: function leaveClan(kingdomId, clanId) {
            return this.httpClient.patch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/clan/").concat(clanId, "/leave"), undefined).toPromise();
          }
        }, {
          key: "assignCharm",
          value: function assignCharm(kingdomId, charmId, assignmentId) {
            return this.httpClient.patch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/sorcery/charm/").concat(charmId, "/assign/").concat(assignmentId), undefined).toPromise();
          }
        }, {
          key: "assignArtifact",
          value: function assignArtifact(kingdomId, artifactId, assignmentId) {
            return this.httpClient.patch("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/sorcery/artifact/").concat(artifactId, "/assign/").concat(assignmentId), undefined).toPromise();
          }
        }, {
          key: "dispelIncantation",
          value: function dispelIncantation(kingdomId, incantationId) {
            return this.httpClient["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/temple/").concat(incantationId, "/dispel"), undefined).toPromise();
          }
        }, {
          key: "breakEnchantment",
          value: function breakEnchantment(kingdomId, enchantmentId) {
            return this.httpClient["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/temple/").concat(enchantmentId, "/break"), undefined).toPromise();
          }
        }, {
          key: "tradeDeal",
          value: function tradeDeal(kingdomId, shopId, collectionId, dealId) {
            return this.httpClient.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/world/shop/").concat(shopId, "/").concat(collectionId, "/").concat(dealId)).toPromise();
          }
        }, {
          key: "adventureQuest",
          value: function adventureQuest(kingdomId, questId) {
            return this.httpClient.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/world/quest/").concat(questId), undefined).toPromise();
          }
        }, {
          key: "plantTree",
          value: function plantTree(kingdomId, tree, gems) {
            return this.httpClient.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.functions.url, "/kingdom/").concat(kingdomId, "/tree"), {
              tree: tree,
              gems: gems
            }).toPromise();
          }
        }]);

        return _ApiService;
      }();

      _ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || _ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _ApiService,
        factory: _ApiService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    12622: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CollectionType": function CollectionType() {
          return (
            /* binding */
            _CollectionType
          );
        },

        /* harmony export */
        "CacheService": function CacheService() {
          return (
            /* binding */
            _CacheService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);

      var _CollectionType;

      (function (CollectionType) {
        CollectionType["SKILLS"] = "skills";
        CollectionType["FACTIONS"] = "factions";
        CollectionType["UNITS"] = "units";
        CollectionType["FAMILIES"] = "families";
        CollectionType["SPELLS"] = "spells";
        CollectionType["STRUCTURES"] = "structures";
        CollectionType["CATEGORIES"] = "categories";
        CollectionType["GODS"] = "gods";
        CollectionType["HEROES"] = "heroes";
        CollectionType["RESOURCES"] = "resources";
        CollectionType["ITEMS"] = "items";
        CollectionType["STORES"] = "stores";
        CollectionType["LOCATIONS"] = "locations";
        CollectionType["PACKS"] = "packs";
        CollectionType["GUILDS"] = "guilds";
        CollectionType["ATTACKS"] = "attacks";
        CollectionType["LEGENDS"] = "legends";
        CollectionType["PERKS"] = "perks";
      })(_CollectionType || (_CollectionType = {}));

      var _CacheService = /*#__PURE__*/function () {
        function _CacheService(angularFirestore) {
          _classCallCheck(this, _CacheService);

          this.angularFirestore = angularFirestore;
        }

        _createClass(_CacheService, [{
          key: "get",
          value: function get(collection) {
            switch (collection) {
              case _CollectionType.PACKS:
                return this.getPacks();

              case _CollectionType.GUILDS:
                return this.getGuilds();

              case _CollectionType.ATTACKS:
                return this.getAttacks();

              case _CollectionType.SKILLS:
                return this.getSkills();

              case _CollectionType.FACTIONS:
                return this.getFactions();

              case _CollectionType.UNITS:
                return this.getUnits();

              case _CollectionType.FAMILIES:
                return this.getFamilies();

              case _CollectionType.SPELLS:
                return this.getSpells();

              case _CollectionType.STRUCTURES:
                return this.getStructures();

              case _CollectionType.CATEGORIES:
                return this.getCategories();

              case _CollectionType.GODS:
                return this.getGods();

              case _CollectionType.HEROES:
                return this.getHeroes();

              case _CollectionType.RESOURCES:
                return this.getResources();

              case _CollectionType.ITEMS:
                return this.getItems();

              case _CollectionType.STORES:
                return this.getStores();

              case _CollectionType.LOCATIONS:
                return this.getLocations();

              case _CollectionType.PERKS:
                return this.getPerks();
            }
          }
        }, {
          key: "getFactions",
          value: function getFactions() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var snapshot, factions;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (localStorage.getItem(_CollectionType.FACTIONS)) {
                        _context5.next = 6;
                        break;
                      }

                      _context5.next = 3;
                      return this.angularFirestore.collection(_CollectionType.FACTIONS).get().toPromise();

                    case 3:
                      snapshot = _context5.sent;
                      factions = snapshot.docs.map(function (faction) {
                        return faction.data();
                      });
                      localStorage.setItem(_CollectionType.FACTIONS, JSON.stringify(_toConsumableArray(factions)));

                    case 6:
                      return _context5.abrupt("return", JSON.parse(localStorage.getItem(_CollectionType.FACTIONS)));

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "getPacks",
          value: function getPacks() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var snapshot, packs;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (localStorage.getItem(_CollectionType.PACKS)) {
                        _context6.next = 6;
                        break;
                      }

                      _context6.next = 3;
                      return this.angularFirestore.collection(_CollectionType.PACKS).get().toPromise();

                    case 3:
                      snapshot = _context6.sent;
                      packs = snapshot.docs.map(function (faction) {
                        return faction.data();
                      });
                      localStorage.setItem(_CollectionType.PACKS, JSON.stringify(_toConsumableArray(packs)));

                    case 6:
                      return _context6.abrupt("return", JSON.parse(localStorage.getItem(_CollectionType.PACKS)));

                    case 7:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getAttacks",
          value: function getAttacks() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var snapshot, attacks;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (localStorage.getItem(_CollectionType.ATTACKS)) {
                        _context7.next = 6;
                        break;
                      }

                      _context7.next = 3;
                      return this.angularFirestore.collection(_CollectionType.ATTACKS).get().toPromise();

                    case 3:
                      snapshot = _context7.sent;
                      attacks = snapshot.docs.map(function (attack) {
                        return attack.data();
                      });
                      localStorage.setItem(_CollectionType.ATTACKS, JSON.stringify(_toConsumableArray(attacks)));

                    case 6:
                      return _context7.abrupt("return", JSON.parse(localStorage.getItem(_CollectionType.ATTACKS)));

                    case 7:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "getGuilds",
          value: function getGuilds() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var snapshot, guilds;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (localStorage.getItem(_CollectionType.GUILDS)) {
                        _context8.next = 6;
                        break;
                      }

                      _context8.next = 3;
                      return this.angularFirestore.collection(_CollectionType.GUILDS).get().toPromise();

                    case 3:
                      snapshot = _context8.sent;
                      guilds = snapshot.docs.map(function (guild) {
                        return guild.data();
                      });
                      localStorage.setItem(_CollectionType.GUILDS, JSON.stringify(_toConsumableArray(guilds)));

                    case 6:
                      return _context8.abrupt("return", JSON.parse(localStorage.getItem(_CollectionType.GUILDS)));

                    case 7:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "getStores",
          value: function getStores() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var snapshot, stores;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      if (localStorage.getItem(_CollectionType.STORES)) {
                        _context9.next = 6;
                        break;
                      }

                      _context9.next = 3;
                      return this.angularFirestore.collection(_CollectionType.STORES).get().toPromise();

                    case 3:
                      snapshot = _context9.sent;
                      stores = snapshot.docs.map(function (store) {
                        return store.data();
                      });
                      localStorage.setItem(_CollectionType.STORES, JSON.stringify(_toConsumableArray(stores)));

                    case 6:
                      return _context9.abrupt("return", JSON.parse(localStorage.getItem(_CollectionType.STORES)));

                    case 7:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "getResources",
          value: function getResources() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var snapshot, resources;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      if (localStorage.getItem(_CollectionType.RESOURCES)) {
                        _context10.next = 6;
                        break;
                      }

                      _context10.next = 3;
                      return this.angularFirestore.collection(_CollectionType.RESOURCES).get().toPromise();

                    case 3:
                      snapshot = _context10.sent;
                      resources = snapshot.docs.map(function (resource) {
                        return resource.data();
                      });
                      localStorage.setItem(_CollectionType.RESOURCES, JSON.stringify(_toConsumableArray(resources)));

                    case 6:
                      return _context10.abrupt("return", JSON.parse(localStorage.getItem(_CollectionType.RESOURCES)));

                    case 7:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "getStructures",
          value: function getStructures() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var snapshot, structures;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      if (localStorage.getItem(_CollectionType.STRUCTURES)) {
                        _context11.next = 6;
                        break;
                      }

                      _context11.next = 3;
                      return this.angularFirestore.collection(_CollectionType.STRUCTURES).get().toPromise();

                    case 3:
                      snapshot = _context11.sent;
                      structures = snapshot.docs.map(function (structure) {
                        return structure.data();
                      });
                      localStorage.setItem(_CollectionType.STRUCTURES, JSON.stringify(_toConsumableArray(structures)));

                    case 6:
                      return _context11.abrupt("return", JSON.parse(localStorage.getItem(_CollectionType.STRUCTURES)));

                    case 7:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "getHeroes",
          value: function getHeroes() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var snapshot, heroes;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      if (localStorage.getItem(_CollectionType.HEROES)) {
                        _context12.next = 6;
                        break;
                      }

                      _context12.next = 3;
                      return this.angularFirestore.collection(_CollectionType.HEROES).get().toPromise();

                    case 3:
                      snapshot = _context12.sent;
                      heroes = snapshot.docs.map(function (hero) {
                        return hero.data();
                      });
                      localStorage.setItem(_CollectionType.HEROES, JSON.stringify(_toConsumableArray(heroes)));

                    case 6:
                      return _context12.abrupt("return", JSON.parse(localStorage.getItem(_CollectionType.HEROES)));

                    case 7:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "getGods",
          value: function getGods() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var snapshot, gods;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (localStorage.getItem(_CollectionType.GODS)) {
                        _context13.next = 6;
                        break;
                      }

                      _context13.next = 3;
                      return this.angularFirestore.collection(_CollectionType.GODS).get().toPromise();

                    case 3:
                      snapshot = _context13.sent;
                      gods = snapshot.docs.map(function (god) {
                        return god.data();
                      });
                      localStorage.setItem(_CollectionType.GODS, JSON.stringify(_toConsumableArray(gods)));

                    case 6:
                      return _context13.abrupt("return", JSON.parse(localStorage.getItem(_CollectionType.GODS)));

                    case 7:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "getSkills",
          value: function getSkills() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var snapshot, skills;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      if (localStorage.getItem(_CollectionType.SKILLS)) {
                        _context14.next = 6;
                        break;
                      }

                      _context14.next = 3;
                      return this.angularFirestore.collection(_CollectionType.SKILLS).get().toPromise();

                    case 3:
                      snapshot = _context14.sent;
                      skills = snapshot.docs.map(function (skill) {
                        return skill.data();
                      });
                      localStorage.setItem(_CollectionType.SKILLS, JSON.stringify(_toConsumableArray(skills)));

                    case 6:
                      return _context14.abrupt("return", JSON.parse(localStorage.getItem(_CollectionType.SKILLS)));

                    case 7:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "getCategories",
          value: function getCategories() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var snapshot, categories;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      if (localStorage.getItem(_CollectionType.CATEGORIES)) {
                        _context15.next = 6;
                        break;
                      }

                      _context15.next = 3;
                      return this.angularFirestore.collection(_CollectionType.CATEGORIES).get().toPromise();

                    case 3:
                      snapshot = _context15.sent;
                      categories = snapshot.docs.map(function (category) {
                        return category.data();
                      });
                      localStorage.setItem(_CollectionType.CATEGORIES, JSON.stringify(_toConsumableArray(categories)));

                    case 6:
                      return _context15.abrupt("return", JSON.parse(localStorage.getItem(_CollectionType.CATEGORIES)));

                    case 7:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "getFamilies",
          value: function getFamilies() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var snapshot, families;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      if (localStorage.getItem(_CollectionType.FAMILIES)) {
                        _context16.next = 6;
                        break;
                      }

                      _context16.next = 3;
                      return this.angularFirestore.collection(_CollectionType.FAMILIES).get().toPromise();

                    case 3:
                      snapshot = _context16.sent;
                      families = snapshot.docs.map(function (family) {
                        return family.data();
                      });
                      localStorage.setItem(_CollectionType.FAMILIES, JSON.stringify(_toConsumableArray(families)));

                    case 6:
                      return _context16.abrupt("return", JSON.parse(localStorage.getItem(_CollectionType.FAMILIES)));

                    case 7:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "getLocations",
          value: function getLocations() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var snapshot, locations;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      if (localStorage.getItem(_CollectionType.LOCATIONS)) {
                        _context17.next = 6;
                        break;
                      }

                      _context17.next = 3;
                      return this.angularFirestore.collection(_CollectionType.LOCATIONS).get().toPromise();

                    case 3:
                      snapshot = _context17.sent;
                      locations = snapshot.docs.map(function (location) {
                        return location.data();
                      });
                      localStorage.setItem(_CollectionType.LOCATIONS, JSON.stringify(_toConsumableArray(locations)));

                    case 6:
                      return _context17.abrupt("return", JSON.parse(localStorage.getItem(_CollectionType.LOCATIONS)));

                    case 7:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "getUnits",
          value: function getUnits() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var snapshot, units;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      if (localStorage.getItem(_CollectionType.UNITS)) {
                        _context18.next = 6;
                        break;
                      }

                      _context18.next = 3;
                      return this.angularFirestore.collection(_CollectionType.UNITS).get().toPromise();

                    case 3:
                      snapshot = _context18.sent;
                      units = snapshot.docs.map(function (unit) {
                        return unit.data();
                      });
                      localStorage.setItem(_CollectionType.UNITS, JSON.stringify(_toConsumableArray(units)));

                    case 6:
                      return _context18.abrupt("return", JSON.parse(localStorage.getItem(_CollectionType.UNITS)));

                    case 7:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "getSpells",
          value: function getSpells() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var snapshot, spells;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      if (localStorage.getItem(_CollectionType.SPELLS)) {
                        _context19.next = 6;
                        break;
                      }

                      _context19.next = 3;
                      return this.angularFirestore.collection(_CollectionType.SPELLS).get().toPromise();

                    case 3:
                      snapshot = _context19.sent;
                      spells = snapshot.docs.map(function (spell) {
                        return spell.data();
                      });
                      localStorage.setItem(_CollectionType.SPELLS, JSON.stringify(_toConsumableArray(spells)));

                    case 6:
                      return _context19.abrupt("return", JSON.parse(localStorage.getItem(_CollectionType.SPELLS)));

                    case 7:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "getItems",
          value: function getItems() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var snapshot, items;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      if (localStorage.getItem(_CollectionType.ITEMS)) {
                        _context20.next = 6;
                        break;
                      }

                      _context20.next = 3;
                      return this.angularFirestore.collection(_CollectionType.ITEMS).get().toPromise();

                    case 3:
                      snapshot = _context20.sent;
                      items = snapshot.docs.map(function (item) {
                        return item.data();
                      });
                      localStorage.setItem(_CollectionType.ITEMS, JSON.stringify(_toConsumableArray(items)));

                    case 6:
                      return _context20.abrupt("return", JSON.parse(localStorage.getItem(_CollectionType.ITEMS)));

                    case 7:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "getPerks",
          value: function getPerks() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var snapshot, perks;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      if (localStorage.getItem(_CollectionType.PERKS)) {
                        _context21.next = 6;
                        break;
                      }

                      _context21.next = 3;
                      return this.angularFirestore.collection(_CollectionType.PERKS).get().toPromise();

                    case 3:
                      snapshot = _context21.sent;
                      perks = snapshot.docs.map(function (perk) {
                        return perk.data();
                      });
                      localStorage.setItem(_CollectionType.PERKS, JSON.stringify(_toConsumableArray(perks)));

                    case 6:
                      return _context21.abrupt("return", JSON.parse(localStorage.getItem(_CollectionType.PERKS)));

                    case 7:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }]);

        return _CacheService;
      }();

      _CacheService.ɵfac = function CacheService_Factory(t) {
        return new (t || _CacheService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore));
      };

      _CacheService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _CacheService,
        factory: _CacheService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    6764: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentService": function ComponentService() {
          return (
            /* binding */
            _ComponentService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      99758);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ComponentService = /*#__PURE__*/function () {
        function _ComponentService(injector, componentFactoryResolver, applicationRef) {
          _classCallCheck(this, _ComponentService);

          this.injector = injector;
          this.componentFactoryResolver = componentFactoryResolver;
          this.applicationRef = applicationRef;
        }

        _createClass(_ComponentService, [{
          key: "injectComponent",
          value: function injectComponent(component, propertySetter) {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
            (0, _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_0__.UntilDestroy)()(component);
            this.componentRef = componentFactory.create(this.injector);
            if (propertySetter) propertySetter(this.componentRef.instance);
            this.applicationRef.attachView(this.componentRef.hostView);
            var div = document.createElement('div');
            div.appendChild(this.componentRef.location.nativeElement);
            return {
              html: div,
              ref: this.componentRef
            };
          }
        }]);

        return _ComponentService;
      }();

      _ComponentService.ɵfac = function ComponentService_Factory(t) {
        return new (t || _ComponentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef));
      };

      _ComponentService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _ComponentService,
        factory: _ComponentService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    18200: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DomService": function DomService() {
          return (
            /* binding */
            _DomService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _DomService = /*#__PURE__*/function () {
        function _DomService() {
          _classCallCheck(this, _DomService);
        }

        _createClass(_DomService, [{
          key: "scrollToElement",
          value: function scrollToElement($element) {
            $element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest'
            });
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if ($element) {
              $element.scroll(0, 0);
            } else {
              window.scroll(0, 0);
            }
          }
        }]);

        return _DomService;
      }();

      _DomService.ɵfac = function DomService_Factory(t) {
        return new (t || _DomService)();
      };

      _DomService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _DomService,
        factory: _DomService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    19446: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FirebaseService": function FirebaseService() {
          return (
            /* binding */
            _FirebaseService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cache.service */
      12622);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _FirebaseService = /*#__PURE__*/function () {
        function _FirebaseService(angularFirestore, angularFireAuth, httpClient) {
          _classCallCheck(this, _FirebaseService);

          this.angularFirestore = angularFirestore;
          this.angularFireAuth = angularFireAuth;
          this.httpClient = httpClient;
          this.attacks = [];
          this.factions = [];
          this.families = [];
          this.categories = [];
          this.gods = [];
          this.resources = [];
          this.skills = [];
          this.structures = [];
          this.guilds = [];
          this.units = [];
          this.items = [];
          this.stores = [];
          this.locations = [];
          this.spells = [];
          this.heroes = [];
          this.kingdoms = [];
          this.legends = [];
          this.perks = [];
          this.packs = [];
          this.joinedAttacks = [];
          this.joinedFactions = [];
          this.joinedFamilies = [];
          this.joinedCategories = [];
          this.joinedGods = [];
          this.joinedResources = [];
          this.joinedSkills = [];
          this.joinedStructures = [];
          this.joinedGuilds = [];
          this.joinedUnits = [];
          this.joinedItems = [];
          this.joinedStores = [];
          this.joinedLocations = [];
          this.joinedSpells = [];
          this.joinedHeroes = [];
          this.joinedLegends = [];
          this.joinedPerks = [];
          this.joinedPacks = [];
        }

        _createClass(_FirebaseService, [{
          key: "joinFixtures",
          value: function joinFixtures(element) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      // if (element.store) this.joinObject(element, 'store', await this.cacheService.getStores());
                      if (element.faction) this.joinObject(element, 'faction', this.joinedFactions);
                      if (element.adjacents) this.joinObject(element, 'adjacents', this.factions);
                      if (element.opposites) this.joinObject(element, 'opposites', this.factions); // if (element.location) this.joinObject(element, 'location', await this.cacheService.getLocations());

                      if (element.skills) this.joinObject(element, 'skills', this.skills);
                      if (element.unit) this.joinObject(element, 'unit', this.joinedUnits);
                      if (element.units) this.joinObject(element, 'units', this.joinedUnits);
                      if (element.categories) this.joinObject(element, 'categories', this.categories);
                      if (element.resistances) this.joinObject(element, 'resistances', this.categories);
                      if (element.families) this.joinObject(element, 'families', this.families);
                      if (element.spell) this.joinObject(element, 'spell', this.joinedSpells);
                      if (element.spells) this.joinObject(element, 'spells', this.joinedSpells); // if (element.hero) this.joinObject(element, 'hero', await this.cacheService.getHeroes());
                      // if (element.item) this.joinObject(element, 'item', await this.cacheService.getItems());
                      // if (element.items) this.joinObject(element, 'items', await this.cacheService.getItems());

                      if (element.resources) this.joinObject(element, 'resources', this.resources);
                      if (element.perks) this.joinObject(element, 'perks', this.perks, true);

                    case 13:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          }
        }, {
          key: "joinObject",
          value: function joinObject(element, subCollection, collection) {
            var _this4 = this;

            var recursive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            if (element[subCollection] instanceof Array) {
              element[subCollection].forEach(function (subElement, subElementIndex, subElementArray) {
                if (typeof subElement === 'string') {
                  element[subCollection][subElementIndex] = JSON.parse(JSON.stringify(collection.find(function (el) {
                    return el['id'] === subElement.replace(/^\+|^\-|^\//g, '');
                  })));

                  if (recursive) {
                    _this4.joinObject(element[subCollection][subElementIndex], 'perks', _this4.perks, true);
                  }
                }
              });
              element[subCollection] = recursive ? element[subCollection].slice().sort(function (a, b) {
                return (a === null || a === void 0 ? void 0 : a.sort) - (b === null || b === void 0 ? void 0 : b.sort);
              }) : element[subCollection].slice().sort(function (a, b) {
                return a === null || a === void 0 ? void 0 : a.name.localeCompare(b === null || b === void 0 ? void 0 : b.name);
              });
            }

            if (typeof element[subCollection] === 'string') {
              element[subCollection] = JSON.parse(JSON.stringify(collection.find(function (el) {
                return el['id'] === element[subCollection].replace(/^\+|^\-|^\//g, '');
              })));
            }
          }
        }, {
          key: "readFixtures",
          value: function readFixtures() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.next = 2;
                      return this.httpClient.get('assets/fixtures/attacks.json').toPromise();

                    case 2:
                      this.attacks = _context23.sent;
                      _context23.next = 5;
                      return this.httpClient.get('assets/fixtures/factions.json').toPromise();

                    case 5:
                      this.factions = _context23.sent;
                      _context23.next = 8;
                      return this.httpClient.get('assets/fixtures/families.json').toPromise();

                    case 8:
                      this.families = _context23.sent;
                      _context23.next = 11;
                      return this.httpClient.get('assets/fixtures/categories.json').toPromise();

                    case 11:
                      this.categories = _context23.sent;
                      _context23.next = 14;
                      return this.httpClient.get('assets/fixtures/gods.json').toPromise();

                    case 14:
                      this.gods = _context23.sent;
                      _context23.next = 17;
                      return this.httpClient.get('assets/fixtures/resources.json').toPromise();

                    case 17:
                      this.resources = _context23.sent;
                      _context23.next = 20;
                      return this.httpClient.get('assets/fixtures/skills.json').toPromise();

                    case 20:
                      this.skills = _context23.sent;
                      _context23.next = 23;
                      return this.httpClient.get('assets/fixtures/structures.json').toPromise();

                    case 23:
                      this.structures = _context23.sent;
                      _context23.next = 26;
                      return this.httpClient.get('assets/fixtures/guilds.json').toPromise();

                    case 26:
                      this.guilds = _context23.sent;
                      _context23.next = 29;
                      return this.httpClient.get('assets/fixtures/units.json').toPromise();

                    case 29:
                      this.units = _context23.sent;
                      _context23.next = 32;
                      return this.httpClient.get('assets/fixtures/items.json').toPromise();

                    case 32:
                      this.items = _context23.sent;
                      _context23.next = 35;
                      return this.httpClient.get('assets/fixtures/stores.json').toPromise();

                    case 35:
                      this.stores = _context23.sent;
                      _context23.next = 38;
                      return this.httpClient.get('assets/fixtures/locations.json').toPromise();

                    case 38:
                      this.locations = _context23.sent;
                      _context23.next = 41;
                      return this.httpClient.get('assets/fixtures/spells.json').toPromise();

                    case 41:
                      this.spells = _context23.sent;
                      _context23.next = 44;
                      return this.httpClient.get('assets/fixtures/heroes.json').toPromise();

                    case 44:
                      this.heroes = _context23.sent;
                      _context23.next = 47;
                      return this.httpClient.get('assets/fixtures/legends.json').toPromise();

                    case 47:
                      this.legends = _context23.sent;
                      _context23.next = 50;
                      return this.httpClient.get('assets/fixtures/perks.json').toPromise();

                    case 50:
                      this.perks = _context23.sent;
                      _context23.next = 53;
                      return this.httpClient.get('assets/fixtures/packs.json').toPromise();

                    case 53:
                      this.packs = _context23.sent;

                    case 54:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }, {
          key: "importFixtures",
          value: function importFixtures(collection, elements, batch) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      elements.forEach(function (element, index) {
                        element.random = index;

                        if (element.timestamp) {
                          element.timestamp = moment__WEBPACK_IMPORTED_MODULE_0__(element.timestamp, 'DD/MM/YYYY', true).toDate();
                        }

                        batch.set(_this5.angularFirestore.collection(collection).doc(element.id).ref, element);
                      });

                    case 1:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24);
            }));
          }
        }, {
          key: "loadFixtures",
          value: function loadFixtures(fixtures) {
            var _this6 = this;

            this.angularFireAuth.authState.subscribe(function (user) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
                var _this7 = this;

                var batch;
                return regeneratorRuntime.wrap(function _callee25$(_context25) {
                  while (1) {
                    switch (_context25.prev = _context25.next) {
                      case 0:
                        if (!(user && fixtures.length)) {
                          _context25.next = 61;
                          break;
                        }

                        batch = this.angularFirestore.firestore.batch();
                        _context25.next = 4;
                        return this.readFixtures();

                      case 4:
                        this.joinedFactions = JSON.parse(JSON.stringify(this.factions));
                        this.joinedFactions.forEach(function (faction) {
                          return _this7.joinFixtures(faction);
                        });

                        if (fixtures.includes(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.FACTIONS)) {
                          console.log("Loading ".concat(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.FACTIONS, "..."));
                          this.importFixtures(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.FACTIONS, this.joinedFactions, batch);
                        }

                        this.joinedAttacks = JSON.parse(JSON.stringify(this.attacks));
                        this.joinedAttacks.forEach(function (attack) {
                          return _this7.joinFixtures(attack);
                        });

                        if (fixtures.includes(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.ATTACKS)) {
                          console.log("Loading ".concat(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.ATTACKS, "..."));
                          this.importFixtures(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.ATTACKS, this.joinedAttacks, batch);
                        }

                        this.joinedGuilds = JSON.parse(JSON.stringify(this.guilds));
                        this.joinedGuilds.forEach(function (guild) {
                          return _this7.joinFixtures(guild);
                        });

                        if (fixtures.includes(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.GUILDS)) {
                          console.log("Loading ".concat(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.GUILDS, "..."));
                          this.importFixtures(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.GUILDS, this.joinedGuilds, batch);
                        }

                        this.joinedFamilies = JSON.parse(JSON.stringify(this.families));
                        this.joinedFamilies.forEach(function (family) {
                          return _this7.joinFixtures(family);
                        });

                        if (fixtures.includes(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.FAMILIES)) {
                          console.log("Loading ".concat(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.FAMILIES, "..."));
                          this.importFixtures(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.FAMILIES, this.joinedFamilies, batch);
                        }

                        this.joinedCategories = JSON.parse(JSON.stringify(this.categories));
                        this.joinedCategories.forEach(function (category) {
                          return _this7.joinFixtures(category);
                        });

                        if (fixtures.includes(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.CATEGORIES)) {
                          console.log("Loading ".concat(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.CATEGORIES, "..."));
                          this.importFixtures(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.CATEGORIES, this.joinedCategories, batch);
                        }

                        this.joinedGods = JSON.parse(JSON.stringify(this.gods));
                        this.joinedGods.forEach(function (god) {
                          return _this7.joinFixtures(god);
                        });

                        if (fixtures.includes(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.GODS)) {
                          console.log("Loading ".concat(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.GODS, "..."));
                          this.importFixtures(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.GODS, this.joinedGods, batch);
                        }

                        this.joinedResources = JSON.parse(JSON.stringify(this.resources));
                        this.joinedResources.forEach(function (resource) {
                          return _this7.joinFixtures(resource);
                        });

                        if (fixtures.includes(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.RESOURCES)) {
                          console.log("Loading ".concat(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.RESOURCES, "..."));
                          this.importFixtures(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.RESOURCES, this.joinedResources, batch);
                        }

                        this.joinedStructures = JSON.parse(JSON.stringify(this.structures));
                        this.joinedStructures.forEach(function (structure) {
                          return _this7.joinFixtures(structure);
                        });

                        if (fixtures.includes(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.STRUCTURES)) {
                          console.log("Loading ".concat(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.STRUCTURES, "..."));
                          this.importFixtures(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.STRUCTURES, this.joinedStructures, batch);
                        }

                        this.joinedSkills = JSON.parse(JSON.stringify(this.skills));
                        this.joinedSkills.forEach(function (skill) {
                          return _this7.joinFixtures(skill);
                        });

                        if (fixtures.includes(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.SKILLS)) {
                          console.log("Loading ".concat(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.SKILLS, "..."));
                          this.importFixtures(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.SKILLS, this.joinedSkills, batch);
                        }

                        this.joinedUnits = JSON.parse(JSON.stringify(this.units));
                        this.joinedUnits.forEach(function (unit) {
                          return _this7.joinFixtures(unit);
                        });

                        if (fixtures.includes(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.UNITS)) {
                          console.log("Loading ".concat(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.UNITS, "..."));
                          this.importFixtures(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.UNITS, this.joinedUnits, batch);
                        }

                        this.joinedSpells = JSON.parse(JSON.stringify(this.spells));
                        this.joinedSpells.forEach(function (spell) {
                          return _this7.joinFixtures(spell);
                        });

                        if (fixtures.includes(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.SPELLS)) {
                          console.log("Loading ".concat(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.SPELLS, "..."));
                          this.importFixtures(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.SPELLS, this.joinedSpells, batch);
                        }

                        this.joinedItems = JSON.parse(JSON.stringify(this.items));
                        this.joinedItems.forEach(function (item) {
                          return _this7.joinFixtures(item);
                        });

                        if (fixtures.includes(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.ITEMS)) {
                          console.log("Loading ".concat(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.ITEMS, "..."));
                          this.importFixtures(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.ITEMS, this.joinedItems, batch);
                        }

                        this.joinedHeroes = JSON.parse(JSON.stringify(this.heroes));
                        this.joinedHeroes.forEach(function (hero) {
                          return _this7.joinFixtures(hero);
                        });

                        if (fixtures.includes(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.HEROES)) {
                          console.log("Loading ".concat(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.HEROES, "..."));
                          this.importFixtures(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.HEROES, this.joinedHeroes, batch);
                        }

                        this.joinedStores = JSON.parse(JSON.stringify(this.stores));
                        this.joinedStores.forEach(function (store) {
                          return _this7.joinFixtures(store);
                        });

                        if (fixtures.includes(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.STORES)) {
                          console.log("Loading ".concat(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.STORES, "..."));
                          this.importFixtures(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.STORES, this.joinedStores, batch);
                        }

                        this.joinedLocations = JSON.parse(JSON.stringify(this.locations));
                        this.joinedLocations.forEach(function (quest) {
                          return _this7.joinFixtures(quest);
                        });

                        if (fixtures.includes(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.LOCATIONS)) {
                          console.log("Loading ".concat(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.LOCATIONS, "..."));
                          this.importFixtures(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.LOCATIONS, this.joinedLocations, batch);
                        }

                        this.joinedLegends = JSON.parse(JSON.stringify(this.legends));
                        this.joinedLegends.forEach(function (legend) {
                          return _this7.joinFixtures(legend);
                        });

                        if (fixtures.includes(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.LEGENDS)) {
                          console.log("Loading ".concat(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.LEGENDS, "..."));
                          this.importFixtures(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.LEGENDS, this.joinedLegends, batch);
                        }

                        this.joinedPerks = JSON.parse(JSON.stringify(this.perks));
                        this.joinedPerks.forEach(function (perk) {
                          return _this7.joinFixtures(perk);
                        });

                        if (fixtures.includes(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.PERKS)) {
                          console.log("Loading ".concat(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.PERKS, "..."));
                          this.importFixtures(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.PERKS, this.joinedPerks, batch);
                        }

                        this.joinedPacks = JSON.parse(JSON.stringify(this.packs));
                        this.joinedPacks.forEach(function (pack) {
                          return _this7.joinFixtures(pack);
                        });

                        if (fixtures.includes(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.PACKS)) {
                          console.log("Loading ".concat(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.PACKS, "..."));
                          this.importFixtures(_cache_service__WEBPACK_IMPORTED_MODULE_1__.CollectionType.PACKS, this.joinedPacks, batch);
                        }

                        _context25.next = 60;
                        return batch.commit();

                      case 60:
                        console.log('Fixtures loaded!');

                      case 61:
                      case "end":
                        return _context25.stop();
                    }
                  }
                }, _callee25, this);
              }));
            });
          }
        }]);

        return _FirebaseService;
      }();

      _FirebaseService.ɵfac = function FirebaseService_Factory(t) {
        return new (t || _FirebaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
      };

      _FirebaseService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _FirebaseService,
        factory: _FirebaseService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    4471: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoadingService": function LoadingService() {
          return (
            /* binding */
            _LoadingService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _LoadingService = /*#__PURE__*/function () {
        function _LoadingService() {
          _classCallCheck(this, _LoadingService);

          this.loading = false; // spinner
        }

        _createClass(_LoadingService, [{
          key: "startLoading",
          value: function startLoading() {
            this.loading = true;
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            this.loading = false;
          }
        }]);

        return _LoadingService;
      }();

      _LoadingService.ɵfac = function LoadingService_Factory(t) {
        return new (t || _LoadingService)();
      };

      _LoadingService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _LoadingService,
        factory: _LoadingService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    14972: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MapboxService": function MapboxService() {
          return (
            /* binding */
            _MapboxService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! mapbox-gl */
      88620);
      /* harmony import */


      var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var mapbox_gl_circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! mapbox-gl-circle */
      31931);
      /* harmony import */


      var mapbox_gl_circle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_circle__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _world_marker_marker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../world/marker/marker.component */
      39179);
      /* harmony import */


      var _world_popup_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../world/popup/popup.component */
      33341);
      /* harmony import */


      var _shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/auth/auth.state */
      35917);
      /* harmony import */


      var _shared_type_common_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/type/common.type */
      86209);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      52249);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_component_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/component.service */
      6764);
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngxs/store */
      14835);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./api.service */
      5830);
      /* harmony import */


      var _notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./notification.service */
      12013);

      var _MapboxService = /*#__PURE__*/function () {
        function _MapboxService(componentService, store, apiService, notificationService) {
          _classCallCheck(this, _MapboxService);

          this.componentService = componentService;
          this.store = store;
          this.apiService = apiService;
          this.notificationService = notificationService;
          this.mapbox = mapbox_gl__WEBPACK_IMPORTED_MODULE_1__;
          this.map = null;
          this.markers = [];
          this.offset = 10;
          this.uid = this.store.selectSnapshot(_shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_5__.AuthState.getUserUID);
          this.primaryColor = null;
          this.mapbox.accessToken = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mapbox.token;
        }

        _createClass(_MapboxService, [{
          key: "initialize",
          value: function initialize(container) {
            var _this8 = this;

            this.primaryColor = window.getComputedStyle(document.body).getPropertyValue('--primary-color');
            this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__.Map({
              container: container,
              style: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mapbox.style + '?optimize=true',
              center: [_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mapbox.lng, _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mapbox.lat],
              pitch: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mapbox.pitch,
              zoom: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mapbox.zoom,
              antialias: false,
              dragPan: true,
              dragRotate: true,
              attributionControl: true,
              interactive: true
            });
            this.map.once('load', function () {
              // add fog https://docs.mapbox.com/mapbox-gl-js/example/add-fog/
              _this8.map.setFog({
                range: [0.5, 10.0],
                color: '#FFFFFF',
                'horizon-blend': 0.1
              }); // add the DEM source as a terrain layer


              _this8.map.addSource('mapbox-dem', {
                type: 'raster-dem',
                url: 'mapbox://mapbox.terrain-rgb',
                tileSize: 512,
                maxzoom: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mapbox.zoom
              }); // add the DEM source as a terrain layer with exaggerated height


              _this8.map.setTerrain({
                source: 'mapbox-dem',
                exaggeration: 3
              }); // add a sky layer that will show when the map is highly pitched


              _this8.map.addLayer({
                id: 'sky-day',
                type: 'sky',
                paint: {
                  'sky-type': 'gradient'
                }
              });
            });
            this.map.on('moveend', function () {
              return _this8.refreshMarkers();
            });
          }
        }, {
          key: "markerVisible",
          value: function markerVisible(marker) {
            var lngLat = marker.marker.getLngLat();
            return lngLat && lngLat.lat && lngLat.lng ? this.map.getBounds().contains(lngLat) : false;
          }
        }, {
          key: "refreshMarkers",
          value: function refreshMarkers() {
            var _this9 = this;

            this.markers.forEach(function (marker) {
              console.log(marker, _this9.uid);

              if (marker.id !== _this9.uid && (_this9.map.getZoom() < _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mapbox.zoom || !_this9.markerVisible(marker))) {
                marker.marker.getElement().style.display = 'none';
              } else {
                marker.marker.getElement().style.display = 'block';
              }
            });
          }
        }, {
          key: "addMarker",
          value: function addMarker(data, type) {
            var _this10 = this;

            var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var fly = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            // remove the old one
            this.removeMarker(data.id); // size

            var size = type === _shared_type_common_type__WEBPACK_IMPORTED_MODULE_6__.MarkerType.KINGDOM ? 70 : 44; // marker

            var m = this.componentService.injectComponent(_world_marker_marker_component__WEBPACK_IMPORTED_MODULE_3__.MarkerComponent, function (component) {
              return component.data = Object.assign(Object.assign({}, data), {
                size: size,
                type: type
              });
            });
            var marker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__.Marker(m.html, {
              anchor: 'bottom'
            }).setLngLat({
              lat: data.coordinates.latitude,
              lng: data.coordinates.longitude
            }).addTo(this.map); // popup

            var p = null;
            var s = null;
            marker = marker.setPopup(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__.Popup({
              offset: [0, -(size + this.offset)],
              anchor: 'bottom',
              closeButton: false,
              closeOnClick: true,
              closeOnMove: false,
              maxWidth: 'none',
              className: 'dialog-responsive'
            }).setDOMContent(document.createElement('div')) // open
            .on('open', function ($event) {
              p = _this10.componentService.injectComponent(_world_popup_popup_component__WEBPACK_IMPORTED_MODULE_4__.PopupComponent, function (component) {
                return component.data = Object.assign(Object.assign({}, data), {
                  type: type
                });
              });
              p.ref.changeDetectorRef.detectChanges();
              marker.getPopup().setDOMContent(p.html);
              s = p.ref.instance.opened.asObservable().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)()).subscribe(function (open) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
                  return regeneratorRuntime.wrap(function _callee26$(_context26) {
                    while (1) {
                      switch (_context26.prev = _context26.next) {
                        case 0:
                          if (!open) {
                            _context26.next = 4;
                            break;
                          }

                          _context26.next = 3;
                          return new Promise(function (resolve) {
                            return setTimeout(resolve, 500);
                          });

                        case 3:
                          this.map.easeTo({
                            center: $event.target.getLngLat(),
                            offset: [0, $event.target.getElement().clientHeight / 2 + this.offset]
                          });

                        case 4:
                        case "end":
                          return _context26.stop();
                      }
                    }
                  }, _callee26, this);
                }));
              });
            }) // close
            .on('close', function () {
              marker.getPopup().setDOMContent(document.createElement('div'));

              if (p && p.ref) {
                p.ref.destroy();
                p = null;
              }

              if (s) {
                s.unsubscribe();
                s = null;
              }
            })); // radius

            var circle = null;

            if (radius) {
              circle = new (mapbox_gl_circle__WEBPACK_IMPORTED_MODULE_2___default())({
                lat: data.coordinates.latitude,
                lng: data.coordinates.longitude
              }, Math.max(1000, data.power), {
                editable: false,
                fillColor: this.primaryColor,
                fillOpacity: 0.2,
                strokeColor: this.primaryColor,
                strokeWeight: 1,
                strokeOpacity: 1,
                refineStroke: false
              });
              circle.addTo(this.map);
            } // center


            if (fly) {
              this.goTo(data.coordinates.latitude, data.coordinates.longitude, true);
            } // add to list for future disposal


            this.markers.push({
              id: data.id,
              marker: marker,
              circle: circle,
              type: type
            }); // return

            return marker;
          }
        }, {
          key: "goTo",
          value: function goTo(lat, lng) {
            var fly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (fly) {
              this.map.flyTo({
                center: [lng, lat],
                essential: true
              });
            } else {
              this.map.easeTo({
                center: [lng, lat],
                essential: true
              });
            }
          }
        }, {
          key: "removeMarker",
          value: function removeMarker(id) {
            var index = this.markers.findIndex(function (item) {
              return item.id === id;
            });

            if (index !== -1) {
              var found = this.markers[index];
              if (found.marker) found.marker.remove();
              if (found.circle) found.circle.remove();
              this.markers.splice(index, 1);
            }
          }
        }, {
          key: "clearMarkers",
          value: function clearMarkers() {
            var _this11 = this;

            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (type) {
              this.markers.filter(function (marker) {
                return marker.type === type;
              }).slice(0).forEach(function (marker) {
                return _this11.removeMarker(marker.id);
              });
            } else {
              this.markers.slice(0).forEach(function (marker) {
                return _this11.removeMarker(marker.id);
              });
            }
          }
        }, {
          key: "resizeMap",
          value: function resizeMap() {
            if (this.map) {
              this.map.resize();
            }
          }
        }, {
          key: "addKingdomByClick",
          value: function addKingdomByClick(type) {
            var _this12 = this;

            this.map.once('click', function ($event) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
                return regeneratorRuntime.wrap(function _callee27$(_context27) {
                  while (1) {
                    switch (_context27.prev = _context27.next) {
                      case 0:
                        _context27.next = 2;
                        return this.apiService.addKingdom(null, type, $event.lngLat.lat, $event.lngLat.lng, 'bot-' + (Math.random() + 1).toString(36).substring(7));

                      case 2:
                        this.notificationService.warning('world.map.update');

                      case 3:
                      case "end":
                        return _context27.stop();
                    }
                  }
                }, _callee27, this);
              }));
            });
          }
        }, {
          key: "addShopByClick",
          value: function addShopByClick(type) {
            var _this13 = this;

            this.map.once('click', function ($event) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
                return regeneratorRuntime.wrap(function _callee28$(_context28) {
                  while (1) {
                    switch (_context28.prev = _context28.next) {
                      case 0:
                        _context28.next = 2;
                        return this.apiService.addShop(null, type, $event.lngLat.lat, $event.lngLat.lng, 'shop-' + (Math.random() + 1).toString(36).substring(7));

                      case 2:
                        this.notificationService.warning('world.map.update');

                      case 3:
                      case "end":
                        return _context28.stop();
                    }
                  }
                }, _callee28, this);
              }));
            });
          }
        }, {
          key: "addQuestByClick",
          value: function addQuestByClick(type) {
            var _this14 = this;

            this.map.once('click', function ($event) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
                return regeneratorRuntime.wrap(function _callee29$(_context29) {
                  while (1) {
                    switch (_context29.prev = _context29.next) {
                      case 0:
                        _context29.next = 2;
                        return this.apiService.addQuest(null, type, $event.lngLat.lat, $event.lngLat.lng, 'quest-' + (Math.random() + 1).toString(36).substring(7));

                      case 2:
                        this.notificationService.warning('world.map.update');

                      case 3:
                      case "end":
                        return _context29.stop();
                    }
                  }
                }, _callee29, this);
              }));
            });
          }
        }, {
          key: "populateMapByClick",
          value: function populateMapByClick() {
            var _this15 = this;

            this.map.once('click', function ($event) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
                return regeneratorRuntime.wrap(function _callee30$(_context30) {
                  while (1) {
                    switch (_context30.prev = _context30.next) {
                      case 0:
                        _context30.next = 2;
                        return this.apiService.populateMap($event.lngLat.lat, $event.lngLat.lng);

                      case 2:
                        this.notificationService.warning('world.map.update');

                      case 3:
                      case "end":
                        return _context30.stop();
                    }
                  }
                }, _callee30, this);
              }));
            });
          }
        }, {
          key: "terminalize",
          value: function terminalize() {
            this.clearMarkers();
            this.map.remove();
            this.map = null;
            this.markers = [];
          }
        }]);

        return _MapboxService;
      }();

      _MapboxService.ɵfac = function MapboxService_Factory(t) {
        return new (t || _MapboxService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_services_component_service__WEBPACK_IMPORTED_MODULE_7__.ComponentService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_9__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_notification_service__WEBPACK_IMPORTED_MODULE_10__.NotificationService));
      };

      _MapboxService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
        token: _MapboxService,
        factory: _MapboxService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    12013: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationService": function NotificationService() {
          return (
            /* binding */
            _NotificationService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../pipes/long.pipe */
      16757);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      69606);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      50931);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      76477);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      39349);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      49005);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      44094);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      56913);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      35116);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      68456);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      var SnackBarType;

      (function (SnackBarType) {
        SnackBarType["SUCCESS"] = "success";
        SnackBarType["WARNING"] = "warning";
        SnackBarType["ERROR"] = "error";
      })(SnackBarType || (SnackBarType = {}));

      var _NotificationService = /*#__PURE__*/function () {
        function _NotificationService(snackBar, translateService) {
          var _this16 = this;

          _classCallCheck(this, _NotificationService);

          this.snackBar = snackBar;
          this.translateService = translateService;
          this.options = {
            duration: 2500,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          };
          this.snackBarQueue = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
          this.snackBarQueue$ = this.snackBarQueue.asObservable();
          this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
          this.snackBarQueue$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(function (queue) {
            return queue.length > 0 && !queue[0].showing;
          }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function () {
            var updatedQueue = _this16.snackBarQueue.value;
            updatedQueue[0].showing = true;

            _this16.snackBarQueue.next(updatedQueue);
          }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (queue) {
            return queue[0];
          }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.ngDestroy)).subscribe(function (notification) {
            return _this16.showSnackbar(notification.message, notification.type);
          });
        }

        _createClass(_NotificationService, [{
          key: "showSnackbar",
          value: function showSnackbar(message, type) {
            var matSnackBarRef = null;

            switch (type) {
              case SnackBarType.SUCCESS:
                matSnackBarRef = this.snackBar.open(message, '✔️', Object.assign(Object.assign({}, this.options), {
                  panelClass: ['mat-toolbar', 'mat-accent']
                }));
                break;

              case SnackBarType.WARNING:
                matSnackBarRef = this.snackBar.open(message, '⚠️', Object.assign(Object.assign({}, this.options), {
                  panelClass: ['mat-toolbar', 'mat-primary']
                }));
                break;

              case SnackBarType.ERROR:
                matSnackBarRef = this.snackBar.open(message, '❌', Object.assign(Object.assign({}, this.options), {
                  panelClass: ['mat-toolbar', 'mat-warn']
                }));
                break;
            }

            if (matSnackBarRef) this.removeDismissedSnackBar(matSnackBarRef.afterDismissed());
          }
        }, {
          key: "removeDismissedSnackBar",
          value: function removeDismissedSnackBar(snackBar) {
            var _this17 = this;

            snackBar.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.delay)(50), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(function () {
              var updatedQueue = _this17.snackBarQueue.value;
              if (updatedQueue[0].showing) updatedQueue.shift();

              _this17.snackBarQueue.next(updatedQueue);
            });
          }
        }, {
          key: "success",
          value: function success(text, variable) {
            var _this18 = this;

            if (variable) {
              Object.keys(variable).forEach(function (key, index) {
                if (typeof variable[key] === 'number') variable[key] = new _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_0__.LongPipe().transform(variable[key]);
                if (typeof variable[key] === 'string' && variable[key].includes('.')) variable[key] = _this18.translateService.instant(variable[key]);
              });
            }

            var message = this.translateService.instant(text, variable);
            var type = SnackBarType.SUCCESS;
            this.snackBarQueue.next(this.snackBarQueue.value.concat([{
              message: message,
              type: type,
              showing: false
            }]));
          }
        }, {
          key: "warning",
          value: function warning(text) {
            var message = this.translateService.instant(text);
            var type = SnackBarType.WARNING;
            this.snackBarQueue.next(this.snackBarQueue.value.concat([{
              message: message,
              type: type,
              showing: false
            }]));
          }
        }, {
          key: "error",
          value: function error(text) {
            var message = this.translateService.instant(text);
            var type = SnackBarType.ERROR;
            this.snackBarQueue.next(this.snackBarQueue.value.concat([{
              message: message,
              type: type,
              showing: false
            }]));
          }
        }]);

        return _NotificationService;
      }();

      _NotificationService.ɵfac = function NotificationService_Factory(t) {
        return new (t || _NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService));
      };

      _NotificationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
        token: _NotificationService,
        factory: _NotificationService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    80595: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TutorialService": function TutorialService() {
          return (
            /* binding */
            _TutorialService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-ui-tour-md-menu */
      81252);

      var _TutorialService = /*#__PURE__*/function () {
        function _TutorialService(tourService) {
          _classCallCheck(this, _TutorialService);

          this.tourService = tourService;
        }

        _createClass(_TutorialService, [{
          key: "ready",
          value: function ready(route) {
            var waitingSteps = this.tourService.steps.filter(function (step) {
              return step.route.includes(route);
            });
            waitingSteps.forEach(function (waitingStep) {
              return waitingStep.waitFor.next();
            });
          }
        }, {
          key: "start",
          value: function start(step) {
            if (step) this.tourService.startAt(step);else this.tourService.start();
          }
        }, {
          key: "initialize",
          value: function initialize() {
            var options = {
              preventScrolling: false,
              enableBackdrop: true // waitFor: new ReplaySubject<void>(),

            };
            this.tourService.disableHotkeys();
            this.tourService.initialize([{
              route: '/kingdom/city',
              stepId: 'tour.supplies',
              anchorId: 'tour.supplies',
              title: 'kingdom.supplies.name',
              content: 'kingdom.supplies.tour'
            }, {
              route: '/kingdom/city',
              stepId: 'tour.city',
              anchorId: 'tour.city',
              title: 'kingdom.city.name',
              content: 'kingdom.city.tour'
            }, {
              route: '/kingdom/city',
              stepId: 'tour.tax',
              anchorId: 'tour.tax',
              title: 'kingdom.tax.name',
              content: 'kingdom.tax.tour'
            }, {
              route: '/kingdom/city',
              stepId: 'tour.charge',
              anchorId: 'tour.charge',
              title: 'kingdom.charge.name',
              content: 'kingdom.charge.tour'
            }, {
              route: '/kingdom/city',
              stepId: 'tour.explore',
              anchorId: 'tour.explore',
              title: 'kingdom.explore.name',
              content: 'kingdom.explore.tour'
            }, {
              route: '/kingdom/auction',
              stepId: 'tour.auction',
              anchorId: 'tour.auction',
              title: 'kingdom.auction.name',
              content: 'kingdom.auction.tour'
            }, {
              route: '/kingdom/auction',
              stepId: 'tour.bid',
              anchorId: 'tour.bid',
              title: 'kingdom.bid.name',
              content: 'kingdom.bid.tour'
            }, {
              route: '/kingdom/emporium',
              stepId: 'tour.emporium',
              anchorId: 'tour.emporium',
              title: 'kingdom.emporium.name',
              content: 'kingdom.emporium.tour'
            }, {
              route: '/kingdom/emporium',
              stepId: 'tour.tree',
              anchorId: 'tour.tree',
              title: 'kingdom.tree.name',
              content: 'kingdom.tree.tour'
            }, {
              route: '/kingdom/emporium',
              stepId: 'tour.mining',
              anchorId: 'tour.mining',
              title: 'kingdom.mining.name',
              content: 'kingdom.mining.tour'
            }, {
              route: '/kingdom/army',
              stepId: 'tour.army',
              anchorId: 'tour.army',
              title: 'kingdom.army.name',
              content: 'kingdom.army.tour'
            }, {
              route: '/kingdom/army',
              stepId: 'tour.attack',
              anchorId: 'tour.attack',
              title: 'kingdom.attack.name',
              content: 'kingdom.attack.tour'
            }, {
              route: '/kingdom/army',
              stepId: 'tour.defense',
              anchorId: 'tour.defense',
              title: 'kingdom.defense.name',
              content: 'kingdom.defense.tour'
            }, {
              route: '/kingdom/army',
              stepId: 'tour.recruit',
              anchorId: 'tour.recruit',
              title: 'kingdom.recruit.name',
              content: 'kingdom.recruit.tour'
            }, {
              route: '/kingdom/tavern',
              stepId: 'tour.tavern',
              anchorId: 'tour.tavern',
              title: 'kingdom.tavern.name',
              content: 'kingdom.tavern.tour'
            }, {
              route: '/kingdom/tavern',
              stepId: 'tour.leadership',
              anchorId: 'tour.leadership',
              title: 'kingdom.leadership.name',
              content: 'kingdom.leadership.tour'
            }, {
              route: '/kingdom/tavern',
              stepId: 'tour.guard',
              anchorId: 'tour.guard',
              title: 'kingdom.guard.name',
              content: 'kingdom.guard.tour'
            }, {
              route: '/kingdom/census',
              stepId: 'tour.census',
              anchorId: 'tour.census',
              title: 'kingdom.census.name',
              content: 'kingdom.census.tour'
            }, {
              route: '/kingdom/census',
              stepId: 'tour.kingdom',
              anchorId: 'tour.kingdom',
              title: 'kingdom.kingdom.name',
              content: 'kingdom.kingdom.tour'
            }, {
              route: '/kingdom/archive',
              stepId: 'tour.archive',
              anchorId: 'tour.archive',
              title: 'kingdom.archive.name',
              content: 'kingdom.archive.tour'
            }, {
              route: '/kingdom/clan',
              stepId: 'tour.clan',
              anchorId: 'tour.clan',
              title: 'kingdom.clan.name',
              content: 'kingdom.clan.tour'
            }, {
              route: '/kingdom/clan',
              stepId: 'tour.guild',
              anchorId: 'tour.guild',
              title: 'kingdom.guild.name',
              content: 'kingdom.guild.tour'
            }, {
              route: '/kingdom/sorcery',
              stepId: 'tour.sorcery',
              anchorId: 'tour.sorcery',
              title: 'kingdom.sorcery.name',
              content: 'kingdom.sorcery.tour'
            }, {
              route: '/kingdom/sorcery',
              stepId: 'tour.arcanism',
              anchorId: 'tour.arcanism',
              title: 'kingdom.arcanism.name',
              content: 'kingdom.arcanism.tour'
            }, {
              route: '/kingdom/sorcery',
              stepId: 'tour.protection',
              anchorId: 'tour.protection',
              title: 'kingdom.protection.name',
              content: 'kingdom.protection.tour'
            }, {
              route: '/kingdom/temple',
              stepId: 'tour.temple',
              anchorId: 'tour.temple',
              title: 'kingdom.temple.name',
              content: 'kingdom.temple.tour'
            }, {
              route: '/kingdom/temple',
              stepId: 'tour.break',
              anchorId: 'tour.break',
              title: 'kingdom.break.name',
              content: 'kingdom.break.tour'
            }, {
              route: '/kingdom/temple',
              stepId: 'tour.dispel',
              anchorId: 'tour.dispel',
              title: 'kingdom.dispel.name',
              content: 'kingdom.dispel.tour'
            }, {
              route: '/user/encyclopedia',
              stepId: 'tour.encyclopedia',
              anchorId: 'tour.encyclopedia',
              title: 'user.encyclopedia.name',
              content: 'user.encyclopedia.tour'
            }], options);
          }
        }]);

        return _TutorialService;
      }();

      _TutorialService.ɵfac = function TutorialService_Factory(t) {
        return new (t || _TutorialService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_1__.TourService));
      };

      _TutorialService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _TutorialService,
        factory: _TutorialService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    89104: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SetUserAction": function SetUserAction() {
          return (
            /* binding */
            _SetUserAction
          );
        },

        /* harmony export */
        "SetKingdomAction": function SetKingdomAction() {
          return (
            /* binding */
            _SetKingdomAction
          );
        },

        /* harmony export */
        "SetKingdomSuppliesAction": function SetKingdomSuppliesAction() {
          return (
            /* binding */
            _SetKingdomSuppliesAction
          );
        },

        /* harmony export */
        "SetKingdomBuildingsAction": function SetKingdomBuildingsAction() {
          return (
            /* binding */
            _SetKingdomBuildingsAction
          );
        },

        /* harmony export */
        "LoginWithGoogleAction": function LoginWithGoogleAction() {
          return (
            /* binding */
            _LoginWithGoogleAction
          );
        },

        /* harmony export */
        "LogoutAction": function LogoutAction() {
          return (
            /* binding */
            _LogoutAction
          );
        }
        /* harmony export */

      });

      var _SetUserAction = function _SetUserAction(uid) {
        _classCallCheck(this, _SetUserAction);

        this.uid = uid;
      };

      _SetUserAction.type = '[User] Set User';

      var _SetKingdomAction = function _SetKingdomAction(uid) {
        _classCallCheck(this, _SetKingdomAction);

        this.uid = uid;
      };

      _SetKingdomAction.type = '[User] Set Kingdom';

      var _SetKingdomSuppliesAction = function _SetKingdomSuppliesAction(uid) {
        _classCallCheck(this, _SetKingdomSuppliesAction);

        this.uid = uid;
      };

      _SetKingdomSuppliesAction.type = '[User] Set Kingdom supplies';

      var _SetKingdomBuildingsAction = function _SetKingdomBuildingsAction(uid) {
        _classCallCheck(this, _SetKingdomBuildingsAction);

        this.uid = uid;
      };

      _SetKingdomBuildingsAction.type = '[User] Set Kingdom buildings';

      var _LoginWithGoogleAction = function _LoginWithGoogleAction() {
        _classCallCheck(this, _LoginWithGoogleAction);
      };

      _LoginWithGoogleAction.type = '[User] Login with google';

      var _LogoutAction = function _LogoutAction() {
        _classCallCheck(this, _LogoutAction);
      };

      _LogoutAction.type = '[User] Logout user';
      /***/
    },

    /***/
    35917: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "initial": function initial() {
          return (
            /* binding */
            _initial
          );
        },

        /* harmony export */
        "AuthState": function AuthState() {
          return (
            /* binding */
            _AuthState
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngxs/store */
      14835);
      /* harmony import */


      var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.actions */
      89104);
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase/app */
      27694);
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      39349);
      /* harmony import */


      var src_app_pipes_turn_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/pipes/turn.pipe */
      14344);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/notification.service */
      12013);

      var _initial = {
        uid: null,
        kingdom: null,
        supplies: [],
        buildings: [],
        logged: false,
        clock: null,
        popup: null
      };

      var _AuthState = /*#__PURE__*/function () {
        function AuthState(angularFireAuth, angularFirestore, router, notificationService) {
          _classCallCheck(this, AuthState);

          this.angularFireAuth = angularFireAuth;
          this.angularFirestore = angularFirestore;
          this.router = router;
          this.notificationService = notificationService;
        }

        _createClass(AuthState, [{
          key: "ngxsOnInit",
          value: function ngxsOnInit(ctx) {
            var _this19 = this;

            setInterval(function () {
              ctx.patchState({
                clock: new Date()
              });
            }, 1000);
            this.angularFireAuth.authState.subscribe(function (user) {
              if (user) {
                ctx.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_1__.SetUserAction(user.uid));
                ctx.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_1__.SetKingdomAction(user.uid));
                ctx.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_1__.SetKingdomSuppliesAction(user.uid));
                ctx.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_1__.SetKingdomBuildingsAction(user.uid));

                _this19.notificationService.success('user.auth.authorized');

                var route = localStorage.getItem('route') || '/kingdom/city'; // fix to use #fragments

                var tree = _this19.router.parseUrl(route);

                var fragment = tree.fragment;
                tree.queryParams = {};
                tree.fragment = null;

                _this19.router.navigate([tree.toString()], {
                  fragment: fragment
                });
              } else {
                _this19.router.navigate(['/user/landing']);
              }
            });
          }
        }, {
          key: "loginWithGoogle",
          value: function loginWithGoogle(ctx) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      _context31.next = 2;
                      return this.angularFireAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_2__.auth.GoogleAuthProvider());

                    case 2:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout(ctx) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              var state;
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      _context32.next = 2;
                      return this.angularFireAuth.signOut();

                    case 2:
                      state = ctx.getState();
                      ctx.setState(Object.assign(Object.assign({}, state), {
                        uid: null,
                        kingdom: null,
                        supplies: [],
                        buildings: [],
                        logged: false,
                        clock: null
                      }));

                    case 4:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
            }));
          }
        }, {
          key: "setUser",
          value: function setUser(ctx, payload) {
            var state = ctx.getState();
            ctx.setState(Object.assign(Object.assign({}, state), {
              uid: payload.uid,
              logged: true
            }));
          }
        }, {
          key: "setKingdom",
          value: function setKingdom(ctx, payload) {
            return this.angularFirestore.doc("kingdoms/".concat(payload.uid)).valueChanges().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function (kingdom) {
              var state = ctx.getState();
              ctx.setState(Object.assign(Object.assign({}, state), {
                kingdom: kingdom
              }));
            }));
          }
        }, {
          key: "setKingdomSupplies",
          value: function setKingdomSupplies(ctx, payload) {
            return this.angularFirestore.collection("kingdoms/".concat(payload.uid, "/supplies")).valueChanges({
              idField: 'fid'
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function (supplies) {
              var state = ctx.getState();
              ctx.setState(Object.assign(Object.assign({}, state), {
                supplies: supplies.sort(function (a, b) {
                  return a.resource.sort - b.resource.sort;
                })
              }));
            }));
          }
        }, {
          key: "setKingdomBuildings",
          value: function setKingdomBuildings(ctx, payload) {
            return this.angularFirestore.collection("kingdoms/".concat(payload.uid, "/buildings")).valueChanges({
              idField: 'fid'
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function (buildings) {
              var state = ctx.getState();
              ctx.setState(Object.assign(Object.assign({}, state), {
                buildings: buildings
              }));
            }));
          }
        }], [{
          key: "getUserUID",
          value: function getUserUID(state) {
            return state && state.uid;
          }
        }, {
          key: "getKingdomSupplies",
          value: function getKingdomSupplies(state) {
            return state && state.supplies;
          }
        }, {
          key: "getKingdomGem",
          value: function getKingdomGem(state) {
            return state && state.supplies.find(function (supply) {
              return supply.id === 'gem';
            });
          }
        }, {
          key: "getKingdomTurn",
          value: function getKingdomTurn(state) {
            var turns = state.supplies.find(function (supply) {
              return supply.id === 'turn';
            });

            if (state && turns) {
              var kingdomTurn = JSON.parse(JSON.stringify(turns));
              kingdomTurn.quantity = (0, src_app_pipes_turn_pipe__WEBPACK_IMPORTED_MODULE_3__.calculate)(kingdomTurn.timestamp.seconds * 1000, Date.now(), kingdomTurn.resource.max, kingdomTurn.resource.ratio);
              return kingdomTurn;
            }

            return null;
          }
        }, {
          key: "getKingdomLand",
          value: function getKingdomLand(state) {
            return state && state.supplies.find(function (supply) {
              return supply.id === 'land';
            });
          }
        }, {
          key: "getKingdomGold",
          value: function getKingdomGold(state) {
            return state && state.supplies.find(function (supply) {
              return supply.id === 'gold';
            });
          }
        }, {
          key: "getKingdomMana",
          value: function getKingdomMana(state) {
            return state && state.supplies.find(function (supply) {
              return supply.id === 'mana';
            });
          }
        }, {
          key: "getKingdomPopulation",
          value: function getKingdomPopulation(state) {
            return state && state.supplies.find(function (supply) {
              return supply.id === 'population';
            });
          }
        }, {
          key: "getKingdomBuildings",
          value: function getKingdomBuildings(state) {
            return state && state.buildings;
          }
        }, {
          key: "getKingdomVillage",
          value: function getKingdomVillage(state) {
            return state && state.buildings.find(function (building) {
              return building.id === 'village';
            });
          }
        }, {
          key: "getKingdomNode",
          value: function getKingdomNode(state) {
            return state && state.buildings.find(function (building) {
              return building.id === 'node';
            });
          }
        }, {
          key: "getKingdomWorkshop",
          value: function getKingdomWorkshop(state) {
            return state && state.buildings.find(function (building) {
              return building.id === 'workshop';
            });
          }
        }, {
          key: "getKingdomAcademy",
          value: function getKingdomAcademy(state) {
            return state && state.buildings.find(function (building) {
              return building.id === 'academy';
            });
          }
        }, {
          key: "getKingdomGuild",
          value: function getKingdomGuild(state) {
            return state && state.kingdom && JSON.stringify({
              guild: state.kingdom.guild,
              guilded: state.kingdom.guilded.toMillis()
            });
          }
        }, {
          key: "getKingdomClan",
          value: function getKingdomClan(state) {
            return state && state.kingdom && state.kingdom.clan;
          }
        }, {
          key: "getKingdomTree",
          value: function getKingdomTree(state) {
            return state && state.kingdom && state.kingdom.tree;
          }
        }, {
          key: "getKingdom",
          value: function getKingdom(state) {
            return state && state.kingdom;
          }
        }, {
          key: "getUserLoggedIn",
          value: function getUserLoggedIn(state) {
            return state && state.logged;
          }
        }, {
          key: "getAuthState",
          value: function getAuthState(state) {
            return state;
          }
        }, {
          key: "getClock",
          value: function getClock(state) {
            return state && state.clock;
          }
        }]);

        return AuthState;
      }();

      _AuthState.ɵfac = function AuthState_Factory(t) {
        return new (t || _AuthState)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService));
      };

      _AuthState.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
        token: _AuthState,
        factory: _AuthState.ɵfac
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.LoginWithGoogleAction)], _AuthState.prototype, "loginWithGoogle", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.LogoutAction)], _AuthState.prototype, "logout", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.SetUserAction)], _AuthState.prototype, "setUser", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.SetKingdomAction)], _AuthState.prototype, "setKingdom", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.SetKingdomSuppliesAction)], _AuthState.prototype, "setKingdomSupplies", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.SetKingdomBuildingsAction)], _AuthState.prototype, "setKingdomBuildings", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], _AuthState, "getUserUID", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], _AuthState, "getKingdomSupplies", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], _AuthState, "getKingdomGem", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], _AuthState, "getKingdomTurn", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], _AuthState, "getKingdomLand", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], _AuthState, "getKingdomGold", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], _AuthState, "getKingdomMana", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], _AuthState, "getKingdomPopulation", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], _AuthState, "getKingdomBuildings", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], _AuthState, "getKingdomVillage", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], _AuthState, "getKingdomNode", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], _AuthState, "getKingdomWorkshop", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], _AuthState, "getKingdomAcademy", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], _AuthState, "getKingdomGuild", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], _AuthState, "getKingdomClan", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], _AuthState, "getKingdomTree", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], _AuthState, "getKingdom", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], _AuthState, "getUserLoggedIn", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], _AuthState, "getAuthState", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()], _AuthState, "getClock", null);
      _AuthState = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'auth',
        defaults: _initial
      })], _AuthState);
      /***/
    },

    /***/
    68922: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaginatorIntl": function PaginatorIntl() {
          return (
            /* binding */
            _PaginatorIntl
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      var _PaginatorIntl = /*#__PURE__*/function (_angular_material_pag) {
        _inherits(_PaginatorIntl, _angular_material_pag);

        var _super = _createSuper(_PaginatorIntl);

        function _PaginatorIntl(translateService, translateParser) {
          var _this20;

          _classCallCheck(this, _PaginatorIntl);

          _this20 = _super.call(this);
          _this20.translateService = translateService;
          _this20.translateParser = translateParser;

          _this20.getRangeLabel = function (page, pageSize, length) {
            var total = Math.max(length, 0);
            var start = page * pageSize;
            var end = start < length ? Math.min(start + pageSize, length) : start + pageSize;
            return _this20.translateParser.interpolate(_this20.rangeLabelIntl, {
              start: start,
              end: end,
              length: total
            });
          };

          _this20.translateService.onLangChange.subscribe(function (e) {
            return _this20.getTranslations();
          });

          _this20.getTranslations();

          return _this20;
        }

        _createClass(_PaginatorIntl, [{
          key: "getTranslations",
          value: function getTranslations() {
            var _this21 = this;

            this.translateService.get(['paginator.itemsPerPageLabel', 'paginator.nextPageLabel', 'paginator.previousPageLabel', 'paginator.firstPageLabel', 'paginator.lastPageLabel', 'paginator.rangeLabelIntl']).subscribe(function (translation) {
              _this21.itemsPerPageLabel = translation['paginator.itemsPerPageLabel'];
              _this21.nextPageLabel = translation['paginator.nextPageLabel'];
              _this21.previousPageLabel = translation['paginator.previousPageLabel'];
              _this21.firstPageLabel = translation['paginator.firstPageLabel'];
              _this21.lastPageLabel = translation['paginator.lastPageLabel'];
              _this21.rangeLabelIntl = translation['paginator.rangeLabelIntl'];

              _this21.changes.next();
            });
          }
        }]);

        return _PaginatorIntl;
      }(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__.MatPaginatorIntl);

      _PaginatorIntl.ɵfac = function PaginatorIntl_Factory(t) {
        return new (t || _PaginatorIntl)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateParser));
      };

      _PaginatorIntl.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _PaginatorIntl,
        factory: _PaginatorIntl.ɵfac
      });
      /***/
    },

    /***/
    44466: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "httpTranslateLoader": function httpTranslateLoader() {
          return (
            /* binding */
            _httpTranslateLoader
          );
        },

        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/layout */
      66883);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/flex-layout */
      78662);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      49476);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/toolbar */
      64106);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/sidenav */
      86608);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/list */
      28417);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      68456);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/chips */
      79243);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/table */
      54302);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/sort */
      45381);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/tabs */
      9348);
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/badge */
      90330);
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      80395);
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      365);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/checkbox */
      74058);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/datepicker */
      42937);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      80181);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      76322);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/material/expansion */
      22323);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/material/tooltip */
      50298);
      /* harmony import */


      var ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ngx-ui-tour-md-menu */
      81252);
      /* harmony import */


      var ngx_currency__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ngx-currency */
      49816);
      /* harmony import */


      var _shell_shell_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shell/shell.component */
      24337);
      /* harmony import */


      var _pipes_short_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../pipes/short.pipe */
      61357);
      /* harmony import */


      var _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../pipes/icon.pipe */
      38262);
      /* harmony import */


      var _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../pipes/long.pipe */
      16757);
      /* harmony import */


      var _pipes_legendary_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../pipes/legendary.pipe */
      79690);
      /* harmony import */


      var _pipes_turn_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../pipes/turn.pipe */
      14344);
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      42791);
      /* harmony import */


      var _shell_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shell/status.component */
      88177);
      /* harmony import */


      var _tour_tour_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tour/tour.component */
      69078);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/core */
      2316); // material
      // plugins
      // components
      // pipes
      // AOT compilation support


      function _httpTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http);
      }

      var components = [_shell_shell_component__WEBPACK_IMPORTED_MODULE_0__.ShellComponent, _pipes_short_pipe__WEBPACK_IMPORTED_MODULE_1__.ShortPipe, _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_2__.IconPipe, _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_3__.LongPipe, _pipes_legendary_pipe__WEBPACK_IMPORTED_MODULE_4__.LegendaryPipe, _pipes_turn_pipe__WEBPACK_IMPORTED_MODULE_5__.TurnPipe, _tour_tour_component__WEBPACK_IMPORTED_MODULE_7__.TourComponent];
      var modules = [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__.LayoutModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__.FlexLayoutModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__.MatChipsModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_28__.MatSelectModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabsModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_30__.MatBadgeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__.DragDropModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__.MatProgressBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__.MatDialogModule, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__.MatCheckboxModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.ReactiveFormsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_36__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_37__.MatNativeDateModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__.MatProgressSpinnerModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_39__.MatBottomSheetModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__.MatExpansionModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__.MatTooltipModule];

      var _SharedModule = function _SharedModule() {
        _classCallCheck(this, _SharedModule);
      };

      _SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || _SharedModule)();
      };

      _SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵdefineNgModule"]({
        type: _SharedModule
      });
      _SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵdefineInjector"]({
        imports: [[].concat(modules, [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_43__.TranslateModule.forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_43__.TranslateLoader,
            useFactory: _httpTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClient]
          },
          isolate: false
        }), ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_44__.TourMatMenuModule, ngx_currency__WEBPACK_IMPORTED_MODULE_45__.NgxCurrencyModule.forRoot({
          align: 'right',
          allowNegative: false,
          allowZero: true,
          decimal: ',',
          precision: 0,
          prefix: '',
          suffix: '',
          thousands: '.',
          nullable: true,
          min: null,
          max: null,
          inputMode: ngx_currency__WEBPACK_IMPORTED_MODULE_45__.CurrencyMaskInputMode.FINANCIAL
        }), _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__.ScrollingModule]), _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__.LayoutModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__.FlexLayoutModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__.MatChipsModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_28__.MatSelectModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabsModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_30__.MatBadgeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__.DragDropModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__.MatProgressBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__.MatDialogModule, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__.MatCheckboxModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.ReactiveFormsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_36__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_37__.MatNativeDateModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__.MatProgressSpinnerModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_39__.MatBottomSheetModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__.MatExpansionModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__.MatTooltipModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_43__.TranslateModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵsetNgModuleScope"](_SharedModule, {
          declarations: [_shell_shell_component__WEBPACK_IMPORTED_MODULE_0__.ShellComponent, _pipes_short_pipe__WEBPACK_IMPORTED_MODULE_1__.ShortPipe, _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_2__.IconPipe, _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_3__.LongPipe, _pipes_legendary_pipe__WEBPACK_IMPORTED_MODULE_4__.LegendaryPipe, _pipes_turn_pipe__WEBPACK_IMPORTED_MODULE_5__.TurnPipe, _tour_tour_component__WEBPACK_IMPORTED_MODULE_7__.TourComponent, _shell_status_component__WEBPACK_IMPORTED_MODULE_6__.StatusComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__.LayoutModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__.FlexLayoutModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__.MatChipsModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_28__.MatSelectModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabsModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_30__.MatBadgeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__.DragDropModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__.MatProgressBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__.MatDialogModule, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__.MatCheckboxModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.ReactiveFormsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_36__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_37__.MatNativeDateModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__.MatProgressSpinnerModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_39__.MatBottomSheetModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__.MatExpansionModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__.MatTooltipModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_43__.TranslateModule, ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_44__.TourMatMenuModule, ngx_currency__WEBPACK_IMPORTED_MODULE_45__.NgxCurrencyModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__.ScrollingModule],
          exports: [_shell_shell_component__WEBPACK_IMPORTED_MODULE_0__.ShellComponent, _pipes_short_pipe__WEBPACK_IMPORTED_MODULE_1__.ShortPipe, _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_2__.IconPipe, _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_3__.LongPipe, _pipes_legendary_pipe__WEBPACK_IMPORTED_MODULE_4__.LegendaryPipe, _pipes_turn_pipe__WEBPACK_IMPORTED_MODULE_5__.TurnPipe, _tour_tour_component__WEBPACK_IMPORTED_MODULE_7__.TourComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__.LayoutModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__.FlexLayoutModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__.MatChipsModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_28__.MatSelectModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabsModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_30__.MatBadgeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__.DragDropModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__.MatProgressBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__.MatDialogModule, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__.MatCheckboxModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.ReactiveFormsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_36__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_37__.MatNativeDateModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__.MatProgressSpinnerModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_39__.MatBottomSheetModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__.MatExpansionModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__.MatTooltipModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_43__.TranslateModule]
        });
      })();
      /***/

    },

    /***/
    24337: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShellComponent": function ShellComponent() {
          return (
            /* binding */
            _ShellComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/layout */
      66883);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      76477);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      49005);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs/operators */
      41757);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/sidenav */
      86608);
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngxs/store */
      14835);
      /* harmony import */


      var _auth_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../auth/auth.actions */
      89104);
      /* harmony import */


      var _auth_auth_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../auth/auth.state */
      35917);
      /* harmony import */


      var _status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./status.component */
      88177);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var src_app_services_mapbox_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/mapbox.service */
      14972);
      /* harmony import */


      var src_app_services_tutorial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tutorial.service */
      80595);
      /* harmony import */


      var src_app_services_dom_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/dom.service */
      18200);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/notification.service */
      12013);
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      76322);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/toolbar */
      64106);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      89460);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/list */
      28417);
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      42791);
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/badge */
      90330);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ngx-ui-tour-md-menu */
      81252);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/tooltip */
      50298);
      /* harmony import */


      var _pipes_turn_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../pipes/turn.pipe */
      14344);
      /* harmony import */


      var _pipes_short_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../pipes/short.pipe */
      61357);

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function ShellComponent_a_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ShellComponent_a_21_Template_a_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);

            var l_r11 = restoredCtx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r12.translateService.use(l_r11.lang);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var l_r11 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](4, _c0, ctx_r2.translateService.currentLang === l_r11.lang));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", l_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"])("alt", l_r11.lang);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](l_r11.lang.toString().toUpperCase());
        }
      }

      var _c1 = function _c1() {
        return ["active"];
      };

      var _c2 = function _c2() {
        return [];
      };

      var _c3 = function _c3() {
        return {
          exact: true
        };
      };

      function ShellComponent_ng_container_25_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ShellComponent_ng_container_25_ng_container_7_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r17.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var link_r16 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 9, ctx_r15.angularFireAuth.authState) === (false || undefined))("routerLink", link_r16.url ? link_r16.url : null)("routerLinkActive", link_r16.url ? _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](17, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](18, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](19, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matBadge", link_r16.name === "kingdom.archive.name" && ctx_r15.reports ? ctx_r15.reports : undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", link_r16.image, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 11, link_r16.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 13, link_r16.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 15, link_r16.description));
        }
      }

      function ShellComponent_ng_container_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, ShellComponent_ng_container_25_ng_container_7_Template, 12, 20, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var group_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", group_r14.image, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 4, group_r14.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 6, group_r14.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", group_r14.links);
        }
      }

      function ShellComponent_span_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "landing.title.name"));
        }
      }

      function ShellComponent_mat_nav_list_34_mat_list_item_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-list-item", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ShellComponent_mat_nav_list_34_mat_list_item_1_Template_mat_list_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r22.openStatusSheet();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "turn");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "short");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var supply_r20 = ctx.$implicit;
          var i_r21 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 6, supply_r20.resource.name))("matBadge", supply_r20.timestamp ? _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 8, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](4, 10, supply_r20.timestamp, supply_r20.resource.max, supply_r20.resource.ratio)) : _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 14, supply_r20.quantity))("matBadgeColor", supply_r20.balance === 0 ? "primary" : supply_r20.balance > 0 ? "accent" : "warn")("matBadgePosition", i_r21 % 2 === 0 ? "below before" : "above before");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", supply_r20.resource.image, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 16, supply_r20.resource.name));
        }
      }

      function ShellComponent_mat_nav_list_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-nav-list", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ShellComponent_mat_nav_list_34_mat_list_item_1_Template, 8, 18, "mat-list-item", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r5.kingdomSupplies$));
        }
      }

      function ShellComponent_ng_container_42_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "help");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ShellComponent_ng_container_42_Template_a_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r24.tour();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "map");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "local_mall");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "description");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "question_answer");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](25, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "equalizer");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](30, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ShellComponent_ng_container_42_Template_a_click_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r25);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r26.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "lock");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](35, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 7, "user.menu.help"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 9, "user.menu.tour"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 11, "user.menu.store"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](20, 13, "user.menu.changelog"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](25, 15, "user.menu.bonfire"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](30, 17, "user.menu.legend"));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](35, 19, "user.menu.logout"));
        }
      }

      function ShellComponent_ng_template_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ShellComponent_ng_template_44_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](47);

            return ctx_r27.login(_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "lock_open");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 1, "user.menu.login"));
        }
      }

      var _c4 = function _c4(a0) {
        return {
          height: a0
        };
      };

      var _c5 = function _c5(a0, a1) {
        return {
          height: a0,
          width: a1
        };
      };

      var _c6 = ["*"];

      var _ShellComponent = /*#__PURE__*/function () {
        function _ShellComponent(breakpointObserver, translateService, angularFireAuth, router, mapboxService, store, tutorialService, domService, angularFirestore, notificationService, bottomSheet) {
          var _this22 = this;

          _classCallCheck(this, _ShellComponent);

          this.breakpointObserver = breakpointObserver;
          this.translateService = translateService;
          this.angularFireAuth = angularFireAuth;
          this.router = router;
          this.mapboxService = mapboxService;
          this.store = store;
          this.tutorialService = tutorialService;
          this.domService = domService;
          this.angularFirestore = angularFirestore;
          this.notificationService = notificationService;
          this.bottomSheet = bottomSheet;
          this.langs = [{
            lang: 'es',
            image: '/assets/images/languages/es.png'
          }, {
            lang: 'en',
            image: '/assets/images/languages/en.png'
          }, {
            lang: 'fr',
            image: '/assets/images/languages/fr.png'
          }];
          this.groups = [{
            name: 'shell.group.merchant',
            image: '/assets/images/cards/merchant.png',
            links: [{
              url: '/kingdom/city',
              name: 'kingdom.city.name',
              description: 'kingdom.city.description',
              image: '/assets/images/cards/city.png'
            }, {
              url: '/kingdom/auction',
              name: 'kingdom.auction.name',
              description: 'kingdom.auction.description',
              image: '/assets/images/cards/auction.png'
            }, {
              url: '/kingdom/emporium',
              name: 'kingdom.emporium.name',
              description: 'kingdom.emporium.description',
              image: '/assets/images/cards/emporium.png'
            }]
          }, {
            name: 'shell.group.militia',
            image: '/assets/images/cards/militia.png',
            links: [{
              url: '/world/map',
              name: 'world.map.name',
              description: 'world.map.description',
              image: '/assets/images/cards/map.png'
            }, {
              url: '/kingdom/army',
              name: 'kingdom.army.name',
              description: 'kingdom.army.description',
              image: '/assets/images/cards/army.png'
            }, {
              url: '/kingdom/tavern',
              name: 'kingdom.tavern.name',
              description: 'kingdom.tavern.description',
              image: '/assets/images/cards/tavern.png'
            }]
          }, {
            name: 'shell.group.spy',
            image: '/assets/images/cards/spy.png',
            links: [{
              url: '/kingdom/census',
              name: 'kingdom.census.name',
              description: 'kingdom.census.description',
              image: '/assets/images/cards/census.png'
            }, {
              url: '/kingdom/archive',
              name: 'kingdom.archive.name',
              description: 'kingdom.archive.description',
              image: '/assets/images/cards/archive.png'
            }, {
              url: '/kingdom/clan',
              name: 'kingdom.clan.name',
              description: 'kingdom.clan.description',
              image: '/assets/images/cards/clan.png'
            }]
          }, {
            name: 'shell.group.scholar',
            image: '/assets/images/cards/scholar.png',
            links: [{
              url: '/kingdom/sorcery',
              name: 'kingdom.sorcery.name',
              description: 'kingdom.sorcery.description',
              image: '/assets/images/cards/sorcery.png'
            }, {
              url: '/kingdom/temple',
              name: 'kingdom.temple.name',
              description: 'kingdom.temple.description',
              image: '/assets/images/cards/temple.png'
            }, {
              url: '/user/encyclopedia',
              name: 'user.encyclopedia.name',
              description: 'user.encyclopedia.description',
              image: '/assets/images/cards/encyclopedia.png'
            }]
          }];
          this.link$ = this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_12__.NavigationEnd;
          }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(function (event) {
            return _this22.groups.reduce(function (a, b) {
              return a.concat(b.links);
            }, []).find(function (link) {
              return event.url.includes(link.url);
            });
          }));
          this.isHandset$ = this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__.Breakpoints.Handset]).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(function (result) {
            return result.matches;
          }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.shareReplay)());
          this.reports = 0; // i18n

          this.translateService.addLangs(this.langs.map(function (l) {
            return l.lang;
          }));
          var browser = this.translateService.getBrowserLang();
          this.translateService.use(this.langs.map(function (l) {
            return l.lang;
          }).includes(browser) ? browser : this.langs[0].lang);
        }

        _createClass(_ShellComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this23 = this;

            this.store.select(_auth_auth_state__WEBPACK_IMPORTED_MODULE_2__.AuthState.getUserUID).subscribe(function (uid) {
              if (uid) {
                _this23.angularFirestore.collection("kingdoms/".concat(uid, "/letters"), function (x) {
                  return x.where('read', '==', false);
                }).valueChanges().subscribe(function (reports) {
                  var oldReports = _this23.reports;
                  _this23.reports = reports.length;
                  if (_this23.reports > oldReports) _this23.notificationService.warning('kingdom.archive.new');
                });
              }
            });
          }
        }, {
          key: "toggle",
          value: function toggle() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      _context33.next = 2;
                      return this.drawer.toggle();

                    case 2:
                      this.mapboxService.resizeMap();

                    case 3:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));
          }
        }, {
          key: "close",
          value: function close() {
            var _this24 = this;

            this.isHandset$.subscribe(function (isHandset) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(_this24, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
                return regeneratorRuntime.wrap(function _callee34$(_context34) {
                  while (1) {
                    switch (_context34.prev = _context34.next) {
                      case 0:
                        if (!isHandset) {
                          _context34.next = 3;
                          break;
                        }

                        _context34.next = 3;
                        return this.drawer.close();

                      case 3:
                      case "end":
                        return _context34.stop();
                    }
                  }
                }, _callee34, this);
              }));
            });
          }
        }, {
          key: "getLang",
          value: function getLang() {
            var _this25 = this;

            return this.langs.find(function (l) {
              return l.lang === _this25.translateService.currentLang;
            });
          }
        }, {
          key: "tour",
          value: function tour() {
            this.tutorialService.start();
          }
        }, {
          key: "login",
          value: function login($element) {
            this.domService.scrollToTop($element);
            this.router.navigate(['/user/landing']);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.store.dispatch(new _auth_auth_actions__WEBPACK_IMPORTED_MODULE_1__.LogoutAction());
          }
        }, {
          key: "openStatusSheet",
          value: function openStatusSheet() {
            var sheetRef = this.bottomSheet.open(_status_component__WEBPACK_IMPORTED_MODULE_3__.StatusComponent, {
              data: this.kingdomSupplies$
            });
          }
        }]);

        return _ShellComponent;
      }();

      _ShellComponent.ɵfac = function ShellComponent_Factory(t) {
        return new (t || _ShellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_mapbox_service__WEBPACK_IMPORTED_MODULE_4__.MapboxService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_tutorial_service__WEBPACK_IMPORTED_MODULE_5__.TutorialService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_dom_service__WEBPACK_IMPORTED_MODULE_6__.DomService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_7__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_20__.MatBottomSheet));
      };

      _ShellComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: _ShellComponent,
        selectors: [["app-shell"]],
        viewQuery: function ShellComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__.MatSidenav, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
          }
        },
        ngContentSelectors: _c6,
        decls: 51,
        vars: 47,
        consts: [["autosize", "", 1, "app-shell", "sidenav-container", 3, "hasBackdrop"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["type", "button", "aria-label", "toggle", "mat-icon-button", "", 3, "click"], ["aria-label", "menu"], [1, "fill-space"], [1, "logo"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [3, "src", "alt"], ["language", "matMenu"], ["mat-menu-item", "", "class", "flag-menu", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "scroll-container", 3, "ngStyle"], ["dense", "", 1, "router-list"], [4, "ngFor", "ngForOf"], [1, "mat-elevation-z8"], ["class", "logo", 4, "ngIf"], ["dense", "", "class", "supply-list", "role", "navigation", "tourAnchor", "tour.supplies", 4, "ngIf"], ["auth", "matMenu"], [4, "ngIf", "ngIfElse"], ["notLogged", ""], ["id", "scroll", "cdkScrollable", "", 1, "main-content", 3, "ngStyle"], ["main", ""], ["mat-menu-item", "", 1, "flag-menu", 3, "ngClass", "click"], ["matSubheader", ""], ["mat-list-item", "", 3, "disabled", "routerLink", "routerLinkActive", "routerLinkActiveOptions", "click"], ["mat-list-avatar", "", 3, "matBadge"], ["mat-list-avatar", "", 3, "src", "alt"], ["mat-line", ""], ["mat-line", "", 1, "mat-card-subtitle"], ["dense", "", "role", "navigation", "tourAnchor", "tour.supplies", 1, "supply-list"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["mat-list-avatar", "", "matTooltipPosition", "below", "matBadgeOverlap", "true", 3, "matTooltip", "matBadge", "matBadgeColor", "matBadgePosition"], ["mat-menu-item", "", "routerLink", "/user/encyclopedia", "fragment", "help"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", "routerLink", "/kingdom/emporium"], ["mat-menu-item", "", "routerLink", "/user/encyclopedia", "fragment", "changelog"], ["mat-menu-item", "", "routerLink", "/user/encyclopedia", "fragment", "bonfire"], ["mat-menu-item", "", "routerLink", "/user/landing", "fragment", "legend"]],
        template: function ShellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-sidenav", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "mat-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ShellComponent_Template_button_click_8_listener() {
              return ctx.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "mat-menu", null, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, ShellComponent_a_21_Template, 4, 6, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](23, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "mat-nav-list", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, ShellComponent_ng_container_25_Template, 8, 8, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "mat-sidenav-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "mat-toolbar", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ShellComponent_Template_button_click_28_listener() {
              return ctx.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](31, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, ShellComponent_span_32_Template, 3, 3, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](33, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, ShellComponent_mat_nav_list_34_Template, 3, 3, "mat-nav-list", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](35, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "mat-menu", null, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](42, ShellComponent_ng_container_42_Template, 36, 21, "ng-container", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](43, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, ShellComponent_ng_template_44_Template, 5, 3, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "main", 20, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](48, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](49, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵprojection"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](20);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](41);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](45);

            var tmp_4_0;
            var tmp_6_0;
            var tmp_7_0;

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hasBackdrop", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 18, ctx.isHandset$));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 22, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 24, ctx.angularFireAuth.authState));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 20, ctx.isHandset$) ? "dialog" : "navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](14, 26, ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 28, ctx.link$)) == null ? null : tmp_4_0.name) || "landing.title.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matMenuTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", (tmp_6_0 = ctx.getLang()) == null ? null : tmp_6_0.image, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"])("alt", (tmp_7_0 = ctx.getLang()) == null ? null : tmp_7_0.lang);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.langs);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](42, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](23, 30, ctx.isHandset$) === false ? "calc(100% - 64px)" : "calc(100% - 56px)"));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.groups);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_r0.opened ? "first_page" : "last_page");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](33, 32, ctx.angularFireAuth.authState));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](35, 34, ctx.angularFireAuth.authState));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matMenuTriggerFor", _r6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](43, 36, ctx.angularFireAuth.authState))("ngIfElse", _r8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](44, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](48, 38, ctx.isHandset$) === false ? "calc(100vh - 64px)" : "calc(100vh - 56px)", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](49, 40, ctx.isHandset$) === false && _r0.opened ? "calc(100vw - 300px)" : "100vw"));
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__.MatSidenav, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenu, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__.DefaultStyleDirective, _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatNavList, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__.MatSidenavContent, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__.CdkScrollable, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuItem, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__.DefaultClassDirective, _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListSubheaderCssMatStyler, _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListItem, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkActive, _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListAvatarCssMatStyler, _angular_material_badge__WEBPACK_IMPORTED_MODULE_30__.MatBadge, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatLine, ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_32__.TourAnchorMatMenuDirective, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltip],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe, _pipes_turn_pipe__WEBPACK_IMPORTED_MODULE_8__.TurnPipe, _pipes_short_pipe__WEBPACK_IMPORTED_MODULE_9__.ShortPipe],
        styles: [".app-shell[_ngcontent-%COMP%] {\n  background: url(\"/assets/images/background/parallax.png\") no-repeat center center fixed;\n  background-size: cover;\n}\n.app-shell[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.app-shell[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  cursor: pointer;\n  outline: none;\n}\n.app-shell[_ngcontent-%COMP%]   .mat-drawer-side[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.3);\n}\n.app-shell[_ngcontent-%COMP%]     .mat-drawer-inner-container {\n  overflow: hidden;\n}\n.app-shell[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%] {\n  width: 300px;\n  overflow: hidden;\n}\n.app-shell[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]     .mat-nav-list {\n  overflow-y: auto;\n  height: 100%;\n}\n.app-shell[_ngcontent-%COMP%]   .mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.app-shell[_ngcontent-%COMP%]   .mat-drawer-content.mat-sidenav-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.app-shell[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  overflow: hidden auto;\n  position: relative;\n}\n.app-shell[_ngcontent-%COMP%]   .supply-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  max-width: 500px;\n}\n.app-shell[_ngcontent-%COMP%]   .supply-list[_ngcontent-%COMP%]     .mat-list-item-content {\n  justify-content: center;\n  padding: 0;\n}\n.app-shell[_ngcontent-%COMP%]   .scroll-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.app-shell[_ngcontent-%COMP%]   .mat-list-base.mat-nav-list.router-list[_ngcontent-%COMP%]     .mat-list-avatar {\n  width: 60px !important;\n  height: 60px !important;\n  border-radius: 0;\n}\n.app-shell[_ngcontent-%COMP%]   .mat-list-base.mat-nav-list.router-list[_ngcontent-%COMP%]     .mat-list-item-content {\n  padding: 0;\n}\n.app-shell[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  margin: -8px 8px -8px 0px;\n}\n@media screen and (max-width: 960px) {\n  .app-shell[_ngcontent-%COMP%]   .supply-list[_ngcontent-%COMP%]     .mat-list-item-content {\n    z-index: 1;\n  }\n  .app-shell[_ngcontent-%COMP%]   .supply-list[_ngcontent-%COMP%]     .mat-list-item-content .mat-list-avatar {\n    width: 40px !important;\n    height: 40px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoZWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0UsdUZBQUE7RUFDQSxzQkFBQTtBQURGO0FBRUU7RUFDRSxZQUFBO0FBQUo7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFBSjtBQUVFO0VBQ0UsWUFBQTtFQUNBLCtDQUFBO0FBQUo7QUFFRTtFQUNFLGdCQUFBO0FBQUo7QUFFRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUFKO0FBQ0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFDTjtBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQUFKO0FBRUU7RUFDRSxnQkFBQTtBQUFKO0FBRUU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQUo7QUFDSTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtBQUNOO0FBRUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUFKO0FBR0k7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUdJO0VBQ0UsVUFBQTtBQUROO0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBRko7QUFPQTtFQUdNO0lBQ0UsVUFBQTtFQU5OO0VBT007SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0VBTFI7QUFDRiIsImZpbGUiOiJzaGVsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtc2hlbGwge1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC9wYXR0ZXJuLmpwZycpO1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9kZWNvcmF0aXZlLWJhY2tncm91bmQtd2l0aC1wdXJwbGUtZGFtYXNrLXBhdHRlcm5fMTA0OC0zNDU4LmpwZycpO1xyXG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC9wYXJhbGxheC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5sb2dvIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAubWF0LWRyYXdlci1zaWRlIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5zaWRlbmF2IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICA6Om5nLWRlZXAgLm1hdC1uYXYtbGlzdCB7XHJcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICAubWF0LWRyYXdlci1jb250ZW50Lm1hdC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLm1haW4tY29udGVudCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5zdXBwbHktbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgOjpuZy1kZWVwIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNjcm9sbC1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAubWF0LWxpc3QtYmFzZS5tYXQtbmF2LWxpc3Qucm91dGVyLWxpc3Qge1xyXG4gICAgOjpuZy1kZWVwIC5tYXQtbGlzdC1hdmF0YXIge1xyXG4gICAgICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLm1hdC1zdWJoZWFkZXIgaW1nIHtcclxuICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgbWFyZ2luOiAtOHB4IDhweCAtOHB4IDBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIC5hcHAtc2hlbGwge1xyXG4gICAgLnN1cHBseS1saXN0IHtcclxuICAgICAgOjpuZy1kZWVwIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQge1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgLm1hdC1saXN0LWF2YXRhciB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(function (state) {
        return state.auth.supplies;
      })], _ShellComponent.prototype, "kingdomSupplies$", void 0);
      /***/
    },

    /***/
    88177: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StatusComponent": function StatusComponent() {
          return (
            /* binding */
            _StatusComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      76322);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/list */
      28417);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/badge */
      90330);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      365);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _pipes_turn_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../pipes/turn.pipe */
      14344);
      /* harmony import */


      var _pipes_short_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../pipes/short.pipe */
      61357);

      function StatusComponent_ng_container_7_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-progress-bar", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "turn");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var supply_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", (supply_r1.timestamp ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 3, supply_r1.timestamp, supply_r1.resource.max, supply_r1.resource.ratio)) : supply_r1.quantity) * 100 / supply_r1.max);
        }
      }

      function StatusComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "turn");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "short");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "short");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "short");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, StatusComponent_ng_container_7_div_15_Template, 4, 7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "short");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var supply_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matBadge", supply_r1.max ? (supply_r1.timestamp ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](4, 10, supply_r1.timestamp, supply_r1.resource.max, supply_r1.resource.ratio)) : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 14, supply_r1.quantity)) + " / " + _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 16, supply_r1.max) : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 18, supply_r1.quantity));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", supply_r1.resource.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 20, supply_r1.resource.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 22, supply_r1.resource.description));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", supply_r1.max);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 24, supply_r1.balance) + _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 26, "resource.turn.ratio"))("matBadgeColor", supply_r1.balance === 0 ? "primary" : supply_r1.balance > 0 ? "accent" : "warn");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", supply_r1.status, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      var _StatusComponent = function _StatusComponent(kingdomSupplies$) {
        _classCallCheck(this, _StatusComponent);

        this.kingdomSupplies$ = kingdomSupplies$;
      };

      _StatusComponent.ɵfac = function StatusComponent_Factory(t) {
        return new (t || _StatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__.MAT_BOTTOM_SHEET_DATA));
      };

      _StatusComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _StatusComponent,
        selectors: [["app-status"]],
        decls: 9,
        vars: 9,
        consts: [["matSubheader", ""], [1, "fill-space"], ["dense", "", 1, "app-status"], [4, "ngFor", "ngForOf"], ["mat-list-avatar", "", "matBadgePosition", "above before", 3, "matBadge"], ["mat-list-avatar", "", 3, "src"], ["mat-line", ""], ["mat-line", "", 1, "mat-card-subtitle"], ["mat-line", "", 4, "ngIf"], ["mat-list-avatar", "", "matBadgePosition", "above after", 3, "matBadge", "matBadgeColor"], [3, "value"]],
        template: function StatusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, StatusComponent_ng_container_7_Template, 20, 28, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 3, "card.list.resources"), ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 5, "card.list.production"), ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 7, ctx.kingdomSupplies$));
          }
        },
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListSubheaderCssMatStyler, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatList, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListAvatarCssMatStyler, _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__.MatBadge, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatLine, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__.MatProgressBar],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _pipes_turn_pipe__WEBPACK_IMPORTED_MODULE_0__.TurnPipe, _pipes_short_pipe__WEBPACK_IMPORTED_MODULE_1__.ShortPipe],
        styles: [".app-status.mat-list.mat-list-base[_ngcontent-%COMP%] {\n      max-height: 100%;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsZ0JBQWdCO0lBQ2xCIiwiZmlsZSI6InN0YXR1cy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuYXBwLXN0YXR1cy5tYXQtbGlzdC5tYXQtbGlzdC1iYXNlIHtcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAiXX0= */"]
      });
      /***/
    },

    /***/
    69078: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TourComponent": function TourComponent() {
          return (
            /* binding */
            _TourComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-ui-tour-md-menu */
      81252);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../pipes/icon.pipe */
      38262);

      function TourComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TourComponent_ng_template_1_Template_mat_card_click_0_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TourComponent_ng_template_1_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.tourService.prev();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "chevron_left");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TourComponent_ng_template_1_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.tourService.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "chevron_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TourComponent_ng_template_1_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.tourService.end();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var step_r1 = ctx.step;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, step_r1 == null ? null : step_r1.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 8, step_r1 == null ? null : step_r1.content)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.tourService.hasPrev(step_r1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.tourService.hasNext(step_r1));
        }
      }

      var _TourComponent = function _TourComponent(tourService) {
        _classCallCheck(this, _TourComponent);

        this.tourService = tourService;
      };

      _TourComponent.ɵfac = function TourComponent_Factory(t) {
        return new (t || _TourComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_2__.TourService));
      };

      _TourComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _TourComponent,
        selectors: [["app-tour"]],
        decls: 2,
        vars: 0,
        consts: [[3, "click"], [3, "innerHtml"], ["mat-icon-button", "", 3, "disabled", "click"], ["mat-icon-button", "", 3, "click"]],
        template: function TourComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tour-step-template");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TourComponent_ng_template_1_Template, 17, 10, "ng-template");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_2__.TourStepTemplateComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_0__.IconPipe],
        styles: [".tour-step.mat-menu-panel {\n  min-width: 30vw !important;\n  width: 30vw !important;\n  max-width: 30vw !important;\n}\n.tour-step .mat-card-actions {\n  display: flex;\n  justify-content: flex-end;\n}\n@media screen and (max-width: 960px) {\n  .tour-step.mat-menu-panel {\n    min-width: 90vw !important;\n    width: 90vw !important;\n    max-width: 90vw !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvdXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUFBSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBQUo7QUFJQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxzQkFBQTtJQUNBLDBCQUFBO0VBREY7QUFDRiIsImZpbGUiOiJ0b3VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvdXItc3RlcCB7XHJcbiAgJi5tYXQtbWVudS1wYW5lbCB7XHJcbiAgICBtaW4td2lkdGg6IDMwdncgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAzMHZ3ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDMwdncgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIC50b3VyLXN0ZXAubWF0LW1lbnUtcGFuZWwge1xyXG4gICAgbWluLXdpZHRoOiA5MHZ3ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogOTB2dyAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA5MHZ3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    86209: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MarkerType": function MarkerType() {
          return (
            /* binding */
            _MarkerType
          );
        },

        /* harmony export */
        "PopupType": function PopupType() {
          return (
            /* binding */
            _PopupType
          );
        },

        /* harmony export */
        "StoreType": function StoreType() {
          return (
            /* binding */
            _StoreType
          );
        },

        /* harmony export */
        "LocationType": function LocationType() {
          return (
            /* binding */
            _LocationType
          );
        },

        /* harmony export */
        "FactionType": function FactionType() {
          return (
            /* binding */
            _FactionType
          );
        }
        /* harmony export */

      });

      var _MarkerType;

      (function (MarkerType) {
        MarkerType["KINGDOM"] = "kingdom";
        MarkerType["SHOP"] = "shop";
        MarkerType["QUEST"] = "quest";
      })(_MarkerType || (_MarkerType = {}));

      var _PopupType;

      (function (PopupType) {
        PopupType["KINGDOM"] = "kingdom";
        PopupType["SHOP"] = "shop";
        PopupType["QUEST"] = "quest";
      })(_PopupType || (_PopupType = {}));

      var _StoreType;

      (function (StoreType) {
        StoreType["INN"] = "inn";
        StoreType["MERCENARY"] = "mercenary";
        StoreType["SORCERER"] = "sorcerer";
        StoreType["MERCHANT"] = "merchant";
      })(_StoreType || (_StoreType = {}));

      var _LocationType;

      (function (LocationType) {
        LocationType["CAVE"] = "cave";
        LocationType["GRAVEYARD"] = "graveyard";
        LocationType["DUNGEON"] = "dungeon";
        LocationType["MINE"] = "mine";
        LocationType["FOREST"] = "forest";
        LocationType["CATHEDRAL"] = "cathedral";
        LocationType["MOUNTAIN"] = "mountain";
        LocationType["VOLCANO"] = "volcano";
        LocationType["LAKE"] = "lake";
        LocationType["NEST"] = "nest";
        LocationType["CASTLE"] = "castle";
        LocationType["BARRACK"] = "barrack";
        LocationType["ISLAND"] = "island";
        LocationType["MONOLITH"] = "monolith";
        LocationType["RUIN"] = "ruin";
        LocationType["SHIP"] = "ship";
        LocationType["TOWN"] = "town";
        LocationType["SHRINE"] = "shrine";
        LocationType["TOTEM"] = "totem";
        LocationType["PYRAMID"] = "pyramid";
      })(_LocationType || (_LocationType = {}));

      var _FactionType;

      (function (FactionType) {
        FactionType["RED"] = "red";
        FactionType["WHITE"] = "white";
        FactionType["GREEN"] = "green";
        FactionType["BLUE"] = "blue";
        FactionType["BLACK"] = "black";
      })(_FactionType || (_FactionType = {}));
      /***/

    },

    /***/
    32881: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* binding */
            _AuthGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shared/auth/auth.state */
      35917);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/notification.service */
      12013);
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngxs/store */
      14835);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var LANDING_ROUTE = '/user/landing';

      var _AuthGuard = /*#__PURE__*/function () {
        function _AuthGuard(notificationService, store, router) {
          _classCallCheck(this, _AuthGuard);

          this.notificationService = notificationService;
          this.store = store;
          this.router = router;
        }

        _createClass(_AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var logged = this.store.selectSnapshot(_shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.getUserLoggedIn);

            if (!logged) {
              this.notificationService.error('user.auth.unauthorized');
              this.router.navigate([LANDING_ROUTE]);
            }

            return logged;
          }
        }]);

        return _AuthGuard;
      }();

      _AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || _AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _AuthGuard,
        factory: _AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    39179: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MarkerComponent": function MarkerComponent() {
          return (
            /* binding */
            _MarkerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_type_common_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/type/common.type */
      86209);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      function MarkerComponent_button_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.data.faction.marker, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r0.data.name);
        }
      }

      function MarkerComponent_button_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.data.store.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r1.data.store.name));
        }
      }

      function MarkerComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.data.location.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r2.data.location.name));
        }
      }

      var _MarkerComponent = function _MarkerComponent() {
        _classCallCheck(this, _MarkerComponent);

        this.data = null;
        this.MarkerType = src_app_shared_type_common_type__WEBPACK_IMPORTED_MODULE_0__.MarkerType;
      };

      _MarkerComponent.ɵfac = function MarkerComponent_Factory(t) {
        return new (t || _MarkerComponent)();
      };

      _MarkerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MarkerComponent,
        selectors: [["app-marker"]],
        decls: 4,
        vars: 3,
        consts: [[1, "map-marker"], ["mat-fab", "", "color", "primary", "class", "marker animated bounceIn", 4, "ngIf"], ["mat-mini-fab", "", "color", "accent", "class", "marker animated bounceIn", 4, "ngIf"], ["mat-mini-fab", "", "color", "warn", "class", "marker animated bounceIn", 4, "ngIf"], ["mat-fab", "", "color", "primary", 1, "marker", "animated", "bounceIn"], [3, "src", "alt"], ["mat-mini-fab", "", "color", "accent", 1, "marker", "animated", "bounceIn"], ["mat-mini-fab", "", "color", "warn", 1, "marker", "animated", "bounceIn"]],
        template: function MarkerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MarkerComponent_button_1_Template, 2, 2, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MarkerComponent_button_2_Template, 3, 4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MarkerComponent_button_3_Template, 3, 4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.type === ctx.MarkerType.KINGDOM);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.type === ctx.MarkerType.SHOP);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.type === ctx.MarkerType.QUEST);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
        styles: [".map-marker[_ngcontent-%COMP%]   .mat-fab[_ngcontent-%COMP%] {\n  width: 80px !important;\n  height: 80px !important;\n}\n.map-marker[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%] {\n  width: 50px !important;\n  height: 50px !important;\n}\n.map-marker[_ngcontent-%COMP%]   .marker[_ngcontent-%COMP%]     .mat-button-wrapper {\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.map-marker[_ngcontent-%COMP%]   .marker[_ngcontent-%COMP%]     .mat-button-wrapper img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  padding: 2px;\n  box-sizing: border-box;\n}\n.map-marker[_ngcontent-%COMP%]     .mat-badge-content {\n  font-family: \"Material Icons\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmtlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFBSjtBQUVFO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQUFKO0FBR0k7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFETjtBQUVNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUFSO0FBSUU7RUFDRSx5Q0FBQTtBQUZKIiwiZmlsZSI6Im1hcmtlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtbWFya2VyIHtcclxuICAubWF0LWZhYiB7XHJcbiAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tYXQtbWluaS1mYWIge1xyXG4gICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWFya2VyIHtcclxuICAgIDo6bmctZGVlcCAubWF0LWJ1dHRvbi13cmFwcGVyIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC1iYWRnZS1jb250ZW50IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    91246: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdventureComponent": function AdventureComponent() {
          return (
            /* binding */
            _AdventureComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/auth/auth.state */
      35917);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/notification.service */
      12013);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830);
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngxs/store */
      14835);
      /* harmony import */


      var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/loading.service */
      4471);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/list */
      28417);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      89460);
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/badge */
      90330);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../pipes/long.pipe */
      16757);
      /* harmony import */


      var _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../pipes/icon.pipe */
      38262);

      var _c0 = function _c0(a0, a1) {
        return [a0, a1];
      };

      var _AdventureComponent = /*#__PURE__*/function () {
        function _AdventureComponent(data, dialogRef, notificationService, apiService, store, loadingService) {
          _classCallCheck(this, _AdventureComponent);

          this.data = data;
          this.dialogRef = dialogRef;
          this.notificationService = notificationService;
          this.apiService = apiService;
          this.store = store;
          this.loadingService = loadingService;
          this.kingdomTurn = this.store.selectSnapshot(src_app_shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.getKingdomTurn);
          this.uid = this.store.selectSnapshot(src_app_shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.getUserUID);
        }

        _createClass(_AdventureComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }, {
          key: "adventure",
          value: function adventure() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
              var dealt;
              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      if (!(this.data.quest.turns <= this.kingdomTurn.quantity)) {
                        _context35.next = 17;
                        break;
                      }

                      this.loadingService.startLoading();
                      _context35.prev = 2;
                      _context35.next = 5;
                      return this.apiService.adventureQuest(this.uid, this.data.quest.id);

                    case 5:
                      dealt = _context35.sent;
                      this.notificationService.success('world.adventure.success');
                      this.close();
                      _context35.next = 14;
                      break;

                    case 10:
                      _context35.prev = 10;
                      _context35.t0 = _context35["catch"](2);
                      console.error(_context35.t0);
                      this.notificationService.error('world.adventure.error');

                    case 14:
                      this.loadingService.stopLoading();
                      _context35.next = 18;
                      break;

                    case 17:
                      this.notificationService.error('world.adventure.error');

                    case 18:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35, this, [[2, 10]]);
            }));
          }
        }]);

        return _AdventureComponent;
      }();

      _AdventureComponent.ɵfac = function AdventureComponent_Factory(t) {
        return new (t || _AdventureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService));
      };

      _AdventureComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: _AdventureComponent,
        selectors: [["app-adventure"]],
        decls: 31,
        vars: 35,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matSubheader", ""], ["dense", ""], [3, "ngClass"], ["mat-list-avatar", "", "matBadgePosition", "above before", 3, "matBadge"], ["mat-list-avatar", "", 3, "src"], ["mat-line", ""], ["mat-line", "", 1, "mat-card-subtitle", 3, "innerHTML"], ["mat-list-avatar", "", "matBadgePosition", "above after", 3, "matBadge"], ["mat-list-avatar", "", "src", "/assets/images/resources/turn.png"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "cdkFocusInitial", "", 3, "click"]],
        template: function AdventureComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-list", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-list-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "long");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "long");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdventureComponent_Template_button_click_25_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdventureComponent_Template_button_click_28_listener() {
              return ctx.adventure();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](30, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 11, "world.adventure.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 13, "world.adventure.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 15, "card.list.rewards"), ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](32, _c0, ctx.data.reward.item.faction.id, ctx.data.reward.item.legendary ? "legendary" : "common"));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 17, ctx.data.reward.quantity));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.data.reward.item.image, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 19, ctx.data.reward.item.name));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](19, 21, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 24, ctx.data.reward.item.description), ctx.data.reward.item), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 26, ctx.data.quest.turns));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 28, "world.adventure.cancel"));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](30, 30, "world.adventure.start"));
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListSubheaderCssMatStyler, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListItem, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListAvatarCssMatStyler, _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__.MatBadge, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatLine, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe, _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_5__.LongPipe, _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_6__.IconPipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    46605: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DealComponent": function DealComponent() {
          return (
            /* binding */
            _DealComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/auth/auth.state */
      35917);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/notification.service */
      12013);
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngxs/store */
      14835);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830);
      /* harmony import */


      var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/loading.service */
      4471);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/list */
      28417);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      89460);
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/badge */
      90330);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../pipes/long.pipe */
      16757);
      /* harmony import */


      var _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../pipes/icon.pipe */
      38262);

      function DealComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx_r0.data.deal.join.description));
        }
      }

      function DealComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 4, ctx_r1.data.deal.join.description), ctx_r1.data.deal.join), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
        }
      }

      function DealComponent_div_20_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          var family_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, family_r8.name))("src", family_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        }
      }

      function DealComponent_div_20_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          var skill_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, skill_r9.name))("src", skill_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        }
      }

      function DealComponent_div_20_img_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          var category_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, category_r10.name))("src", category_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        }
      }

      function DealComponent_div_20_img_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "category.legendary.name"));
        }
      }

      function DealComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DealComponent_div_20_img_1_Template, 2, 4, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, DealComponent_div_20_img_2_Template, 2, 4, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, DealComponent_div_20_img_3_Template, 2, 4, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, DealComponent_div_20_img_4_Template, 2, 3, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.data.deal.join.families);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.data.deal.join.skills);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.data.deal.join.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.data.deal.join.legendary);
        }
      }

      function DealComponent_div_21_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var category_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, "category.resistance.name") + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 4, category_r12.name))("src", category_r12.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        }
      }

      function DealComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DealComponent_div_21_img_1_Template, 3, 6, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.data.deal.join.resistances);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return [a0, a1];
      };

      var _c1 = function _c1() {
        return ["god", "family", "skill", "resource", "category"];
      };

      var _c2 = function _c2() {
        return ["spell", "structure", "location", "hero", "item"];
      };

      var _c3 = function _c3() {
        return ["unit"];
      };

      var _DealComponent = /*#__PURE__*/function () {
        function _DealComponent(data, dialogRef, notificationService, store, apiService, loadingService) {
          _classCallCheck(this, _DealComponent);

          this.data = data;
          this.dialogRef = dialogRef;
          this.notificationService = notificationService;
          this.store = store;
          this.apiService = apiService;
          this.loadingService = loadingService;
          this.kingdomGold = this.store.selectSnapshot(src_app_shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.getKingdomGold);
          this.uid = this.store.selectSnapshot(src_app_shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.getUserUID);
        }

        _createClass(_DealComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }, {
          key: "deal",
          value: function deal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
              var collection, dealt;
              return regeneratorRuntime.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      if (!(this.data.deal.gold <= this.kingdomGold.quantity)) {
                        _context36.next = 18;
                        break;
                      }

                      this.loadingService.startLoading();
                      _context36.prev = 2;
                      collection = this.data.shop.store.id === 'mercenary' ? 'troops' : this.data.shop.store.id === 'inn' ? 'contracts' : this.data.shop.store.id === 'merchant' ? 'artifacts' : 'charms';
                      _context36.next = 6;
                      return this.apiService.tradeDeal(this.uid, this.data.shop.id, collection, this.data.deal.fid);

                    case 6:
                      dealt = _context36.sent;
                      this.notificationService.success('world.deal.success');
                      this.close();
                      _context36.next = 15;
                      break;

                    case 11:
                      _context36.prev = 11;
                      _context36.t0 = _context36["catch"](2);
                      console.error(_context36.t0);
                      this.notificationService.error('world.deal.error');

                    case 15:
                      this.loadingService.stopLoading();
                      _context36.next = 19;
                      break;

                    case 18:
                      this.notificationService.error('world.deal.error');

                    case 19:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36, this, [[2, 11]]);
            }));
          }
        }]);

        return _DealComponent;
      }();

      _DealComponent.ɵfac = function DealComponent_Factory(t) {
        return new (t || _DealComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService));
      };

      _DealComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _DealComponent,
        selectors: [["app-deal"]],
        decls: 32,
        vars: 37,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matSubheader", ""], ["dense", ""], [3, "ngClass"], ["mat-list-avatar", "", "matBadgePosition", "above before", 3, "matBadge"], ["mat-list-avatar", "", 3, "src"], ["mat-line", ""], ["mat-line", "", "class", "mat-card-subtitle", 4, "ngIf"], ["mat-line", "", "class", "mat-card-subtitle", 3, "innerHTML", 4, "ngIf"], ["mat-list-avatar", "", "matBadgePosition", "above after", 3, "matBadge"], ["mat-list-avatar", "", "src", "/assets/images/resources/gold.png"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "cdkFocusInitial", "", 3, "click"], ["mat-line", "", 1, "mat-card-subtitle"], ["mat-line", "", 1, "mat-card-subtitle", 3, "innerHTML"], ["class", "icon", 3, "title", "src", 4, "ngFor", "ngForOf"], ["class", "icon", "src", "/assets/images/icons/legendary.png", 3, "title", 4, "ngIf"], [1, "icon", 3, "title", "src"], ["src", "/assets/images/icons/legendary.png", 1, "icon", 3, "title"], ["class", "icon grayscale", 3, "title", "src", 4, "ngFor", "ngForOf"], [1, "icon", "grayscale", 3, "title", "src"]],
        template: function DealComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-list", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-list-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "long");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, DealComponent_div_18_Template, 3, 3, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, DealComponent_div_19_Template, 3, 6, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, DealComponent_div_20_Template, 5, 4, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, DealComponent_div_21_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "long");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DealComponent_Template_button_click_26_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DealComponent_Template_button_click_29_listener() {
              return ctx.deal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](31, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 14, "world.deal.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 16, "world.deal.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 18, "card.list.goods"), ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](30, _c0, ctx.data.deal.join.faction.id, ctx.data.deal.join.legendary ? "legendary" : "common"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 20, ctx.data.deal.quantity));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx.data.deal.join.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 22, ctx.data.deal.join.name));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](33, _c1).includes(ctx.data.deal.join.type));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](34, _c2).includes(ctx.data.deal.join.type));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](35, _c3).includes(ctx.data.deal.join.type));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](36, _c3).includes(ctx.data.deal.join.type) && ctx.data.deal.join.categories && ctx.data.deal.join.categories.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](23, 24, ctx.data.deal.gold));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 26, "world.deal.cancel"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](31, 28, "world.deal.trade"));
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListSubheaderCssMatStyler, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListItem, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListAvatarCssMatStyler, _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__.MatBadge, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatLine, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe, _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_5__.LongPipe, _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_6__.IconPipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    33341: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PopupComponent": function PopupComponent() {
          return (
            /* binding */
            _PopupComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      99758);
      /* harmony import */


      var src_app_shared_type_common_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/type/common.type */
      86209);
      /* harmony import */


      var _adventure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./adventure.component */
      91246);
      /* harmony import */


      var _deal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./deal.component */
      46605);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      69606);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      57850);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var src_app_kingdom_army_army_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/kingdom/army/army.component */
      44685);
      /* harmony import */


      var src_app_shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/auth/auth.state */
      35917);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830);
      /* harmony import */


      var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/loading.service */
      4471);
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngxs/store */
      14835);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/chips */
      79243);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/list */
      28417);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      89460);
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/badge */
      90330);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../pipes/icon.pipe */
      38262);
      /* harmony import */


      var _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../pipes/long.pipe */
      16757);

      function PopupComponent_mat_card_header_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r0.data.faction.marker, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 4, ctx_r0.data.faction.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.data.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 6, ctx_r0.data.faction.name));
        }
      }

      function PopupComponent_mat_card_header_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "mat-chip", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](13, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r1.data.store.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, ctx_r1.data.store.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 7, ctx_r1.data.store.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.data.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](13, 9, ctx_r1.data.visited.toMillis(), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 12, "dateformat.short")));
        }
      }

      function PopupComponent_mat_card_header_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "mat-chip", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](13, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r2.data.location.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, ctx_r2.data.location.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 7, ctx_r2.data.location.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.data.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](13, 9, ctx_r2.data.visited.toMillis(), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 12, "dateformat.short")));
        }
      }

      function PopupComponent_ng_template_5_mat_list_item_4_img_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var family_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, family_r18.name))("src", family_r18.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, family_r18.name));
        }
      }

      function PopupComponent_ng_template_5_mat_list_item_4_img_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var skill_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, skill_r19.name))("src", skill_r19.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, skill_r19.name));
        }
      }

      function PopupComponent_ng_template_5_mat_list_item_4_img_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var category_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, category_r20.name))("src", category_r20.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, category_r20.name));
        }
      }

      function PopupComponent_ng_template_5_mat_list_item_4_img_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, "category.legendary.name"))("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, "category.legendary.name"))("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 7, "category.legendary.name"));
        }
      }

      function PopupComponent_ng_template_5_mat_list_item_4_div_12_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
        }

        if (rf & 2) {
          var category_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, "category.resistance.name") + _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, category_r22.name))("src", category_r22.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 7, "category.resistance.name"));
        }
      }

      function PopupComponent_ng_template_5_mat_list_item_4_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, PopupComponent_ng_template_5_mat_list_item_4_div_12_img_1_Template, 4, 9, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var troop_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r12.unit.resistances);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return [a0, a1];
      };

      function PopupComponent_ng_template_5_mat_list_item_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-list-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, PopupComponent_ng_template_5_mat_list_item_4_img_8_Template, 3, 7, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, PopupComponent_ng_template_5_mat_list_item_4_img_9_Template, 3, 7, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, PopupComponent_ng_template_5_mat_list_item_4_img_10_Template, 3, 7, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, PopupComponent_ng_template_5_mat_list_item_4_img_11_Template, 4, 9, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, PopupComponent_ng_template_5_mat_list_item_4_div_12_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var troop_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](13, _c0, troop_r12.unit.faction.id, troop_r12.unit.legendary ? "legendary" : "common"));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", troop_r12.unit.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 9, troop_r12.unit.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 11, troop_r12.unit.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r12.unit.families);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r12.unit.skills);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r12.unit.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", troop_r12.unit.legendary);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", troop_r12.unit.resistances && troop_r12.unit.resistances.length);
        }
      }

      function PopupComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-list", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, PopupComponent_ng_template_5_mat_list_item_4_Template, 13, 16, "mat-list-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, "card.list.troops"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r3.kingdomTroops);
        }
      }

      function PopupComponent_ng_template_6_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PopupComponent_ng_template_6_button_4_Template_button_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r27);

            var contract_r25 = restoredCtx.$implicit;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);

            return ctx_r26.openDealDialog(contract_r25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "long");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var contract_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](21, _c0, contract_r25.hero.faction.id, contract_r25.hero.legendary ? "legendary" : "common"));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matBadge", contract_r25.level);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", contract_r25.hero.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 8, contract_r25.hero.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 10, contract_r25.hero.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](8, 12, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 15, contract_r25.hero.description), contract_r25.hero), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 17, contract_r25.gold));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](13, 19, "resource.gold.name"));
        }
      }

      function PopupComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-action-list", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, PopupComponent_ng_template_6_button_4_Template, 14, 24, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, "card.list.contracts"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r4.shopContracts);
        }
      }

      function PopupComponent_ng_template_7_button_4_img_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var family_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, family_r35.name))("src", family_r35.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, family_r35.name));
        }
      }

      function PopupComponent_ng_template_7_button_4_img_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var skill_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, skill_r36.name))("src", skill_r36.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, skill_r36.name));
        }
      }

      function PopupComponent_ng_template_7_button_4_img_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var category_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, category_r37.name))("src", category_r37.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, category_r37.name));
        }
      }

      function PopupComponent_ng_template_7_button_4_img_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, "category.legendary.name"))("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, "category.legendary.name"))("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 7, "category.legendary.name"));
        }
      }

      function PopupComponent_ng_template_7_button_4_div_13_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
        }

        if (rf & 2) {
          var category_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, "category.resistance.name") + _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, category_r39.name))("src", category_r39.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 7, "category.resistance.name"));
        }
      }

      function PopupComponent_ng_template_7_button_4_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, PopupComponent_ng_template_7_button_4_div_13_img_1_Template, 4, 9, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var troop_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r29.unit.resistances);
        }
      }

      function PopupComponent_ng_template_7_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PopupComponent_ng_template_7_button_4_Template_button_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r42);

            var troop_r29 = restoredCtx.$implicit;

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);

            return ctx_r41.openDealDialog(troop_r29);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "long");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, PopupComponent_ng_template_7_button_4_img_9_Template, 3, 7, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, PopupComponent_ng_template_7_button_4_img_10_Template, 3, 7, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, PopupComponent_ng_template_7_button_4_img_11_Template, 3, 7, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, PopupComponent_ng_template_7_button_4_img_12_Template, 4, 9, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, PopupComponent_ng_template_7_button_4_div_13_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "long");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var troop_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](22, _c0, troop_r29.unit.faction.id, troop_r29.unit.legendary ? "legendary" : "common"));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 12, troop_r29.quantity));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", troop_r29.unit.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 14, troop_r29.unit.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 16, troop_r29.unit.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r29.unit.families);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r29.unit.skills);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r29.unit.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", troop_r29.unit.legendary);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", troop_r29.unit.resistances && troop_r29.unit.resistances.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](15, 18, troop_r29.gold));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](17, 20, "resource.gold.name"));
        }
      }

      function PopupComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-action-list", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, PopupComponent_ng_template_7_button_4_Template, 18, 25, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, "card.list.troops"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r5.shopTroops);
        }
      }

      function PopupComponent_ng_template_8_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PopupComponent_ng_template_8_button_4_Template_button_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r46);

            var artifact_r44 = restoredCtx.$implicit;

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);

            return ctx_r45.openDealDialog(artifact_r44);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "long");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var artifact_r44 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](21, _c0, artifact_r44.item.faction.id, artifact_r44.item.legendary ? "legendary" : "common"));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matBadge", artifact_r44.quantity);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", artifact_r44.item.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 8, artifact_r44.item.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 10, artifact_r44.item.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](8, 12, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 15, artifact_r44.item.description), artifact_r44.item), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 17, artifact_r44.gold));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](13, 19, "resource.gold.name"));
        }
      }

      function PopupComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-action-list", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, PopupComponent_ng_template_8_button_4_Template, 14, 24, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, "card.list.artifacts"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r6.shopArtifacts);
        }
      }

      function PopupComponent_ng_template_9_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PopupComponent_ng_template_9_button_4_Template_button_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r50);

            var charm_r48 = restoredCtx.$implicit;

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);

            return ctx_r49.openDealDialog(charm_r48);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "long");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var charm_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](21, _c0, charm_r48.spell.faction.id, charm_r48.spell.legendary ? "legendary" : "common"));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matBadge", charm_r48.level);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", charm_r48.spell.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 8, charm_r48.spell.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 10, charm_r48.spell.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](8, 12, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 15, charm_r48.spell.description), charm_r48.spell), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 17, charm_r48.gold));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](13, 19, "resource.gold.name"));
        }
      }

      function PopupComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-action-list", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, PopupComponent_ng_template_9_button_4_Template, 14, 24, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, "card.list.charms"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r7.shopCharms);
        }
      }

      function PopupComponent_ng_template_10_mat_list_item_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-list-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var contract_r52 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](14, _c0, contract_r52.hero.faction.id, contract_r52.hero.legendary ? "legendary" : "common"));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", contract_r52.hero.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 5, contract_r52.hero.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 7, contract_r52.hero.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 12, contract_r52.hero.description), contract_r52.hero), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeHtml"]);
        }
      }

      function PopupComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-list", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, PopupComponent_ng_template_10_mat_list_item_4_Template, 10, 17, "mat-list-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, "card.list.contracts"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r8.questContracts);
        }
      }

      function PopupComponent_ng_template_11_mat_list_item_4_img_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var family_r60 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, family_r60.name))("src", family_r60.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, family_r60.name));
        }
      }

      function PopupComponent_ng_template_11_mat_list_item_4_img_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var skill_r61 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, skill_r61.name))("src", skill_r61.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, skill_r61.name));
        }
      }

      function PopupComponent_ng_template_11_mat_list_item_4_img_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var category_r62 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, category_r62.name))("src", category_r62.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, category_r62.name));
        }
      }

      function PopupComponent_ng_template_11_mat_list_item_4_img_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 2, "category.legendary.name"))("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 4, "category.legendary.name"));
        }
      }

      function PopupComponent_ng_template_11_mat_list_item_4_div_12_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
        }

        if (rf & 2) {
          var category_r64 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 3, "category.resistance.name") + _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, category_r64.name))("src", category_r64.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 7, "category.resistance.name"));
        }
      }

      function PopupComponent_ng_template_11_mat_list_item_4_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, PopupComponent_ng_template_11_mat_list_item_4_div_12_img_1_Template, 4, 9, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var troop_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r54.unit.resistances);
        }
      }

      function PopupComponent_ng_template_11_mat_list_item_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-list-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, PopupComponent_ng_template_11_mat_list_item_4_img_8_Template, 3, 7, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, PopupComponent_ng_template_11_mat_list_item_4_img_9_Template, 3, 7, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, PopupComponent_ng_template_11_mat_list_item_4_img_10_Template, 3, 7, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, PopupComponent_ng_template_11_mat_list_item_4_img_11_Template, 3, 6, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, PopupComponent_ng_template_11_mat_list_item_4_div_12_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var troop_r54 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](13, _c0, troop_r54.unit.faction.id, troop_r54.unit.legendary ? "legendary" : "common"));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", troop_r54.unit.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 9, troop_r54.unit.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 11, troop_r54.unit.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r54.unit.families);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r54.unit.skills);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", troop_r54.unit.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", troop_r54.unit.legendary);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", troop_r54.unit.resistances && troop_r54.unit.resistances.length);
        }
      }

      function PopupComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-list", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, PopupComponent_ng_template_11_mat_list_item_4_Template, 13, 16, "mat-list-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, "card.list.troops"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r9.questTroops);
        }
      }

      function PopupComponent_ng_template_12_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PopupComponent_ng_template_12_button_4_Template_button_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r69);

            var artifact_r67 = restoredCtx.$implicit;

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);

            return ctx_r68.openAdventureDialog(artifact_r67);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "long");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "long");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var artifact_r67 = ctx.$implicit;

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](24, _c0, artifact_r67.item.faction.id, artifact_r67.item.legendary ? "legendary" : "common"))("disabled", !ctx_r66.canAttack);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 9, artifact_r67.quantity));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", artifact_r67.item.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 11, artifact_r67.item.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 13, artifact_r67.item.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](9, 15, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](10, 18, artifact_r67.item.description), artifact_r67.item), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 20, ctx_r66.data.turns));

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 22, "resource.turn.name"));
        }
      }

      function PopupComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-action-list", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, PopupComponent_ng_template_12_button_4_Template, 15, 27, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, "card.list.rewards"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r10.questArtifacts);
        }
      }

      var _PopupComponent = /*#__PURE__*/function () {
        function PopupComponent(angularFirestore, dialog, apiService, loadingService, store) {
          _classCallCheck(this, PopupComponent);

          this.angularFirestore = angularFirestore;
          this.dialog = dialog;
          this.apiService = apiService;
          this.loadingService = loadingService;
          this.store = store;
          this.uid = this.store.selectSnapshot(src_app_shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_5__.AuthState.getUserUID);
          this.opened = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(false);
          this.data = null;
          this.shopContracts = [];
          this.shopArtifacts = [];
          this.shopTroops = [];
          this.kingdomTroops = [];
          this.shopCharms = [];
          this.questContracts = [];
          this.questTroops = [];
          this.questArtifacts = [];
          this.PopupType = src_app_shared_type_common_type__WEBPACK_IMPORTED_MODULE_0__.PopupType;
          this.canAttack = false;
        }

        _createClass(PopupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
              var _this26 = this;

              return regeneratorRuntime.wrap(function _callee37$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                      _context37.next = 2;
                      return this.checkRefresh();

                    case 2:
                      _context37.next = 4;
                      return this.angularFirestore.collection("kingdoms/".concat(this.uid, "/troops"), function (ref) {
                        return ref.where('assignment', '==', src_app_kingdom_army_army_component__WEBPACK_IMPORTED_MODULE_4__.TroopAssignmentType.ATTACK);
                      }).get().toPromise();

                    case 4:
                      _context37.t0 = _context37.sent.docs.length;
                      this.canAttack = _context37.t0 !== 0;

                      // kingdoms
                      if (this.data.type === src_app_shared_type_common_type__WEBPACK_IMPORTED_MODULE_0__.PopupType.KINGDOM) {
                        (0, rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this.angularFirestore.collection("kingdoms/".concat(this.data.id, "/troops"), function (ref) {
                          return ref.where('assignment', '==', src_app_kingdom_army_army_component__WEBPACK_IMPORTED_MODULE_4__.TroopAssignmentType.DEFENSE);
                        }).valueChanges({
                          idField: 'fid'
                        })]).pipe((0, _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this)).subscribe(function (_ref3) {
                          var _ref4 = _slicedToArray(_ref3, 1),
                              troops = _ref4[0];

                          _this26.kingdomTroops = troops.sort(function (a, b) {
                            return a.sort - b.sort;
                          });

                          _this26.opened.next(true);
                        });
                      } // shop


                      if (this.data.type === src_app_shared_type_common_type__WEBPACK_IMPORTED_MODULE_0__.PopupType.SHOP) {
                        (0, rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this.angularFirestore.collection("shops/".concat(this.data.id, "/contracts")).valueChanges({
                          idField: 'fid'
                        }), this.angularFirestore.collection("shops/".concat(this.data.id, "/troops")).valueChanges({
                          idField: 'fid'
                        }), this.angularFirestore.collection("shops/".concat(this.data.id, "/artifacts")).valueChanges({
                          idField: 'fid'
                        }), this.angularFirestore.collection("shops/".concat(this.data.id, "/charms")).valueChanges({
                          idField: 'fid'
                        })]).pipe((0, _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this)).subscribe(function (_ref5) {
                          var _ref6 = _slicedToArray(_ref5, 4),
                              contracts = _ref6[0],
                              troops = _ref6[1],
                              artifacts = _ref6[2],
                              charms = _ref6[3];

                          _this26.shopContracts = contracts;
                          _this26.shopTroops = troops;
                          _this26.shopArtifacts = artifacts;
                          _this26.shopCharms = charms;

                          _this26.opened.next(true);
                        });
                      } // quest


                      if (this.data.type === src_app_shared_type_common_type__WEBPACK_IMPORTED_MODULE_0__.PopupType.QUEST) {
                        (0, rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this.angularFirestore.collection("quests/".concat(this.data.id, "/troops"), function (ref) {
                          return ref.where('assignment', '==', src_app_kingdom_army_army_component__WEBPACK_IMPORTED_MODULE_4__.TroopAssignmentType.DEFENSE);
                        }).valueChanges({
                          idField: 'fid'
                        }), this.angularFirestore.collection("quests/".concat(this.data.id, "/contracts")).valueChanges({
                          idField: 'fid'
                        }), this.angularFirestore.collection("quests/".concat(this.data.id, "/artifacts")).valueChanges({
                          idField: 'fid'
                        })]).pipe((0, _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this)).subscribe(function (_ref7) {
                          var _ref8 = _slicedToArray(_ref7, 3),
                              troops = _ref8[0],
                              contracts = _ref8[1],
                              artifacts = _ref8[2];

                          _this26.questTroops = troops.sort(function (a, b) {
                            return a.sort - b.sort;
                          });
                          _this26.questContracts = contracts;
                          _this26.questArtifacts = artifacts;

                          _this26.opened.next(true);
                        });
                      }

                    case 9:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee37, this);
            }));
          }
        }, {
          key: "checkRefresh",
          value: function checkRefresh() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
              return regeneratorRuntime.wrap(function _callee38$(_context38) {
                while (1) {
                  switch (_context38.prev = _context38.next) {
                    case 0:
                      if (!(this.data.type !== src_app_shared_type_common_type__WEBPACK_IMPORTED_MODULE_0__.PopupType.KINGDOM && this.data.visited && moment__WEBPACK_IMPORTED_MODULE_3__().isAfter(moment__WEBPACK_IMPORTED_MODULE_3__(this.data.visited.toMillis())))) {
                        _context38.next = 18;
                        break;
                      }

                      this.loadingService.startLoading();
                      _context38.prev = 2;
                      _context38.next = 5;
                      return this.data.type;

                    case 5:
                      _context38.t0 = _context38.sent;
                      _context38.t1 = src_app_shared_type_common_type__WEBPACK_IMPORTED_MODULE_0__.PopupType.SHOP;

                      if (!(_context38.t0 === _context38.t1)) {
                        _context38.next = 11;
                        break;
                      }

                      this.apiService.addShop(this.data.id, this.data.store.id);
                      _context38.next = 12;
                      break;

                    case 11:
                      this.apiService.addQuest(this.data.id, this.data.location.id);

                    case 12:
                      _context38.next = 17;
                      break;

                    case 14:
                      _context38.prev = 14;
                      _context38.t2 = _context38["catch"](2);
                      console.error(_context38.t2);

                    case 17:
                      this.loadingService.stopLoading();

                    case 18:
                    case "end":
                      return _context38.stop();
                  }
                }
              }, _callee38, this, [[2, 14]]);
            }));
          }
        }, {
          key: "openDealDialog",
          value: function openDealDialog(deal) {
            deal.join = deal.hero || deal.item || deal.spell || deal.unit;
            var dialogRef = this.dialog.open(_deal_component__WEBPACK_IMPORTED_MODULE_2__.DealComponent, {
              panelClass: 'dialog-responsive',
              data: {
                deal: deal,
                shop: this.data
              }
            });
          }
        }, {
          key: "openAdventureDialog",
          value: function openAdventureDialog(reward) {
            var dialogRef = this.dialog.open(_adventure_component__WEBPACK_IMPORTED_MODULE_1__.AdventureComponent, {
              panelClass: 'dialog-responsive',
              data: {
                reward: reward,
                quest: this.data
              }
            });
          }
        }]);

        return PopupComponent;
      }();

      _PopupComponent.ɵfac = function PopupComponent_Factory(t) {
        return new (t || _PopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_8__.Store));
      };

      _PopupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
        type: _PopupComponent,
        selectors: [["app-popup"]],
        decls: 13,
        vars: 11,
        consts: [[1, "map-popup", "animated", "bounceIn", "mat-elevation-z4"], [4, "ngIf"], [3, "ngIf"], ["mat-card-avatar", "", 3, "src", "alt"], ["color", "primary", "selected", "", 1, "clock"], ["matSubheader", ""], ["dense", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["mat-list-avatar", "", "matBadge", "?", "matBadgePosition", "above before"], ["mat-list-avatar", "", 3, "src", "alt"], ["mat-line", ""], ["mat-line", "", 1, "mat-card-subtitle"], ["class", "icon", 3, "title", "src", "alt", 4, "ngFor", "ngForOf"], ["class", "icon", "src", "/assets/images/icons/legendary.png", 3, "title", "alt", 4, "ngIf"], ["mat-line", "", "class", "mat-card-subtitle", 4, "ngIf"], [1, "icon", 3, "title", "src", "alt"], ["src", "/assets/images/icons/legendary.png", 1, "icon", 3, "title", "alt"], ["class", "icon grayscale", 3, "title", "src", "alt", 4, "ngFor", "ngForOf"], [1, "icon", "grayscale", 3, "title", "src", "alt"], ["mat-list-item", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["mat-list-item", "", 3, "ngClass", "click"], ["mat-list-avatar", "", "matBadgePosition", "above before", 3, "matBadge"], ["mat-list-avatar", "", 1, "animated", "pulse", "infinite", 3, "src", "alt"], ["mat-line", "", 1, "mat-card-subtitle", 3, "innerHTML"], ["mat-list-avatar", "", "matBadgePosition", "above after", 3, "matBadge"], ["mat-list-avatar", "", "src", "/assets/images/resources/gold.png", 3, "alt"], ["mat-list-item", "", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], ["mat-list-item", "", 3, "ngClass", "disabled", "click"], ["mat-list-avatar", "", "src", "/assets/images/resources/turn.png", 3, "alt"]],
        template: function PopupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, PopupComponent_mat_card_header_1_Template, 8, 8, "mat-card-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, PopupComponent_mat_card_header_2_Template, 15, 14, "mat-card-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, PopupComponent_mat_card_header_3_Template, 15, 14, "mat-card-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, PopupComponent_ng_template_5_Template, 5, 4, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, PopupComponent_ng_template_6_Template, 5, 4, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, PopupComponent_ng_template_7_Template, 5, 4, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, PopupComponent_ng_template_8_Template, 5, 4, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, PopupComponent_ng_template_9_Template, 5, 4, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, PopupComponent_ng_template_10_Template, 5, 4, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, PopupComponent_ng_template_11_Template, 5, 4, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, PopupComponent_ng_template_12_Template, 5, 4, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.data.type === ctx.PopupType.KINGDOM);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.data.type === ctx.PopupType.SHOP);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.data.type === ctx.PopupType.QUEST);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.kingdomTroops.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.shopContracts.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.shopTroops.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.shopArtifacts.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.shopCharms.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.questContracts.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.questTroops.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.questArtifacts.length);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardSubtitle, _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__.MatChip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_22__.MatListSubheaderCssMatStyler, _angular_material_list__WEBPACK_IMPORTED_MODULE_22__.MatList, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_22__.MatListItem, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__.DefaultClassDirective, _angular_material_list__WEBPACK_IMPORTED_MODULE_22__.MatListAvatarCssMatStyler, _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadge, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatLine],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe, _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_9__.IconPipe, _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_10__.LongPipe],
        styles: [".map-popup[_ngcontent-%COMP%]     .mat-card-header-text {\n  overflow: hidden !important;\n}\n.map-popup[_ngcontent-%COMP%]     .mat-list-text {\n  line-height: 1.25;\n}\n.map-popup[_ngcontent-%COMP%]   .popup-number[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.map-popup[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsMkJBQUE7QUFBSjtBQUVFO0VBQ0UsaUJBQUE7QUFBSjtBQUVFO0VBQ0UsZUFBQTtBQUFKO0FBRUU7RUFDRSxtQkFBQTtBQUFKIiwiZmlsZSI6InBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC1wb3B1cCB7XHJcbiAgOjpuZy1kZWVwIC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LWxpc3QtdGV4dCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcclxuICB9XHJcbiAgLnBvcHVwLW51bWJlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gIC5jbG9jayB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      _PopupComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0, _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.UntilDestroy)()], _PopupComponent);
      /***/
    },

    /***/
    92340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        hmr: false,
        firebase: {
          apiKey: 'AIzaSyCSVr_n7Ced40pw2qHEhnr3G09UILvB_zc',
          authDomain: 'mage-c4259.firebaseapp.com',
          databaseURL: 'https://mage-c4259.firebaseio.com',
          projectId: 'mage-c4259',
          storageBucket: 'mage-c4259.appspot.com',
          messagingSenderId: '210042498621',
          appId: '1:210042498621:web:c4a21bc796b32d8bf40454'
        },
        mapbox: {
          style: 'mapbox://styles/fergardi/ckacdomo73idr1is4dkj2kfil',
          token: 'pk.eyJ1IjoiZmVyZ2FyZGkiLCJhIjoiY2lxdWl1enJiMDAzaWh4bTNwY3F6MnNwdiJ9.fPkJoOfrARPtZWCj1ehyCQ',
          lat: 42.618060799999995,
          lng: -5.5508992,
          zoom: 12,
          pitch: 80
        },
        functions: {
          url: 'http://localhost:5001/mage-c4259/europe-west1/api'
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    84187: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "hmrBootstrap": function hmrBootstrap() {
          return (
            /* binding */
            _hmrBootstrap
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angularclass/hmr */
      90334);

      var _hmrBootstrap = function _hmrBootstrap(module, bootstrap) {
        var ngModule;
        module.hot.accept();
        bootstrap().then(function (mod) {
          return ngModule = mod;
        });
        module.hot.dispose(function () {
          var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
          var elements = appRef.components.map(function (c) {
            return c.location.nativeElement;
          });
          var makeVisible = (0, _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__.createNewHosts)(elements);
          ngModule.destroy();
          makeVisible();
        });
      };
      /***/

    },

    /***/
    14431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);
      /* harmony import */


      var _hmr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./hmr */
      84187);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
      }

      var bootstrap = function bootstrap() {
        return _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);
      };

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.hmr) {
        if (false) {} else {
          console.error('HMR is not enabled for webpack-dev-server!');
          console.log('Are you using the --hmr flag for ng serve?');
        }
      } else {
        bootstrap()["catch"](function (err) {
          return console.error(err);
        });
      }
      /***/

    },

    /***/
    46700: function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./af": 62275,
        "./af.js": 62275,
        "./ar": 90857,
        "./ar-dz": 11218,
        "./ar-dz.js": 11218,
        "./ar-kw": 14754,
        "./ar-kw.js": 14754,
        "./ar-ly": 66680,
        "./ar-ly.js": 66680,
        "./ar-ma": 92178,
        "./ar-ma.js": 92178,
        "./ar-sa": 56522,
        "./ar-sa.js": 56522,
        "./ar-tn": 95682,
        "./ar-tn.js": 95682,
        "./ar.js": 90857,
        "./az": 70164,
        "./az.js": 70164,
        "./be": 79774,
        "./be.js": 79774,
        "./bg": 60947,
        "./bg.js": 60947,
        "./bm": 21832,
        "./bm.js": 21832,
        "./bn": 89650,
        "./bn-bd": 74477,
        "./bn-bd.js": 74477,
        "./bn.js": 89650,
        "./bo": 66005,
        "./bo.js": 66005,
        "./br": 98492,
        "./br.js": 98492,
        "./bs": 70534,
        "./bs.js": 70534,
        "./ca": 52061,
        "./ca.js": 52061,
        "./cs": 84737,
        "./cs.js": 84737,
        "./cv": 61167,
        "./cv.js": 61167,
        "./cy": 77996,
        "./cy.js": 77996,
        "./da": 9528,
        "./da.js": 9528,
        "./de": 14540,
        "./de-at": 49430,
        "./de-at.js": 49430,
        "./de-ch": 67978,
        "./de-ch.js": 67978,
        "./de.js": 14540,
        "./dv": 83426,
        "./dv.js": 83426,
        "./el": 6616,
        "./el.js": 6616,
        "./en-au": 63816,
        "./en-au.js": 63816,
        "./en-ca": 32162,
        "./en-ca.js": 32162,
        "./en-gb": 83305,
        "./en-gb.js": 83305,
        "./en-ie": 61954,
        "./en-ie.js": 61954,
        "./en-il": 43060,
        "./en-il.js": 43060,
        "./en-in": 59923,
        "./en-in.js": 59923,
        "./en-nz": 13540,
        "./en-nz.js": 13540,
        "./en-sg": 16505,
        "./en-sg.js": 16505,
        "./eo": 41907,
        "./eo.js": 41907,
        "./es": 86640,
        "./es-do": 41246,
        "./es-do.js": 41246,
        "./es-mx": 56131,
        "./es-mx.js": 56131,
        "./es-us": 36430,
        "./es-us.js": 36430,
        "./es.js": 86640,
        "./et": 62551,
        "./et.js": 62551,
        "./eu": 32711,
        "./eu.js": 32711,
        "./fa": 54572,
        "./fa.js": 54572,
        "./fi": 33390,
        "./fi.js": 33390,
        "./fil": 87860,
        "./fil.js": 87860,
        "./fo": 48216,
        "./fo.js": 48216,
        "./fr": 99291,
        "./fr-ca": 98527,
        "./fr-ca.js": 98527,
        "./fr-ch": 58407,
        "./fr-ch.js": 58407,
        "./fr.js": 99291,
        "./fy": 47054,
        "./fy.js": 47054,
        "./ga": 49540,
        "./ga.js": 49540,
        "./gd": 73917,
        "./gd.js": 73917,
        "./gl": 51486,
        "./gl.js": 51486,
        "./gom-deva": 56245,
        "./gom-deva.js": 56245,
        "./gom-latn": 48868,
        "./gom-latn.js": 48868,
        "./gu": 59652,
        "./gu.js": 59652,
        "./he": 89019,
        "./he.js": 89019,
        "./hi": 42040,
        "./hi.js": 42040,
        "./hr": 63402,
        "./hr.js": 63402,
        "./hu": 79322,
        "./hu.js": 79322,
        "./hy-am": 27609,
        "./hy-am.js": 27609,
        "./id": 57942,
        "./id.js": 57942,
        "./is": 98275,
        "./is.js": 98275,
        "./it": 73053,
        "./it-ch": 4378,
        "./it-ch.js": 4378,
        "./it.js": 73053,
        "./ja": 46176,
        "./ja.js": 46176,
        "./jv": 679,
        "./jv.js": 679,
        "./ka": 92726,
        "./ka.js": 92726,
        "./kk": 72953,
        "./kk.js": 72953,
        "./km": 86957,
        "./km.js": 86957,
        "./kn": 59181,
        "./kn.js": 59181,
        "./ko": 47148,
        "./ko.js": 47148,
        "./ku": 27752,
        "./ku.js": 27752,
        "./ky": 65675,
        "./ky.js": 65675,
        "./lb": 41263,
        "./lb.js": 41263,
        "./lo": 65746,
        "./lo.js": 65746,
        "./lt": 11143,
        "./lt.js": 11143,
        "./lv": 38753,
        "./lv.js": 38753,
        "./me": 44054,
        "./me.js": 44054,
        "./mi": 31573,
        "./mi.js": 31573,
        "./mk": 30202,
        "./mk.js": 30202,
        "./ml": 68523,
        "./ml.js": 68523,
        "./mn": 79794,
        "./mn.js": 79794,
        "./mr": 56681,
        "./mr.js": 56681,
        "./ms": 56975,
        "./ms-my": 39859,
        "./ms-my.js": 39859,
        "./ms.js": 56975,
        "./mt": 3691,
        "./mt.js": 3691,
        "./my": 5152,
        "./my.js": 5152,
        "./nb": 7607,
        "./nb.js": 7607,
        "./ne": 21526,
        "./ne.js": 21526,
        "./nl": 86368,
        "./nl-be": 40076,
        "./nl-be.js": 40076,
        "./nl.js": 86368,
        "./nn": 68420,
        "./nn.js": 68420,
        "./oc-lnc": 51906,
        "./oc-lnc.js": 51906,
        "./pa-in": 94504,
        "./pa-in.js": 94504,
        "./pl": 54721,
        "./pl.js": 54721,
        "./pt": 74645,
        "./pt-br": 54548,
        "./pt-br.js": 54548,
        "./pt.js": 74645,
        "./ro": 71977,
        "./ro.js": 71977,
        "./ru": 26042,
        "./ru.js": 26042,
        "./sd": 78849,
        "./sd.js": 78849,
        "./se": 27739,
        "./se.js": 27739,
        "./si": 50084,
        "./si.js": 50084,
        "./sk": 92449,
        "./sk.js": 92449,
        "./sl": 23086,
        "./sl.js": 23086,
        "./sq": 33139,
        "./sq.js": 33139,
        "./sr": 30607,
        "./sr-cyrl": 30063,
        "./sr-cyrl.js": 30063,
        "./sr.js": 30607,
        "./ss": 40131,
        "./ss.js": 40131,
        "./sv": 21665,
        "./sv.js": 21665,
        "./sw": 5642,
        "./sw.js": 5642,
        "./ta": 33622,
        "./ta.js": 33622,
        "./te": 74825,
        "./te.js": 74825,
        "./tet": 48336,
        "./tet.js": 48336,
        "./tg": 39238,
        "./tg.js": 39238,
        "./th": 99463,
        "./th.js": 99463,
        "./tk": 39986,
        "./tk.js": 39986,
        "./tl-ph": 29672,
        "./tl-ph.js": 29672,
        "./tlh": 40043,
        "./tlh.js": 40043,
        "./tr": 51212,
        "./tr.js": 51212,
        "./tzl": 50110,
        "./tzl.js": 50110,
        "./tzm": 80482,
        "./tzm-latn": 38309,
        "./tzm-latn.js": 38309,
        "./tzm.js": 80482,
        "./ug-cn": 42495,
        "./ug-cn.js": 42495,
        "./uk": 54157,
        "./uk.js": 54157,
        "./ur": 80984,
        "./ur.js": 80984,
        "./uz": 64141,
        "./uz-latn": 43662,
        "./uz-latn.js": 43662,
        "./uz.js": 64141,
        "./vi": 12607,
        "./vi.js": 12607,
        "./x-pseudo": 66460,
        "./x-pseudo.js": 66460,
        "./yo": 92948,
        "./yo.js": 92948,
        "./zh-cn": 62658,
        "./zh-cn.js": 62658,
        "./zh-hk": 39352,
        "./zh-hk.js": 39352,
        "./zh-mo": 38274,
        "./zh-mo.js": 38274,
        "./zh-tw": 98451,
        "./zh-tw.js": 98451
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = 46700;
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map