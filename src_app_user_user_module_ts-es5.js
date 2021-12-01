(function () {
  "use strict";

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkmage"] = self["webpackChunkmage"] || []).push([["src_app_user_user_module_ts"], {
    /***/
    51227: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EncyclopediaComponent": function EncyclopediaComponent() {
          return (
            /* binding */
            _EncyclopediaComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/table */
      54302);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/sort */
      45381);
      /* harmony import */


      var angular_animations__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! angular-animations */
      9641);
      /* harmony import */


      var _tome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tome.component */
      94648);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/cache.service */
      12622);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_services_tutorial_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/tutorial.service */
      80595);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/chips */
      79243);
      /* harmony import */


      var ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ngx-ui-tour-md-menu */
      81252);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/toolbar */
      64106);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/expansion */
      22323);
      /* harmony import */


      var ngx_disqus__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ngx-disqus */
      45916);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/list */
      28417);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      89460);
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/badge */
      90330);
      /* harmony import */


      var _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../pipes/long.pipe */
      16757);
      /* harmony import */


      var _pipes_legendary_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../pipes/legendary.pipe */
      79690);
      /* harmony import */


      var _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../pipes/icon.pipe */
      38262);

      function EncyclopediaComponent_ng_container_28_mat_header_cell_1_mat_form_field_4_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EncyclopediaComponent_ng_container_28_mat_header_cell_1_mat_form_field_4_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);

            var column_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            ctx_r11.filters[column_r4].value = "";
            return ctx_r11.applyFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function EncyclopediaComponent_ng_container_28_mat_header_cell_1_mat_form_field_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EncyclopediaComponent_ng_container_28_mat_header_cell_1_mat_form_field_4_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);

            var column_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r14.filters[column_r4].value = $event;
          })("keyup", function EncyclopediaComponent_ng_container_28_mat_header_cell_1_mat_form_field_4_Template_input_keyup_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r17.applyFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, EncyclopediaComponent_ng_container_28_mat_header_cell_1_mat_form_field_4_button_2_Template, 3, 0, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r7.filters[column_r4].value);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.filters[column_r4].value);
        }
      }

      function EncyclopediaComponent_ng_container_28_mat_header_cell_1_mat_form_field_5_mat_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-list", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-list-item", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", option_r20.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", option_r20.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 5, option_r20.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 7, option_r20.name));
        }
      }

      function EncyclopediaComponent_ng_container_28_mat_header_cell_1_mat_form_field_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-select", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EncyclopediaComponent_ng_container_28_mat_header_cell_1_mat_form_field_5_Template_mat_select_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);

            var column_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r21.filters[column_r4].value = $event;
          })("selectionChange", function EncyclopediaComponent_ng_container_28_mat_header_cell_1_mat_form_field_5_Template_mat_select_selectionChange_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r24.applyFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, EncyclopediaComponent_ng_container_28_mat_header_cell_1_mat_form_field_5_mat_option_2_Template, 9, 9, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r8.filters[column_r4].value);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r8.filters[column_r4].options);
        }
      }

      function EncyclopediaComponent_ng_container_28_mat_header_cell_1_mat_form_field_6_mat_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-chip", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r27.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", option_r27.name.includes("legendary") ? "legendary" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", option_r27.name.includes("legendary") ? "/assets/images/icons/legendary.png" : "/assets/images/icons/type.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 5, option_r27.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 7, option_r27.name), " ");
        }
      }

      function EncyclopediaComponent_ng_container_28_mat_header_cell_1_mat_form_field_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-select", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EncyclopediaComponent_ng_container_28_mat_header_cell_1_mat_form_field_6_Template_mat_select_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);

            var column_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r28.filters[column_r4].value = $event;
          })("selectionChange", function EncyclopediaComponent_ng_container_28_mat_header_cell_1_mat_form_field_6_Template_mat_select_selectionChange_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r31.applyFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, EncyclopediaComponent_ng_container_28_mat_header_cell_1_mat_form_field_6_mat_option_2_Template, 7, 9, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r9.filters[column_r4].value);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r9.filters[column_r4].options);
        }
      }

      function EncyclopediaComponent_ng_container_28_mat_header_cell_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, EncyclopediaComponent_ng_container_28_mat_header_cell_1_mat_form_field_4_Template, 3, 2, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, EncyclopediaComponent_ng_container_28_mat_header_cell_1_mat_form_field_5_Template, 3, 2, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, EncyclopediaComponent_ng_container_28_mat_header_cell_1_mat_form_field_6_Template, 3, 2, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 4, "table.column." + column_r4));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.filters[column_r4] && ctx_r5.filters[column_r4].type === "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.filters[column_r4] && ctx_r5.filters[column_r4].type === "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.filters[column_r4] && ctx_r5.filters[column_r4].type === "multiple");
        }
      }

      function EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_2_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var row_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 4, row_r34.description), row_r34), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
        }
      }

      function EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_2_div_10_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var family_r46 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 3, family_r46.name))("src", family_r46.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 5, family_r46.name));
        }
      }

      function EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_2_div_10_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var skill_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 3, skill_r47.name))("src", skill_r47.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 5, skill_r47.name));
        }
      }

      function EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_2_div_10_img_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var category_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 3, category_r48.name))("src", category_r48.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 5, category_r48.name));
        }
      }

      function EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_2_div_10_img_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 2, "category.legendary.name"))("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 4, "category.legendary.name"));
        }
      }

      function EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_2_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_2_div_10_img_1_Template, 3, 7, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_2_div_10_img_2_Template, 3, 7, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_2_div_10_img_3_Template, 3, 7, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_2_div_10_img_4_Template, 3, 6, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", row_r34.families);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", row_r34.skills);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", row_r34.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", row_r34.legendary);
        }
      }

      function EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_2_div_11_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
        }

        if (rf & 2) {
          var category_r51 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 3, "category.resistance.name") + _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 5, category_r51.name))("src", category_r51.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 7, "category.resistance.name"));
        }
      }

      function EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_2_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_2_div_11_img_1_Template, 4, 9, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", row_r34.resistances);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return [a0, a1];
      };

      function EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-list", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-list-item", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "legendary");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_2_div_9_Template, 3, 6, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_2_div_10_Template, 5, 4, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_2_div_11_Template, 2, 1, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](15, _c0, row_r34.faction.id, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 9, row_r34) ? "legendary" : "common"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matBadge", row_r34.level || "?");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", row_r34.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("ngClass", row_r34.type === "god" ? "squared" : "")("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 11, row_r34.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 13, row_r34.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", row_r34.type !== "unit");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", row_r34.type === "unit");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", row_r34.type === "unit" && row_r34.resistances && row_r34.resistances.length);
        }
      }

      function EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-list", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-list-item", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", row_r34.faction.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", row_r34.faction.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 5, row_r34.faction.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 7, row_r34.faction.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 9, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 12, row_r34.faction.description), row_r34.faction), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
        }
      }

      function EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_4_mat_chip_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-chip", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "type." + row_r34.subtype + ".name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, "type." + row_r34.subtype + ".name"));
        }
      }

      function EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_4_mat_chip_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-chip", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "category.legendary.name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, "category.legendary.name"));
        }
      }

      function EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-chip", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_4_mat_chip_6_Template, 5, 6, "mat-chip", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_4_mat_chip_7_Template, 5, 6, "mat-chip", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 4, "type." + row_r34.type + ".name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 6, "type." + row_r34.type + ".name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", row_r34.subtype);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", row_r34.legendary);
        }
      }

      function EncyclopediaComponent_ng_container_28_mat_cell_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_2_Template, 12, 18, "ng-template", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_3_Template, 11, 14, "ng-template", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, EncyclopediaComponent_ng_container_28_mat_cell_2_ng_template_4_Template, 8, 8, "ng-template", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 4, "table.column." + column_r4));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r4 === "name");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r4 === "faction");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r4 === "type");
        }
      }

      function EncyclopediaComponent_ng_container_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, EncyclopediaComponent_ng_container_28_mat_header_cell_1_Template, 7, 6, "mat-header-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, EncyclopediaComponent_ng_container_28_mat_cell_2_Template, 5, 6, "mat-cell", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var column_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("matColumnDef", column_r4);
        }
      }

      function EncyclopediaComponent_mat_header_row_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function EncyclopediaComponent_mat_row_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-row", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EncyclopediaComponent_mat_row_30_Template_mat_row_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62);

            var tome_r60 = restoredCtx.$implicit;

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r61.openTomeDialog(tome_r60);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function EncyclopediaComponent_div_38_ng_container_13_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var example_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 4, example_r66.description), example_r66), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
        }
      }

      function EncyclopediaComponent_div_38_ng_container_13_div_9_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var family_r76 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 3, family_r76.name))("src", family_r76.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 5, family_r76.name));
        }
      }

      function EncyclopediaComponent_div_38_ng_container_13_div_9_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var skill_r77 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 3, skill_r77.name))("src", skill_r77.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 5, skill_r77.name));
        }
      }

      function EncyclopediaComponent_div_38_ng_container_13_div_9_img_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          var category_r78 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 3, category_r78.name))("src", category_r78.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 5, category_r78.name));
        }
      }

      function EncyclopediaComponent_div_38_ng_container_13_div_9_img_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 2, "category.legendary.name"))("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 4, "category.legendary.name"));
        }
      }

      function EncyclopediaComponent_div_38_ng_container_13_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, EncyclopediaComponent_div_38_ng_container_13_div_9_img_1_Template, 3, 7, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, EncyclopediaComponent_div_38_ng_container_13_div_9_img_2_Template, 3, 7, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, EncyclopediaComponent_div_38_ng_container_13_div_9_img_3_Template, 3, 7, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, EncyclopediaComponent_div_38_ng_container_13_div_9_img_4_Template, 3, 6, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var example_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", example_r66.families);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", example_r66.skills);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", example_r66.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", example_r66.legendary);
        }
      }

      function EncyclopediaComponent_div_38_ng_container_13_div_10_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
        }

        if (rf & 2) {
          var category_r81 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 3, "category.resistance.name") + _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 5, category_r81.name))("src", category_r81.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 7, "category.resistance.name"));
        }
      }

      function EncyclopediaComponent_div_38_ng_container_13_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, EncyclopediaComponent_div_38_ng_container_13_div_10_img_1_Template, 4, 9, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var example_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", example_r66.resistances);
        }
      }

      function EncyclopediaComponent_div_38_ng_container_13_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var topic_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", topic_r63.suffix, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "type.resource.name"));
        }
      }

      function EncyclopediaComponent_div_38_ng_container_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-list-item", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, EncyclopediaComponent_div_38_ng_container_13_div_8_Template, 3, 6, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, EncyclopediaComponent_div_38_ng_container_13_div_9_Template, 5, 4, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, EncyclopediaComponent_div_38_ng_container_13_div_10_Template, 2, 1, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, EncyclopediaComponent_div_38_ng_container_13_div_11_Template, 3, 4, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var example_r66 = ctx.$implicit;

          var topic_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](14, _c0, example_r66.faction.id, example_r66.legendary ? "legendary" : "common"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matBadge", example_r66.type === "report" ? "!" : "?");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", example_r66.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("ngClass", example_r66.type === "god" ? "squared" : "")("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 10, example_r66.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 12, example_r66.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", example_r66.type !== "unit");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", example_r66.type === "unit");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", example_r66.type === "unit" && example_r66.resistances && example_r66.resistances.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", topic_r63.suffix);
        }
      }

      function EncyclopediaComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-list", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, EncyclopediaComponent_div_38_ng_container_13_Template, 12, 17, "ng-container", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "p", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var topic_r63 = ctx.$implicit;
          var i_r64 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("id", i_r64 === 0 ? "help" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "/assets/images/cards/" + topic_r63.name + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 7, topic_r63.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 9, topic_r63.surname + "." + topic_r63.name + ".name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 11, topic_r63.surname + "." + topic_r63.name + ".description"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", topic_r63.examples);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 15, topic_r63.surname + "." + topic_r63.name + ".tour")), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
        }
      }

      var _c1 = function _c1() {
        return [5, 10, 20];
      };

      var _EncyclopediaComponent = /*#__PURE__*/function () {
        function _EncyclopediaComponent(cacheService, translateService, dialog, tutorialService) {
          _classCallCheck(this, _EncyclopediaComponent);

          this.cacheService = cacheService;
          this.translateService = translateService;
          this.dialog = dialog;
          this.tutorialService = tutorialService;
          this.search = '';
          this.columns = ['name', 'faction', 'type'];
          this.filters = {
            name: {
              type: 'text',
              value: ''
            },
            faction: {
              type: 'select',
              value: '',
              options: []
            },
            type: {
              type: 'multiple',
              value: [],
              options: []
            }
          };
          this.table = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource([]);
          this.topics = [];
        }

        _createClass(_EncyclopediaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var data, legendary, types, subtypes;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Promise.all([this.cacheService.getSkills(), this.cacheService.getUnits(), this.cacheService.getSpells(), this.cacheService.getItems(), this.cacheService.getGods(), this.cacheService.getStructures(), this.cacheService.getHeroes(), this.cacheService.getResources(), this.cacheService.getFamilies(), this.cacheService.getCategories(), this.cacheService.getGuilds(), this.cacheService.getAttacks(), this.cacheService.getLocations(), this.cacheService.getStores(), this.cacheService.getPerks()]);

                    case 2:
                      data = _context.sent;
                      data = data.reduce(function (a, b) {
                        return a.concat(b);
                      }, []);
                      this.table = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(data);
                      this.table.paginator = this.paginator;
                      this.table.sort = this.sort;

                      this.table.sortingDataAccessor = function (obj, property) {
                        if (property === 'name') return _this.translateService.instant(obj['name']);
                        if (property === 'faction') return _this.translateService.instant(obj['faction']['name']);
                        if (property === 'type') return _this.translateService.instant("type.".concat(obj['type'], ".name"));
                        return obj[property];
                      };

                      _context.t0 = this.filters.faction.options;
                      _context.t1 = [{
                        id: '',
                        name: 'table.filter.any',
                        image: '/assets/images/factions/grey.png'
                      }];
                      _context.next = 12;
                      return this.cacheService.getFactions();

                    case 12:
                      _context.t2 = _context.sent;
                      this.filters.faction.options = _context.t0.concat.call(_context.t0, _context.t1, _context.t2);
                      this.filters.faction.value = this.filters.faction.options[0];
                      legendary = new Array({
                        name: 'category.legendary.name',
                        value: true
                      });
                      types = _toConsumableArray(new Set(data.map(function (row) {
                        return row.type;
                      }))).map(function (type) {
                        return {
                          name: "type.".concat(type, ".name"),
                          value: type
                        };
                      });
                      subtypes = _toConsumableArray(new Set(data.filter(function (row) {
                        return row.subtype;
                      }).map(function (row) {
                        return row.subtype;
                      }))).map(function (subtype) {
                        return {
                          name: "type.".concat(subtype, ".name"),
                          value: subtype
                        };
                      });
                      this.filters.type.options = [legendary, types, subtypes].reduce(function (a, b) {
                        return a.concat(b);
                      }, []).filter(function (value, index, array) {
                        return array.findIndex(function (element) {
                          return element.name === value.name;
                        }) === index;
                      }) // https://stackoverflow.com/a/56757215/2477303
                      .sort(function (a, b) {
                        return _this.translateService.instant(a.name).localeCompare(_this.translateService.instant(b.name));
                      });
                      this.table.filterPredicate = this.createFilter();
                      this.applyFilter(); // topics

                      this.topics = [{
                        surname: 'kingdom',
                        name: 'city',
                        examples: this.table.data.filter(function (item) {
                          return ['barrier', 'node'].includes(item.id);
                        }),
                        suffix: '/assets/images/resources/land.png'
                      }, {
                        surname: 'kingdom',
                        name: 'auction',
                        examples: this.table.data.filter(function (item) {
                          return ['shield-light', 'crypt-keeper'].includes(item.id);
                        }),
                        suffix: '/assets/images/resources/gold.png'
                      }, {
                        surname: 'kingdom',
                        name: 'emporium',
                        examples: this.table.data.filter(function (item) {
                          return ['magic-compass', 'dragon-egg'].includes(item.id);
                        }),
                        suffix: '/assets/images/resources/gem.png'
                      }, {
                        surname: 'world',
                        name: 'map',
                        examples: this.table.data.filter(function (item) {
                          return ['graveyard', 'inn'].includes(item.id);
                        })
                      }, {
                        surname: 'kingdom',
                        name: 'army',
                        examples: this.table.data.filter(function (item) {
                          return ['bone-dragon', 'hydra'].includes(item.id);
                        })
                      }, {
                        surname: 'kingdom',
                        name: 'tavern',
                        examples: this.table.data.filter(function (item) {
                          return ['dragon-rider', 'sage'].includes(item.id);
                        })
                      }, {
                        surname: 'kingdom',
                        name: 'census',
                        examples: [{
                          name: 'Bot 1',
                          description: 'Bots',
                          type: 'player',
                          image: '/assets/images/factions/black.png',
                          faction: {
                            id: 'black'
                          }
                        }, {
                          name: 'Bot 2',
                          description: 'Bots',
                          type: 'player',
                          image: '/assets/images/factions/white.png',
                          faction: {
                            id: 'white'
                          }
                        }],
                        suffix: '/assets/images/icons/power.png'
                      }, {
                        surname: 'kingdom',
                        name: 'archive',
                        examples: [{
                          name: 'Bot 3',
                          description: 'kingdom.report.subject',
                          type: 'report',
                          image: '/assets/images/factions/green.png',
                          faction: {
                            id: 'green'
                          }
                        }, {
                          name: 'Bot 4',
                          description: 'kingdom.auction.subject',
                          type: 'report',
                          image: '/assets/images/factions/blue.png',
                          faction: {
                            id: 'blue'
                          }
                        }]
                      }, {
                        surname: 'kingdom',
                        name: 'clan',
                        examples: this.table.data.filter(function (item) {
                          return ['hunter', 'warrior'].includes(item.id);
                        })
                      }, {
                        surname: 'kingdom',
                        name: 'sorcery',
                        examples: this.table.data.filter(function (item) {
                          return ['fireball', 'locust-swarm'].includes(item.id);
                        }),
                        suffix: '/assets/images/resources/mana.png'
                      }, {
                        surname: 'kingdom',
                        name: 'temple',
                        examples: this.table.data.filter(function (item) {
                          return ['death', 'famine'].includes(item.id);
                        }),
                        suffix: '/assets/images/spells/grey/armageddon.png'
                      }, {
                        surname: 'user',
                        name: 'encyclopedia',
                        examples: this.table.data.filter(function (item) {
                          return ['breath', 'dragon'].includes(item.id);
                        })
                      }];

                    case 22:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "applyFilter",
          value: function applyFilter() {
            this.table.filter = JSON.stringify({
              name: this.filters.name.value,
              type: this.filters.type.value,
              faction: this.filters.faction.value
            });
          }
        }, {
          key: "createFilter",
          value: function createFilter() {
            var _this2 = this;

            var normalize = /[\u0300-\u036f]/g;

            var filterFunction = function filterFunction(data, filter) {
              var filters = JSON.parse(filter);
              return (_this2.translateService.instant(data.name).toLowerCase().normalize('NFD').replace(normalize, '').includes(filters.name.toLowerCase().normalize('NFD').replace(normalize, '')) || _this2.translateService.instant(data.description).toLowerCase().normalize('NFD').replace(normalize, '').includes(filters.name.toLowerCase().normalize('NFD').replace(normalize, ''))) && (!filters.type.length || filters.type.every(function (element) {
                return [data.type, data.subtype, data.legendary].includes(element);
              })) && (!filters.faction || data.faction.id.toLowerCase().includes(filters.faction.id));
            };

            return filterFunction;
          }
        }, {
          key: "openTomeDialog",
          value: function openTomeDialog(tome) {
            var dialogRef = this.dialog.open(_tome_component__WEBPACK_IMPORTED_MODULE_0__.TomeComponent, {
              panelClass: 'dialog-responsive',
              data: tome
            });
          }
        }, {
          key: "clearFilter",
          value: function clearFilter() {
            this.filters.name.value = '';
            this.filters.faction.value = this.filters.faction.options[0];
            this.filters.type.value = [];

            if (this.table.paginator) {
              this.table.paginator.pageSize = this.table.paginator.pageSizeOptions[0];
              this.table.paginator.pageIndex = 0;
            }

            if (this.table.sort) {
              if (this.table.sort.active !== 'name' && this.table.sort.direction !== 'asc') {
                this.table.sort.sort({
                  id: 'name',
                  start: 'asc',
                  disableClear: false
                });
              }
            }

            this.applyFilter();
          }
        }]);

        return _EncyclopediaComponent;
      }();

      _EncyclopediaComponent.ɵfac = function EncyclopediaComponent_Factory(t) {
        return new (t || _EncyclopediaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_cache_service__WEBPACK_IMPORTED_MODULE_1__.CacheService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_tutorial_service__WEBPACK_IMPORTED_MODULE_2__.TutorialService));
      };

      _EncyclopediaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _EncyclopediaComponent,
        selectors: [["app-encyclopedia"]],
        viewQuery: function EncyclopediaComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        decls: 86,
        vars: 52,
        consts: [["fxLayout", "row wrap", "fxLayoutGap", "10px grid", 1, "user-encyclopedia"], ["fxFlex.xl", "100", "fxFlex.lg", "100", "fxFlex.md", "100", "fxFlex.sm", "100", "fxFlex.xs", "100", 1, "table-responsive"], ["mat-card-avatar", "", "src", "/assets/images/cards/encyclopedia.png", 3, "alt"], [1, "mat-card-extras"], ["mat-icon-button", "", 3, "click"], ["color", "primary"], ["mat-table", "", "matSort", "", "matSortActive", "name", "matSortDirection", "asc", "tourAnchor", "tour.encyclopedia", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], [4, "matHeaderRowDef", "matHeaderRowDefSticky"], [3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "fill-space"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["fxFlex.xl", "33", "fxFlex.lg", "33", "fxFlex.md", "50", "fxFlex.sm", "100", "fxFlex.xs", "100", 4, "ngFor", "ngForOf"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "100", "fxFlex.xs", "100", "id", "changelog"], ["mat-card-avatar", "", "src", "/assets/images/cards/changelog.png", 3, "alt"], [1, "example-headers-align"], [3, "expanded"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "100", "fxFlex.xs", "100", "id", "bonfire"], ["mat-card-avatar", "", "src", "/assets/images/cards/bonfire.png", 3, "alt"], ["identifier", "/help"], [3, "matColumnDef"], ["class", "table-header", 4, "matHeaderCellDef"], [4, "matCellDef"], [1, "table-header"], ["mat-sort-header", ""], ["class", "table-filter", 4, "ngIf"], [1, "table-filter"], ["matInput", "", "autocomplete", "off", "type", "search", 3, "ngModel", "ngModelChange", "keyup"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", 3, "click"], [3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["dense", ""], [3, "ngClass"], ["mat-list-avatar", ""], ["mat-list-avatar", "", 3, "src", "alt"], ["mat-line", ""], ["multiple", "", 3, "ngModel", "ngModelChange", "selectionChange"], ["color", "primary", "selected", "", 3, "ngClass"], [1, "icon", 3, "src", "alt"], [3, "ngIf"], ["mat-list-avatar", "", "matBadgePosition", "above before", 3, "matBadge"], ["mat-list-avatar", "", 1, "animated", "pulse", "infinite", 3, "src", "ngClass", "alt"], ["mat-line", "", "class", "mat-card-subtitle", 3, "innerHTML", 4, "ngIf"], ["mat-line", "", "class", "mat-card-subtitle", 4, "ngIf"], ["mat-line", "", 1, "mat-card-subtitle", 3, "innerHTML"], ["mat-line", "", 1, "mat-card-subtitle"], ["class", "icon", 3, "title", "src", "alt", 4, "ngFor", "ngForOf"], ["class", "icon", "src", "/assets/images/icons/legendary.png", 3, "title", "alt", 4, "ngIf"], [1, "icon", 3, "title", "src", "alt"], ["src", "/assets/images/icons/legendary.png", 1, "icon", 3, "title", "alt"], ["class", "icon grayscale", 3, "title", "src", "alt", 4, "ngFor", "ngForOf"], [1, "icon", "grayscale", 3, "title", "src", "alt"], ["color", "primary", "selected", ""], ["src", "/assets/images/icons/type.png", 1, "icon", 3, "alt"], ["color", "primary", "selected", "", 4, "ngIf"], ["color", "primary", "selected", "", "class", "legendary", 4, "ngIf"], ["color", "primary", "selected", "", 1, "legendary"], ["src", "/assets/images/icons/legendary.png", 1, "icon", 3, "alt"], [3, "click"], ["fxFlex.xl", "33", "fxFlex.lg", "33", "fxFlex.md", "50", "fxFlex.sm", "100", "fxFlex.xs", "100"], ["mat-card-avatar", "", 3, "src", "alt"], [4, "ngFor", "ngForOf"], [3, "innerHTML"], ["mat-list-avatar", "", 3, "src", "ngClass", "alt"], ["mat-list-avatar", "", "matBadge", "?", "matBadgePosition", "above after", 4, "ngIf"], ["mat-list-avatar", "", "matBadge", "?", "matBadgePosition", "above after"]],
        template: function EncyclopediaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EncyclopediaComponent_Template_button_click_13_listener() {
              return ctx.tutorialService.start("tour.encyclopedia");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-chip", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "description");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "long");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, EncyclopediaComponent_ng_container_28_Template, 3, 1, "ng-container", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, EncyclopediaComponent_mat_header_row_29_Template, 1, 0, "mat-header-row", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, EncyclopediaComponent_mat_row_30_Template, 1, 0, "mat-row", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "mat-toolbar-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EncyclopediaComponent_Template_button_click_33_listener() {
              return ctx.clearFilter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "mat-paginator", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, EncyclopediaComponent_div_38_Template, 18, 17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](43, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](46, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](49, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](53, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "mat-accordion", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "mat-expansion-panel", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Version 1.0.0");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Alfa");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "Test");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "Test");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "Test");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Test");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](73, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](74, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](77, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](80, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](84, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](85, "disqus", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@fadeInOnEnter", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 23, "kingdom.encyclopedia.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 25, "user.encyclopedia.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 27, "user.encyclopedia.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 29, ctx.table.data.length));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](25, 31, "user.encyclopedia.help"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.table);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](27, 33, "kingdom.encyclopediaame"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.columns);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.columns);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](51, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.topics);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](43, 35, "user.changelog.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](46, 37, "user.changelog.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](49, 39, "user.changelog.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](53, 41, "user.changelog.help"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("expanded", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](74, 43, "user.bonfire.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](77, 45, "user.bonfire.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](80, 47, "user.bonfire.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](84, 49, "user.bonfire.help"));
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardSubtitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__.MatChip, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_18__.TourAnchorMatMenuDirective, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__.MatToolbarRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionPanelDescription, ngx_disqus__WEBPACK_IMPORTED_MODULE_22__["ɵa"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatOption, _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListItem, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_29__.DefaultClassDirective, _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListAvatarCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatLine, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_badge__WEBPACK_IMPORTED_MODULE_30__.MatBadge, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_3__.LongPipe, _pipes_legendary_pipe__WEBPACK_IMPORTED_MODULE_4__.LegendaryPipe, _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_5__.IconPipe],
        styles: [".user-encyclopedia[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.user-encyclopedia[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.user-encyclopedia[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuY3ljbG9wZWRpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjtBQUFFO0VBQ0UsNkJBQUE7QUFFSjtBQURJO0VBQ0UsWUFBQTtBQUdOIiwiZmlsZSI6ImVuY3ljbG9wZWRpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWVuY3ljbG9wZWRpYSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICAubWF0LXRvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAubWF0LXRvb2xiYXItcm93IHtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"],
        data: {
          animation: [(0, angular_animations__WEBPACK_IMPORTED_MODULE_31__.fadeInOnEnterAnimation)({
            duration: 250,
            delay: 250
          })]
        }
      });
      /***/
    },

    /***/
    29042: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LandingComponent": function LandingComponent() {
          return (
            /* binding */
            _LandingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_dom_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/dom.service */
      18200);
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../login/login.component */
      74270);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _legend_legend_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../legend/legend.component */
      15119);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      var _LandingComponent = function _LandingComponent(domService) {
        _classCallCheck(this, _LandingComponent);

        this.domService = domService;
      };

      _LandingComponent.ɵfac = function LandingComponent_Factory(t) {
        return new (t || _LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_dom_service__WEBPACK_IMPORTED_MODULE_0__.DomService));
      };

      _LandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _LandingComponent,
        selectors: [["app-landing"]],
        decls: 414,
        vars: 414,
        consts: [[1, "app-landing"], [1, "parallax"], [1, "parallax-layer", "parallax-layer-1"], [1, "parallax-layer", "parallax-layer-2", "animated", "fadeInUp", 2, "animation-delay", "2250ms"], [1, "parallax-layer", "parallax-layer-3", "animated", "fadeInUp", 2, "animation-delay", "2000ms"], [1, "parallax-layer", "parallax-layer-4", "animated", "fadeInUp", 2, "animation-delay", "1750ms"], [1, "landing-title"], [1, "mat-display-4"], [1, "mat-subheading-2"], [1, "parallax-layer", "parallax-layer-5", "animated", "fadeInUp", 2, "animation-delay", "1500ms"], [1, "parallax-layer", "parallax-layer-6", "animated", "fadeInUp", 2, "animation-delay", "1250ms"], [1, "parallax-layer", "parallax-layer-7", "animated", "fadeInUp", 2, "animation-delay", "1000ms"], [1, "parallax-layer", "parallax-layer-8", "animated", "fadeInUp", 2, "animation-delay", "750ms"], [1, "parallax-layer", "parallax-layer-9", "animated", "fadeInUp", 2, "animation-delay", "500ms"], [1, "parallax-layer", "parallax-layer-10", "animated", "fadeInUp", 2, "animation-delay", "250ms"], ["login", ""], [1, "parallax-content"], ["content", ""], [1, "wrapper"], ["fxLayout", "row wrap", "fxLayoutGap", "20px grid", 1, "app-landing-content"], ["fxFlex.xl", "100", "fxFlex.lg", "100", "fxFlex.md", "100", "fxFlex.sm", "100", "fxFlex.xs", "100", "fxFlexOrder.xs", "0", 1, "center"], [1, "mat-display-3"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxFlexOrder.xs", "10", 1, "image-responsive"], ["src", "/assets/images/landing/resurrection.png", 3, "alt"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxLayout", "column", "fxLayoutAlign", "center center", "fxFlexOrder.xs", "20", 1, "center"], [1, "mat-h1"], [1, "image-icons"], ["src", "/assets/images/categories/melee.png", 3, "alt"], ["src", "/assets/images/categories/psychic.png", 3, "alt"], ["src", "/assets/images/categories/ranged.png", 3, "alt"], ["src", "/assets/images/categories/magic.png", 3, "alt"], ["src", "/assets/images/categories/breath.png", 3, "alt"], ["fxFlex.xl", "100", "fxFlex.lg", "100", "fxFlex.md", "100", "fxFlex.sm", "100", "fxFlex.xs", "100", "fxFlexOrder.xs", "30", 1, "center"], [1, "mat-display-3", "margened"], ["fxFlex.xl", "20", "fxFlex.lg", "20", "fxFlex.md", "20", "fxFlex.sm", "20", "fxFlex.xs", "100", "fxFlexOrder.xs", "40", 1, "image-responsive", "center"], ["src", "/assets/images/factions/black.png", 3, "alt"], [1, "faction-icons"], ["src", "/assets/images/spells/black/death-decay.png", 3, "alt"], ["src", "/assets/images/spells/black/necromancy.png", 3, "alt"], ["src", "/assets/images/spells/black/vampirism.png", 3, "alt"], ["src", "/assets/images/spells/black/soul-pact.png", 1, "legendary", 3, "alt"], ["src", "/assets/images/spells/black/night-living-dead.png", 3, "alt"], ["fxFlex.xl", "20", "fxFlex.lg", "20", "fxFlex.md", "20", "fxFlex.sm", "20", "fxFlex.xs", "100", "fxFlexOrder.xs", "50", 1, "image-responsive", "center"], ["src", "/assets/images/factions/green.png", 3, "alt"], ["src", "/assets/images/spells/green/natures-favor.png", 1, "legendary", 3, "alt"], ["src", "/assets/images/spells/green/venom.png", 3, "alt"], ["src", "/assets/images/spells/green/druidism.png", 3, "alt"], ["src", "/assets/images/spells/green/climate-control.png", 3, "alt"], ["src", "/assets/images/spells/green/calm.png", 3, "alt"], ["fxFlex.xl", "20", "fxFlex.lg", "20", "fxFlex.md", "20", "fxFlex.sm", "20", "fxFlex.xs", "100", "fxFlexOrder.xs", "60", 1, "image-responsive", "center"], ["src", "/assets/images/factions/blue.png", 3, "alt"], ["src", "/assets/images/spells/blue/freeze.png", 3, "alt"], ["src", "/assets/images/spells/blue/avarice.png", 3, "alt"], ["src", "/assets/images/spells/blue/laziness.png", 1, "legendary", 3, "alt"], ["src", "/assets/images/spells/blue/confuse.png", 3, "alt"], ["src", "/assets/images/spells/blue/invisibility.png", 3, "alt"], ["fxFlex.xl", "20", "fxFlex.lg", "20", "fxFlex.md", "20", "fxFlex.sm", "20", "fxFlex.xs", "100", "fxFlexOrder.xs", "70", 1, "image-responsive", "center"], ["src", "/assets/images/factions/red.png", 3, "alt"], ["src", "/assets/images/spells/red/frenzy.png", 3, "alt"], ["src", "/assets/images/spells/red/inferno.png", 1, "legendary", 3, "alt"], ["src", "/assets/images/spells/red/volcano.png", 3, "alt"], ["src", "/assets/images/spells/red/succubus-kiss.png", 3, "alt"], ["src", "/assets/images/spells/red/battle-chant.png", 3, "alt"], ["fxFlex.xl", "20", "fxFlex.lg", "20", "fxFlex.md", "20", "fxFlex.sm", "20", "fxFlex.xs", "100", "fxFlexOrder.xs", "80", 1, "image-responsive", "center"], ["src", "/assets/images/factions/white.png", 3, "alt"], ["src", "/assets/images/spells/white/prayer.png", 3, "alt"], ["src", "/assets/images/spells/white/endurance.png", 3, "alt"], ["src", "/assets/images/spells/white/exorcism.png", 3, "alt"], ["src", "/assets/images/spells/white/blaze.png", 3, "alt"], ["src", "/assets/images/spells/white/miracle.png", 1, "legendary", 3, "alt"], ["fxFlex.xl", "100", "fxFlex.lg", "100", "fxFlex.md", "100", "fxFlex.sm", "100", "fxFlex.xs", "100", "fxFlexOrder.xs", "90", 1, "center"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxLayout", "column", "fxLayoutAlign", "center center", "fxFlexOrder.xs", "110", 1, "center"], ["src", "/assets/images/structures/farm.png", 3, "alt"], ["src", "/assets/images/structures/fortress.png", 3, "alt"], ["src", "/assets/images/structures/academy.png", 3, "alt"], ["src", "/assets/images/structures/node.png", 3, "alt"], ["src", "/assets/images/structures/village.png", 3, "alt"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxFlexOrder.xs", "100", 1, "image-responsive"], ["src", "/assets/images/landing/city.png", 3, "alt"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxFlexOrder.xs", "120", 1, "image-responsive"], ["src", "/assets/images/landing/sorcery.png", 3, "alt"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxLayout", "column", "fxLayoutAlign", "center center", "fxFlexOrder.xs", "130", 1, "center"], ["src", "/assets/images/spells/red/fireball.png", 3, "alt"], ["src", "/assets/images/spells/black/terror.png", 3, "alt"], ["src", "/assets/images/spells/green/ambush.png", 3, "alt"], ["src", "/assets/images/spells/white/resurrection.png", 1, "spell", 3, "alt"], ["src", "/assets/images/spells/blue/fog.png", 3, "alt"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxLayout", "column", "fxLayoutAlign", "center center", "fxFlexOrder.xs", "150", 1, "center"], ["src", "/assets/images/units/black/zombie.png", 3, "alt"], ["src", "/assets/images/units/blue/mage.png", 3, "alt"], ["src", "/assets/images/units/green/hydra.png", 1, "legendary", 3, "alt"], ["src", "/assets/images/units/red/ogre.png", 3, "alt"], ["src", "/assets/images/units/white/paladin.png", 3, "alt"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxFlexOrder.xs", "140", 1, "image-responsive"], ["src", "/assets/images/landing/army.png", 3, "alt"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxFlexOrder.xs", "160", 1, "image-responsive"], ["src", "/assets/images/landing/map.png", 3, "alt"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxLayout", "column", "fxLayoutAlign", "center center", "fxFlexOrder.xs", "170", 1, "center"], ["src", "/assets/images/locations/graveyard.png", 3, "alt"], ["src", "/assets/images/locations/forest.png", 3, "alt"], ["src", "/assets/images/locations/cathedral.png", 3, "alt"], ["src", "/assets/images/locations/mountain.png", 3, "alt"], ["src", "/assets/images/locations/lake.png", 3, "alt"], ["fxFlex.xl", "100", "fxFlex.lg", "100", "fxFlex.md", "100", "fxFlex.sm", "100", "fxFlex.xs", "100", "fxFlexOrder.xs", "180", 1, "image-wrapper"], ["viewBox", "0 0 200 200", "xmlns", "http://www.w3.org/2000/svg"], ["fill", "#99009C", "d", "M45.7,-80.2C58.9,-71.5,69.1,-58.6,75.7,-44.6C82.2,-30.5,85.2,-15.3,86.4,0.7C87.6,16.7,87.1,33.3,79.9,46.3C72.7,59.3,58.8,68.5,44.4,76.2C30,83.9,15,90,-0.6,91.1C-16.2,92.1,-32.4,88.2,-44.9,79.4C-57.3,70.6,-66,56.8,-74.4,42.8C-82.8,28.7,-90.9,14.4,-92.7,-1.1C-94.6,-16.5,-90.2,-33.1,-80.3,-44.4C-70.3,-55.7,-54.8,-61.8,-40.5,-69.9C-26.1,-78,-13.1,-88.1,1.6,-90.9C16.2,-93.6,32.5,-89,45.7,-80.2Z", "transform", "translate(100 100)"], ["src", "/assets/images/landing/desktop.png", 1, "image-desktop", "mat-elevation-z8", 3, "alt"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxLayout", "column", "fxLayoutAlign", "center center", "fxFlexOrder.xs", "200", 1, "center"], ["src", "/assets/images/heroes/blue/shaman.png", 1, "legendary", 3, "alt"], ["src", "/assets/images/heroes/red/dragon-rider.png", 3, "alt"], ["src", "/assets/images/heroes/white/trader.png", 1, "legendary", 3, "alt"], ["src", "/assets/images/heroes/black/crypt-keeper.png", 3, "alt"], ["src", "/assets/images/heroes/blue/elementalist.png", 1, "legendary", 3, "alt"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxFlexOrder.xs", "190", 1, "image-responsive"], ["src", "/assets/images/landing/tavern.png", 3, "alt"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxFlexOrder.xs", "210", 1, "image-responsive"], ["src", "/assets/images/landing/auction.png", 3, "alt"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxLayout", "column", "fxLayoutAlign", "center center", "fxFlexOrder.xs", "220", 1, "center"], ["src", "/assets/images/items/treasure-chest.png", 3, "alt"], ["src", "/assets/images/items/lucky-paw.png", 1, "legendary", 3, "alt"], ["src", "/assets/images/items/mana-vortex.png", 3, "alt"], ["src", "/assets/images/items/rattle.png", 1, "legendary", 3, "alt"], ["src", "/assets/images/items/valhalla-horn.png", 3, "alt"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxLayout", "column", "fxLayoutAlign", "center center", "fxFlexOrder.xs", "240", 1, "center"], ["src", "/assets/images/clans/axe.png", 3, "alt"], ["src", "/assets/images/clans/crow.png", 3, "alt"], ["src", "/assets/images/clans/hat.png", 3, "alt"], ["src", "/assets/images/clans/rip.png", 3, "alt"], ["src", "/assets/images/clans/helmet.png", 3, "alt"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxFlexOrder.xs", "230", 1, "image-responsive"], ["src", "/assets/images/landing/clan.png", 3, "alt"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxFlexOrder.xs", "250", 1, "image-responsive"], ["src", "/assets/images/landing/temple.png", 3, "alt"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxLayout", "column", "fxLayoutAlign", "center center", "fxFlexOrder.xs", "260", 1, "center"], ["src", "/assets/images/gods/death.png", 1, "legendary", "god-avatar", 3, "alt"], ["src", "/assets/images/gods/famine.png", 1, "legendary", "god-avatar", 3, "alt"], ["src", "/assets/images/gods/void.png", 1, "legendary", "god-avatar", 3, "alt"], ["src", "/assets/images/gods/war.png", 1, "legendary", "god-avatar", 3, "alt"], ["src", "/assets/images/gods/pestilence.png", 1, "legendary", "god-avatar", 3, "alt"], ["fxFlex.xl", "100", "fxFlex.lg", "100", "fxFlex.md", "100", "fxFlex.sm", "100", "fxFlex.xs", "100", "fxFlexOrder.xs", "270", 1, "image-wrapper"], ["fill", "#99009C", "d", "M35.5,-58.4C46,-48.6,54.5,-38.6,63,-26.8C71.6,-14.9,80.3,-1,78,10.8C75.6,22.7,62.3,32.6,50.8,41.8C39.3,51,29.7,59.5,16.8,68.3C4,77,-11.9,86,-27.8,85.5C-43.7,85.1,-59.5,75.2,-63.4,60.6C-67.2,46,-59,26.6,-58.3,10.4C-57.6,-5.9,-64.3,-19.2,-62.7,-31.1C-61.1,-43,-51.2,-53.6,-39.3,-62.8C-27.5,-72,-13.7,-79.9,-0.6,-78.9C12.5,-78,25.1,-68.2,35.5,-58.4Z", "transform", "translate(100 100)"], ["src", "/assets/images/landing/mobile.png", 1, "image-mobile", "mat-elevation-z8", 3, "alt"], ["fxFlex.xl", "100", "fxFlex.lg", "100", "fxFlex.md", "100", "fxFlex.sm", "100", "fxFlex.xs", "100", "fxFlexOrder.xs", "280", 1, "center"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxLayout", "column", "fxLayoutAlign", "center center", "fxFlexOrder.xs", "300", 1, "center"], ["src", "/assets/images/resources/gold.png", 3, "alt"], ["src", "/assets/images/resources/mana.png", 3, "alt"], ["src", "/assets/images/resources/population.png", 3, "alt"], ["src", "/assets/images/resources/land.png", 3, "alt"], ["src", "/assets/images/resources/turn.png", 3, "alt"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxFlexOrder.xs", "290", 1, "image-responsive"], ["src", "/assets/images/landing/strategy.png", 3, "alt"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxFlexOrder.xs", "310", 1, "image-responsive"], ["src", "/assets/images/landing/legend.png", 3, "alt"], ["fxFlex.xl", "50", "fxFlex.lg", "50", "fxFlex.md", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", "fxLayout", "column", "fxLayoutAlign", "center center", "fxFlexOrder.xs", "320", 1, "center"], ["src", "/assets/images/categories/fire.png", 3, "alt"], ["src", "/assets/images/categories/holy.png", 3, "alt"], ["src", "/assets/images/categories/lightning.png", 3, "alt"], ["src", "/assets/images/categories/poison.png", 3, "alt"], ["src", "/assets/images/categories/cold.png", 3, "alt"], ["fxFlex.xl", "100", "fxFlex.lg", "100", "fxFlex.md", "100", "fxFlex.sm", "100", "fxFlex.xs", "100", "fxFlexOrder.xs", "330", "id", "legend", 1, "center"], ["mat-raised-button", "", "color", "primary", 1, "play-button", 3, "click"], [1, "app-landing-footer"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 1440 320"], ["fill", "#99009c", "fill-opacity", "1", "d", "M0,128L48,144C96,160,192,192,288,213.3C384,235,480,245,576,240C672,235,768,213,864,213.3C960,213,1056,235,1152,208C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "retribution"], ["mat-button", "", "href", "https://www.freepik.com/free-photos-vectors/business"], ["mat-button", "", "href", "https://assetstore.unity.com/publishers/13229"], ["mat-button", "", "href", "https://www.mapbox.com/mapbox-studio/"], ["mat-button", "", "href", "https://material.angular.io/"], ["mat-button", "", "href", "https://material.io/resources/landing/"], ["mat-button", "", "href", "https://www.ngxs.io/"], ["mat-button", "", "href", "https://fonts.google.com/"], ["mat-button", "", "href", "https://firebase.google.com/docs/firestore"], ["mat-button", "", "href", "https://getwaves.io/"], ["mat-button", "", "href", "https://www.blobmaker.app/"]],
        template: function LandingComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h1", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h3", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "app-login");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "h1", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "h1", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](41, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](43, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](45, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](47, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "h1", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](53, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](56, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](59, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "h1", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](62, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](65, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](68, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "img", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](70, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "img", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](72, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "img", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](74, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](76, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](79, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "h1", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](82, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](85, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "img", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](88, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](90, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](91, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](92, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](94, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "img", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](96, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "img", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](99, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "h1", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](102, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](105, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](108, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](109, "img", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](110, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "img", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](112, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "img", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](114, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "img", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](116, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](118, "img", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](119, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "h1", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](122, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](125, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](127, "img", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](128, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](129, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](130, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](131, "img", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](132, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](133, "img", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](134, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](135, "img", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](136, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](138, "img", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](139, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "h1", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](142, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](145, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](147, "img", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](148, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](149, "img", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](150, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](151, "img", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](152, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](153, "img", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](154, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](155, "img", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](156, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "h1", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](160, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "h1", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](164, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](167, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](169, "img", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](170, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](171, "img", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](172, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](173, "img", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](174, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](175, "img", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](176, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](177, "img", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](178, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](180, "img", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](181, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](183, "img", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](184, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "h1", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](187);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](188, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](191, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](193, "img", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](194, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](195, "img", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](196, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](197, "img", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](198, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](199, "img", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](200, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](201, "img", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](202, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "h1", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](205);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](206, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](207, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](208);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](209, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](211, "img", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](212, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](213, "img", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](214, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](215, "img", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](216, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](217, "img", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](218, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](219, "img", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](220, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](222, "img", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](223, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](225, "img", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](226, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "div", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "h1", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](229);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](230, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](233, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](235, "img", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](236, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](237, "img", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](238, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](239, "img", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](240, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](241, "img", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](242, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](243, "img", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](244, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "div", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "svg", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](247, "path", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](248, "img", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](249, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](250, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "h1", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](252);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](253, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](255);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](256, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](258, "img", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](259, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](260, "img", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](261, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](262, "img", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](263, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](264, "img", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](265, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](266, "img", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](267, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](268, "div", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](269, "img", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](270, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](271, "div", 115);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](272, "img", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](273, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](274, "div", 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](275, "h1", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](276);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](277, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](278, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](279);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](280, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](281, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](282, "img", 118);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](283, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](284, "img", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](285, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](286, "img", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](287, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](288, "img", 121);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](289, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](290, "img", 122);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](291, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](292, "div", 123);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "h1", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](294);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](295, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](296, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](297);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](298, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](299, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](300, "img", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](301, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](302, "img", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](303, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](304, "img", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](305, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](306, "img", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](307, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](308, "img", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](309, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](310, "div", 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](311, "img", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](312, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](313, "div", 131);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](314, "img", 132);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](315, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](316, "div", 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](317, "h1", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](318);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](319, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](320, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](321);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](322, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](323, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](324, "img", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](325, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](326, "img", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](327, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](328, "img", 136);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](329, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](330, "img", 137);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](331, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](332, "img", 138);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](333, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](334, "div", 139);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](335, "svg", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](336, "path", 140);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](337, "img", 141);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](338, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](339, "div", 142);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](340, "h1", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](341);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](342, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](343, "div", 143);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](344, "h1", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](345);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](346, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](347, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](348);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](349, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](350, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](351, "img", 144);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](352, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](353, "img", 145);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](354, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](355, "img", 146);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](356, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](357, "img", 147);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](358, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](359, "img", 148);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](360, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](361, "div", 149);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](362, "img", 150);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](363, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](364, "div", 151);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](365, "img", 152);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](366, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](367, "div", 153);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](368, "h1", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](369);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](370, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](371, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](372);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](373, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](374, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](375, "img", 154);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](376, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](377, "img", 155);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](378, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](379, "img", 156);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](380, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](381, "img", 157);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](382, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](383, "img", 158);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](384, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](385, "div", 159);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](386, "app-legend");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](387, "a", 160);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_387_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);

              return ctx.domService.scrollToElement(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](388);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](389, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](390, "div", 161);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](391, "svg", 162);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](392, "path", 163);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](393, "div", 164);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](394, "a", 165);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](395, "Freepik Images");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](396, "a", 166);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](397, "Unity Store");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](398, "a", 167);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](399, "Mapbox Studio");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](400, "a", 168);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](401, "Angular Material");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](402, "a", 169);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](403, "Material Icons");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](404, "a", 170);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](405, "Angular NGXS");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](406, "a", 171);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](407, "Google Fonts");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](408, "a", 172);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](409, "Cloud Firestore");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](410, "a", 173);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](411, "Get Waves");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](412, "a", 174);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](413, "Blob Maker");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 138, "landing.title.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 140, "landing.title.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 142, "landing.reality.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 144, "landing.resurrection.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 146, "landing.resurrection.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](38, 148, "landing.resurrection.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](41, 150, "category.melee.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](43, 152, "category.psychic.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](45, 154, "category.ranged.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](47, 156, "category.magic.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](49, 158, "category.breath.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](53, 160, "landing.choose.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](56, 162, "landing.choose.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](59, 164, "faction.black.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](62, 166, "faction.black.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](65, 168, "faction.black.help"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](68, 170, "spell.death-decay.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](70, 172, "spell.necromancy.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](72, 174, "spell.vampirism.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](74, 176, "spell.soul-pact.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](76, 178, "spell.night-living-dead.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](79, 180, "faction.green.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](82, 182, "faction.green.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](85, 184, "faction.green.help"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](88, 186, "spell.natures-favor.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](90, 188, "spell.venom.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](92, 190, "spell.druidism.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](94, 192, "spell.climate-control.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](96, 194, "spell.calm.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](99, 196, "faction.blue.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](102, 198, "faction.blue.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](105, 200, "faction.blue.help"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](108, 202, "spell.freeze.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](110, 204, "spell.avarice.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](112, 206, "spell.laziness.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](114, 208, "spell.confuse.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](116, 210, "spell.invisibility.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](119, 212, "faction.red.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](122, 214, "faction.red.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](125, 216, "faction.red.help"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](128, 218, "spell.frenzy.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](130, 220, "spell.inferno.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](132, 222, "spell.volcano.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](134, 224, "spell.succubus-kiss.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](136, 226, "spell.battle-chant.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](139, 228, "faction.white.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](142, 230, "faction.white.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](145, 232, "faction.white.help"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](148, 234, "spell.prayer.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](150, 236, "spell.endurance.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](152, 238, "spell.exorcism.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](154, 240, "spell.blaze.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](156, 242, "spell.miracle.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](160, 244, "landing.destiny.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](164, 246, "landing.city.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](167, 248, "landing.city.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](170, 250, "structure.farm.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](172, 252, "structure.fortress.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](174, 254, "structure.academy.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](176, 256, "structure.node.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](178, 258, "structure.village.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](181, 260, "landing.city.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](184, 262, "landing.conjure.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](188, 264, "landing.conjure.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](191, 266, "landing.conjure.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](194, 268, "spell.fireball.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](196, 270, "spell.terror.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](198, 272, "spell.ambush.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](200, 274, "unit.resurrection.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](202, 276, "spell.fog.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](206, 278, "landing.army.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](209, 280, "landing.army.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](212, 282, "unit.zombie.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](214, 284, "unit.mage.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](216, 286, "unit.hydra.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](218, 288, "unit.ogre.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](220, 290, "unit.paladin.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](223, 292, "landing.army.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](226, 294, "landing.map.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](230, 296, "landing.map.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](233, 298, "landing.map.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](236, 300, "location.graveyard.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](238, 302, "location.forest.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](240, 304, "location.cathedral.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](242, 306, "location.mountain.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](244, 308, "location.lake.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](249, 310, "landing.title.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](253, 312, "landing.tavern.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](256, 314, "landing.tavern.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](259, 316, "hero.shaman.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](261, 318, "hero.dragon-rider.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](263, 320, "hero.trader.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](265, 322, "hero.crypt-keeper.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](267, 324, "hero.elementalist.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](270, 326, "landing.tavern.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](273, 328, "landing.auction.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](277, 330, "landing.auction.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](280, 332, "landing.auction.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](283, 334, "item.treasure-chest.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](285, 336, "item.lucky-paw.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](287, 338, "item.mana-vortex.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](289, 340, "item.rattle.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](291, 342, "item.valhalla-horn.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](295, 344, "landing.clan.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](298, 346, "landing.clan.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](301, 348, "kingdom.clan.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](303, 350, "kingdom.clan.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](305, 352, "kingdom.clan.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](307, 354, "kingdom.clan.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](309, 356, "kingdom.clan.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](312, 358, "landing.clan.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](315, 360, "landing.temple.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](319, 362, "landing.temple.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](322, 364, "landing.temple.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](325, 366, "god.death.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](327, 368, "god.famine.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](329, 370, "god.void.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](331, 372, "god.war.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](333, 374, "god.pestilence.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](338, 376, "landing.title.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](342, 378, "landing.victory.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](346, 380, "landing.strategy.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](349, 382, "landing.strategy.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](352, 384, "resource.gold.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](354, 386, "resource.mana.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](356, 388, "resource.population.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](358, 390, "resource.land.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](360, 392, "resource.turn.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](363, 394, "landing.strategy.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](366, 396, "landing.legend.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](370, 398, "landing.legend.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](373, 400, "landing.legend.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](376, 402, "category.fire.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](378, 404, "category.holy.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](380, 406, "category.lightning.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](382, 408, "category.poison.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](384, 410, "category.cold.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](389, 412, "landing.title.play"));
          }
        },
        directives: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexOrderDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _legend_legend_component__WEBPACK_IMPORTED_MODULE_2__.LegendComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatAnchor],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
        styles: [".mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.mat-option[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-option[_ngcontent-%COMP%]:hover:not(.mat-option-disabled), .mat-option[_ngcontent-%COMP%]:focus:not(.mat-option-disabled) {\n  background: rgba(255, 255, 255, 0.04);\n}\n\n.mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple):not(.mat-option-disabled) {\n  background: rgba(255, 255, 255, 0.04);\n}\n\n.mat-option.mat-active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  color: white;\n}\n\n.mat-option.mat-option-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-primary[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled) {\n  color: #99009c;\n}\n\n.mat-accent[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled) {\n  color: #2e7d32;\n}\n\n.mat-warn[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled) {\n  color: #c62828;\n}\n\n.mat-optgroup-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-optgroup-disabled[_ngcontent-%COMP%]   .mat-optgroup-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-pseudo-checkbox[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-pseudo-checkbox[_ngcontent-%COMP%]::after {\n  color: #303030;\n}\n\n.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%] {\n  color: #686868;\n}\n\n.mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%] {\n  background: #99009c;\n}\n\n.mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%] {\n  background: #2e7d32;\n}\n\n.mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%] {\n  background: #c62828;\n}\n\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%] {\n  background: #686868;\n}\n\n.mat-app-background[_ngcontent-%COMP%] {\n  background-color: #303030;\n  color: white;\n}\n\n.mat-elevation-z0[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z1[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z2[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z3[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z4[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z5[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z6[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z7[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z9[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z10[_ngcontent-%COMP%] {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z11[_ngcontent-%COMP%] {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z12[_ngcontent-%COMP%] {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z13[_ngcontent-%COMP%] {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z14[_ngcontent-%COMP%] {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z15[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z16[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z17[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z18[_ngcontent-%COMP%] {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z19[_ngcontent-%COMP%] {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z20[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z21[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z22[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z23[_ngcontent-%COMP%] {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z24[_ngcontent-%COMP%] {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n\n.mat-theme-loaded-marker[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.mat-autocomplete-panel[_ngcontent-%COMP%] {\n  background: #424242;\n  color: white;\n}\n\n.mat-autocomplete-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover) {\n  background: #424242;\n}\n\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n  color: white;\n}\n\n.mat-badge[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.mat-badge-hidden[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.mat-badge-content[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: transform 200ms ease-in-out;\n  transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none;\n}\n\n.ng-animate-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%], .mat-badge-content._mat-animation-noopable[_ngcontent-%COMP%] {\n  transition: none;\n}\n\n.mat-badge-content.mat-badge-active[_ngcontent-%COMP%] {\n  transform: none;\n}\n\n.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n}\n\n.mat-badge-small.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  top: -8px;\n}\n\n.mat-badge-small.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  bottom: -8px;\n}\n\n.mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -16px;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -16px;\n}\n\n.mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -16px;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -16px;\n}\n\n.mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -8px;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -8px;\n}\n\n.mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -8px;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -8px;\n}\n\n.mat-badge-medium[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  line-height: 22px;\n}\n\n.mat-badge-medium.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  top: -11px;\n}\n\n.mat-badge-medium.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  bottom: -11px;\n}\n\n.mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -22px;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -22px;\n}\n\n.mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -22px;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -22px;\n}\n\n.mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -11px;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -11px;\n}\n\n.mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -11px;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -11px;\n}\n\n.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n}\n\n.mat-badge-large.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  top: -14px;\n}\n\n.mat-badge-large.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  bottom: -14px;\n}\n\n.mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -28px;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -28px;\n}\n\n.mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -28px;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -28px;\n}\n\n.mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -14px;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -14px;\n}\n\n.mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -14px;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -14px;\n}\n\n.mat-badge-content[_ngcontent-%COMP%] {\n  color: white;\n  background: #99009c;\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  outline: solid 1px;\n  border-radius: 0;\n}\n\n.mat-badge-accent[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  background: #2e7d32;\n  color: white;\n}\n\n.mat-badge-warn[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  color: white;\n  background: #c62828;\n}\n\n.mat-badge-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  background: #6e6e6e;\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-bottom-sheet-container[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n  background: #424242;\n  color: white;\n}\n\n.mat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%] {\n  color: inherit;\n  background: transparent;\n}\n\n.mat-button.mat-primary[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%] {\n  color: #99009c;\n}\n\n.mat-button.mat-accent[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n\n.mat-button.mat-warn[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n\n.mat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.mat-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: #99009c;\n}\n\n.mat-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: #2e7d32;\n}\n\n.mat-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: #c62828;\n}\n\n.mat-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n.mat-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  opacity: 0.1;\n  background-color: currentColor;\n}\n\n.mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background: white;\n}\n\n.mat-stroked-button[_ngcontent-%COMP%]:not(.mat-button-disabled) {\n  border-color: rgba(255, 255, 255, 0.12);\n}\n\n.mat-flat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #424242;\n}\n\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-flat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  background-color: #99009c;\n}\n\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%] {\n  background-color: #2e7d32;\n}\n\n.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%] {\n  background-color: #c62828;\n}\n\n.mat-flat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n\n.mat-flat-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.mat-flat-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.mat-flat-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.mat-stroked-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-flat-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-raised-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-raised-button[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mat-raised-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-fab[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mat-fab.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-button-toggle-standalone[_ngcontent-%COMP%], .mat-button-toggle-group[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\n.mat-button-toggle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-button-toggle[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  color: white;\n  background: #424242;\n}\n\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]    + .mat-button-toggle[_ngcontent-%COMP%] {\n  border-left: solid 1px rgba(255, 255, 255, 0.12);\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]    + .mat-button-toggle[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: solid 1px rgba(255, 255, 255, 0.12);\n}\n\n.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]    + .mat-button-toggle[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: none;\n  border-top: solid 1px rgba(255, 255, 255, 0.12);\n}\n\n.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #212121;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-button-toggle-checked.mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-button-toggle-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.3);\n  background-color: black;\n}\n\n.mat-button-toggle-disabled.mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  background: #424242;\n}\n\n.mat-button-toggle-disabled.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #424242;\n}\n\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%] {\n  border: solid 1px rgba(255, 255, 255, 0.12);\n}\n\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-label-content[_ngcontent-%COMP%] {\n  line-height: 48px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  background: #424242;\n  color: white;\n}\n\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-card.mat-card-flat[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-checkbox-frame[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-checkbox-checkmark[_ngcontent-%COMP%] {\n  fill: #303030;\n}\n\n.mat-checkbox-checkmark-path[_ngcontent-%COMP%] {\n  stroke: #303030 !important;\n}\n\n.mat-checkbox-mixedmark[_ngcontent-%COMP%] {\n  background-color: #303030;\n}\n\n.mat-checkbox-indeterminate.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #99009c;\n}\n\n.mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #2e7d32;\n}\n\n.mat-checkbox-indeterminate.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #c62828;\n}\n\n.mat-checkbox-disabled.mat-checkbox-checked[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-disabled.mat-checkbox-indeterminate[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #686868;\n}\n\n.mat-checkbox-disabled[_ngcontent-%COMP%]:not(.mat-checkbox-checked)   .mat-checkbox-frame[_ngcontent-%COMP%] {\n  border-color: #686868;\n}\n\n.mat-checkbox-disabled[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-checkbox[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%] {\n  background: #99009c;\n}\n\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%] {\n  background: #2e7d32;\n}\n\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%] {\n  background: #c62828;\n}\n\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%] {\n  background-color: #616161;\n  color: white;\n}\n\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: white;\n  opacity: 0.4;\n}\n\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled):active {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled)   .mat-chip-remove[_ngcontent-%COMP%]:hover {\n  opacity: 0.54;\n}\n\n.mat-chip.mat-standard-chip.mat-chip-disabled[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]::after {\n  background: white;\n}\n\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%] {\n  background-color: #99009c;\n  color: white;\n}\n\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: white;\n  opacity: 0.4;\n}\n\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%] {\n  background-color: #c62828;\n  color: white;\n}\n\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: white;\n  opacity: 0.4;\n}\n\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%] {\n  background-color: #2e7d32;\n  color: white;\n}\n\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: white;\n  opacity: 0.4;\n}\n\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  background: #424242;\n}\n\n.mat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], [mat-header-row][_ngcontent-%COMP%], [mat-row][_ngcontent-%COMP%], [mat-footer-row][_ngcontent-%COMP%], .mat-table-sticky[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\nmat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(255, 255, 255, 0.12);\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-calendar-arrow[_ngcontent-%COMP%] {\n  fill: white;\n}\n\n.mat-datepicker-toggle[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-next-button[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-previous-button[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-calendar-table-header[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-calendar-table-header-divider[_ngcontent-%COMP%]::after {\n  background: rgba(255, 255, 255, 0.12);\n}\n\n.mat-calendar-body-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-calendar-body-cell-content[_ngcontent-%COMP%], .mat-date-range-input-separator[_ngcontent-%COMP%] {\n  color: white;\n  border-color: transparent;\n}\n\n.mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-date-range-input-separator[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-calendar-body-in-preview[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.24);\n}\n\n.mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  border-color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  border-color: rgba(255, 255, 255, 0.3);\n}\n\n.mat-calendar-body-in-range[_ngcontent-%COMP%]::before {\n  background: rgba(153, 0, 156, 0.2);\n}\n\n.mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before {\n  background: rgba(249, 171, 0, 0.2);\n}\n\n.mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to right, rgba(153, 0, 156, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n\n.mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to left, rgba(153, 0, 156, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n\n.mat-calendar-body-in-range[_ngcontent-%COMP%]    > .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after {\n  background: #a8dab5;\n}\n\n.mat-calendar-body-comparison-identical.mat-calendar-body-selected[_ngcontent-%COMP%], .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background: #46a35e;\n}\n\n.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #99009c;\n  color: white;\n}\n\n.mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: rgba(153, 0, 156, 0.4);\n}\n\n.mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px white;\n}\n\n.mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  background-color: rgba(153, 0, 156, 0.3);\n}\n\n.mat-datepicker-content[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  background-color: #424242;\n  color: white;\n}\n\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]::before {\n  background: rgba(46, 125, 50, 0.2);\n}\n\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before {\n  background: rgba(249, 171, 0, 0.2);\n}\n\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to right, rgba(46, 125, 50, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to left, rgba(46, 125, 50, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]    > .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after {\n  background: #a8dab5;\n}\n\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical.mat-calendar-body-selected[_ngcontent-%COMP%], .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background: #46a35e;\n}\n\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #2e7d32;\n  color: white;\n}\n\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: rgba(46, 125, 50, 0.4);\n}\n\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px white;\n}\n\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  background-color: rgba(46, 125, 50, 0.3);\n}\n\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]::before {\n  background: rgba(198, 40, 40, 0.2);\n}\n\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before {\n  background: rgba(249, 171, 0, 0.2);\n}\n\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to right, rgba(198, 40, 40, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to left, rgba(198, 40, 40, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]    > .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after {\n  background: #a8dab5;\n}\n\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical.mat-calendar-body-selected[_ngcontent-%COMP%], .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background: #46a35e;\n}\n\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #c62828;\n  color: white;\n}\n\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: rgba(198, 40, 40, 0.4);\n}\n\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px white;\n}\n\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  background-color: rgba(198, 40, 40, 0.3);\n}\n\n.mat-datepicker-content-touch[_ngcontent-%COMP%] {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n\n.mat-datepicker-toggle-active[_ngcontent-%COMP%] {\n  color: #99009c;\n}\n\n.mat-datepicker-toggle-active.mat-accent[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n\n.mat-datepicker-toggle-active.mat-warn[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n\n.mat-date-range-input-inner[disabled][_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  background: #424242;\n  color: white;\n}\n\n.mat-divider[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.12);\n}\n\n.mat-divider-vertical[_ngcontent-%COMP%] {\n  border-right-color: rgba(255, 255, 255, 0.12);\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  background: #424242;\n  color: white;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-action-row[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.12);\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-keyboard-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-program-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded)   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover:not([aria-disabled=true]) {\n  background: rgba(255, 255, 255, 0.04);\n}\n\n@media (hover: none) {\n  .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded):not([aria-disabled=true])   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n    background: #424242;\n  }\n}\n\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-expansion-panel-header-description[_ngcontent-%COMP%], .mat-expansion-indicator[_ngcontent-%COMP%]::after {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  height: 48px;\n}\n\n.mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%] {\n  height: 64px;\n}\n\n.mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-hint[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #99009c;\n}\n\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-warn[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n\n.mat-focused[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n\n.mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: #99009c;\n}\n\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%] {\n  background-color: #2e7d32;\n}\n\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-warn[_ngcontent-%COMP%] {\n  background-color: #c62828;\n}\n\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid)   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #99009c;\n}\n\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-accent   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #2e7d32;\n}\n\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-warn   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #c62828;\n}\n\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%] {\n  background-color: #c62828;\n}\n\n.mat-error[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-form-field-appearance-legacy.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x;\n}\n\n.mat-form-field-appearance-standard[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-form-field-appearance-standard.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x;\n}\n\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before {\n  background-color: transparent;\n}\n\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #99009c;\n}\n\n.mat-form-field-appearance-outline.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n\n.mat-form-field-appearance-outline.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n\n.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.15);\n}\n\n.mat-icon.mat-primary[_ngcontent-%COMP%] {\n  color: #99009c;\n}\n\n.mat-icon.mat-accent[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n\n.mat-icon.mat-warn[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n\n.mat-form-field-type-mat-native-select[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-input-element[_ngcontent-%COMP%]:disabled, .mat-form-field-type-mat-native-select.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-input-element[_ngcontent-%COMP%] {\n  caret-color: #99009c;\n}\n\n.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-input-element[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-input-element[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-input-element[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-input-element[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-input-element[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:disabled {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-form-field.mat-accent[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: #2e7d32;\n}\n\n.mat-form-field.mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%], .mat-form-field-invalid[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: #c62828;\n}\n\n.mat-form-field-type-mat-native-select.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #c62828;\n}\n\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-list-item-disabled[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\n.mat-list-option[_ngcontent-%COMP%]:hover, .mat-list-option[_ngcontent-%COMP%]:focus, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus {\n  background: rgba(255, 255, 255, 0.04);\n}\n\n.mat-list-single-selected-option[_ngcontent-%COMP%], .mat-list-single-selected-option[_ngcontent-%COMP%]:hover, .mat-list-single-selected-option[_ngcontent-%COMP%]:focus {\n  background: rgba(255, 255, 255, 0.12);\n}\n\n.mat-menu-panel[_ngcontent-%COMP%] {\n  background: #424242;\n}\n\n.mat-menu-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-menu-item[_ngcontent-%COMP%] {\n  background: transparent;\n  color: white;\n}\n\n.mat-menu-item[disabled][_ngcontent-%COMP%], .mat-menu-item[disabled][_ngcontent-%COMP%]   .mat-menu-submenu-icon[_ngcontent-%COMP%], .mat-menu-item[disabled][_ngcontent-%COMP%]   .mat-icon-no-color[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-menu-item[_ngcontent-%COMP%]   .mat-icon-no-color[_ngcontent-%COMP%], .mat-menu-submenu-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-menu-item[_ngcontent-%COMP%]:hover:not([disabled]), .mat-menu-item.cdk-program-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item.cdk-keyboard-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item-highlighted[_ngcontent-%COMP%]:not([disabled]) {\n  background: rgba(255, 255, 255, 0.04);\n}\n\n.mat-paginator[_ngcontent-%COMP%] {\n  background: #424242;\n}\n\n.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-paginator-decrement[_ngcontent-%COMP%], .mat-paginator-increment[_ngcontent-%COMP%] {\n  border-top: 2px solid white;\n  border-right: 2px solid white;\n}\n\n.mat-paginator-first[_ngcontent-%COMP%], .mat-paginator-last[_ngcontent-%COMP%] {\n  border-top: 2px solid white;\n}\n\n.mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-decrement[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-increment[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-first[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-last[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-paginator-container[_ngcontent-%COMP%] {\n  min-height: 56px;\n}\n\n.mat-progress-bar-background[_ngcontent-%COMP%] {\n  fill: #4a244b;\n}\n\n.mat-progress-bar-buffer[_ngcontent-%COMP%] {\n  background-color: #4a244b;\n}\n\n.mat-progress-bar-fill[_ngcontent-%COMP%]::after {\n  background-color: #99009c;\n}\n\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%] {\n  fill: #304331;\n}\n\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%] {\n  background-color: #304331;\n}\n\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after {\n  background-color: #2e7d32;\n}\n\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%] {\n  fill: #562e2e;\n}\n\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%] {\n  background-color: #562e2e;\n}\n\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after {\n  background-color: #c62828;\n}\n\n.mat-progress-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #99009c;\n}\n\n.mat-progress-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #2e7d32;\n}\n\n.mat-progress-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #c62828;\n}\n\n.mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #99009c;\n}\n\n.mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%] {\n  background-color: #99009c;\n}\n\n.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #2e7d32;\n}\n\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%] {\n  background-color: #2e7d32;\n}\n\n.mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #c62828;\n}\n\n.mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%] {\n  background-color: #c62828;\n}\n\n.mat-radio-button.mat-radio-disabled.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-label-content[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-radio-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.mat-select-value[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-select-placeholder[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-select-arrow[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-select-panel[_ngcontent-%COMP%] {\n  background: #424242;\n}\n\n.mat-select-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-select-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple) {\n  background: rgba(255, 255, 255, 0.12);\n}\n\n.mat-form-field.mat-focused.mat-primary[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #99009c;\n}\n\n.mat-form-field.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n\n.mat-form-field.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n\n.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-invalid[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n\n.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: #303030;\n  color: white;\n}\n\n.mat-drawer[_ngcontent-%COMP%] {\n  background-color: #424242;\n  color: white;\n}\n\n.mat-drawer.mat-drawer-push[_ngcontent-%COMP%] {\n  background-color: #424242;\n}\n\n.mat-drawer[_ngcontent-%COMP%]:not(.mat-drawer-side) {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mat-drawer-side[_ngcontent-%COMP%] {\n  border-right: solid 1px rgba(255, 255, 255, 0.12);\n}\n\n.mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%] {\n  border-left: solid 1px rgba(255, 255, 255, 0.12);\n  border-right: none;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side[_ngcontent-%COMP%] {\n  border-left: solid 1px rgba(255, 255, 255, 0.12);\n  border-right: none;\n}\n\n[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: solid 1px rgba(255, 255, 255, 0.12);\n}\n\n.mat-drawer-backdrop.mat-drawer-shown[_ngcontent-%COMP%] {\n  background-color: rgba(189, 189, 189, 0.6);\n}\n\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  background-color: #2e7d32;\n}\n\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(46, 125, 50, 0.54);\n}\n\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #2e7d32;\n}\n\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  background-color: #99009c;\n}\n\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(153, 0, 156, 0.54);\n}\n\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #99009c;\n}\n\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  background-color: #c62828;\n}\n\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(198, 40, 40, 0.54);\n}\n\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #c62828;\n}\n\n.mat-slide-toggle[_ngcontent-%COMP%]:not(.mat-checked)   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  background-color: #bdbdbd;\n}\n\n.mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-slider-track-background[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: #99009c;\n}\n\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%] {\n  background-color: rgba(153, 0, 156, 0.2);\n}\n\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: #2e7d32;\n}\n\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%] {\n  background-color: rgba(46, 125, 50, 0.2);\n}\n\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: #c62828;\n}\n\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%] {\n  background-color: rgba(198, 40, 40, 0.2);\n}\n\n.mat-slider[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%], .mat-slider.cdk-focused[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n.mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n.mat-slider-disabled[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n.mat-slider-min-value[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n\n.mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing)   .mat-slider-thumb[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.3);\n  background-color: transparent;\n}\n\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused   .mat-slider-thumb[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.3);\n}\n\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.3);\n}\n\n.mat-slider-has-ticks[_ngcontent-%COMP%]   .mat-slider-wrapper[_ngcontent-%COMP%]::after {\n  border-color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-slider-horizontal[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%] {\n  background-image: repeating-linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent);\n}\n\n.mat-slider-vertical[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%] {\n  background-image: repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent);\n}\n\n.mat-step-header.cdk-keyboard-focused[_ngcontent-%COMP%], .mat-step-header.cdk-program-focused[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]:hover:not([aria-disabled]), .mat-step-header[_ngcontent-%COMP%]:hover[aria-disabled=false] {\n  background-color: rgba(255, 255, 255, 0.04);\n}\n\n.mat-step-header[_ngcontent-%COMP%]:hover[aria-disabled=true] {\n  cursor: default;\n}\n\n@media (hover: none) {\n  .mat-step-header[_ngcontent-%COMP%]:hover {\n    background: none;\n  }\n}\n\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-optional[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7);\n  color: white;\n}\n\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #99009c;\n  color: white;\n}\n\n.mat-step-header.mat-accent[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-step-header.mat-accent[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header.mat-accent[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header.mat-accent[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #2e7d32;\n  color: white;\n}\n\n.mat-step-header.mat-warn[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-step-header.mat-warn[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header.mat-warn[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header.mat-warn[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #c62828;\n  color: white;\n}\n\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-error[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #c62828;\n}\n\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-active[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-error[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n\n.mat-stepper-horizontal[_ngcontent-%COMP%], .mat-stepper-vertical[_ngcontent-%COMP%] {\n  background-color: #424242;\n}\n\n.mat-stepper-vertical-line[_ngcontent-%COMP%]::before {\n  border-left-color: rgba(255, 255, 255, 0.12);\n}\n\n.mat-horizontal-stepper-header[_ngcontent-%COMP%]::before, .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-horizontal-line[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.12);\n}\n\n.mat-horizontal-stepper-header[_ngcontent-%COMP%] {\n  height: 72px;\n}\n\n.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%], .mat-vertical-stepper-header[_ngcontent-%COMP%] {\n  padding: 24px 24px;\n}\n\n.mat-stepper-vertical-line[_ngcontent-%COMP%]::before {\n  top: -16px;\n  bottom: -16px;\n}\n\n.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]::before {\n  top: 36px;\n}\n\n.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%] {\n  top: 36px;\n}\n\n.mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: #c6c6c6;\n}\n\n.mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n\n.mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n  border-bottom: none;\n}\n\n.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: white;\n}\n\n.mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.5);\n}\n\n.mat-tab-group[class*=mat-background-][_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar[class*=mat-background-][_ngcontent-%COMP%] {\n  border-bottom: none;\n  border-top: none;\n}\n\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(224, 179, 225, 0.3);\n}\n\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #99009c;\n}\n\n.mat-tab-group.mat-primary.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-group.mat-primary.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(200, 230, 201, 0.3);\n}\n\n.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #2e7d32;\n}\n\n.mat-tab-group.mat-accent.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-group.mat-accent.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3);\n}\n\n.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #c62828;\n}\n\n.mat-tab-group.mat-warn.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-group.mat-warn.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(224, 179, 225, 0.3);\n}\n\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%] {\n  background-color: #99009c;\n}\n\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before {\n  border-color: white;\n}\n\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(200, 230, 201, 0.3);\n}\n\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%] {\n  background-color: #2e7d32;\n}\n\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before {\n  border-color: white;\n}\n\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3);\n}\n\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%] {\n  background-color: #c62828;\n}\n\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before {\n  border-color: white;\n}\n\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background: #212121;\n  color: white;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background: #99009c;\n  color: white;\n}\n\n.mat-toolbar.mat-accent[_ngcontent-%COMP%] {\n  background: #2e7d32;\n  color: white;\n}\n\n.mat-toolbar.mat-warn[_ngcontent-%COMP%] {\n  background: #c62828;\n  color: white;\n}\n\n.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: currentColor;\n}\n\n.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.mat-toolbar[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: currentColor;\n}\n\n.mat-toolbar-multiple-rows[_ngcontent-%COMP%] {\n  min-height: 64px;\n}\n\n.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%] {\n  height: 64px;\n}\n\n@media (max-width: 599px) {\n  .mat-toolbar-multiple-rows[_ngcontent-%COMP%] {\n    min-height: 56px;\n  }\n\n  .mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%] {\n    height: 56px;\n  }\n}\n\n.mat-tooltip[_ngcontent-%COMP%] {\n  background: rgba(97, 97, 97, 0.9);\n}\n\n.mat-tree[_ngcontent-%COMP%] {\n  background: #424242;\n}\n\n.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-tree-node[_ngcontent-%COMP%] {\n  min-height: 48px;\n}\n\n.mat-snack-bar-container[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  background: #fafafa;\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-simple-snackbar-action[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.app-landing[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #681194;\n  \n}\n\n.app-landing[_ngcontent-%COMP%]   .animated[_ngcontent-%COMP%] {\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax[_ngcontent-%COMP%] {\n  perspective: 100px;\n  height: calc(100vh - 64px);\n  overflow: hidden auto;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-1[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/parallax/layer1.png\");\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-2[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/parallax/layer2.png\");\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-3[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/parallax/layer3.png\");\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-4[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-4[_ngcontent-%COMP%]   .landing-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  text-align: center;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-4[_ngcontent-%COMP%]   .landing-title[_ngcontent-%COMP%]   .mat-display-4[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-5[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/parallax/layer5.png\");\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-6[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/parallax/layer6.png\");\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-7[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/parallax/layer7.png\");\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-8[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/parallax/layer8.png\");\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-9[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/parallax/layer9.png\");\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-10[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/parallax/layer10.png\");\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-1[_ngcontent-%COMP%] {\n  transform: translateZ(-450px) scale(5.5);\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-2[_ngcontent-%COMP%] {\n  transform: translateZ(-400px) scale(5);\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-3[_ngcontent-%COMP%] {\n  transform: translateZ(-350px) scale(4.5);\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-4[_ngcontent-%COMP%] {\n  transform: translateZ(-300px) scale(4);\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-5[_ngcontent-%COMP%] {\n  transform: translateZ(-250px) scale(3.5);\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-6[_ngcontent-%COMP%] {\n  transform: translateZ(-200px) scale(3);\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-7[_ngcontent-%COMP%] {\n  transform: translateZ(-150px) scale(2.5);\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-8[_ngcontent-%COMP%] {\n  transform: translateZ(-100px) scale(2);\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-9[_ngcontent-%COMP%] {\n  transform: translateZ(-50px) scale(1.5);\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-layer-10[_ngcontent-%COMP%] {\n  transform: translateZ(0px) scale(1);\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%] {\n  background-color: #160d25;\n  display: block;\n  position: absolute;\n  top: calc(100% - 40px);\n  left: 0;\n  right: 0;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1080px;\n  margin: 0 auto 0 auto;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-content[_ngcontent-%COMP%]   .legendary[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 10px 5px darkgoldenrod;\n  border-color: darkgoldenrod !important;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-content[_ngcontent-%COMP%]   .legendary.god-avatar[_ngcontent-%COMP%] {\n  border-radius: 4px !important;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-content[_ngcontent-%COMP%]   .image-responsive[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-content[_ngcontent-%COMP%]   .image-responsive[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  max-width: 256px;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]    + img[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-content[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-content[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-content[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .image-desktop[_ngcontent-%COMP%], .app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-content[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .image-mobile[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  border-radius: 4px;\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: -20px;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  height: auto;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-content[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .image-mobile[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-content[_ngcontent-%COMP%]   .image-icons[_ngcontent-%COMP%], .app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-content[_ngcontent-%COMP%]   .faction-icons[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-content[_ngcontent-%COMP%]   .image-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-content[_ngcontent-%COMP%]   .faction-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 2px solid #99009c;\n  margin: 10px;\n  box-sizing: content-box;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-content[_ngcontent-%COMP%]   .faction-icons[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  margin-top: auto !important;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-content[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-content[_ngcontent-%COMP%]   h1.mat-h1[_ngcontent-%COMP%] {\n  margin: 16px 0 !important;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-content[_ngcontent-%COMP%]   h1.mat-display-3.margened[_ngcontent-%COMP%] {\n  margin: 64px 0 !important;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-content[_ngcontent-%COMP%]   .mat-display-3[_ngcontent-%COMP%]::after {\n  content: \"\";\n  border-bottom: 8px solid #99009c;\n  width: 200px;\n  display: block;\n  margin: 20px auto auto auto;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-content[_ngcontent-%COMP%]   .play-button[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-footer[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-bottom: -5px;\n  margin-top: -200px;\n}\n\n.app-landing[_ngcontent-%COMP%]   .parallax-content[_ngcontent-%COMP%]   .app-landing-footer[_ngcontent-%COMP%]   .retribution[_ngcontent-%COMP%] {\n  background-color: #99009c;\n  width: 100%;\n  padding: 20px;\n}\n\n@media screen and (max-width: 960px) {\n  .app-landing[_ngcontent-%COMP%]   .parallax[_ngcontent-%COMP%] {\n    height: calc(100vh - 56px);\n  }\n  .app-landing[_ngcontent-%COMP%]   .landing-title[_ngcontent-%COMP%] {\n    top: 10px !important;\n  }\n  .app-landing[_ngcontent-%COMP%]   .landing-title[_ngcontent-%COMP%]   .mat-display-4[_ngcontent-%COMP%] {\n    font-size: 3.5rem !important;\n    line-height: 1 !important;\n  }\n  .app-landing[_ngcontent-%COMP%]   .faction-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40px !important;\n    height: 40px !important;\n  }\n  .app-landing[_ngcontent-%COMP%]   .app-landing-footer[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    margin-top: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcY29yZVxccmlwcGxlXFxfcmlwcGxlLXRoZW1lLnNjc3MiLCJsYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFxjb3JlXFxvcHRpb25cXF9vcHRpb24tdGhlbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcY29yZVxcb3B0aW9uXFxfb3B0Z3JvdXAtdGhlbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcY29yZVxcc2VsZWN0aW9uXFxwc2V1ZG8tY2hlY2tib3hcXF9wc2V1ZG8tY2hlY2tib3gtdGhlbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcY29yZVxcX2NvcmUtdGhlbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcY29yZVxcc3R5bGVcXF9lbGV2YXRpb24uc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcYXV0b2NvbXBsZXRlXFxfYXV0b2NvbXBsZXRlLXRoZW1lLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXGJhZGdlXFxfYmFkZ2UtdGhlbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxjZGtcXGExMXlcXF9pbmRleC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFxib3R0b20tc2hlZXRcXF9ib3R0b20tc2hlZXQtdGhlbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcYnV0dG9uXFxfYnV0dG9uLXRoZW1lLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXGJ1dHRvbi10b2dnbGVcXF9idXR0b24tdG9nZ2xlLXRoZW1lLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXGNhcmRcXF9jYXJkLXRoZW1lLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXGNoZWNrYm94XFxfY2hlY2tib3gtdGhlbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcY2hpcHNcXF9jaGlwcy10aGVtZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFx0YWJsZVxcX3RhYmxlLXRoZW1lLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXGRhdGVwaWNrZXJcXF9kYXRlcGlja2VyLXRoZW1lLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXGRpYWxvZ1xcX2RpYWxvZy10aGVtZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFxkaXZpZGVyXFxfZGl2aWRlci10aGVtZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFxleHBhbnNpb25cXF9leHBhbnNpb24tdGhlbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcZXhwYW5zaW9uXFxfZXhwYW5zaW9uLW1peGlucy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFxmb3JtLWZpZWxkXFxfZm9ybS1maWVsZC10aGVtZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFxmb3JtLWZpZWxkXFxfZm9ybS1maWVsZC1sZWdhY3ktdGhlbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcY29yZVxcc3R5bGVcXF9mb3JtLWNvbW1vbi5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFxmb3JtLWZpZWxkXFxfZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFxmb3JtLWZpZWxkXFxfZm9ybS1maWVsZC1maWxsLXRoZW1lLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXGZvcm0tZmllbGRcXF9mb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcaWNvblxcX2ljb24tdGhlbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcaW5wdXRcXF9pbnB1dC10aGVtZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFxjb3JlXFxzdHlsZVxcX3ZlbmRvci1wcmVmaXhlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFxjb3JlXFx0aGVtaW5nXFxfcGFsZXR0ZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFxsaXN0XFxfbGlzdC10aGVtZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFxtZW51XFxfbWVudS10aGVtZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFxwYWdpbmF0b3JcXF9wYWdpbmF0b3ItdGhlbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxccHJvZ3Jlc3MtYmFyXFxfcHJvZ3Jlc3MtYmFyLXRoZW1lLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXHByb2dyZXNzLXNwaW5uZXJcXF9wcm9ncmVzcy1zcGlubmVyLXRoZW1lLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXHJhZGlvXFxfcmFkaW8tdGhlbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcc2VsZWN0XFxfc2VsZWN0LXRoZW1lLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXHNpZGVuYXZcXF9zaWRlbmF2LXRoZW1lLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXHNsaWRlLXRvZ2dsZVxcX3NsaWRlLXRvZ2dsZS10aGVtZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFxzbGlkZXJcXF9zbGlkZXItdGhlbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcc3RlcHBlclxcX3N0ZXBwZXItdGhlbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcc29ydFxcX3NvcnQtdGhlbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcdGFic1xcX3RhYnMtdGhlbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcdG9vbGJhclxcX3Rvb2xiYXItdGhlbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcdG9vbHRpcFxcX3Rvb2x0aXAtdGhlbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcdHJlZVxcX3RyZWUtdGhlbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcc25hY2stYmFyXFxfc25hY2stYmFyLXRoZW1lLnNjc3MiLCIuLlxcLi5cXC4uXFxzdHlsZXNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdFO0VBSUksMENBQUE7QUNiTjs7QUNXRTtFQUNFLFlBQUE7QURSSjs7QUNVSTtFQUVFLHFDQUFBO0FEVE47O0FDYUk7RUFDRSxxQ0FBQTtBRFhOOztBQ2NJO0VBQ0UscUNBQUE7RUFDQSxZQUFBO0FEWk47O0FDZUk7RUFDRSwrQkFBQTtBRGJOOztBQ2lCRTtFQUNFLGNBQUE7QURkSjs7QUNpQkU7RUFDRSxjQUFBO0FEZEo7O0FDaUJFO0VBQ0UsY0FBQTtBRGRKOztBRXRCRTtFQUNFLCtCQUFBO0FGeUJKOztBRXRCRTtFQUNFLCtCQUFBO0FGeUJKOztBR3BCRTtFQUNFLCtCQUFBO0FIdUJKOztBR3JCSTtFQUNFLGNBQUE7QUh1Qk47O0FHbkJFO0VBQ0UsY0FaZTtBSGtDbkI7O0FHbkJFOztFQUVFLG1CQUFBO0FIc0JKOztBR2RFOzs7O0VBSUUsbUJBQUE7QUhpQko7O0FHZEU7O0VBRUUsbUJBQUE7QUhpQko7O0FHWkk7O0VBQ0UsbUJBeENhO0FId0RuQjs7QUl6REU7RUFJRSx5QkFBQTtFQUNBLFlBQUE7QUp5REo7O0FJbERJO0VDa0lGLHdIQUFBO0FMNUVGOztBSXRESTtFQ2tJRix5SEFBQTtBTHhFRjs7QUkxREk7RUNrSUYseUhBQUE7QUxwRUY7O0FJOURJO0VDa0lGLHlIQUFBO0FMaEVGOztBSWxFSTtFQ2tJRiwwSEFBQTtBTDVERjs7QUl0RUk7RUNrSUYsMEhBQUE7QUx4REY7O0FJMUVJO0VDa0lGLDJIQUFBO0FMcERGOztBSTlFSTtFQ2tJRiwySEFBQTtBTGhERjs7QUlsRkk7RUNrSUYsMkhBQUE7QUw1Q0Y7O0FJdEZJO0VDa0lGLDJIQUFBO0FMeENGOztBSTFGSTtFQ2tJRiw0SEFBQTtBTHBDRjs7QUk5Rkk7RUNrSUYsNEhBQUE7QUxoQ0Y7O0FJbEdJO0VDa0lGLDRIQUFBO0FMNUJGOztBSXRHSTtFQ2tJRiw0SEFBQTtBTHhCRjs7QUkxR0k7RUNrSUYsNEhBQUE7QUxwQkY7O0FJOUdJO0VDa0lGLDRIQUFBO0FMaEJGOztBSWxISTtFQ2tJRiw2SEFBQTtBTFpGOztBSXRISTtFQ2tJRiw2SEFBQTtBTFJGOztBSTFISTtFQ2tJRiw2SEFBQTtBTEpGOztBSTlISTtFQ2tJRiw2SEFBQTtBTEFGOztBSWxJSTtFQ2tJRiw4SEFBQTtBTElGOztBSXRJSTtFQ2tJRiw4SEFBQTtBTFFGOztBSTFJSTtFQ2tJRiw4SEFBQTtBTFlGOztBSTlJSTtFQ2tJRiw4SEFBQTtBTGdCRjs7QUlsSkk7RUNrSUYsOEhBQUE7QUxvQkY7O0FJL0lJO0VBQ0UsYUFBQTtBSmtKTjs7QU01S0U7RUFFRSxtQkFBQTtFQUNBLFlBQUE7QU44S0o7O0FLbEJFO0VBWEEsMEhBQUE7QUxnQ0Y7O0FNMUtJO0VBQ0UsbUJBQUE7QU40S047O0FNMUtNO0VBQ0UsWUFBQTtBTjRLUjs7QU8vRkU7RUFDRSxrQkFBQTtBUGtHSjs7QU85Rkk7RUFDRSxhQUFBO0FQaUdOOztBTzdGRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FQZ0dKOztBTzdGRTs7RUFFRSxnQkFBQTtBUGdHSjs7QU8zRkU7RUFFRSxlQUFBO0FQNkZKOztBTzFNRTtFQUNFLFdBVFM7RUFVVCxZQVZTO0VBV1QsaUJBWFM7QVB3TmI7O0FPek1JO0VBQ0UsU0FBQTtBUDJNTjs7QU90TUk7RUFDRSxZQUFBO0FQd01OOztBT25NSTtFQUNFLFdBQUE7QVBxTU47O0FPaE1JO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QVBrTU47O0FPN0xJO0VBQ0UsWUFBQTtBUCtMTjs7QU8xTEk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBUDRMTjs7QU90TE07RUFDRSxVQUFBO0FQd0xSOztBT25MTTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FQcUxSOztBT2hMTTtFQUNFLFdBQUE7QVBrTFI7O0FPN0tNO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QVArS1I7O0FPbFBFO0VBQ0UsV0FWVztFQVdYLFlBWFc7RUFZWCxpQkFaVztBUGlRZjs7QU9qUEk7RUFDRSxVQUFBO0FQbVBOOztBTzlPSTtFQUNFLGFBQUE7QVBnUE47O0FPM09JO0VBQ0UsV0FBQTtBUDZPTjs7QU94T0k7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBUDBPTjs7QU9yT0k7RUFDRSxZQUFBO0FQdU9OOztBT2xPSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FQb09OOztBTzlOTTtFQUNFLFdBQUE7QVBnT1I7O0FPM05NO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QVA2TlI7O0FPeE5NO0VBQ0UsWUFBQTtBUDBOUjs7QU9yTk07RUFDRSxXQUFBO0VBQ0EsV0FBQTtBUHVOUjs7QU8xUkU7RUFDRSxXQVJTO0VBU1QsWUFUUztFQVVULGlCQVZTO0FQdVNiOztBT3pSSTtFQUNFLFVBQUE7QVAyUk47O0FPdFJJO0VBQ0UsYUFBQTtBUHdSTjs7QU9uUkk7RUFDRSxXQUFBO0FQcVJOOztBT2hSSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FQa1JOOztBTzdRSTtFQUNFLFlBQUE7QVArUU47O0FPMVFJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QVA0UU47O0FPdFFNO0VBQ0UsV0FBQTtBUHdRUjs7QU9uUU07RUFDRSxVQUFBO0VBQ0EsWUFBQTtBUHFRUjs7QU9oUU07RUFDRSxZQUFBO0FQa1FSOztBTzdQTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FQK1BSOztBTzdMRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBUGdNSjs7QVF2VEk7RUQwSEUsa0JBQUE7RUFDQSxnQkFBQTtBUGdNTjs7QU8zTEk7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QVA4TE47O0FPekxJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FQNExOOztBT3ZMSTtFQVdJLG1CQUFBO0VBTUYsK0JBQUE7QVAyS047O0FTdFdFO0VKa0pBLDZIQUFBO0VJaEpFLG1CQUFBO0VBQ0EsWUFBQTtBVHlXSjs7QVV2UkU7RUFLRSxjQUFBO0VBQ0EsdUJBQUE7QVZzUko7O0FVdFRFO0VBQ0UsY0FBQTtBVndUSjs7QVV0VEU7RUFDRSxjQUFBO0FWd1RKOztBVXRURTtFQUNFLGNBQUE7QVZ3VEo7O0FVcFRJO0VBRUUsK0JBQUE7QVZxVE47O0FVeFhFO0VBQ0UseUJBQUE7QVYwWEo7O0FVdlhFO0VBQ0UseUJBQUE7QVZ5WEo7O0FVdFhFO0VBQ0UseUJBQUE7QVZ3WEo7O0FVclhFO0VBQ0UsNkJBQUE7QVZ1WEo7O0FVdFNJO0VBQ0UsWUF4R1k7RUF5R1osOEJBQUE7QVZ3U047O0FVcFNFO0VBQ0UsaUJBQUE7QVZ1U0o7O0FVbFNFO0VBQ0UsdUNBQUE7QVZxU0o7O0FVbFNFO0VBRUUsWUFBQTtFQUNBLHlCQUFBO0FWb1NKOztBVS9WRTtFQUNFLFlBQUE7QVZpV0o7O0FVL1ZFO0VBQ0UsWUFBQTtBVmlXSjs7QVUvVkU7RUFDRSxZQUFBO0FWaVdKOztBVTdWSTtFQUVFLCtCQUFBO0FWOFZOOztBVTNXRTtFQUNFLHlCQUFBO0FWNldKOztBVTNXRTtFQUNFLHlCQUFBO0FWNldKOztBVTNXRTtFQUNFLHlCQUFBO0FWNldKOztBVXpXSTtFQUVFLDJDQUFBO0FWMFdOOztBVTVZRTtFQVhBLDBDQURtQjtBVjJackI7O0FVM1lFO0VBZkEsMENBRG1CO0FWOFpyQjs7QVUxWUU7RUFuQkEsMENBRG1CO0FWaWFyQjs7QUs5UkU7RUFYQSx3SEFBQTtBTDZTRjs7QUtsU0U7RUFYQSx5SEFBQTtBTGlURjs7QUt0U0U7RUFYQSwySEFBQTtBTG9URjs7QUt6U0U7RUFYQSx3SEFBQTtBTHVURjs7QUs1U0U7RUFYQSwySEFBQTtBTDJURjs7QUtoVEU7RUFYQSw0SEFBQTtBTDhURjs7QUtuVEU7RUFYQSx3SEFBQTtBTGlVRjs7QVdoZEU7O0VOK0lBLHlIQUFBO0FMc1VGOztBV2hkRTs7RUFFRSxnQkFBQTtBWG1kSjs7QVdoZEU7RUFDRSwrQkFBQTtBWG1kSjs7QVdqZEk7RUFDRSwyQ0FBQTtBWG1kTjs7QVcvY0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QVhrZEo7O0FXaGRJO0VBQ0UsdUJBQUE7QVhrZE47O0FXOWNFO0VBQ0UsZ0RBQUE7QVhpZEo7O0FXOWNFO0VBQ0UsaUJBQUE7RUFDQSxpREFBQTtBWGlkSjs7QVc3Y0k7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7QVhnZE47O0FXNWNFO0VBQ0UseUJBQUE7RUFDQSwrQkFBQTtBWCtjSjs7QVc3Y0k7RUFDRSxZQUFBO0FYK2NOOztBVzNjRTtFQUNFLCtCQUFBO0VBQ0EsdUJBQUE7QVg4Y0o7O0FXNWNJO0VBQ0UsbUJBQUE7QVg4Y047O0FXM2NJO0VBQ0UseUJBQUE7QVg2Y047O0FXemNFOztFQUVFLDJDQUFBO0FYNGNKOztBVzFiSTtFQUNFLGlCQUxjO0FYa2NwQjs7QVl0aEJFO0VBRUUsbUJBQUE7RUFDQSxZQUFBO0Fad2hCSjs7QUsvWEU7RUFYQSx5SEFBQTtBTDZZRjs7QUtsWUU7RUFYQSx3SEFBQTtBTGdaRjs7QVl0aEJFO0VBQ0UsK0JBQUE7QVp5aEJKOztBYXZoQkU7RUFDRSxzQ0FBQTtBYjBoQko7O0FhdmhCRTtFQUNFLGFBZG9CO0Fid2lCeEI7O0FhdmhCRTtFQUdFLDBCQUFBO0Fid2hCSjs7QWFyaEJFO0VBQ0UseUJBeEJvQjtBYmdqQnhCOztBYXBoQkk7RUFDRSx5QkFBQTtBYnVoQk47O0FhcGhCSTtFQUNFLHlCQUFBO0Fic2hCTjs7QWFuaEJJO0VBQ0UseUJBQUE7QWJxaEJOOztBYTlnQk07RUFDRSx5QkF0Q1c7QWJ1akJuQjs7QWE1Z0JNO0VBQ0UscUJBNUNXO0FiMGpCbkI7O0FhMWdCSTtFQUNFLCtCQUFBO0FiNGdCTjs7QWF0Z0JFO0VBQ0UsdUJBQUE7QWJ5Z0JKOztBYXBnQkk7O0VBQ0UsbUJBQUE7QWJ3Z0JOOztBYXJnQkk7O0VBQ0UsbUJBQUE7QWJ3Z0JOOztBYXJnQkk7O0VBQ0UsbUJBQUE7QWJ3Z0JOOztBY2hqQkU7RUE1Q0EseUJBeUN3QjtFQXhDeEIsWUF5Q3dCO0FkdWpCMUI7O0FjOWxCRTtFQUNFLFlBc0NzQjtFQXJDdEIsWUFBQTtBZGdtQko7O0FjcmpCTTtFVG1HSix5SEFBQTtBTHFkRjs7QWNwakJNO0VBQ0UsYUFBQTtBZHNqQlI7O0FjbGpCSTtFQUNFLFlBQUE7QWRvakJOOztBY2pqQkk7RUFDRSxpQkFBQTtBZG1qQk47O0FjOWlCSTtFQW5FRix5QkF5QkU7RUF4QkYsWUF1QndCO0FkOGxCMUI7O0Fjbm5CRTtFQUNFLFlBb0JzQjtFQW5CdEIsWUFBQTtBZHFuQko7O0FjL2xCRTtFQVZBLDBDQURtQjtBZDZtQnJCOztBY3RqQkk7RUF2RUYseUJBeUJFO0VBeEJGLFlBdUJ3QjtBZHltQjFCOztBYzluQkU7RUFDRSxZQW9Cc0I7RUFuQnRCLFlBQUE7QWRnb0JKOztBYzFtQkU7RUFWQSwwQ0FEbUI7QWR3bkJyQjs7QWM3akJJO0VBM0VGLHlCQXlCRTtFQXhCRixZQXVCd0I7QWRvbkIxQjs7QWN6b0JFO0VBQ0UsWUFvQnNCO0VBbkJ0QixZQUFBO0FkMm9CSjs7QWNybkJFO0VBVkEsMENBRG1CO0FkbW9CckI7O0FlbnBCRTtFQUNFLG1CQUFBO0Fmc3BCSjs7QWVucEJFOzs7O0VBSUUsbUJBQUE7QWZzcEJKOztBZW5wQkU7O0VBRUUsOENBQUE7QWZzcEJKOztBZW5wQkU7RUFDRSwrQkFBQTtBZnNwQko7O0FlbnBCRTtFQUNFLFlBQUE7QWZzcEJKOztBZ0JqbkJFO0VBQ0UsV0FBQTtBaEJvbkJKOztBZ0IvbUJFOzs7RUFHRSxZQUFBO0FoQmtuQko7O0FnQi9tQkU7RUFDRSwrQkFBQTtBaEJrbkJKOztBZ0IvbUJFO0VBQ0UscUNBQUE7QWhCa25CSjs7QWdCL21CRTtFQUNFLCtCQUFBO0FoQmtuQko7O0FnQi9tQkU7O0VBRUUsWUFBQTtFQUNBLHlCQUFBO0FoQmtuQko7O0FnQnhwQkU7RUEyQ0ksK0JBbENhO0FoQm1wQm5COztBZ0I3bUJFO0VBQ0UsK0JBdkNlO0FoQnVwQm5COztBZ0I3bUJFO0VBT0ksZ0NBQUE7QWhCMG1CTjs7QWdCcHFCRTtFQXFFSSxzQ0FBQTtBaEJtbUJOOztBZ0J4cUJFO0VBOEVNLHNDQUFBO0FoQjhsQlI7O0FnQjVnQkU7RUFDRSxrQ0F2TUE7QWhCc3RCSjs7QWdCNWdCRTs7RUFFRSxrQ0FWaUI7QWhCeWhCckI7O0FnQjVnQkU7O0VBRUUsNkZBQUE7QWhCK2dCSjs7QWdCNWdCRTs7RUFFRSw0RkFBQTtBaEIrZ0JKOztBZ0I1Z0JFOztFQUVFLG1CQXhCYztBaEJ1aUJsQjs7QWdCNWdCRTs7RUFFRSxtQkE1QnVCO0FoQjJpQjNCOztBZ0I3dUJFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FoQmd2Qko7O0FnQjd1QkU7RUFJSSx3Q0FBQTtBaEI2dUJOOztBZ0JwdUJFO0VBQ0UsaUNBQUE7QWhCdXVCSjs7QWdCdHRCRTs7O0VBUk0sd0NBQUE7QWhCb3VCUjs7QWdCaG9CRTtFWFFBLDBIQUFBO0VXTkUseUJBQUE7RUFDQSxZQUFBO0FoQm1vQko7O0FnQmxrQkU7RUFDRSxrQ0F2TUE7QWhCMndCSjs7QWdCamtCRTs7RUFFRSxrQ0FWaUI7QWhCNmtCckI7O0FnQmhrQkU7O0VBRUUsNkZBQUE7QWhCa2tCSjs7QWdCL2pCRTs7RUFFRSw0RkFBQTtBaEJpa0JKOztBZ0I5akJFOztFQUVFLG1CQXhCYztBaEJ3bEJsQjs7QWdCN2pCRTs7RUFFRSxtQkE1QnVCO0FoQjJsQjNCOztBZ0I3eEJFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FoQit4Qko7O0FnQjV4QkU7RUFJSSx3Q0FBQTtBaEIyeEJOOztBZ0JseEJFO0VBQ0UsaUNBQUE7QWhCb3hCSjs7QWdCbndCRTs7O0VBUk0sd0NBQUE7QWhCZ3hCUjs7QWdCeG1CRTtFQUNFLGtDQXZNQTtBaEJpekJKOztBZ0J2bUJFOztFQUVFLGtDQVZpQjtBaEJtbkJyQjs7QWdCdG1CRTs7RUFFRSw2RkFBQTtBaEJ3bUJKOztBZ0JybUJFOztFQUVFLDRGQUFBO0FoQnVtQko7O0FnQnBtQkU7O0VBRUUsbUJBeEJjO0FoQjhuQmxCOztBZ0JubUJFOztFQUVFLG1CQTVCdUI7QWhCaW9CM0I7O0FnQm4wQkU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QWhCcTBCSjs7QWdCbDBCRTtFQUlJLHdDQUFBO0FoQmkwQk47O0FnQnh6QkU7RUFDRSxpQ0FBQTtBaEIwekJKOztBZ0J6eUJFOzs7RUFSTSx3Q0FBQTtBaEJzekJSOztBZ0Jwc0JFO0VYTkEsOEhBQUE7QUw4c0JGOztBZ0Jwc0JFO0VBQ0UsY0FBQTtBaEJ1c0JKOztBZ0Jyc0JJO0VBQ0UsY0FBQTtBaEJ1c0JOOztBZ0Jwc0JJO0VBQ0UsY0FBQTtBaEJzc0JOOztBZ0Jsc0JFO0VBQ0UsK0JBQUE7QWhCcXNCSjs7QWlCNzJCRTtFWmlKQSw4SEFBQTtFWS9JRSxtQkFBQTtFQUNBLFlBQUE7QWpCZzNCSjs7QWtCeDNCRTtFQUNFLDJDQUFBO0FsQjIzQko7O0FrQngzQkU7RUFDRSw2Q0FBQTtBbEIyM0JKOztBbUJ6M0JFO0VBRUUsbUJBQUE7RUFDQSxZQUFBO0FuQjIzQko7O0FLcHVCRTtFQVhBLHlIQUFBO0FMa3ZCRjs7QW1CMzNCRTtFQUNFLDJDQUFBO0FuQjgzQko7O0FvQjk0Qk07RURvQkYscUNBQUE7QW5CODNCSjs7QW1CejNCRTtFQUNFO0lBRUUsbUJBQUE7RW5CMjNCSjtBQUNGOztBbUJ4M0JFO0VBQ0UsWUFBQTtBbkIwM0JKOztBbUJ2M0JFOztFQUVFLCtCQUFBO0FuQjAzQko7O0FtQnYzQkU7RUFDRSwrQkFBQTtBbkIwM0JKOztBbUJ4M0JJOztFQUVFLGNBQUE7QW5CMDNCTjs7QW1CNzFCSTtFQUNFLFlBTGU7QW5CcTJCckI7O0FtQjkxQk07RUFDRSxZQVZZO0FuQjAyQnBCOztBcUJsNUJFO0VBQ0UsK0JBWkE7QXJCaTZCSjs7QXFCbDVCRTtFQUNFLCtCQWhCQTtBckJxNkJKOztBcUJsNUJFO0VBQ0UsY0FuQm9CO0FyQnc2QnhCOztBcUJuNUJJO0VBQ0UsY0FoQnFCO0FyQnE2QjNCOztBcUJsNUJJO0VBQ0UsY0FuQm1CO0FyQnU2QnpCOztBcUJoNUJFO0VBQ0UsY0E5QnFCO0FyQmk3QnpCOztBcUJoNUJFO0VBQ0UsdUJBOUJBO0FyQmk3Qko7O0FxQi80Qkk7RUFDRSx5QkFoQ3NCO0FyQms3QjVCOztBcUJoNUJNO0VBQ0UseUJBckNtQjtBckJ1N0IzQjs7QXFCLzRCTTtFQUNFLHlCQXhDaUI7QXJCeTdCekI7O0FxQjM0Qkk7RUFDRSxjQTlDc0I7QXJCNDdCNUI7O0FxQjM0Qkk7RUFDRSxjQXBEcUI7QXJCaThCM0I7O0FxQjE0Qkk7RUFDRSxjQXZEbUI7QXJCbThCekI7O0FxQnA0Qkk7RUFDRSxjQWhFbUI7QXJCdThCekI7O0FxQnI0Qk07O0VBRUUsY0FwRWlCO0FyQjI4QnpCOztBcUJuNEJJOztFQUVFLHlCQTFFbUI7QXJCKzhCekI7O0FxQmo0QkU7RUFDRSxjQS9FcUI7QXJCbTlCekI7O0FzQjk5Qkk7RUFDRSwrQkFOVTtBdEJ1K0JoQjs7QXNCOTlCSTtFQUNFLCtCQVZVO0F0QjArQmhCOztBc0I3OUJJO0VBQ0UsMENBWkY7QXRCMitCSjs7QXNCNTlCSTtFQ3pCRixzSEFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QXZCdy9CRjs7QXdCbC9CSTtFQUNFLDBDQUpGO0F4QnkvQko7O0F3QmwvQkk7RURaRixzSEFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QXZCaWdDRjs7QXlCbi9CSTtFQUNFLDBDQVRGO0F6QisvQko7O0F5Qm4vQkk7RUFDRSwyQ0FYRjtBekJnZ0NKOztBeUJsL0JJO0VBQ0UsMENBYkY7QXpCaWdDSjs7QXlCaC9CTTtFQUNFLCtCQWpCaUI7QXpCbWdDekI7O0F5Qi8rQk07RUFDRSw2QkFBQTtBekJpL0JSOztBMEI3L0JJO0VBQ0UsK0JBWEY7QTFCMmdDSjs7QTBCNy9CSTtFQUNFLFlBYkY7QTFCNGdDSjs7QTBCMy9CTTtFQUNFLGNBakJrQjtBMUI4Z0MxQjs7QTBCMS9CTTtFQUNFLGNBcEJpQjtBMUJnaEN6Qjs7QTBCei9CTTtFQUNFLGNBdkJlO0ExQmtoQ3ZCOztBMEJyL0JNO0VBQ0UsY0E5QmU7QTFCcWhDdkI7O0EwQmwvQk07RUFDRSwrQkEzQ2lCO0ExQitoQ3pCOztBMEJqL0JNO0VBQ0UsZ0NBdENKO0ExQnloQ0o7O0EyQnZpQ0k7RUFDRSxjQUFBO0EzQjBpQ047O0EyQnZpQ0k7RUFDRSxjQUFBO0EzQnlpQ047O0EyQnRpQ0k7RUFDRSxjQUFBO0EzQndpQ047O0E0QjVpQ0U7RUFDRSwrQkFBQTtBNUIraUNKOztBNEI1aUNFOztFQUVFLCtCQUFBO0E1QitpQ0o7O0E0QjVpQ0U7RUFDRSxvQkFBQTtBNUIraUNKOztBNkJqa0NFO0VEcUJJLCtCQUFBO0E1QitpQ047O0E2QnBrQ0U7RURxQkksK0JBQUE7QTVCK2lDTjs7QTZCaGtDRTtFRGlCSSwrQkFBQTtBNUJrakNOOztBNkIvakNFO0VEYUksK0JBQUE7QTVCcWpDTjs7QTZCOWpDRTtFRFNJLCtCQUFBO0E1QndqQ047O0E0Qi9pQ007RUFDRSwwQkVaWTtBOUI2akNwQjs7QTRCOWlDTTtFQUNFLDBCRWRhO0E5QjhqQ3JCOztBNEIzaUNFO0VBQ0Usb0JBQUE7QTVCOGlDSjs7QTRCM2lDRTs7RUFFRSxvQkFBQTtBNUI4aUNKOztBNEIzaUNFO0VBQ0UsY0FBQTtBNUI4aUNKOztBK0I1bENJO0VBQ0UsWUFBQTtBL0IrbENOOztBK0I1bENJO0VBQ0UsWUFBQTtBL0I4bENOOztBK0IzbENJO0VBQ0UsK0JBQUE7QS9CNmxDTjs7QStCemxDRTtFQUNFLHVCQUFBO0EvQjRsQ0o7O0ErQnRsQ0k7Ozs7O0VBQ0UscUNBQUE7QS9CNmxDTjs7QStCeGxDSTtFQUNFLHFDQUFBO0EvQjJsQ047O0FnQ3ZuQ0U7RUFFRSxtQkFBQTtBaEN5bkNKOztBSy85QkU7RUFYQSwwSEFBQTtBTDYrQkY7O0FnQ3puQ0U7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QWhDNG5DSjs7QWdDem5DTTs7O0VBR0UsK0JBQUE7QWhDMm5DUjs7QWdDdG5DRTs7RUFFRSxZQUFBO0FoQ3luQ0o7O0FnQ2xuQ0k7Ozs7RUFDRSxxQ0FBQTtBaEN3bkNOOztBaUNwcENFO0VBQ0UsbUJBQUE7QWpDdXBDSjs7QWlDcHBDRTs7RUFFRSwrQkFBQTtBakN1cENKOztBaUNwcENFOztFQUVFLDJCQUFBO0VBQ0EsNkJBQUE7QWpDdXBDSjs7QWlDcHBDRTs7RUFFRSwyQkFBQTtBakN1cENKOztBaUNucENJOzs7O0VBSUUsc0NBQUE7QWpDc3BDTjs7QWlDL25DSTtFQUNFLGdCQUxLO0FqQ3VvQ1g7O0FrQ3hxQ0U7RUFDRSxhQUFBO0FsQzJxQ0o7O0FrQ3hxQ0U7RUFDRSx5QkFBQTtBbEMycUNKOztBa0N4cUNFO0VBQ0UseUJBQUE7QWxDMnFDSjs7QWtDdnFDSTtFQUNFLGFBQUE7QWxDMHFDTjs7QWtDdnFDSTtFQUNFLHlCQUFBO0FsQ3lxQ047O0FrQ3RxQ0k7RUFDRSx5QkFBQTtBbEN3cUNOOztBa0NucUNJO0VBQ0UsYUFBQTtBbENzcUNOOztBa0NucUNJO0VBQ0UseUJBQUE7QWxDcXFDTjs7QWtDbHFDSTtFQUNFLHlCQUFBO0FsQ29xQ047O0FtQ3J0Q0k7RUFDRSxlQUFBO0FuQ3d0Q047O0FtQ3J0Q0k7RUFDRSxlQUFBO0FuQ3V0Q047O0FtQ3B0Q0k7RUFDRSxlQUFBO0FuQ3N0Q047O0FvQy9zQ0U7RUFDRSxzQ0FBQTtBcENrdENKOztBb0N2dUNFO0VBQ0UscUJBQUE7QXBDMHVDSjs7QW9DdnVDRTs7RUFJRSx5QkFBQTtBcEN1dUNKOztBb0MvdUNFO0VBQ0UscUJBQUE7QXBDaXZDSjs7QW9DOXVDRTs7RUFJRSx5QkFBQTtBcEM4dUNKOztBb0N0dkNFO0VBQ0UscUJBQUE7QXBDd3ZDSjs7QW9DcnZDRTs7RUFJRSx5QkFBQTtBcENxdkNKOztBb0NwdENNOztFQUVFLHNDQUFBO0FwQ3N0Q1I7O0FvQ250Q007O0VBRUUsMENBQUE7QXBDcXRDUjs7QW9DbHRDTTtFQUNFLCtCQUFBO0FwQ290Q1I7O0FvQzlzQ0k7RUFDRSx1QkFBQTtBcENndENOOztBcUNqd0NFO0VBQ0UsWUFBQTtBckNvd0NKOztBcUNqd0NFO0VBQ0UsK0JBQUE7QXJDb3dDSjs7QXFDandDRTtFQUNFLCtCQUFBO0FyQ293Q0o7O0FxQ2p3Q0U7RUFDRSwrQkFBQTtBckNvd0NKOztBcUNqd0NFO0VBQ0UsbUJBQUE7QXJDb3dDSjs7QUs3bkNFO0VBWEEsMEhBQUE7QUwyb0NGOztBcUNwd0NJO0VBQ0UscUNBQUE7QXJDc3dDTjs7QXFDaHdDTTtFQUNFLGNBQUE7QXJDbXdDUjs7QXFDaHdDTTtFQUNFLGNBQUE7QXJDa3dDUjs7QXFDL3ZDTTtFQUNFLGNBQUE7QXJDaXdDUjs7QXFDN3ZDSTtFQUNFLGNBQUE7QXJDK3ZDTjs7QXFDNXZDSTtFQUNFLCtCQUFBO0FyQzh2Q047O0FzQ3h5Q0U7RUFDRSx5QkFMbUM7RUFNbkMsWUFBQTtBdEMyeUNKOztBc0N4eUNFO0VBQ0UseUJBWHdCO0VBWXhCLFlBQUE7QXRDMnlDSjs7QXNDenlDSTtFQUNFLHlCQWIyQjtBdEN3ekNqQzs7QXNDeHlDSTtFakM2SEYsNkhBQUE7QUw4cUNGOztBc0NweUNFO0VBQ0UsaURBdkJtQjtBdEM4ekN2Qjs7QXNDcnlDSTtFQUNFLGdEQTFCaUI7RUEyQmpCLGtCQUFBO0F0Q3V5Q047O0FzQ255Q0U7RUFDRSxnREFoQ21CO0VBaUNuQixrQkFBQTtBdENzeUNKOztBc0NweUNJO0VBQ0UsaUJBQUE7RUFDQSxpREFyQ2lCO0F0QzIwQ3ZCOztBc0NseUNFO0VBUUksMENBQUE7QXRDOHhDTjs7QXVDdjFDSTtFQUNFLHlCQUFBO0F2QzAxQ047O0F1Q3YxQ0k7RUFHRSx5Q0FBQTtBdkN1MUNOOztBdUNwMUNJO0VBR0UseUJBQUE7QXZDbzFDTjs7QXVDajJDSTtFQUNFLHlCQUFBO0F2Q20yQ047O0F1Q2gyQ0k7RUFHRSx5Q0FBQTtBdkNnMkNOOztBdUM3MUNJO0VBR0UseUJBQUE7QXZDNjFDTjs7QXVDMTJDSTtFQUNFLHlCQUFBO0F2QzQyQ047O0F1Q3oyQ0k7RUFHRSx5Q0FBQTtBdkN5MkNOOztBdUN0MkNJO0VBR0UseUJBQUE7QXZDczJDTjs7QXVDajBDSTtFQUdFLHVCQWhCcUI7QXZDaTFDM0I7O0F1Qzd6Q0U7RWxDMkZBLHlIQUFBO0VrQ3pGRSx5QkFBQTtBdkNnMENKOztBdUM3ekNFO0VBQ0UsMENBM0JvQjtBdkMyMUN4Qjs7QXdDdDFDRTtFQUNFLDBDQWJxQjtBeENzMkN6Qjs7QXdDcjRDRTs7O0VBR0UseUJBQUE7QXhDdzRDSjs7QXdDcjRDRTtFQUNFLFlBQUE7QXhDdTRDSjs7QXdDcDRDRTtFQUdFLHdDQURRO0F4Q3E0Q1o7O0F3Q2o1Q0U7OztFQUdFLHlCQUFBO0F4Q281Q0o7O0F3Q2o1Q0U7RUFDRSxZQUFBO0F4Q201Q0o7O0F3Q2g1Q0U7RUFHRSx3Q0FEUTtBeENpNUNaOztBd0M3NUNFOzs7RUFHRSx5QkFBQTtBeENnNkNKOztBd0M3NUNFO0VBQ0UsWUFBQTtBeEMrNUNKOztBd0M1NUNFO0VBR0Usd0NBRFE7QXhDNjVDWjs7QXdDNTJDSTs7RUFDRSwwQ0E5QjJCO0F4Qzg0Q2pDOztBd0MzMkNJOzs7RUFHRSwwQ0FyQ3dCO0F4Q201QzlCOztBd0MxMkNNO0VBQ0UsMENBMUNzQjtBeENzNUM5Qjs7QXdDdDJDSTtFQUdFLDJDQURRO0F4Q3cyQ2Q7O0F3QzcxQ007O0VBRUUsdUJBN0RKO0F4QzQ1Q0o7O0F3QzMxQ1E7O0VBRUUsMENBakVOO0F4Qzg1Q0o7O0F3Q3YxQ007RUFDRSxzQ0E5RWlCO0VBK0VqQiw2QkFBQTtBeEN5MUNSOztBd0NwMUNRO0VBQ0Usc0NBcEZ1QjtBeEMwNkNqQzs7QXdDbjFDUTtFQUNFLHNDQXZGb0I7QXhDNDZDOUI7O0F3Qy8wQ0U7RUFDRSxzQ0F2RkE7QXhDeTZDSjs7QXdDejBDRTtFQUNFLHlJQUFBO0VBSUEsK0lBQUE7QXhDeTBDSjs7QXdDL3pDRTtFQUNFLDBJQUFBO0F4Q2swQ0o7O0F5Q2g5Q0k7RUFJRSwyQ0FBQTtBekNnOUNOOztBeUM3OENJO0VBQ0UsZUFBQTtBekMrOENOOztBeUN6OENJO0VBQ0U7SUFDRSxnQkFBQTtFekMyOENOO0FBQ0Y7O0F5Q3g4Q0k7O0VBSUUsK0JBQUE7QXpDdzhDTjs7QXlDcjhDSTtFQUdFLDBDQUFBO0VBQ0EsWUFBQTtBekNxOENOOztBeUNsOENJOzs7RUFHRSx5QkFBQTtFQUNBLFlBQUE7QXpDbzhDTjs7QXlDaDhDTTtFQUNFLFlBQUE7QXpDazhDUjs7QXlDLzdDTTs7O0VBR0UseUJBQUE7RUFDQSxZQUFBO0F6Q2k4Q1I7O0F5QzU3Q007RUFDRSxZQUFBO0F6Qzg3Q1I7O0F5QzM3Q007OztFQUdFLHlCQUFBO0VBQ0EsWUFBQTtBekM2N0NSOztBeUN6N0NJO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0F6QzI3Q047O0F5Q3g3Q0k7RUFDRSxZQUFBO0F6QzA3Q047O0F5Q3Y3Q0k7RUFDRSxjQUFBO0F6Q3k3Q047O0F5Q3I3Q0U7RUFDRSx5QkFBQTtBekN3N0NKOztBeUNyN0NFO0VBQ0UsNENBQUE7QXpDdzdDSjs7QXlDcjdDRTs7O0VBR0UsMkNBQUE7QXpDdzdDSjs7QXlDLzRDSTtFQUNFLFlBTks7QXpDdzVDWDs7QXlDLzRDSTs7RUFFRSxrQkFBQTtBekNrNUNOOztBeUM3NENJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QXpDZzVDTjs7QXlDMzRDTTtFQUNFLFNBQUE7QXpDODRDUjs7QXlDejRDSTtFQUNFLFNBQUE7QXpDNDRDTjs7QTBDampERTtFQVlJLGNBQUE7QTFDeWlETjs7QTJDampERTs7RUFFRSxrREFKYztBM0N3akRsQjs7QTJDaGpESTs7RUFFRSwrQ0FWWTtFQVdaLG1CQUFBO0EzQ21qRE47O0EyQy9pREU7RUFDRSxZQUFBO0EzQ2tqREo7O0EyQ2hqREk7RUFDRSwrQkFBQTtBM0NrakROOztBMkM5aURFO0VBQ0UsbUJBQUE7QTNDaWpESjs7QTJDOWlERTtFQUNFLHNDQUFBO0EzQ2lqREo7O0EyQzdpREU7O0VBRUUsbUJBQUE7RUFDQSxnQkFBQTtBM0NnakRKOztBMkNsZ0RNOzs7OztFQUNFLDBDQUFBO0EzQ3lnRFI7O0EyQ3BoREU7RUFDRSx5QkFBQTtBM0NzaERKOztBMkN2aERFO0VBQ0UsdUJBQUE7QTNDeWhESjs7QTJDaGhETTs7Ozs7RUFDRSwwQ0FBQTtBM0NzaERSOztBMkNqaURFO0VBQ0UseUJBQUE7QTNDbWlESjs7QTJDcGlERTtFQUNFLHVCQUFBO0EzQ3NpREo7O0EyQzdoRE07Ozs7O0VBQ0UsMENBQUE7QTNDbWlEUjs7QTJDOWlERTtFQUNFLHlCQUFBO0EzQ2dqREo7O0EyQ2pqREU7RUFDRSx1QkFBQTtBM0NtakRKOztBMkMxaURNOzs7OztFQUNFLDBDQUFBO0EzQ2dqRFI7O0EyQ3JpREU7RUFDRSx5QkFBQTtBM0N1aURKOztBMkNuaURFO0VBQ0UsWUFBQTtBM0NxaURKOztBMkNuaURJO0VBQ0UsK0JBQUE7QTNDcWlETjs7QTJDaGlERTs7Ozs7OztFQUlFLG1CQUFBO0EzQ3FpREo7O0EyQ2xpREU7OztFQUVFLHNDQUFBO0EzQ3FpREo7O0EyQ2hpREU7Ozs7O0VBR0UsMkNBQUE7QTNDb2lESjs7QTJDL2tETTs7Ozs7RUFDRSwwQ0FBQTtBM0NxbERSOztBMkMxa0RFO0VBQ0UseUJBQUE7QTNDNGtESjs7QTJDeGtERTtFQUNFLFlBQUE7QTNDMGtESjs7QTJDeGtESTtFQUNFLCtCQUFBO0EzQzBrRE47O0EyQ3JrREU7Ozs7Ozs7RUFJRSxtQkFBQTtBM0Mwa0RKOztBMkN2a0RFOzs7RUFFRSxzQ0FBQTtBM0Mwa0RKOztBMkNya0RFOzs7OztFQUdFLDJDQUFBO0EzQ3lrREo7O0EyQ3BuRE07Ozs7O0VBQ0UsMENBQUE7QTNDMG5EUjs7QTJDL21ERTtFQUNFLHlCQUFBO0EzQ2luREo7O0EyQzdtREU7RUFDRSxZQUFBO0EzQyttREo7O0EyQzdtREk7RUFDRSwrQkFBQTtBM0MrbUROOztBMkMxbURFOzs7Ozs7O0VBSUUsbUJBQUE7QTNDK21ESjs7QTJDNW1ERTs7O0VBRUUsc0NBQUE7QTNDK21ESjs7QTJDMW1ERTs7Ozs7RUFHRSwyQ0FBQTtBM0M4bURKOztBNENwc0RFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0E1Q3VzREo7O0E0Q3JzREk7RUFwQ0YsbUJBQUE7RUFDQSxZQUFBO0E1QzR1REY7O0E0Q3JzREk7RUF4Q0YsbUJBQUE7RUFDQSxZQUFBO0E1Q2d2REY7O0E0Q3JzREk7RUE1Q0YsbUJBQUE7RUFDQSxZQUFBO0E1Q292REY7O0E0Q2h2REU7OztFQUdFLDhCQUFBO0E1Q2t2REo7O0E0Qy91REU7Ozs7O0VBS0UsY0FBQTtBNUNpdkRKOztBNEM5dURFO0VBQ0UseUJBQUE7QTVDZ3ZESjs7QTRDN3dERTtFQUNFLGdCQTZFZTtBNUNtc0RuQjs7QTRDOXdERTtFQUNFLFlBMEVlO0E1Q3VzRG5COztBNEMzckRJO0VBMUZGO0lBQ0UsZ0JBK0VjO0U1QzBzRGhCOztFNEN2eERBO0lBQ0UsWUE0RWM7RTVDOHNEaEI7QUFDRjs7QTZDcnhERTtFQUNFLGlDQUFBO0E3Q3V4REo7O0E4Qy94REU7RUFDRSxtQkFBQTtBOUNreURKOztBOEMveERFOztFQUVFLFlBQUE7QTlDa3lESjs7QThDMXdESTtFQUNFLGdCQUxLO0E5Q2t4RFg7O0ErQzV5REU7RUFHRSwwQkFBQTtFQUNBLG1CQUFBO0UxQzZJRiwySEFBQTtBTGlxREY7O0ErQ3p5REU7RUFDRSxjQUFBO0EvQzR5REo7O0FBaDBEQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBbTBERjs7QUFsMERFO0VBQ0Usc0NBQUE7VUFBQSw4QkFBQTtBQW8wREo7O0FBbDBERTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQW8wREo7O0FBbDBERTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQW8wREo7O0FBbDBERTtFQUNFLDJEQUFBO0FBbzBESjs7QUFsMERFO0VBQ0UsMkRBQUE7QUFvMERKOztBQWwwREU7RUFDRSwyREFBQTtBQW8wREo7O0FBbDBERTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQW8wREo7O0FBbjBESTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBcTBETjs7QUFwMERNO0VBQ0Usa0JBQUE7QUFzMERSOztBQWwwREU7RUFDRSwyREFBQTtBQW8wREo7O0FBbDBERTtFQUNFLDJEQUFBO0FBbzBESjs7QUFsMERFO0VBQ0UsMkRBQUE7QUFvMERKOztBQWwwREU7RUFDRSwyREFBQTtBQW8wREo7O0FBbDBERTtFQUNFLDJEQUFBO0FBbzBESjs7QUFsMERFO0VBQ0UsNERBQUE7QUFvMERKOztBQS96REk7RUFDRSx3Q0FBQTtBQWkwRE47O0FBbDBESTtFQUNFLHNDQUFBO0FBbzBETjs7QUFyMERJO0VBQ0Usd0NBQUE7QUF1MEROOztBQXgwREk7RUFDRSxzQ0FBQTtBQTAwRE47O0FBMzBESTtFQUNFLHdDQUFBO0FBNjBETjs7QUE5MERJO0VBQ0Usc0NBQUE7QUFnMUROOztBQWoxREk7RUFDRSx3Q0FBQTtBQW0xRE47O0FBcDFESTtFQUNFLHNDQUFBO0FBczFETjs7QUF2MURJO0VBQ0UsdUNBQUE7QUF5MUROOztBQTExREk7RUFDRSxtQ0FBQTtBQTQxRE47O0FBejFERTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsc0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQTAxREo7O0FBejFESTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBMjFETjs7QUF4MURNO0VBQ0UsMENBQUE7RUFDQSxzQ0FBQTtBQTAxRFI7O0FBejFEUTtFQUNFLDZCQUFBO0FBMjFEVjs7QUF4MURNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTAxRFI7O0FBejFEUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUEyMURWOztBQXgxRE07RUFDRSxvQkFBQTtBQTAxRFI7O0FBeDFETTtFQUNFLGdCQUFBO0FBMDFEUjs7QUF4MURNO0VBQ0Usa0JBQUE7QUEwMURSOztBQXoxRFE7RUFDRSxrQkFBQTtBQTIxRFY7O0FBejFEUTs7RUFFRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQTIxRFY7O0FBejFEUTtFQUNFLGNBQUE7QUEyMURWOztBQXgxRE07O0VBRUUsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQTAxRFI7O0FBejFEUTs7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUE0MURWOztBQXoxRE07RUFDRSxlQUFBO0VBQ0EsMkJBQUE7QUEyMURSOztBQXoxRE07RUFDRSxrQkFBQTtBQTIxRFI7O0FBejFETTtFQUNFLHlCQUFBO0FBMjFEUjs7QUF6MURNO0VBQ0UseUJBQUE7QUEyMURSOztBQXoxRE07RUFDRSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FBMjFEUjs7QUF6MURNO0VBQ0UsZ0JBQUE7QUEyMURSOztBQXYxRE07RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBeTFEUjs7QUF2MURNO0VBQ0UseUJnRC9IUTtFaERnSVIsV0FBQTtFQUNBLGFBQUE7QUF5MURSOztBQWwxREE7RUFFSTtJQUNFLDBCQUFBO0VBbzFESjtFQWwxREU7SUFDRSxvQkFBQTtFQW8xREo7RUFuMURJO0lBQ0UsNEJBQUE7SUFDQSx5QkFBQTtFQXExRE47RUFsMURFO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFQW8xREo7RUFqMURJO0lBQ0Usd0JBQUE7RUFtMUROO0FBQ0YiLCJmaWxlIjoibGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICcuLi90aGVtaW5nL3RoZW1pbmcnO1xuXG4vLyBDb2xvcnMgZm9yIHRoZSByaXBwbGUgZWxlbWVudHMuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkZm9yZWdyb3VuZC1iYXNlOiBtYXAuZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgJGNvbG9yLW9wYWNpdHk6IDAuMTtcblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAvLyBJZiB0aGUgcmlwcGxlIGNvbG9yIGlzIHJlc29sdmVzIHRvIGEgY29sb3IgKnR5cGUqLCB3ZSBjYW4gdXNlIGl0IGRpcmVjdGx5LCBvdGhlcndpc2VcbiAgICAvLyAoZS5nLiBpdCByZXNvbHZlcyB0byBhIENTUyB2YXJpYWJsZSkgd2UgZmFsbCBiYWNrIHRvIHVzaW5nIHRoZSBjb2xvciBhbmQgc2V0dGluZyBhbiBvcGFjaXR5LlxuICAgIEBpZiAobWV0YS50eXBlLW9mKCRmb3JlZ3JvdW5kLWJhc2UpID09IGNvbG9yKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRmb3JlZ3JvdW5kLWJhc2UsICRjb2xvci1vcGFjaXR5KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZvcmVncm91bmQtYmFzZTtcbiAgICAgIG9wYWNpdHk6ICRjb2xvci1vcGFjaXR5O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtcmlwcGxlJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICB9XG59XG4iLCIubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuXG4ubWF0LW9wdGlvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtb3B0aW9uOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksIC5tYXQtb3B0aW9uOmZvY3VzOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpO1xufVxuLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSk6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCk7XG59XG4ubWF0LW9wdGlvbi5tYXQtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC1vcHRpb24ubWF0LW9wdGlvbi1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi5tYXQtcHJpbWFyeSAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gIGNvbG9yOiAjOTkwMDljO1xufVxuXG4ubWF0LWFjY2VudCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gIGNvbG9yOiAjMmU3ZDMyO1xufVxuXG4ubWF0LXdhcm4gLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICBjb2xvcjogI2M2MjgyODtcbn1cblxuLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG5cbi5tYXQtb3B0Z3JvdXAtZGlzYWJsZWQgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi5tYXQtcHNldWRvLWNoZWNrYm94IHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cbi5tYXQtcHNldWRvLWNoZWNrYm94OjphZnRlciB7XG4gIGNvbG9yOiAjMzAzMDMwO1xufVxuXG4ubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCB7XG4gIGNvbG9yOiAjNjg2ODY4O1xufVxuXG4ubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbi5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgYmFja2dyb3VuZDogIzk5MDA5Yztcbn1cblxuLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbi5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsXG4ubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gIGJhY2tncm91bmQ6ICMyZTdkMzI7XG59XG5cbi5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICBiYWNrZ3JvdW5kOiAjYzYyODI4O1xufVxuXG4ubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQsXG4ubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjNjg2ODY4O1xufVxuXG4ubWF0LWFwcC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejEge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MiB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXozIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejQge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejUge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDVweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejYge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXo3IHtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA3cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDJweCAxNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16OCB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejkge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDlweCAxMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggM3B4IDE2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxMCB7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggNnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTBweCAxNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNHB4IDE4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxMSB7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggN3B4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTFweCAxNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNHB4IDIwcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxMiB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDIycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxMyB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTNweCAxOXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDI0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxNCB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggOXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTRweCAyMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDI2cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxNSB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggOXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTVweCAyMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNnB4IDI4cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxNiB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MTcge1xuICBib3gtc2hhZG93OiAwcHggOHB4IDExcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxN3B4IDI2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMzJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejE4IHtcbiAgYm94LXNoYWRvdzogMHB4IDlweCAxMXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMThweCAyOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggN3B4IDM0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxOSB7XG4gIGJveC1zaGFkb3c6IDBweCA5cHggMTJweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE5cHggMjlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDdweCAzNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MjAge1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxM3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjBweCAzMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOHB4IDM4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoyMSB7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyMXB4IDMzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA4cHggNDBweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejIyIHtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTRweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDIycHggMzVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDhweCA0MnB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MjMge1xuICBib3gtc2hhZG93OiAwcHggMTFweCAxNHB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjNweCAzNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOXB4IDQ0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoyNCB7XG4gIGJveC1zaGFkb3c6IDBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC10aGVtZS1sb2FkZWQtbWFya2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1hdC1hdXRvY29tcGxldGUtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcikge1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xufVxuLm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcik6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hdC1iYWRnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1hdC1iYWRnZS1oaWRkZW4gLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubmctYW5pbWF0ZS1kaXNhYmxlZCAubWF0LWJhZGdlLWNvbnRlbnQsXG4ubWF0LWJhZGdlLWNvbnRlbnQuX21hdC1hbmltYXRpb24tbm9vcGFibGUge1xuICB0cmFuc2l0aW9uOiBub25lO1xufVxuXG4ubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cbi5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHRvcDogLThweDtcbn1cbi5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJvdHRvbTogLThweDtcbn1cbi5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiAtMTZweDtcbn1cbltkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IC0xNnB4O1xufVxuLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IC0xNnB4O1xufVxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAtMTZweDtcbn1cbi5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiAtOHB4O1xufVxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLThweDtcbn1cbi5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtOHB4O1xufVxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAtOHB4O1xufVxuXG4ubWF0LWJhZGdlLW1lZGl1bSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cbi5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB0b3A6IC0xMXB4O1xufVxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJvdHRvbTogLTExcHg7XG59XG4ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC0yMnB4O1xufVxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IC0yMnB4O1xufVxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtMjJweDtcbn1cbltkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC0yMnB4O1xufVxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiAtMTFweDtcbn1cbltkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtMTFweDtcbn1cbi5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogLTExcHg7XG59XG5bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAtMTFweDtcbn1cblxuLm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHRvcDogLTE0cHg7XG59XG4ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBib3R0b206IC0xNHB4O1xufVxuLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC0yOHB4O1xufVxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLTI4cHg7XG59XG4ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogLTI4cHg7XG59XG5bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC0yOHB4O1xufVxuLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC0xNHB4O1xufVxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLTE0cHg7XG59XG4ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogLTE0cHg7XG59XG5bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC0xNHB4O1xufVxuXG4ubWF0LWJhZGdlLWNvbnRlbnQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICM5OTAwOWM7XG59XG4uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIG91dGxpbmU6IHNvbGlkIDFweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLm1hdC1iYWRnZS1hY2NlbnQgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzJlN2QzMjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWJhZGdlLXdhcm4gLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjYzYyODI4O1xufVxuXG4ubWF0LWJhZGdlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICM2ZTZlNmU7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtYnV0dG9uLCAubWF0LWljb24tYnV0dG9uLCAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm1hdC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkge1xuICBjb2xvcjogIzk5MDA5Yztcbn1cbi5tYXQtYnV0dG9uLm1hdC1hY2NlbnQsIC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50IHtcbiAgY29sb3I6ICMyZTdkMzI7XG59XG4ubWF0LWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2FybiB7XG4gIGNvbG9yOiAjYzYyODI4O1xufVxuLm1hdC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1idXR0b24ubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LWJ1dHRvbi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuLm1hdC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkwMDljO1xufVxuLm1hdC1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU3ZDMyO1xufVxuLm1hdC1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzYyODI4O1xufVxuLm1hdC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LWljb24tYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5tYXQtYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtaWNvbi1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1zdHJva2VkLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgb3BhY2l0eTogMC4xO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG59XG5cbi5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoLm1hdC1idXR0b24tZGlzYWJsZWQpIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufVxuXG4ubWF0LWZsYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xufVxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LWZhYi5tYXQtcHJpbWFyeSwgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQsIC5tYXQtZmFiLm1hdC1hY2NlbnQsIC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1mYWIubWF0LXdhcm4sIC5tYXQtbWluaS1mYWIubWF0LXdhcm4ge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtZmxhdC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtZmFiLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtZmFiLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1mYWIubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1mYWIubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtbWluaS1mYWIubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LW1pbmktZmFiLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtbWluaS1mYWIubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cbi5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1mYWIubWF0LXByaW1hcnksIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkwMDljO1xufVxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCwgLm1hdC1mYWIubWF0LWFjY2VudCwgLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlN2QzMjtcbn1cbi5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1mYWIubWF0LXdhcm4sIC5tYXQtbWluaS1mYWIubWF0LXdhcm4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzYyODI4O1xufVxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LWZsYXQtYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LWZhYi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LWZhYi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtZmFiLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtZmFiLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1taW5pLWZhYi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LW1pbmktZmFiLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LWZhYi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1mYWIubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbi5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtbWluaS1mYWIubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwgLm1hdC1mbGF0LWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoLm1hdC1idXR0b24tZGlzYWJsZWQpOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWZhYjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwgLm1hdC1taW5pLWZhYjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5tYXQtZmFiOm5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLCAubWF0LW1pbmktZmFiOm5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMHB4IDdweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxMnB4IDE3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA1cHggMjJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5tYXQtZmFiLm1hdC1idXR0b24tZGlzYWJsZWQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksIC5tYXQtbWluaS1mYWIubWF0LWJ1dHRvbi1kaXNhYmxlZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUsXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLm1hdC1idXR0b24tdG9nZ2xlIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICM0MjQyNDI7XG59XG4ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICBib3JkZXItbGVmdDogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG5cbltkaXI9cnRsXSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWJ1dHRvbi10b2dnbGUtdmVydGljYWwgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cbi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xufVxuLm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xufVxuXG4ubWF0LWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LWNhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLm1hdC1jYXJkLm1hdC1jYXJkLWZsYXQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG5cbi5tYXQtY2hlY2tib3gtZnJhbWUge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cblxuLm1hdC1jaGVja2JveC1jaGVja21hcmsge1xuICBmaWxsOiAjMzAzMDMwO1xufVxuXG4ubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcbiAgc3Ryb2tlOiAjMzAzMDMwICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY2hlY2tib3gtbWl4ZWRtYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcbn1cblxuLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTAwOWM7XG59XG4ubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTdkMzI7XG59XG4ubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M2MjgyODtcbn1cblxuLm1hdC1jaGVja2JveC1kaXNhYmxlZC5tYXQtY2hlY2tib3gtY2hlY2tlZCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsIC5tYXQtY2hlY2tib3gtZGlzYWJsZWQubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4Njg2ODtcbn1cbi5tYXQtY2hlY2tib3gtZGlzYWJsZWQ6bm90KC5tYXQtY2hlY2tib3gtY2hlY2tlZCkgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gIGJvcmRlci1jb2xvcjogIzY4Njg2ODtcbn1cbi5tYXQtY2hlY2tib3gtZGlzYWJsZWQgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG5cbi5tYXQtY2hlY2tib3ggLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4ubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQ6ICM5OTAwOWM7XG59XG4ubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCxcbi5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kOiAjMmU3ZDMyO1xufVxuLm1hdC1jaGVja2JveC1jaGVja2VkOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LFxuLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kOiAjYzYyODI4O1xufVxuXG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2MTYxO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAgLm1hdC1jaGlwLXJlbW92ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC40O1xufVxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggM3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXA6bm90KC5tYXQtY2hpcC1kaXNhYmxlZCkgLm1hdC1jaGlwLXJlbW92ZTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNTQ7XG59XG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXA6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTAwOWM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjQ7XG59XG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNjI4Mjg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjQ7XG59XG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlN2QzMjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnQgLm1hdC1jaGlwLXJlbW92ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC40O1xufVxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLm1hdC10YWJsZSB7XG4gIGJhY2tncm91bmQ6ICM0MjQyNDI7XG59XG5cbi5tYXQtdGFibGUgdGhlYWQsIC5tYXQtdGFibGUgdGJvZHksIC5tYXQtdGFibGUgdGZvb3QsXG5tYXQtaGVhZGVyLXJvdywgbWF0LXJvdywgbWF0LWZvb3Rlci1yb3csXG5bbWF0LWhlYWRlci1yb3ddLCBbbWF0LXJvd10sIFttYXQtZm9vdGVyLXJvd10sXG4ubWF0LXRhYmxlLXN0aWNreSB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbm1hdC1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtZm9vdGVyLXJvdyxcbnRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGwge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuXG4ubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtY2FsZW5kYXItYXJyb3cge1xuICBmaWxsOiB3aGl0ZTtcbn1cblxuLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSxcbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sXG4ubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlci1kaXZpZGVyOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQsXG4ubWF0LWRhdGUtcmFuZ2UtaW5wdXQtc2VwYXJhdG9yIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZGF0ZS1yYW5nZS1pbnB1dC1zZXBhcmF0b3Ige1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktaW4tcHJldmlldyB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCkge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxNTMsIDAsIDE1NiwgMC4yKTtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLFxuLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2U6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAxNzEsIDAsIDAuMik7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3JlLFxuW2Rpcj1ydGxdIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1lbmQ6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgxNTMsIDAsIDE1NiwgMC4yKSA1MCUsIHJnYmEoMjQ5LCAxNzEsIDAsIDAuMikgNTAlKTtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3JlLFxuW2Rpcj1ydGxdIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMTUzLCAwLCAxNTYsIDAuMikgNTAlLCByZ2JhKDI0OSwgMTcxLCAwLCAwLjIpIDUwJSk7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZSA+IC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCxcbi5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNhOGRhYjU7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCxcbi5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogIzQ2YTM1ZTtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5MDA5YztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgMCwgMTU2LCAwLjQpO1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggd2hpdGU7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKSxcbi5jZGsta2V5Ym9hcmQtZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKSxcbi5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDAsIDE1NiwgMC4zKTtcbn1cblxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktaW4tcmFuZ2U6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNDYsIDEyNSwgNTAsIDAuMik7XG59XG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCxcbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2U6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAxNzEsIDAsIDAuMik7XG59XG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3JlLFxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCBbZGlyPXJ0bF0gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDQ2LCAxMjUsIDUwLCAwLjIpIDUwJSwgcmdiYSgyNDksIDE3MSwgMCwgMC4yKSA1MCUpO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmUsXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IFtkaXI9cnRsXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2Utc3RhcnQ6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDQ2LCAxMjUsIDUwLCAwLjIpIDUwJSwgcmdiYSgyNDksIDE3MSwgMCwgMC4yKSA1MCUpO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktaW4tcmFuZ2UgPiAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwsXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNhOGRhYjU7XG59XG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCxcbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2UgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjNDZhMzVlO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU3ZDMyO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDYsIDEyNSwgNTAsIDAuNCk7XG59XG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB3aGl0ZTtcbn1cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6bm90KC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXIgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpLFxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAuY2RrLWtleWJvYXJkLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCksXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NiwgMTI1LCA1MCwgMC4zKTtcbn1cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxOTgsIDQwLCA0MCwgMC4yKTtcbn1cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCxcbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMTcxLCAwLCAwLjIpO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLXN0YXJ0OjpiZWZvcmUsXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiBbZGlyPXJ0bF0gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDE5OCwgNDAsIDQwLCAwLjIpIDUwJSwgcmdiYSgyNDksIDE3MSwgMCwgMC4yKSA1MCUpO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3JlLFxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gW2Rpcj1ydGxdIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMTk4LCA0MCwgNDAsIDAuMikgNTAlLCByZ2JhKDI0OSwgMTcxLCAwLCAwLjIpIDUwJSk7XG59XG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktaW4tcmFuZ2UgPiAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwsXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZS5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjYThkYWI1O1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkLFxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2UgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjNDZhMzVlO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M2MjgyODtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTgsIDQwLCA0MCwgMC40KTtcbn1cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB3aGl0ZTtcbn1cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKSxcbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5jZGsta2V5Ym9hcmQtZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKSxcbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTgsIDQwLCA0MCwgMC4zKTtcbn1cblxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQtdG91Y2gge1xuICBib3gtc2hhZG93OiAwcHggMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlIHtcbiAgY29sb3I6ICM5OTAwOWM7XG59XG4ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZS5tYXQtYWNjZW50IHtcbiAgY29sb3I6ICMyZTdkMzI7XG59XG4ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZS5tYXQtd2FybiB7XG4gIGNvbG9yOiAjYzYyODI4O1xufVxuXG4ubWF0LWRhdGUtcmFuZ2UtaW5wdXQtaW5uZXJbZGlzYWJsZWRdIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtZGl2aWRlciB7XG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG5cbi5tYXQtZGl2aWRlci12ZXJ0aWNhbCB7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtYWN0aW9uLXJvdyB7XG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLCAubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLCAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpO1xufVxuXG5AbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKTpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzQyNDI0MjtcbiAgfVxufVxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24sXG4ubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0ge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gIGhlaWdodDogNDhweDtcbn1cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5tYXQtZXhwYW5kZWQge1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG5cbi5tYXQtaGludCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG5cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogIzk5MDA5Yztcbn1cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWFjY2VudCB7XG4gIGNvbG9yOiAjMmU3ZDMyO1xufVxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtd2FybiB7XG4gIGNvbG9yOiAjYzYyODI4O1xufVxuXG4ubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gIGNvbG9yOiAjMmU3ZDMyO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5MDA5Yztcbn1cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU3ZDMyO1xufVxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LXdhcm4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzYyODI4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICBjb2xvcjogIzk5MDA5Yztcbn1cbi5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgY29sb3I6ICMyZTdkMzI7XG59XG4ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICBjb2xvcjogI2M2MjgyODtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6ICNjNjI4Mjg7XG59XG4ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWFjY2VudCxcbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgY29sb3I6ICNjNjI4Mjg7XG59XG4ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M2MjgyODtcbn1cblxuLm1hdC1lcnJvciB7XG4gIGNvbG9yOiAjYzYyODI4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWhpbnQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgMzMlLCB0cmFuc3BhcmVudCAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogNHB4IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDMzJSwgdHJhbnNwYXJlbnQgMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjOTkwMDljO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6ICMyZTdkMzI7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6ICNjNjI4Mjg7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjYzYyODI4O1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xufVxuXG4ubWF0LWljb24ubWF0LXByaW1hcnkge1xuICBjb2xvcjogIzk5MDA5Yztcbn1cbi5tYXQtaWNvbi5tYXQtYWNjZW50IHtcbiAgY29sb3I6ICMyZTdkMzI7XG59XG4ubWF0LWljb24ubWF0LXdhcm4ge1xuICBjb2xvcjogI2M2MjgyODtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG5cbi5tYXQtaW5wdXQtZWxlbWVudDpkaXNhYmxlZCxcbi5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4ubWF0LWlucHV0LWVsZW1lbnQge1xuICBjYXJldC1jb2xvcjogIzk5MDA5Yztcbn1cbi5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLm1hdC1pbnB1dC1lbGVtZW50OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5tYXQtaW5wdXQtZWxlbWVudDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG4ubWF0LWlucHV0LWVsZW1lbnQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5tYXQtaW5wdXQtZWxlbWVudCBvcHRpb24ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5tYXQtaW5wdXQtZWxlbWVudCBvcHRpb246ZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLm1hdC1hY2NlbnQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY2FyZXQtY29sb3I6ICMyZTdkMzI7XG59XG5cbi5tYXQtZm9ybS1maWVsZC5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnQsXG4ubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQge1xuICBjYXJldC1jb2xvcjogI2M2MjgyODtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgY29sb3I6ICNjNjI4Mjg7XG59XG5cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtbGlzdC1iYXNlIC5tYXQtc3ViaGVhZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cblxuLm1hdC1saXN0LWl0ZW0tZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLm1hdC1saXN0LW9wdGlvbjpob3ZlciwgLm1hdC1saXN0LW9wdGlvbjpmb2N1cyxcbi5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW06aG92ZXIsXG4ubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3VzLFxuLm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbTpob3Zlcixcbi5tYXQtYWN0aW9uLWxpc3QgLm1hdC1saXN0LWl0ZW06Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpO1xufVxuXG4ubWF0LWxpc3Qtc2luZ2xlLXNlbGVjdGVkLW9wdGlvbiwgLm1hdC1saXN0LXNpbmdsZS1zZWxlY3RlZC1vcHRpb246aG92ZXIsIC5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbn1cblxuLm1hdC1tZW51LXBhbmVsIHtcbiAgYmFja2dyb3VuZDogIzQyNDI0Mjtcbn1cbi5tYXQtbWVudS1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LW1lbnUtaXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LW1lbnUtaXRlbVtkaXNhYmxlZF0sXG4ubWF0LW1lbnUtaXRlbVtkaXNhYmxlZF0gLm1hdC1tZW51LXN1Ym1lbnUtaWNvbixcbi5tYXQtbWVudS1pdGVtW2Rpc2FibGVkXSAubWF0LWljb24tbm8tY29sb3Ige1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4ubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsXG4ubWF0LW1lbnUtc3VibWVudS1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LW1lbnUtaXRlbTpob3Zlcjpub3QoW2Rpc2FibGVkXSksXG4ubWF0LW1lbnUtaXRlbS5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSxcbi5tYXQtbWVudS1pdGVtLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSxcbi5tYXQtbWVudS1pdGVtLWhpZ2hsaWdodGVkOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCk7XG59XG5cbi5tYXQtcGFnaW5hdG9yIHtcbiAgYmFja2dyb3VuZDogIzQyNDI0Mjtcbn1cblxuLm1hdC1wYWdpbmF0b3IsXG4ubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG5cbi5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbi5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XG59XG5cbi5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LFxuLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50LFxuLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItZmlyc3QsXG4ubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1sYXN0IHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi5tYXQtcGFnaW5hdG9yLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDU2cHg7XG59XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICBmaWxsOiAjNGEyNDRiO1xufVxuXG4ubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGEyNDRiO1xufVxuXG4ubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTAwOWM7XG59XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gIGZpbGw6ICMzMDQzMzE7XG59XG4ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDQzMzE7XG59XG4ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlN2QzMjtcbn1cblxuLm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gIGZpbGw6ICM1NjJlMmU7XG59XG4ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTYyZTJlO1xufVxuLm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzYyODI4O1xufVxuXG4ubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLCAubWF0LXNwaW5uZXIgY2lyY2xlIHtcbiAgc3Ryb2tlOiAjOTkwMDljO1xufVxuLm1hdC1wcm9ncmVzcy1zcGlubmVyLm1hdC1hY2NlbnQgY2lyY2xlLCAubWF0LXNwaW5uZXIubWF0LWFjY2VudCBjaXJjbGUge1xuICBzdHJva2U6ICMyZTdkMzI7XG59XG4ubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LXdhcm4gY2lyY2xlLCAubWF0LXNwaW5uZXIubWF0LXdhcm4gY2lyY2xlIHtcbiAgc3Ryb2tlOiAjYzYyODI4O1xufVxuXG4ubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogIzk5MDA5Yztcbn1cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5OmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5MDA5Yztcbn1cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICMyZTdkMzI7XG59XG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50OmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlN2QzMjtcbn1cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjYzYyODI4O1xufVxuLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwgLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4ubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwgLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm46YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzYyODI4O1xufVxuLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLFxuLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCxcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLm1hdC1yYWRpby1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LXNlbGVjdC12YWx1ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hdC1zZWxlY3QtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4ubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC12YWx1ZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi5tYXQtc2VsZWN0LWFycm93IHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cblxuLm1hdC1zZWxlY3QtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xufVxuLm1hdC1zZWxlY3QtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5tYXQtc2VsZWN0LXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgY29sb3I6ICM5OTAwOWM7XG59XG4ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LWFjY2VudCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiAjMmU3ZDMyO1xufVxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC13YXJuIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgY29sb3I6ICNjNjI4Mjg7XG59XG4ubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1pbnZhbGlkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgY29sb3I6ICNjNjI4Mjg7XG59XG4ubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hdC1kcmF3ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LWRyYXdlci5tYXQtZHJhd2VyLXB1c2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xufVxuLm1hdC1kcmF3ZXI6bm90KC5tYXQtZHJhd2VyLXNpZGUpIHtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNnB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZHJhd2VyLXNpZGUge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufVxuLm1hdC1kcmF3ZXItc2lkZS5tYXQtZHJhd2VyLWVuZCB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG5bZGlyPXJ0bF0gLm1hdC1kcmF3ZXItc2lkZSB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuW2Rpcj1ydGxdIC5tYXQtZHJhd2VyLXNpZGUubWF0LWRyYXdlci1lbmQge1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbn1cblxuLm1hdC1kcmF3ZXItYmFja2Ryb3AubWF0LWRyYXdlci1zaG93biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg5LCAxODksIDE4OSwgMC42KTtcbn1cblxuLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU3ZDMyO1xufVxuLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NiwgMTI1LCA1MCwgMC41NCk7XG59XG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlN2QzMjtcbn1cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5MDA5Yztcbn1cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCAwLCAxNTYsIDAuNTQpO1xufVxuLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTAwOWM7XG59XG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNjI4Mjg7XG59XG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5OCwgNDAsIDQwLCAwLjU0KTtcbn1cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzYyODI4O1xufVxuLm1hdC1zbGlkZS10b2dnbGU6bm90KC5tYXQtY2hlY2tlZCkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7XG59XG5cbi5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cblxuLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4ubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWIsXG4ubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkwMDljO1xufVxuLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCAwLCAxNTYsIDAuMik7XG59XG5cbi5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4ubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYixcbi5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlN2QzMjtcbn1cbi5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LWFjY2VudCAubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NiwgMTI1LCA1MCwgMC4yKTtcbn1cblxuLm1hdC13YXJuIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4ubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWIsXG4ubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzYyODI4O1xufVxuLm1hdC13YXJuIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LXdhcm4gLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk4LCA0MCwgNDAsIDAuMik7XG59XG5cbi5tYXQtc2xpZGVyOmhvdmVyIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsXG4ubWF0LXNsaWRlci5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuXG4ubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLFxuLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbi5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuLm1hdC1zbGlkZXItZGlzYWJsZWQ6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cblxuLm1hdC1zbGlkZXItbWluLXZhbHVlIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufVxuLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyAubWF0LXNsaWRlci10aHVtYixcbi5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWIsXG4ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKSAubWF0LXNsaWRlci10aHVtYiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIgLm1hdC1zbGlkZXItdGh1bWIsIC5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cbi5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiwgLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKS5jZGstZm9jdXNlZC5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbi5tYXQtc2xpZGVyLWhhcy10aWNrcyAubWF0LXNsaWRlci13cmFwcGVyOjphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuXG4ubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgMnB4LCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgwLjAwMDFkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xufVxuXG4ubWF0LXNsaWRlci12ZXJ0aWNhbCAubWF0LXNsaWRlci10aWNrcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAycHgsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbn1cblxuLm1hdC1zdGVwLWhlYWRlci5jZGsta2V5Ym9hcmQtZm9jdXNlZCwgLm1hdC1zdGVwLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkLCAubWF0LXN0ZXAtaGVhZGVyOmhvdmVyOm5vdChbYXJpYS1kaXNhYmxlZF0pLCAubWF0LXN0ZXAtaGVhZGVyOmhvdmVyW2FyaWEtZGlzYWJsZWQ9ZmFsc2VdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KTtcbn1cbi5tYXQtc3RlcC1oZWFkZXI6aG92ZXJbYXJpYS1kaXNhYmxlZD10cnVlXSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbkBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgLm1hdC1zdGVwLWhlYWRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxufVxuLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwsXG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1vcHRpb25hbCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxuLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLFxuLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5MDA5YztcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC1zdGVwLWhlYWRlci5tYXQtYWNjZW50IC5tYXQtc3RlcC1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC1zdGVwLWhlYWRlci5tYXQtYWNjZW50IC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxuLm1hdC1zdGVwLWhlYWRlci5tYXQtYWNjZW50IC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG4ubWF0LXN0ZXAtaGVhZGVyLm1hdC1hY2NlbnQgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTdkMzI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtc3RlcC1oZWFkZXIubWF0LXdhcm4gLm1hdC1zdGVwLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LXN0ZXAtaGVhZGVyLm1hdC13YXJuIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxuLm1hdC1zdGVwLWhlYWRlci5tYXQtd2FybiAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLFxuLm1hdC1zdGVwLWhlYWRlci5tYXQtd2FybiAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M2MjgyODtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2M2MjgyODtcbn1cbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgY29sb3I6ICNjNjI4Mjg7XG59XG5cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsLCAubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xufVxuXG4ubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3JlIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG5cbi5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YmVmb3JlLFxuLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjphZnRlcixcbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufVxuXG4ubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIge1xuICBoZWlnaHQ6IDcycHg7XG59XG5cbi5tYXQtc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20gLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLFxuLm1hdC12ZXJ0aWNhbC1zdGVwcGVyLWhlYWRlciB7XG4gIHBhZGRpbmc6IDI0cHggMjRweDtcbn1cblxuLm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZSB7XG4gIHRvcDogLTE2cHg7XG4gIGJvdHRvbTogLTE2cHg7XG59XG5cbi5tYXQtc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20gLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjphZnRlciwgLm1hdC1zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbSAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmJlZm9yZSB7XG4gIHRvcDogMzZweDtcbn1cblxuLm1hdC1zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbSAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lIHtcbiAgdG9wOiAzNnB4O1xufVxuXG4ubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcbiAgY29sb3I6ICNjNmM2YzY7XG59XG5cbi5tYXQtdGFiLW5hdi1iYXIsXG4ubWF0LXRhYi1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbn1cblxuLm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyIC5tYXQtdGFiLW5hdi1iYXIsXG4ubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItaGVhZGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLm1hdC10YWItZ3JvdXBbY2xhc3MqPW1hdC1iYWNrZ3JvdW5kLV0gPiAubWF0LXRhYi1oZWFkZXIsXG4ubWF0LXRhYi1uYXYtYmFyW2NsYXNzKj1tYXQtYmFja2dyb3VuZC1dIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNCwgMTc5LCAyMjUsIDAuMyk7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5MDA5Yztcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC1pbmstYmFyLCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeS5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMzAsIDIwMSwgMC4zKTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlN2QzMjtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItaGVhZGVyIC5tYXQtaW5rLWJhciwgLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMDUsIDIxMCwgMC4zKTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtaW5rLWJhciwgLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzYyODI4O1xufVxuLm1hdC10YWItZ3JvdXAubWF0LXdhcm4ubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlciAubWF0LWluay1iYXIsIC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4ubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlciAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4ubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtaW5rLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjQsIDE3OSwgMjI1LCAwLjMpO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24sIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItbGluay1jb250YWluZXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5MDA5Yztcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LXRhYi1saW5rLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtdGFiLWxpbmsge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItaGVhZGVyIC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC1mb2N1cy1pbmRpY2F0b3I6OmJlZm9yZSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC1mb2N1cy1pbmRpY2F0b3I6OmJlZm9yZSwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItaGVhZGVyIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC1mb2N1cy1pbmRpY2F0b3I6OmJlZm9yZSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWhlYWRlciAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbixcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbixcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC1yaXBwbGUtZWxlbWVudCxcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LXJpcHBsZS1lbGVtZW50LFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXJpcHBsZS1lbGVtZW50LFxuLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC1yaXBwbGUtZWxlbWVudCxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMzAsIDIwMSwgMC4zKTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItbGluay1jb250YWluZXIsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTdkMzI7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtdGFiLWxpbmssIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItaGVhZGVyIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtdGFiLWxpbmsge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbixcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItaGVhZGVyIC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItaGVhZGVyIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUsXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWhlYWRlciAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbixcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItaGVhZGVyIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LXJpcHBsZS1lbGVtZW50LFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24gLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC1yaXBwbGUtZWxlbWVudCxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC1yaXBwbGUtZWxlbWVudCxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjA1LCAyMTAsIDAuMyk7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItbGluay1jb250YWluZXIsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzYyODI4O1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtdGFiLWxpbmssIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC10YWItbGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyIC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbixcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlciAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbixcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyIC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXJpcHBsZS1lbGVtZW50LFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24gLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LXJpcHBsZS1lbGVtZW50LFxuLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG5cbi5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICMyMTIxMjE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICM5OTAwOWM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtdG9vbGJhci5tYXQtYWNjZW50IHtcbiAgYmFja2dyb3VuZDogIzJlN2QzMjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC10b29sYmFyLm1hdC13YXJuIHtcbiAgYmFja2dyb3VuZDogI2M2MjgyODtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsXG4ubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbi5tYXQtdG9vbGJhciAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbn1cbi5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4ubWF0LXRvb2xiYXIgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbi5tYXQtdG9vbGJhciAubWF0LXNlbGVjdC12YWx1ZSxcbi5tYXQtdG9vbGJhciAubWF0LXNlbGVjdC1hcnJvdyxcbi5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5tYXQtdG9vbGJhciAubWF0LWlucHV0LWVsZW1lbnQge1xuICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xufVxuXG4ubWF0LXRvb2xiYXItbXVsdGlwbGUtcm93cyB7XG4gIG1pbi1oZWlnaHQ6IDY0cHg7XG59XG5cbi5tYXQtdG9vbGJhci1yb3csIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLm1hdC10b29sYmFyLW11bHRpcGxlLXJvd3Mge1xuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XG4gIH1cblxuICAubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICB9XG59XG4ubWF0LXRvb2x0aXAge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDk3LCA5NywgOTcsIDAuOSk7XG59XG5cbi5tYXQtdHJlZSB7XG4gIGJhY2tncm91bmQ6ICM0MjQyNDI7XG59XG5cbi5tYXQtdHJlZS1ub2RlLFxuLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LXRyZWUtbm9kZSB7XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG59XG5cbi5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uYXBwLWxhbmRpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODExOTQ7XG4gIC8qIFBBUkFMTEFYICovXG59XG4uYXBwLWxhbmRpbmcgLmFuaW1hdGVkIHtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYmFja3dhcmRzO1xufVxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheCB7XG4gIHBlcnNwZWN0aXZlOiAxMDBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG4gIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcbn1cbi5hcHAtbGFuZGluZyAucGFyYWxsYXgtbGF5ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5hcHAtbGFuZGluZyAucGFyYWxsYXgtbGF5ZXItMSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3BhcmFsbGF4L2xheWVyMS5wbmdcIik7XG59XG4uYXBwLWxhbmRpbmcgLnBhcmFsbGF4LWxheWVyLTIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9wYXJhbGxheC9sYXllcjIucG5nXCIpO1xufVxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheC1sYXllci0zIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvcGFyYWxsYXgvbGF5ZXIzLnBuZ1wiKTtcbn1cbi5hcHAtbGFuZGluZyAucGFyYWxsYXgtbGF5ZXItNCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheC1sYXllci00IC5sYW5kaW5nLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hcHAtbGFuZGluZyAucGFyYWxsYXgtbGF5ZXItNCAubGFuZGluZy10aXRsZSAubWF0LWRpc3BsYXktNCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5hcHAtbGFuZGluZyAucGFyYWxsYXgtbGF5ZXItNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3BhcmFsbGF4L2xheWVyNS5wbmdcIik7XG59XG4uYXBwLWxhbmRpbmcgLnBhcmFsbGF4LWxheWVyLTYge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9wYXJhbGxheC9sYXllcjYucG5nXCIpO1xufVxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheC1sYXllci03IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvcGFyYWxsYXgvbGF5ZXI3LnBuZ1wiKTtcbn1cbi5hcHAtbGFuZGluZyAucGFyYWxsYXgtbGF5ZXItOCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3BhcmFsbGF4L2xheWVyOC5wbmdcIik7XG59XG4uYXBwLWxhbmRpbmcgLnBhcmFsbGF4LWxheWVyLTkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9wYXJhbGxheC9sYXllcjkucG5nXCIpO1xufVxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheC1sYXllci0xMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3BhcmFsbGF4L2xheWVyMTAucG5nXCIpO1xufVxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheC1sYXllci0xIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC00NTBweCkgc2NhbGUoNS41KTtcbn1cbi5hcHAtbGFuZGluZyAucGFyYWxsYXgtbGF5ZXItMiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtNDAwcHgpIHNjYWxlKDUpO1xufVxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheC1sYXllci0zIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0zNTBweCkgc2NhbGUoNC41KTtcbn1cbi5hcHAtbGFuZGluZyAucGFyYWxsYXgtbGF5ZXItNCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwcHgpIHNjYWxlKDQpO1xufVxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheC1sYXllci01IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yNTBweCkgc2NhbGUoMy41KTtcbn1cbi5hcHAtbGFuZGluZyAucGFyYWxsYXgtbGF5ZXItNiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjAwcHgpIHNjYWxlKDMpO1xufVxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheC1sYXllci03IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xNTBweCkgc2NhbGUoMi41KTtcbn1cbi5hcHAtbGFuZGluZyAucGFyYWxsYXgtbGF5ZXItOCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTAwcHgpIHNjYWxlKDIpO1xufVxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheC1sYXllci05IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC01MHB4KSBzY2FsZSgxLjUpO1xufVxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheC1sYXllci0xMCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHNjYWxlKDEpO1xufVxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MGQyNTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4uYXBwLWxhbmRpbmcgLnBhcmFsbGF4LWNvbnRlbnQgLndyYXBwZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXgtd2lkdGg6IDEwODBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xufVxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheC1jb250ZW50IC5hcHAtbGFuZGluZy1jb250ZW50IC5sZWdlbmRhcnkge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNXB4IGRhcmtnb2xkZW5yb2Q7XG4gIGJvcmRlci1jb2xvcjogZGFya2dvbGRlbnJvZCAhaW1wb3J0YW50O1xufVxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheC1jb250ZW50IC5hcHAtbGFuZGluZy1jb250ZW50IC5sZWdlbmRhcnkuZ29kLWF2YXRhciB7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xufVxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheC1jb250ZW50IC5hcHAtbGFuZGluZy1jb250ZW50IC5pbWFnZS1yZXNwb25zaXZlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYXBwLWxhbmRpbmcgLnBhcmFsbGF4LWNvbnRlbnQgLmFwcC1sYW5kaW5nLWNvbnRlbnQgLmltYWdlLXJlc3BvbnNpdmUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiAyNTZweDtcbn1cbi5hcHAtbGFuZGluZyAucGFyYWxsYXgtY29udGVudCAuYXBwLWxhbmRpbmctY29udGVudCBwIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG4uYXBwLWxhbmRpbmcgLnBhcmFsbGF4LWNvbnRlbnQgLmFwcC1sYW5kaW5nLWNvbnRlbnQgcCArIGltZyB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4uYXBwLWxhbmRpbmcgLnBhcmFsbGF4LWNvbnRlbnQgLmFwcC1sYW5kaW5nLWNvbnRlbnQgLmltYWdlLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYXBwLWxhbmRpbmcgLnBhcmFsbGF4LWNvbnRlbnQgLmFwcC1sYW5kaW5nLWNvbnRlbnQgLmltYWdlLXdyYXBwZXIgc3ZnIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheC1jb250ZW50IC5hcHAtbGFuZGluZy1jb250ZW50IC5pbWFnZS13cmFwcGVyIC5pbWFnZS1kZXNrdG9wLFxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheC1jb250ZW50IC5hcHAtbGFuZGluZy1jb250ZW50IC5pbWFnZS13cmFwcGVyIC5pbWFnZS1tb2JpbGUge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0yMHB4O1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cbi5hcHAtbGFuZGluZyAucGFyYWxsYXgtY29udGVudCAuYXBwLWxhbmRpbmctY29udGVudCAuaW1hZ2Utd3JhcHBlciAuaW1hZ2UtbW9iaWxlIHtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG4uYXBwLWxhbmRpbmcgLnBhcmFsbGF4LWNvbnRlbnQgLmFwcC1sYW5kaW5nLWNvbnRlbnQgLmltYWdlLWljb25zLFxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheC1jb250ZW50IC5hcHAtbGFuZGluZy1jb250ZW50IC5mYWN0aW9uLWljb25zIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheC1jb250ZW50IC5hcHAtbGFuZGluZy1jb250ZW50IC5pbWFnZS1pY29ucyBpbWcsXG4uYXBwLWxhbmRpbmcgLnBhcmFsbGF4LWNvbnRlbnQgLmFwcC1sYW5kaW5nLWNvbnRlbnQgLmZhY3Rpb24taWNvbnMgaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTkwMDljO1xuICBtYXJnaW46IDEwcHg7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheC1jb250ZW50IC5hcHAtbGFuZGluZy1jb250ZW50IC5mYWN0aW9uLWljb25zIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG59XG4uYXBwLWxhbmRpbmcgLnBhcmFsbGF4LWNvbnRlbnQgLmFwcC1sYW5kaW5nLWNvbnRlbnQgLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hcHAtbGFuZGluZyAucGFyYWxsYXgtY29udGVudCAuYXBwLWxhbmRpbmctY29udGVudCBoMS5tYXQtaDEge1xuICBtYXJnaW46IDE2cHggMCAhaW1wb3J0YW50O1xufVxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheC1jb250ZW50IC5hcHAtbGFuZGluZy1jb250ZW50IGgxLm1hdC1kaXNwbGF5LTMubWFyZ2VuZWQge1xuICBtYXJnaW46IDY0cHggMCAhaW1wb3J0YW50O1xufVxuLmFwcC1sYW5kaW5nIC5wYXJhbGxheC1jb250ZW50IC5hcHAtbGFuZGluZy1jb250ZW50IC5tYXQtZGlzcGxheS0zOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjOTkwMDljO1xuICB3aWR0aDogMjAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDIwcHggYXV0byBhdXRvIGF1dG87XG59XG4uYXBwLWxhbmRpbmcgLnBhcmFsbGF4LWNvbnRlbnQgLmFwcC1sYW5kaW5nLWNvbnRlbnQgLnBsYXktYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5hcHAtbGFuZGluZyAucGFyYWxsYXgtY29udGVudCAuYXBwLWxhbmRpbmctZm9vdGVyIHN2ZyB7XG4gIG1hcmdpbi1ib3R0b206IC01cHg7XG4gIG1hcmdpbi10b3A6IC0yMDBweDtcbn1cbi5hcHAtbGFuZGluZyAucGFyYWxsYXgtY29udGVudCAuYXBwLWxhbmRpbmctZm9vdGVyIC5yZXRyaWJ1dGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTAwOWM7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuYXBwLWxhbmRpbmcgLnBhcmFsbGF4IHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbiAgfVxuICAuYXBwLWxhbmRpbmcgLmxhbmRpbmctdGl0bGUge1xuICAgIHRvcDogMTBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5hcHAtbGFuZGluZyAubGFuZGluZy10aXRsZSAubWF0LWRpc3BsYXktNCB7XG4gICAgZm9udC1zaXplOiAzLjVyZW0gIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xuICB9XG4gIC5hcHAtbGFuZGluZyAuZmFjdGlvbi1pY29ucyBpbWcge1xuICAgIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFwcC1sYW5kaW5nIC5hcHAtbGFuZGluZy1mb290ZXIgc3ZnIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn0iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLmdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLmdldCgkY29uZmlnLCB3YXJuKTtcblxuICAubWF0LW9wdGlvbiB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksXG4gICAgJjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIEluIG11bHRpcGxlIG1vZGUgdGhlcmUgaXMgYSBjaGVja2JveCB0byBzaG93IHRoYXQgdGhlIG9wdGlvbiBpcyBzZWxlY3RlZC5cbiAgICAmLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtb3B0aW9uLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5LCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhY2NlbnQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LW9wdGlvbiB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgICAgc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1vcHRpb24nKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtb3B0Z3JvdXAtZGlzYWJsZWQgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5LXV0aWxzLnR5cG9ncmFwaHktbGV2ZWwoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxufVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LW9wdGdyb3VwJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uLy4uL3RoZW1pbmcvdGhlbWluZyc7XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC5nZXQoJGNvbmZpZywgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcblxuICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBXaGlsZSB0aGUgc3BlYyBjYWxscyBmb3IgdHJhbnNsdWNlbnQgYmxhY2tzL3doaXRlcyBmb3IgZGlzYWJsZWQgY29sb3JzLFxuICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGVsZW1lbnRzIGxheWVyZWQgb24gdG9wIG9mIG9uZSBhbm90aGVyLiBUbyBnZXQgYXJvdW5kIHRoaXMgd2VcbiAgLy8gYmxlbmQgdGhlIGNvbG9ycyB0b2dldGhlciBiYXNlZCBvbiB0aGUgYmFzZSBjb2xvciBhbmQgdGhlIHRoZW1lIGJhY2tncm91bmQuXG4gICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcms6ICM2ODY4Njg7XG4gICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0OiAjYjBiMGIwO1xuICAkZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrLCAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodCk7XG4gICRjb2xvcmVkLWJveC1zZWxlY3RvcjogJy5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUnO1xuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94IHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCksIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICBjb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUobWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KSk7XG4gIH1cblxuICAvLyBEZWZhdWx0IHRvIHRoZSBhY2NlbnQgY29sb3IuIE5vdGUgdGhhdCB0aGUgcHNldWRvIGNoZWNrYm94ZXMgYXJlIG1lYW50IHRvIGluaGVyaXQgdGhlXG4gIC8vIHRoZW1lIGZyb20gdGhlaXIgcGFyZW50LCByYXRoZXIgdGhhbiBpbXBsZW1lbnRpbmcgdGhlaXIgb3duIHRoZW1pbmcsIHdoaWNoIGlzIHdoeSB3ZVxuICAvLyBkb24ndCBhdHRhY2ggdG8gdGhlIGBtYXQtKmAgY2xhc3Nlcy4gQWxzbyBub3RlIHRoYXQgdGhpcyBuZWVkcyB0byBiZSBiZWxvdyBgLm1hdC1wcmltYXJ5YFxuICAvLyBpbiBvcmRlciB0byBhbGxvdyBmb3IgdGhlIGNvbG9yIHRvIGJlIG92ZXJ3cml0dGVuIGlmIHRoZSBjaGVja2JveCBpcyBpbnNpZGUgYSBwYXJlbnQgdGhhdFxuICAvLyBoYXMgYG1hdC1hY2NlbnRgIGFuZCBpcyBwbGFjZWQgaW5zaWRlIGFub3RoZXIgcGFyZW50IHRoYXQgaGFzIGBtYXQtcHJpbWFyeWAuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsXG4gIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZShtYXAuZ2V0KCRjb25maWcsIGFjY2VudCkpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUobWFwLmdldCgkY29uZmlnLCB3YXJuKSk7XG4gIH1cblxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICAmLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogJGRpc2FibGVkLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXBzZXVkby1jaGVja2JveCcpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICd0aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi9zdHlsZS9wcml2YXRlJztcbkB1c2UgJy4vcmlwcGxlL3JpcHBsZS10aGVtZSc7XG5AdXNlICcuL29wdGlvbi9vcHRpb24tdGhlbWUnO1xuQHVzZSAnLi9vcHRpb24vb3B0Z3JvdXAtdGhlbWUnO1xuQHVzZSAnLi9zZWxlY3Rpb24vcHNldWRvLWNoZWNrYm94L3BzZXVkby1jaGVja2JveC10aGVtZSc7XG5AdXNlICcuL3N0eWxlL2VsZXZhdGlvbic7XG5cblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAvLyBXcmFwcGVyIGVsZW1lbnQgdGhhdCBwcm92aWRlcyB0aGUgdGhlbWUgYmFja2dyb3VuZCB3aGVuIHRoZSB1c2VyJ3MgY29udGVudCBpc24ndFxuICAvLyBpbnNpZGUgb2YgYSBgbWF0LXNpZGVuYXYtY29udGFpbmVyYC4gTm90ZSB0aGF0IHdlIG5lZWQgdG8gZXhjbHVkZSB0aGUgYW1wZXJzYW5kXG4gIC8vIHNlbGVjdG9yIGluIGNhc2UgdGhlIG1peGluIGlzIGluY2x1ZGVkIGF0IHRoZSB0b3AgbGV2ZWwuXG4gIC5tYXQtYXBwLWJhY2tncm91bmQje2lmKCYsICcsICYubWF0LWFwcC1iYWNrZ3JvdW5kJywgJycpfSB7XG4gICAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLy8gUHJvdmlkZXMgZXh0ZXJuYWwgQ1NTIGNsYXNzZXMgZm9yIGVhY2ggZWxldmF0aW9uIHZhbHVlLiBFYWNoIENTUyBjbGFzcyBpcyBmb3JtYXR0ZWQgYXNcbiAgLy8gYG1hdC1lbGV2YXRpb24teiR6VmFsdWVgIHdoZXJlIGAkelZhbHVlYCBjb3JyZXNwb25kcyB0byB0aGUgei1zcGFjZSB0byB3aGljaCB0aGUgZWxlbWVudCBpc1xuICAvLyBlbGV2YXRlZC5cbiAgQGZvciAkelZhbHVlIGZyb20gMCB0aHJvdWdoIDI0IHtcbiAgICAuI3tlbGV2YXRpb24uJHByZWZpeH0jeyR6VmFsdWV9IHtcbiAgICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgLy8gTWFya2VyIHRoYXQgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgdXNlciBoYXMgYWRkZWQgYSB0aGVtZSB0byB0aGVpciBwYWdlLlxuICBAYXQtcm9vdCB7XG4gICAgLm1hdC10aGVtZS1sb2FkZWQtbWFya2VyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8vIE1peGluIHRoYXQgcmVuZGVycyBhbGwgb2YgdGhlIGNvcmUgc3R5bGVzIHRoYXQgZGVwZW5kIG9uIHRoZSB0aGVtZS5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIC8vIFdyYXAgdGhlIHN1Yi10aGVtZSBpbmNsdWRlcyBpbiB0aGUgZHVwbGljYXRlIHRoZW1lIHN0eWxlcyBtaXhpbi4gVGhpcyBlbnN1cmVzIHRoYXRcbiAgLy8gdGhlcmUgd29uJ3QgYmUgbXVsdGlwbGUgd2FybmluZ3MuIGUuZy4gaWYgYG1hdC1jb3JlLXRoZW1lYCByZXBvcnRzIGEgd2FybmluZywgdGhlblxuICAvLyB0aGUgaW1wb3J0ZWQgdGhlbWVzIChzdWNoIGFzIGBtYXQtcmlwcGxlLXRoZW1lYCkgc2hvdWxkIG5vdCByZXBvcnQgYWdhaW4uXG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1jb3JlJykge1xuICAgIEBpbmNsdWRlIHJpcHBsZS10aGVtZS50aGVtZSgkdGhlbWUpO1xuICAgIEBpbmNsdWRlIG9wdGlvbi10aGVtZS50aGVtZSgkdGhlbWUpO1xuICAgIEBpbmNsdWRlIG9wdGdyb3VwLXRoZW1lLnRoZW1lKCR0aGVtZSk7XG4gICAgQGluY2x1ZGUgcHNldWRvLWNoZWNrYm94LXRoZW1lLnRoZW1lKCR0aGVtZSk7XG5cbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptYXRoJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICd2YXJpYWJsZXMnO1xuXG5cbi8vIEEgY29sbGVjdGlvbiBvZiBtaXhpbnMgYW5kIENTUyBjbGFzc2VzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgZWxldmF0aW9uIHRvIGEgbWF0ZXJpYWxcbi8vIGVsZW1lbnQuXG4vLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2Vudmlyb25tZW50L2VsZXZhdGlvbi5odG1sXG4vLyBFeGFtcGxlczpcbi8vXG4vL1xuLy8gLm1hdC1mb28ge1xuLy8gICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbigyKTtcbi8vXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbig4KTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIDxkaXYgaWQ9XCJleHRlcm5hbC1jYXJkXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXoyXCI+PHA+U29tZSBjb250ZW50PC9wPjwvZGl2PlxuLy9cbi8vIEZvciBhbiBleHBsYW5hdGlvbiBvZiB0aGUgZGVzaWduIGJlaGluZCBob3cgZWxldmF0aW9uIGlzIGltcGxlbWVudGVkLCBzZWUgdGhlIGRlc2lnbiBkb2MgYXRcbi8vIGh0dHBzOi8vZ29vLmdsL0txMGs5Wi5cblxuLy8gQ29sb3JzIGZvciB1bWJyYSwgcGVudW1icmEsIGFuZCBhbWJpZW50IHNoYWRvd3MuIEFzIGRlc2NyaWJlZCBpbiB0aGUgZGVzaWduIGRvYywgZWFjaCBlbGV2YXRpb25cbi8vIGxldmVsIGlzIGNyZWF0ZWQgdXNpbmcgYSBzZXQgb2YgMyBzaGFkb3cgdmFsdWVzLCBvbmUgZm9yIHVtYnJhICh0aGUgc2hhZG93IHJlcHJlc2VudGluZyB0aGVcbi8vIHNwYWNlIGNvbXBsZXRlbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0IHJlbGF0aXZlIHRvIGl0cyBsaWdodCBzb3VyY2UpLCBvbmUgZm9yIHBlbnVtYnJhICh0aGVcbi8vIHNwYWNlIHBhcnRpYWxseSBvYnNjdXJlZCBieSBhbiBvYmplY3QpLCBhbmQgb25lIGZvciBhbWJpZW50ICh0aGUgc3BhY2Ugd2hpY2ggY29udGFpbnMgdGhlIG9iamVjdFxuLy8gaXRzZWxmKS4gRm9yIGEgZnVydGhlciBleHBsYW5hdGlvbiBvZiB0aGVzZSB0ZXJtcyBhbmQgdGhlaXIgbWVhbmluZ3MsIHNlZVxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW1icmEsX3BlbnVtYnJhX2FuZF9hbnR1bWJyYS5cblxuLy8gTWFwcyBmb3IgdGhlIGRpZmZlcmVudCBzaGFkb3cgc2V0cyBhbmQgdGhlaXIgdmFsdWVzIHdpdGhpbiBlYWNoIHotc3BhY2UuIFRoZXNlIHZhbHVlcyB3ZXJlXG4vLyBjcmVhdGVkIGJ5IHRha2luZyBhIGZldyByZWZlcmVuY2Ugc2hhZG93IHNldHMgY3JlYXRlZCBieSBHb29nbGUncyBEZXNpZ25lcnMgYW5kIGludGVycG9sYXRpbmdcbi8vIGFsbCBvZiB0aGUgdmFsdWVzIGJldHdlZW4gdGhlbS5cblxuQGZ1bmN0aW9uIF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYobWV0YS50eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDJweCAxcHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDNweCAxcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCAzcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDJweCA0cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDRweCA1cHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDVweCA1cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDVweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA2cHggNnB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNnB4IDdweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA3cHggOHB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggN3B4IDlweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDhweCA5cHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA4cHggMTBweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDhweCAxMXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggOXB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA5cHggMTJweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDEwcHggMTRweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDExcHggMTRweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDExcHggMTVweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKG1ldGEudHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDFweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAycHggMnB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCA0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggNHB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCA1cHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDZweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDdweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDhweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDlweCAxMnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCAxMHB4IDE0cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDExcHggMTVweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggMTJweCAxN3B4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCAxM3B4IDE5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDE0cHggMjFweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggMTVweCAyMnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCAxNnB4IDI0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDE3cHggMjZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggMThweCAyOHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCAxOXB4IDI5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDIwcHggMzFweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMjFweCAzM3B4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAyMnB4IDM1cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDIzcHggMzZweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMjRweCAzOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKG1ldGEudHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDNweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAxcHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDFweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMXB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggMXB4IDE0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggMXB4IDE4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggMnB4IDE2cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggM3B4IDE0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggM3B4IDE2cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDRweCAxOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA0cHggMjBweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggNXB4IDIycHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDVweCAyNHB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA1cHggMjZweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggNnB4IDI4cHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDZweCAzMHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA2cHggMzJweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggN3B4IDM0cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDdweCAzNnB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCA4cHggMzhweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggOHB4IDQwcHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDhweCA0MnB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCA5cHggNDRweCA4cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggOXB4IDQ2cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbi8vIFRoZSBkZWZhdWx0IGR1cmF0aW9uIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kdHJhbnNpdGlvbi1kdXJhdGlvbjogMjgwbXMgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IGVhc2luZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXJpYWJsZXMuJGZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uO1xuXG4vLyBUaGUgZGVmYXVsdCBjb2xvciBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kY29sb3I6IGJsYWNrICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBvcGFjaXR5IHNjYWxpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG9wYWNpdHk6IDEgIWRlZmF1bHQ7XG5cbi8vIFByZWZpeCBmb3IgZWxldmF0aW9uLXJlbGF0ZWQgc2VsZWN0b3JzLlxuJHByZWZpeDogJ21hdC1lbGV2YXRpb24teic7XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIHRvIGFuIGVsZW1lbnQgdG8gZ2l2ZSBpdCB0aGUgZWxldmF0aW9uIHNwZWNpZmllZCBieSAkelZhbHVlLlxuLy8gVGhlICR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0LlxuQG1peGluIGVsZXZhdGlvbigkelZhbHVlLCAkY29sb3I6ICRjb2xvciwgJG9wYWNpdHk6ICRvcGFjaXR5KSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHpWYWx1ZSkgIT0gbnVtYmVyIG9yIG5vdCBtYXRoLmlzLXVuaXRsZXNzKCR6VmFsdWUpIHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBhIHVuaXRsZXNzIG51bWJlcic7XG4gIH1cbiAgQGlmICR6VmFsdWUgPCAwIG9yICR6VmFsdWUgPiAyNCB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNCc7XG4gIH1cblxuICBib3gtc2hhZG93OiAje21hcC5nZXQoX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAuZ2V0KF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLmdldChfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX07XG59XG5cbi8vIEFwcGxpZXMgdGhlIGVsZXZhdGlvbiB0byBhbiBlbGVtZW50IGluIGEgbWFubmVyIHRoYXQgYWxsb3dzXG4vLyBjb25zdW1lcnMgdG8gb3ZlcnJpZGUgaXQgdmlhIHRoZSBNYXRlcmlhbCBlbGV2YXRpb24gY2xhc3Nlcy5cbkBtaXhpbiBvdmVycmlkYWJsZS1lbGV2YXRpb24oXG4gICAgJHpWYWx1ZSxcbiAgICAkY29sb3I6ICRjb2xvcixcbiAgICAkb3BhY2l0eTogJG9wYWNpdHkpIHtcbiAgJjpub3QoW2NsYXNzKj0nI3skcHJlZml4fSddKSB7XG4gICAgQGluY2x1ZGUgZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvciwgJG9wYWNpdHkpO1xuICB9XG59XG5cbi8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgdHJhbnNpdGlvbiBwcm9wZXJ0eSBmb3IgZWxldmF0aW9uLlxuLy8gQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIGRpcmVjdGx5IGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIHdoZXJlIGEgY29tcG9uZW50IG5lZWRzIHRvIHRyYW5zaXRpb25cbi8vIG1vcmUgdGhhbiBvbmUgcHJvcGVydHkuXG4vL1xuLy8gLmZvbyB7XG4vLyAgIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgpLCBvcGFjaXR5IDEwMG1zIGVhc2U7XG4vLyB9XG5AZnVuY3Rpb24gcHJpdmF0ZS10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKFxuICAgICRkdXJhdGlvbjogJHRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIEByZXR1cm4gYm94LXNoYWRvdyAjeyRkdXJhdGlvbn0gI3skZWFzaW5nfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgbmVlZGVkIHRvIGhhdmUgYW4gZWxlbWVudCB0cmFuc2l0aW9uIGJldHdlZW4gZWxldmF0aW9ucy5cbi8vIFRoaXMgbWl4aW4gc2hvdWxkIGJlIGFwcGxpZWQgdG8gZWxlbWVudHMgd2hvc2UgZWxldmF0aW9uIHZhbHVlcyB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlaXJcbi8vIGNvbnRleHQgKGUuZy4gd2hlbiBhY3RpdmUgb3IgZGlzYWJsZWQpLlxuLy9cbi8vIE5PVEUodHJhdmlza2F1Zm1hbik6IEJvdGggdGhpcyBtaXhpbiBhbmQgdGhlIGFib3ZlIGZ1bmN0aW9uIHVzZSBkZWZhdWx0IHBhcmFtZXRlcnMgc28gdGhleSBjYW5cbi8vIGJlIHVzZWQgaW4gdGhlIHNhbWUgd2F5IGJ5IGNsaWVudHMuXG5AbWl4aW4gZWxldmF0aW9uLXRyYW5zaXRpb24oXG4gICAgJGR1cmF0aW9uOiAkdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgdHJhbnNpdGlvbjogcHJpdmF0ZS10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCRkdXJhdGlvbiwgJGVhc2luZyk7XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3ByaXZhdGUnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCB7XG4gICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkY29uZmlnKTtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgLy8gU2VsZWN0ZWQgb3B0aW9ucyBpbiBhdXRvY29tcGxldGVzIHNob3VsZCBub3QgYmUgZ3JheSwgYnV0IHdlXG4gICAgLy8gb25seSB3YW50IHRvIG92ZXJyaWRlIHRoZSBiYWNrZ3JvdW5kIGZvciBzZWxlY3RlZCBvcHRpb25zIGlmXG4gICAgLy8gdGhleSBhcmUgKm5vdCogaW4gaG92ZXIgb3IgZm9jdXMgc3RhdGUuIFRoaXMgY2hhbmdlIGhhcyB0byBiZVxuICAgIC8vIG1hZGUgaGVyZSBiZWNhdXNlIGJhc2Ugb3B0aW9uIHN0eWxlcyBhcmUgc2hhcmVkIGJldHdlZW4gdGhlXG4gICAgLy8gYXV0b2NvbXBsZXRlIGFuZCB0aGUgc2VsZWN0LlxuICAgIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpIHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgY2FyZCk7XG5cbiAgICAgICY6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWF1dG9jb21wbGV0ZScpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBUaGlzIGNvbnRhaW5zIGFsbCBvZiB0aGUgc3R5bGVzIGZvciB0aGUgYmFkZ2Vcbi8vIHJhdGhlciB0aGFuIGp1c3QgdGhlIGNvbG9yL3RoZW1lIGJlY2F1c2Ugb2Zcbi8vIG5vIHN0eWxlIHNoZWV0IHN1cHBvcnQgZm9yIGRpcmVjdGl2ZXMuXG5AdXNlICdzYXNzOmNvbG9yJztcbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3ByaXZhdGUnO1xuQHVzZSAnLi4vLi4vY2RrL2ExMXknO1xuXG4kZm9udC1zaXplOiAxMnB4O1xuJGZvbnQtd2VpZ2h0OiA2MDA7XG4kZGVmYXVsdC1zaXplOiAyMnB4ICFkZWZhdWx0O1xuJHNtYWxsLXNpemU6ICRkZWZhdWx0LXNpemUgLSA2O1xuJGxhcmdlLXNpemU6ICRkZWZhdWx0LXNpemUgKyA2O1xuJF9iYWRnZS1zdHJ1Y3R1cmUtZW1pdHRlZDogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIE1peGluIGZvciBidWlsZGluZyBvZmZzZXQgZ2l2ZW4gZGlmZmVyZW50IHNpemVzXG5AbWl4aW4gX2JhZGdlLXNpemUoJHNpemUpIHtcbiAgLy8gVGhpcyBtaXhpbiBpc24ndCB1c2VkIGluIHRoZSBjb250ZXh0IG9mIGEgdGhlbWUgc28gd2UgY2FuIGRpc2FibGUgdGhlIGFtcGVyc2FuZCBjaGVjay5cbiAgLy8gc3R5bGVsaW50LWRpc2FibGUgbWF0ZXJpYWwvbm8tYW1wZXJzYW5kLWJleW9uZC1zZWxlY3Rvci1zdGFydFxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gICYubWF0LWJhZGdlLWFib3ZlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgdG9wOiBwcml2YXRlLnByaXZhdGUtZGl2KC0kc2l6ZSwgMik7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYmVsb3cge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBib3R0b206IHByaXZhdGUucHJpdmF0ZS1kaXYoLSRzaXplLCAyKTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBsZWZ0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIHJpZ2h0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICByaWdodDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICBsZWZ0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2Utb3ZlcmxhcCB7XG4gICAgJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIGxlZnQ6IHByaXZhdGUucHJpdmF0ZS1kaXYoLSRzaXplLCAyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgcmlnaHQ6IHByaXZhdGUucHJpdmF0ZS1kaXYoLSRzaXplLCAyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICByaWdodDogcHJpdmF0ZS5wcml2YXRlLWRpdigtJHNpemUsIDIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiBwcml2YXRlLnByaXZhdGUtZGl2KC0kc2l6ZSwgMik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIHN0eWxlbGludC1lbmFibGVcbn1cblxuLy8gU3RydWN0dXJhbCBzdHlsZXMgZm9yIHRoZSBiYWRnZS4gVGhleSBoYXZlIHRvIGJlIGluY2x1ZGVkIGFzIGEgcGFydCBvZiB0aGUgdGhlbWUsXG4vLyBiZWNhdXNlIHRoZSBiYWRnZSBpcyBhIGRpcmVjdGl2ZSBhbmQgd2UgaGF2ZSBubyBvdGhlciB3YXkgb2YgYXR0YWNoaW5nIHN0eWxlcyB0byBpdC5cbkBtaXhpbiBfYmFkZ2Utc3RydWN0dXJlIHtcbiAgLm1hdC1iYWRnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1oaWRkZW4ge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLm5nLWFuaW1hdGUtZGlzYWJsZWQgLm1hdC1iYWRnZS1jb250ZW50LFxuICAubWF0LWJhZGdlLWNvbnRlbnQuX21hdC1hbmltYXRpb24tbm9vcGFibGUge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICAvLyBUaGUgYWN0aXZlIGNsYXNzIGlzIGFkZGVkIGFmdGVyIHRoZSBlbGVtZW50IGlzIGFkZGVkXG4gIC8vIHNvIGl0IGNhbiBhbmltYXRlIHNjYWxlIHRvIGRlZmF1bHRcbiAgLm1hdC1iYWRnZS1jb250ZW50Lm1hdC1iYWRnZS1hY3RpdmUge1xuICAgIC8vIFNjYWxlIHRvIGBub25lYCBpbnN0ZWFkIG9mIGAxYCB0byBhdm9pZCBibHVycnkgdGV4dCBpbiBzb21lIGJyb3dzZXJzLlxuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2Utc21hbGwge1xuICAgIEBpbmNsdWRlIF9iYWRnZS1zaXplKCRzbWFsbC1zaXplKTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtbWVkaXVtIHtcbiAgICBAaW5jbHVkZSBfYmFkZ2Utc2l6ZSgkZGVmYXVsdC1zaXplKTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtbGFyZ2Uge1xuICAgIEBpbmNsdWRlIF9iYWRnZS1zaXplKCRsYXJnZS1zaXplKTtcbiAgfVxufVxuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHByaW1hcnkpO1xuXG4gICAgQGluY2x1ZGUgYTExeS5oaWdoLWNvbnRyYXN0KGFjdGl2ZSwgb2ZmKSB7XG4gICAgICBvdXRsaW5lOiBzb2xpZCAxcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtYWNjZW50IHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhY2NlbnQpO1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLXdhcm4ge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2Fybik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1kaXNhYmxlZCB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICRhcHAtYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCAnYmFja2dyb3VuZCcpO1xuICAgICAgJGJhZGdlLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG5cbiAgICAgIC8vIFRoZSBkaXNhYmxlZCBjb2xvciB1c3VhbGx5IGhhcyBzb21lIGtpbmQgb2Ygb3BhY2l0eSwgYnV0IGJlY2F1c2UgdGhlIGJhZGdlIGlzIG92ZXJsYXllZFxuICAgICAgLy8gb24gdG9wIG9mIHNvbWV0aGluZyBlbHNlLCBpdCB3b24ndCBsb29rIGdvb2QgaWYgaXQncyBvcGFxdWUuIElmIGl0IGlzIGEgY29sb3IgKnR5cGUqLFxuICAgICAgLy8gd2UgY29udmVydCBpdCBpbnRvIGEgc29saWQgY29sb3IgYnkgdGFraW5nIHRoZSBvcGFjaXR5IGZyb20gdGhlIHJnYmEgdmFsdWUgYW5kIHVzaW5nXG4gICAgICAvLyB0aGUgdmFsdWUgdG8gZGV0ZXJtaW5lIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBiYWNrZ3JvdW5kIHRvIHB1dCBpbnRvIGZvcmVncm91bmQgd2hlblxuICAgICAgLy8gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuXG4gICAgICBAaWYgKG1ldGEudHlwZS1vZigkYmFkZ2UtY29sb3IpID09IGNvbG9yIGFuZCBtZXRhLnR5cGUtb2YoJGFwcC1iYWNrZ3JvdW5kKSA9PSBjb2xvcikge1xuICAgICAgICAkYmFkZ2Utb3BhY2l0eTogb3BhY2l0eSgkYmFkZ2UtY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvci5taXgoJGFwcC1iYWNrZ3JvdW5kLCByZ2JhKCRiYWRnZS1jb2xvciwgMSksICgxIC0gJGJhZGdlLW9wYWNpdHkpICogMTAwJSk7XG4gICAgICB9XG4gICAgICBAZWxzZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRiYWRnZS1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgICBmb250LXNpemU6ICRmb250LXNpemU7XG4gICAgZm9udC1mYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgLy8gU2V0IHRoZSBmb250IHNpemUgdG8gNzUlIG9mIHRoZSBvcmlnaW5hbC5cbiAgICBmb250LXNpemU6ICRmb250LXNpemUgKiAwLjc1O1xuICB9XG5cbiAgLm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDI7XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1iYWRnZScpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgLy8gVHJ5IHRvIHJlZHVjZSB0aGUgbnVtYmVyIG9mIHRpbWVzIHRoYXQgdGhlIHN0cnVjdHVyYWwgc3R5bGVzIGFyZSBlbWl0dGVkLlxuICAgIEBpZiBub3QgJF9iYWRnZS1zdHJ1Y3R1cmUtZW1pdHRlZCB7XG4gICAgICBAaW5jbHVkZSBfYmFkZ2Utc3RydWN0dXJlO1xuXG4gICAgICAvLyBPbmx5IGZsaXAgdGhlIGZsYWcgaWYgdGhlIG1peGluIGlzIGluY2x1ZGVkIGF0IHRoZSB0b3AgbGV2ZWwuIE90aGVyd2lzZSB0aGUgZmlyc3RcbiAgICAgIC8vIGluY2x1c2lvbiBtaWdodCBiZSBpbnNpZGUgb2YgYSB0aGVtZSBjbGFzcyB3aGljaCB3aWxsIGV4Y2x1ZGUgdGhlIHN0cnVjdHVyYWwgc3R5bGVzXG4gICAgICAvLyBmcm9tIGFsbCBvdGhlciB0aGVtZXMuXG4gICAgICBAaWYgbm90ICYge1xuICAgICAgICAkX2JhZGdlLXN0cnVjdHVyZS1lbWl0dGVkOiB0cnVlICFnbG9iYWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCIvLy8gRW1pdHMgYSBDU1MgY2xhc3MsIGAuY2RrLXZpc3VhbGx5LWhpZGRlbmAuIFRoaXMgY2xhc3MgY2FuIGJlIGFwcGxpZWQgdG8gYW4gZWxlbWVudFxuLy8vIHRvIG1ha2UgdGhhdCBlbGVtZW50IHZpc3VhbGx5IGhpZGRlbiB3aGlsZSByZW1haW5pbmcgYXZhaWxhYmxlIHRvIGFzc2l0aXZlIHRlY2hub2xvZ3kuXG5AbWl4aW4gYTExeS12aXN1YWxseS1oaWRkZW4oKSB7XG4gIC5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgICBib3JkZXI6IDA7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4O1xuXG4gICAgLy8gVGhpcyB3b3JrcyBhcm91bmQgYSBDaHJvbWUgYnVnIHRoYXQgY2FuIGNhdXNlIHRoZSB0YWIgdG8gY3Jhc2ggd2hlbiBsYXJnZSBhbW91bnRzIG9mXG4gICAgLy8gbm9uLUVuZ2xpc2ggdGV4dCBnZXQgd3JhcHBlZDogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTIwMTQ0NFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAvLyBBdm9pZCBicm93c2VycyByZW5kZXJpbmcgdGhlIGZvY3VzIHJpbmcgaW4gc29tZSBjYXNlcy5cbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgLy8gQXZvaWQgc29tZSBjYXNlcyB3aGVyZSB0aGUgYnJvd3NlciB3aWxsIHN0aWxsIHJlbmRlciB0aGUgbmF0aXZlIGNvbnRyb2xzIChzZWUgIzkwNDkpLlxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cbn1cblxuLy8vIEBkZXByZWNhdGVkIFVzZSBgYTExeS12aXN1YWxseS1oaWRkZW5gLlxuQG1peGluIGExMXkoKSB7XG4gIEBpbmNsdWRlIGExMXktdmlzdWFsbHktaGlkZGVuO1xufVxuXG4vLy8gRW1pdHMgdGhlIG1peGluJ3MgY29udGVudCBuZXN0ZWQgdW5kZXIgYCRzZWxlY3Rvci1jb250ZXh0YCBpZiBgJHNlbGVjdG9yLWNvbnRleHRgXG4vLy8gaXMgbm9uLWVtcHR5LlxuLy8vIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3Rvci1jb250ZXh0IFRoZSBzZWxlY3RvciB1bmRlciB3aGljaCB0byBuZXN0IHRoZSBtaXhpbidzIGNvbnRlbnQuXG5AbWl4aW4gX29wdGlvbmFsbHktbmVzdC1jb250ZW50KCRzZWxlY3Rvci1jb250ZXh0KSB7XG4gIEBpZiAoJHNlbGVjdG9yLWNvbnRleHQgPT0gJycpIHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAZWxzZSB7XG4gICAgI3skc2VsZWN0b3ItY29udGV4dH0ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vLyBBcHBsaWVzIHN0eWxlcyBmb3IgdXNlcnMgaW4gaGlnaCBjb250cmFzdCBtb2RlLiBOb3RlIHRoYXQgdGhpcyBvbmx5IGFwcGxpZXNcbi8vLyB0byBNaWNyb3NvZnQgYnJvd3NlcnMuIENocm9tZSBjYW4gYmUgaW5jbHVkZWQgYnkgY2hlY2tpbmcgZm9yIHRoZSBgaHRtbFtoY11gXG4vLy8gYXR0cmlidXRlLCBob3dldmVyIENocm9tZSBoYW5kbGVzIGhpZ2ggY29udHJhc3QgZGlmZmVyZW50bHkuXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gdGFyZ2V0IFR5cGUgb2YgaGlnaCBjb250cmFzdCBzZXR0aW5nIHRvIHRhcmdldC4gRGVmYXVsdHMgdG8gYGFjdGl2ZWAsIGNhbiBiZVxuLy8vICAgICBgd2hpdGUtb24tYmxhY2tgIG9yIGBibGFjay1vbi13aGl0ZWAuXG4vLy8gQHBhcmFtIHtTdHJpbmd9IGVuY2Fwc3VsYXRpb24gV2hldGhlciB0byBlbWl0IHN0eWxlcyBmb3IgdmlldyBlbmNhcHN1bGF0aW9uLiBWYWx1ZXMgYXJlOlxuLy8vICAgICAqIGBvbmAgLSB3b3JrcyBmb3IgYEVtdWxhdGVkYCwgYE5hdGl2ZWAsIGFuZCBgU2hhZG93RG9tYFxuLy8vICAgICAqIGBvZmZgIC0gd29ya3MgZm9yIGBOb25lYFxuLy8vICAgICAqIGBhbnlgIC0gd29ya3MgZm9yIGFsbCBlbmNhcHN1bGF0aW9uIG1vZGVzIGJ5IGVtaXR0aW5nIHRoZSBDU1MgdHdpY2UgKGRlZmF1bHQpLlxuQG1peGluIGhpZ2gtY29udHJhc3QoJHRhcmdldDogYWN0aXZlLCAkZW5jYXBzdWxhdGlvbjogJ2FueScpIHtcbiAgQGlmICgkdGFyZ2V0ICE9ICdhY3RpdmUnIGFuZCAkdGFyZ2V0ICE9ICdibGFjay1vbi13aGl0ZScgYW5kICR0YXJnZXQgIT0gJ3doaXRlLW9uLWJsYWNrJykge1xuICAgIEBlcnJvciAnVW5rbm93biBjZGstaGlnaC1jb250cmFzdCB2YWx1ZSBcIiN7JHRhcmdldH1cIiBwcm92aWRlZC4gJyArXG4gICAgICAgICAgICdBbGxvd2VkIHZhbHVlcyBhcmUgXCJhY3RpdmVcIiwgXCJibGFjay1vbi13aGl0ZVwiLCBhbmQgXCJ3aGl0ZS1vbi1ibGFja1wiJztcbiAgfVxuXG4gIEBpZiAoJGVuY2Fwc3VsYXRpb24gIT0gJ29uJyBhbmQgJGVuY2Fwc3VsYXRpb24gIT0gJ29mZicgYW5kICRlbmNhcHN1bGF0aW9uICE9ICdhbnknKSB7XG4gICAgQGVycm9yICdVbmtub3duIGNkay1oaWdoLWNvbnRyYXN0IGVuY2Fwc3VsYXRpb24gXCIjeyRlbmNhcHN1bGF0aW9ufVwiIHByb3ZpZGVkLiAnICtcbiAgICAgICAgICAgJ0FsbG93ZWQgdmFsdWVzIGFyZSBcIm9uXCIsIFwib2ZmXCIsIGFuZCBcImFueVwiJztcbiAgfVxuXG4gIC8vIElmIHRoZSBzZWxlY3RvciBjb250ZXh0IGhhcyBtdWx0aXBsZSBwYXJ0cywgc3VjaCBhcyBgLnNlY3Rpb24sIC5yZWdpb25gLCBqdXN0IGRvaW5nXG4gIC8vIGAuY2RrLWhpZ2gtY29udHJhc3QteHh4ICN7Jn1gIHdpbGwgb25seSBhcHBseSB0aGUgcGFyZW50IHNlbGVjdG9yIHRvIHRoZSBmaXJzdCBwYXJ0IG9mIHRoZVxuICAvLyBjb250ZXh0LiBXZSBhZGRyZXNzIHRoaXMgYnkgbmVzdGluZyB0aGUgc2VsZWN0b3IgY29udGV4dCB1bmRlciAuY2RrLWhpZ2gtY29udHJhc3QuXG4gIEBhdC1yb290IHtcbiAgICAkc2VsZWN0b3ItY29udGV4dDogI3smfTtcblxuICAgIEBpZiAoJGVuY2Fwc3VsYXRpb24gIT0gJ29uJykge1xuICAgICAgLy8gTm90ZSB0aGF0IGlmIHRoaXMgc2VsZWN0b3IgaXMgdXBkYXRlZCwgdGhlIHNhbWUgY2hhbmdlIGhhcyB0byBiZSBtYWRlIGluc2lkZVxuICAgICAgLy8gYF9vdmVybGF5LnNjc3NgIHdoaWNoIGNhbid0IGRlcGVuZCBvbiB0aGlzIG1peGluIGR1ZSB0byBzb21lIGluZnJhc3RydWN0dXJlIGxpbWl0YXRpb25zLlxuICAgICAgLmNkay1oaWdoLWNvbnRyYXN0LSN7JHRhcmdldH0ge1xuICAgICAgICBAaW5jbHVkZSBfb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAoJGVuY2Fwc3VsYXRpb24gIT0gJ29mZicpIHtcbiAgICAgIC5jZGstaGlnaC1jb250cmFzdC0jeyR0YXJnZXR9IDpob3N0IHtcbiAgICAgICAgQGluY2x1ZGUgX29wdGlvbmFsbHktbmVzdC1jb250ZW50KCRzZWxlY3Rvci1jb250ZXh0KSB7XG4gICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvcHJpdmF0ZSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLWVsZXZhdGlvbigxNiwgJGNvbmZpZyk7XG4gICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgdHlwb2dyYXBoeS11dGlscy50eXBvZ3JhcGh5LWxldmVsKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1ib3R0b20tc2hlZXQnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptZXRhJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvcHJpdmF0ZSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5cbiRfcmlwcGxlLW9wYWNpdHk6IDAuMTtcblxuLy8gQXBwbGllcyBhIGZvY3VzIHN0eWxlIHRvIGFuIG1hdC1idXR0b24gZWxlbWVudCBmb3IgZWFjaCBvZiB0aGUgc3VwcG9ydGVkIHBhbGV0dGVzLlxuQG1peGluIF9mb2N1cy1vdmVybGF5LWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLmdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLmdldCgkY29uZmlnLCB3YXJuKTtcblxuICAmLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSk7XG4gIH1cblxuICAmLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhY2NlbnQpO1xuICB9XG5cbiAgJi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHdhcm4pO1xuICB9XG5cbiAgJi5tYXQtYnV0dG9uLWRpc2FibGVkIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbi8vIEFwcGxpZXMgdGhlIGJhY2tncm91bmQgY29sb3IgZm9yIGEgcmlwcGxlLiBJZiB0aGUgdmFsdWUgcHJvdmlkZWQgaXMgbm90IGEgU2FzcyBjb2xvcixcbi8vIHdlIGFzc3VtZSB0aGF0IHdlJ3ZlIGJlZW4gZ2l2ZW4gYSBDU1MgdmFyaWFibGUuIFNpbmNlIHdlIGNhbid0IHBlcmZvcm0gYWxwaGEtYmxlbmRpbmdcbi8vIG9uIGEgQ1NTIHZhcmlhYmxlLCB3ZSBpbnN0ZWFkIGFkZCB0aGUgb3BhY2l0eSBkaXJlY3RseSB0byB0aGUgcmlwcGxlIGVsZW1lbnQuXG5AbWl4aW4gX3JpcHBsZS1iYWNrZ3JvdW5kKCRwYWxldHRlLCAkaHVlLCAkb3BhY2l0eSkge1xuICAkYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwYWxldHRlLCAkaHVlLCAkb3BhY2l0eSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICBAaWYgKG1ldGEudHlwZS1vZigkYmFja2dyb3VuZC1jb2xvcikgIT0gY29sb3IpIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgfVxufVxuXG5AbWl4aW4gX3JpcHBsZS1jb2xvcigkdGhlbWUsICRodWUsICRvcGFjaXR5OiAkX3JpcHBsZS1vcGFjaXR5KSB7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLmdldCgkdGhlbWUsIHdhcm4pO1xuXG4gICYubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgQGluY2x1ZGUgX3JpcHBsZS1iYWNrZ3JvdW5kKCRwcmltYXJ5LCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cblxuICAmLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgQGluY2x1ZGUgX3JpcHBsZS1iYWNrZ3JvdW5kKCRhY2NlbnQsICRodWUsICRvcGFjaXR5KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgQGluY2x1ZGUgX3JpcHBsZS1iYWNrZ3JvdW5kKCR3YXJuLCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuLy8gQXBwbGllcyBhIHByb3BlcnR5IHRvIGFuIG1hdC1idXR0b24gZWxlbWVudCBmb3IgZWFjaCBvZiB0aGUgc3VwcG9ydGVkIHBhbGV0dGVzLlxuQG1peGluIF90aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICRwcm9wZXJ0eSwgJGh1ZSkge1xuICAkcHJpbWFyeTogbWFwLmdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAmLm1hdC1wcmltYXJ5IHtcbiAgICAjeyRwcm9wZXJ0eX06IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSwgJGh1ZSk7XG4gIH1cbiAgJi5tYXQtYWNjZW50IHtcbiAgICAjeyRwcm9wZXJ0eX06IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50LCAkaHVlKTtcbiAgfVxuICAmLm1hdC13YXJuIHtcbiAgICAjeyRwcm9wZXJ0eX06IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2FybiwgJGh1ZSk7XG4gIH1cblxuICAmLm1hdC1wcmltYXJ5LCAmLm1hdC1hY2NlbnQsICYubWF0LXdhcm4sICYubWF0LWJ1dHRvbi1kaXNhYmxlZCB7XG4gICAgJi5tYXQtYnV0dG9uLWRpc2FibGVkIHtcbiAgICAgICRwYWxldHRlOiBpZigkcHJvcGVydHkgPT0gJ2NvbG9yJywgJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKTtcbiAgICAgICN7JHByb3BlcnR5fTogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwYWxldHRlLCBkaXNhYmxlZC1idXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICAgIC8vIEJ1dHRvbnMgd2l0aG91dCBhIGJhY2tncm91bmQgY29sb3Igc2hvdWxkIGluaGVyaXQgdGhlIGZvbnQgY29sb3IuIFRoaXMgaXMgbmVjZXNzYXJ5IHRvXG4gICAgLy8gZW5zdXJlIHRoYXQgdGhlIGJ1dHRvbiBpcyByZWFkYWJsZSBvbiBjdXN0b20gYmFja2dyb3VuZCBjb2xvcnMuIEl0J3Mgd3JvbmcgdG8gYWx3YXlzIGFzc3VtZVxuICAgIC8vIHRoYXQgdGhvc2UgYnV0dG9ucyBhcmUgYWx3YXlzIHBsYWNlZCBpbnNpZGUgb2YgY29udGFpbmVycyB3aXRoIHRoZSBkZWZhdWx0IGJhY2tncm91bmRcbiAgICAvLyBjb2xvciBvZiB0aGUgdGhlbWUgKGUuZy4gdGhlbWVkIHRvb2xiYXJzKS5cbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgIEBpbmNsdWRlIF90aGVtZS1wcm9wZXJ0eSgkY29uZmlnLCAnY29sb3InLCB0ZXh0KTtcbiAgICBAaW5jbHVkZSBfZm9jdXMtb3ZlcmxheS1jb2xvcigkY29uZmlnKTtcblxuICAgIC8vIFNldHVwIHRoZSByaXBwbGUgY29sb3IgdG8gYmUgYmFzZWQgb24gdGhlIHRleHQgY29sb3IuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSByaXBwbGVzXG4gICAgLy8gYXJlIG1hdGNoaW5nIHdpdGggdGhlIGN1cnJlbnQgdGhlbWUgcGFsZXR0ZSBhbmQgYXJlIGluIGNvbnRyYXN0IHRvIHRoZSBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgLy8gKGUuZyBpbiB0aGVtZWQgdG9vbGJhcnMpLlxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgb3BhY2l0eTogJF9yaXBwbGUtb3BhY2l0eTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgfVxuXG4gIC8vIE5vdGU6IHRoaXMgbmVlZHMgYSBiaXQgZXh0cmEgc3BlY2lmaWNpdHksIGJlY2F1c2Ugd2UncmUgbm90IGd1YXJhbnRlZWQgdGhlIGluY2x1c2lvblxuICAvLyBvcmRlciBvZiB0aGUgdGhlbWUgc3R5bGVzIGFuZCB0aGUgYnV0dG9uIHJlc2V0IG1heSBlbmQgdXAgcmVzZXR0aW5nIHRoaXMgYXMgd2VsbC5cbiAgLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoLm1hdC1idXR0b24tZGlzYWJsZWQpIHtcbiAgICBib3JkZXItY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWZsYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICAvLyBEZWZhdWx0IGZvbnQgYW5kIGJhY2tncm91bmQgY29sb3Igd2hlbiBub3QgdXNpbmcgYW55IGNvbG9yIHBhbGV0dGUuXG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCByYWlzZWQtYnV0dG9uKTtcblxuICAgIEBpbmNsdWRlIF90aGVtZS1wcm9wZXJ0eSgkY29uZmlnLCAnY29sb3InLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICBAaW5jbHVkZSBfdGhlbWUtcHJvcGVydHkoJGNvbmZpZywgJ2JhY2tncm91bmQtY29sb3InLCBkZWZhdWx0KTtcbiAgICBAaW5jbHVkZSBfcmlwcGxlLWNvbG9yKCRjb25maWcsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1zdHJva2VkLWJ1dHRvbiwgLm1hdC1mbGF0LWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigyLCAkY29uZmlnKTtcblxuICAgICY6bm90KC5tYXQtYnV0dG9uLWRpc2FibGVkKTphY3RpdmUge1xuICAgICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig4LCAkY29uZmlnKTtcbiAgICB9XG5cbiAgICAmLm1hdC1idXR0b24tZGlzYWJsZWQge1xuICAgICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig2LCAkY29uZmlnKTtcblxuICAgICY6bm90KC5tYXQtYnV0dG9uLWRpc2FibGVkKTphY3RpdmUge1xuICAgICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigxMiwgJGNvbmZpZyk7XG4gICAgfVxuXG4gICAgJi5tYXQtYnV0dG9uLWRpc2FibGVkIHtcbiAgICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJGNvbmZpZyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24sXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMuZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1idXR0b24nKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9wcml2YXRlJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcbkB1c2UgJy4uL2NvcmUvZGVuc2l0eS9wcml2YXRlL2NvbXBhdGliaWxpdHknO1xuQHVzZSAnLi9idXR0b24tdG9nZ2xlLXZhcmlhYmxlcyc7XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZGl2aWRlci1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZSxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtZWxldmF0aW9uKDIsICRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBjYXJkKTtcblxuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgZm9jdXNlZC1idXR0b24sIDEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgfVxuXG4gIFtkaXI9J3J0bCddIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtYnV0dG9uLXRvZ2dsZS12ZXJ0aWNhbCB7XG4gICAgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIHNlbGVjdGVkLWJ1dHRvbik7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZCB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGRpc2FibGVkLWJ1dHRvbi10b2dnbGUpO1xuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgfVxuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBmb250LWZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5AbWl4aW4gZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRkZW5zaXR5LXNjYWxlOiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHN0YW5kYXJkLWhlaWdodDogY29tcGF0aWJpbGl0eS5wcml2YXRlLWRlbnNpdHktcHJvcC12YWx1ZShcbiAgICAgIGJ1dHRvbi10b2dnbGUtdmFyaWFibGVzLiRzdGFuZGFyZC1kZW5zaXR5LWNvbmZpZywgJGRlbnNpdHktc2NhbGUsIGhlaWdodCk7XG5cbiAgQGluY2x1ZGUgY29tcGF0aWJpbGl0eS5wcml2YXRlLWRlbnNpdHktbGVnYWN5LWNvbXBhdGliaWxpdHkoKSB7XG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xuICAgICAgbGluZS1oZWlnaHQ6ICRzdGFuZGFyZC1oZWlnaHQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1idXR0b24tdG9nZ2xlJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9wcml2YXRlJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcblxuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWNhcmQge1xuICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMSwgJGNvbmZpZyk7XG4gICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIE5lZWRzIGV4dHJhIHNwZWNpZmljaXR5IHRvIGJlIGFibGUgdG8gb3ZlcnJpZGUgdGhlIGVsZXZhdGlvbiBzZWxlY3RvcnMuXG4gICAgJi5tYXQtY2FyZC1mbGF0IHtcbiAgICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJGNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC1jYXJkIHtcbiAgICBmb250LWZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgaGVhZGxpbmUpO1xuICAgICAgd2VpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtd2VpZ2h0KCRjb25maWcsIHRpdGxlKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCB0aXRsZSk7XG4gIH1cblxuICAubWF0LWNhcmQtc3VidGl0bGUsXG4gIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgICBmb250LXNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1jYXJkJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcblxuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAuZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLmdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLmdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG5cbiAgLy8gVGhlIGNvbG9yIG9mIHRoZSBjaGVja2JveCdzIGNoZWNrbWFyayAvIG1peGVkbWFyay5cbiAgJGNoZWNrYm94LW1hcmstY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG5cbiAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogV2hpbGUgdGhlIHNwZWMgY2FsbHMgZm9yIHRyYW5zbHVjZW50IGJsYWNrcy93aGl0ZXMgZm9yIGRpc2FibGVkIGNvbG9ycyxcbiAgLy8gdGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBlbGVtZW50cyBsYXllcmVkIG9uIHRvcCBvZiBvbmUgYW5vdGhlci4gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlXG4gIC8vIGJsZW5kIHRoZSBjb2xvcnMgdG9nZXRoZXIgYmFzZWQgb24gdGhlIGJhc2UgY29sb3IgYW5kIHRoZSB0aGVtZSBiYWNrZ3JvdW5kLlxuICAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrOiAjNjg2ODY4O1xuICAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodDogI2IwYjBiMDtcbiAgJGRpc2FibGVkLWNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyaywgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQpO1xuXG4gIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICAgIGJvcmRlci1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrbWFyayB7XG4gICAgZmlsbDogJGNoZWNrYm94LW1hcmstY29sb3I7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcbiAgICAvLyAhaW1wb3J0YW50IGlzIG5lZWRlZCBoZXJlIGJlY2F1c2UgYSBzdHJva2UgbXVzdCBiZSBzZXQgYXMgYW5cbiAgICAvLyBhdHRyaWJ1dGUgb24gdGhlIFNWRyBpbiBvcmRlciBmb3IgbGluZSBhbmltYXRpb24gdG8gd29yayBwcm9wZXJseS5cbiAgICBzdHJva2U6ICRjaGVja2JveC1tYXJrLWNvbG9yICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LW1peGVkbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNoZWNrYm94LW1hcmstY29sb3I7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsIC5tYXQtY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgJi5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICYubWF0LWNoZWNrYm94LWNoZWNrZWQsXG4gICAgJi5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgICAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2JveC1jaGVja2VkKSB7XG4gICAgICAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU3dpdGNoIHRoaXMgdG8gYSBzb2xpZCBjb2xvciBzaW5jZSB3ZSdyZSB1c2luZyBgb3BhY2l0eWBcbiAgLy8gdG8gY29udHJvbCBob3cgb3BhcXVlIHRoZSByaXBwbGUgc2hvdWxkIGJlLlxuICAubWF0LWNoZWNrYm94IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC5nZXQobWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKSwgYmFzZSk7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLFxuICAubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkge1xuICAgICYubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC1jaGVja2JveCB7XG4gICAgZm9udC1mYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAvLyBUT0RPKGthcmEpOiBSZW1vdmUgdGhpcyBzdHlsZSB3aGVuIGZpeGluZyB2ZXJ0aWNhbCBiYXNlbGluZVxuICAubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogdHlwb2dyYXBoeS11dGlscy5saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICB9XG59XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtY2hlY2tib3gnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptZXRhJztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvcHJpdmF0ZSc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5cbiRjaGlwLXJlbW92ZS1mb250LXNpemU6IDE4cHg7XG5cbkBtaXhpbiBfZWxlbWVudC1jb2xvcigkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGNvbG9yOiAkZm9yZWdyb3VuZDtcblxuICAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgICBjb2xvcjogJGZvcmVncm91bmQ7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG59XG5cblxuLy8gQXBwbGllcyB0aGUgYmFja2dyb3VuZCBjb2xvciBmb3IgYSByaXBwbGUgZWxlbWVudC5cbi8vIElmIHRoZSBjb2xvciB2YWx1ZSBwcm92aWRlZCBpcyBub3QgYSBTYXNzIGNvbG9yLFxuLy8gd2UgYXNzdW1lIHRoYXQgd2UndmUgYmVlbiBnaXZlbiBhIENTUyB2YXJpYWJsZS5cbi8vIFNpbmNlIHdlIGNhbid0IHBlcmZvcm0gYWxwaGEtYmxlbmRpbmcgb24gYSBDU1MgdmFyaWFibGUsXG4vLyB3ZSBpbnN0ZWFkIGFkZCB0aGUgb3BhY2l0eSBkaXJlY3RseSB0byB0aGUgcmlwcGxlIGVsZW1lbnQuXG5AbWl4aW4gX3JpcHBsZS1iYWNrZ3JvdW5kKCRwYWxldHRlLCAkZGVmYXVsdC1jb250cmFzdCwgJG9wYWNpdHkpIHtcbiAgJGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSwgJGRlZmF1bHQtY29udHJhc3QsICRvcGFjaXR5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gIEBpZiAobWV0YS50eXBlLW9mKCRiYWNrZ3JvdW5kLWNvbG9yKSAhPSBjb2xvcikge1xuICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICB9XG59XG5cbkBtaXhpbiBfcGFsZXR0ZS1zdHlsZXMoJHBhbGV0dGUpIHtcbiAgQGluY2x1ZGUgX2VsZW1lbnQtY29sb3IodGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KSxcbiAgICB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHBhbGV0dGUpKTtcblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBAaW5jbHVkZSBfcmlwcGxlLWJhY2tncm91bmQoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QsIDAuMSk7XG4gIH1cbn1cblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLmdldCgkY29uZmlnLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAkdW5zZWxlY3RlZC1iYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIHVuc2VsZWN0ZWQtY2hpcCk7XG4gICR1bnNlbGVjdGVkLWZvcmVncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIHtcbiAgICBAaW5jbHVkZSBfZWxlbWVudC1jb2xvcigkdW5zZWxlY3RlZC1mb3JlZ3JvdW5kLCAkdW5zZWxlY3RlZC1iYWNrZ3JvdW5kKTtcblxuICAgICY6bm90KC5tYXQtY2hpcC1kaXNhYmxlZCkge1xuICAgICAgJjphY3RpdmUge1xuICAgICAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtZWxldmF0aW9uKDMsICRjb25maWcpO1xuICAgICAgfVxuXG4gICAgICAubWF0LWNoaXAtcmVtb3ZlOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC41NDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1jaGlwLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX3BhbGV0dGUtc3R5bGVzKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9wYWxldHRlLXN0eWxlcygkd2Fybik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9wYWxldHRlLXN0eWxlcygkYWNjZW50KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC1jaGlwIHtcbiAgICBmb250LXNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgZm9udC13ZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMuZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcblxuICAgIC5tYXQtY2hpcC10cmFpbGluZy1pY29uLm1hdC1pY29uLFxuICAgIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAkY2hpcC1yZW1vdmUtZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWNoaXBzJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdGFibGUge1xuICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtdGFibGUgdGhlYWQsIC5tYXQtdGFibGUgdGJvZHksIC5tYXQtdGFibGUgdGZvb3QsXG4gIG1hdC1oZWFkZXItcm93LCBtYXQtcm93LCBtYXQtZm9vdGVyLXJvdyxcbiAgW21hdC1oZWFkZXItcm93XSwgW21hdC1yb3ddLCBbbWF0LWZvb3Rlci1yb3ddLFxuICAubWF0LXRhYmxlLXN0aWNreSB7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgfVxuXG4gIG1hdC1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtZm9vdGVyLXJvdyxcbiAgdGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LXRhYmxlIHtcbiAgICBmb250LWZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGZvbnQtc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgZm9udC13ZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMuZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtdGFibGUnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2Fzczpjb2xvcic7XG5AdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1hdGgnO1xuQHVzZSAnc2FzczptZXRhJztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvcHJpdmF0ZSc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5cblxuJHNlbGVjdGVkLXRvZGF5LWJveC1zaGFkb3ctd2lkdGg6IDFweDtcbiRzZWxlY3RlZC1mYWRlLWFtb3VudDogMC42O1xuJHJhbmdlLWZhZGUtYW1vdW50OiAwLjI7XG4kdG9kYXktZmFkZS1hbW91bnQ6IDAuMjtcbiRjYWxlbmRhci1ib2R5LWZvbnQtc2l6ZTogMTNweCAhZGVmYXVsdDtcbiRjYWxlbmRhci13ZWVrZGF5LXRhYmxlLWZvbnQtc2l6ZTogMTFweCAhZGVmYXVsdDtcblxuQG1peGluIF9jb2xvcigkcGFsZXR0ZSkge1xuICBAaW5jbHVkZSBkYXRlLXJhbmdlLWNvbG9ycyhcbiAgICB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHBhbGV0dGUsIGRlZmF1bHQsICRyYW5nZS1mYWRlLWFtb3VudCkpO1xuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwYWxldHRlKTtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgJGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSk7XG5cbiAgICBAaWYgKG1ldGEudHlwZS1vZigkYmFja2dyb3VuZCkgPT0gY29sb3IpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLmFkanVzdCgkYmFja2dyb3VuZCwgJGFscGhhOiAtJHNlbGVjdGVkLWZhZGUtYW1vdW50KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgd2UgY291bGRuJ3QgcmVzb2x2ZSB0byBiYWNrZ3JvdW5kIHRvIGEgY29sb3IgKGUuZy4gaXQncyBhIENTUyB2YXJpYWJsZSksXG4gICAgICAvLyBmYWxsIGJhY2sgdG8gZmFkaW5nIHRoZSBjb250ZW50IG91dCB2aWEgYG9wYWNpdHlgLlxuICAgICAgb3BhY2l0eTogJHRvZGF5LWZhZGUtYW1vdW50O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgJHNlbGVjdGVkLXRvZGF5LWJveC1zaGFkb3ctd2lkdGhcbiAgICAgICAgICAgICAgICB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6bm90KC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXIsXG4gIC5jZGsta2V5Ym9hcmQtZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlLFxuICAuY2RrLXByb2dyYW0tZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlIHtcbiAgICAmID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudCB7XG4gICAgICBAaW5jbHVkZSBfdW5zZWxlY3RlZC1jZWxsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwYWxldHRlLCAwLjMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVdGlsaXR5IG1peGluIHRvIHRhcmdldCBjZWxscyB0aGF0IGFyZW4ndCBzZWxlY3RlZC4gVXNlZCB0byBtYWtlIHNlbGVjdG9yIGVhc2llciB0byBmb2xsb3cuXG5AbWl4aW4gX3Vuc2VsZWN0ZWQtY2VsbCB7XG4gICY6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZGlzYWJsZWQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG5cbiAgLm1hdC1jYWxlbmRhci1hcnJvdyB7XG4gICAgZmlsbDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC8vIFRoZSBwcmV2L25leHQgYnV0dG9ucyBuZWVkIGEgYml0IG1vcmUgc3BlY2lmaWNpdHkgdG9cbiAgLy8gYXZvaWQgYmVpbmcgb3ZlcndyaXR0ZW4gYnkgdGhlIC5tYXQtaWNvbi1idXR0b24uXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUsXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItcHJldmlvdXMtYnV0dG9uIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXItZGl2aWRlcjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQsXG4gIC5tYXQtZGF0ZS1yYW5nZS1pbnB1dC1zZXBhcmF0b3Ige1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBfdW5zZWxlY3RlZC1jZWxsIHtcbiAgICAgIGNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZGF0ZS1yYW5nZS1pbnB1dC1zZXBhcmF0b3Ige1xuICAgIGNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktaW4tcHJldmlldyB7XG4gICAgJGRpdmlkZXItY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgICBAaWYgbWV0YS50eXBlLW9mKCRkaXZpZGVyLWNvbG9yKSA9PSBjb2xvciB7XG4gICAgICAvLyBUaGUgZGl2aWRlciBjb2xvciBpcyBzZXQgdW5kZXIgdGhlIGFzc3VtcHRpb24gdGhhdCBpdCdsbCBiZSB1c2VkXG4gICAgICAvLyBmb3IgYSBzb2xpZCBib3JkZXIsIGJ1dCBiZWNhdXNlIHdlJ3JlIHVzaW5nIGEgZGFzaGVkIGJvcmRlciBmb3IgdGhlXG4gICAgICAvLyBwcmV2aWV3IHJhbmdlLCB3ZSBuZWVkIHRvIGJ1bXAgaXRzIG9wYWNpdHkgdG8gZW5zdXJlIHRoYXQgaXQncyB2aXNpYmxlLlxuICAgICAgY29sb3I6IHJnYmEoJGRpdmlkZXItY29sb3IsIG1hdGgubWluKG9wYWNpdHkoJGRpdmlkZXItY29sb3IpICogMiwgMSkpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBjb2xvcjogJGRpdmlkZXItY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5IHtcbiAgICBAaW5jbHVkZSBfdW5zZWxlY3RlZC1jZWxsIHtcbiAgICAgIC8vIE5vdGU6IHRob3VnaCBpdCdzIG5vdCB0ZXh0LCB0aGUgYm9yZGVyIGlzIGEgaGludCBhYm91dCB0aGUgZmFjdCB0aGF0IHRoaXMgaXMgdG9kYXkncyBkYXRlLFxuICAgICAgLy8gc28gd2UgdXNlIHRoZSBoaW50IGNvbG9yLlxuICAgICAgYm9yZGVyLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5IHtcbiAgICBAaW5jbHVkZSBfdW5zZWxlY3RlZC1jZWxsIHtcbiAgICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuXG4gICAgICBAaWYgKG1ldGEudHlwZS1vZigkY29sb3IpID09IGNvbG9yKSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogY29sb3IuYWRqdXN0KCRjb2xvciwgJGFscGhhOiAtJHRvZGF5LWZhZGUtYW1vdW50KTtcbiAgICAgIH1cbiAgICAgIEBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlIGNvbG9yIGRpZG4ndCByZXNvbHZlIHRvIGEgY29sb3IgdmFsdWUsIGJ1dCBzb21ldGhpbmcgbGlrZSBhIENTUyB2YXJpYWJsZSwgd2UgY2FuJ3RcbiAgICAgICAgLy8gZmFkZSBpdCBvdXQgc28gd2UgZmFsbCBiYWNrIHRvIHJlZHVjaW5nIHRoZSBlbGVtZW50IG9wYWNpdHkuIE5vdGUgdGhhdCB3ZSBkb24ndCB1c2UgdGhlXG4gICAgICAgIC8vICRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudCwgYmVjYXVzZSBoaW50IHRleHQgdXN1YWxseSBoYXMgc29tZSBvcGFjaXR5IGFwcGxpZWRcbiAgICAgICAgLy8gdG8gaXQgYWxyZWFkeSBhbmQgd2UgZG9uJ3Qgd2FudCB0aGVtIHRvIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyLlxuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgX2NvbG9yKG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSkpO1xuXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtZWxldmF0aW9uKDQsICRjb25maWcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX2NvbG9yKG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfY29sb3IobWFwLmdldCgkY29uZmlnLCB3YXJuKSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQtdG91Y2gge1xuICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1lbGV2YXRpb24oMjQsICRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUobWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KSwgdGV4dCk7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZShtYXAuZ2V0KCRjb25maWcsIGFjY2VudCksIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZShtYXAuZ2V0KCRjb25maWcsIHdhcm4pLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWRhdGUtcmFuZ2UtaW5wdXQtaW5uZXJbZGlzYWJsZWRdIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LWNhbGVuZGFyIHtcbiAgICBmb250LWZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keSB7XG4gICAgZm9udC1zaXplOiAkY2FsZW5kYXItYm9keS1mb250LXNpemU7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwsXG4gIC5tYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbiB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogdHlwb2dyYXBoeS11dGlscy5mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHRoIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiAkY2FsZW5kYXItd2Vla2RheS10YWJsZS1mb250LXNpemU7XG4gICAgICB3ZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMuZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGRhdGUtcmFuZ2UtY29sb3JzKFxuICAkcmFuZ2UtY29sb3IsXG4gICRjb21wYXJpc29uLWNvbG9yOiByZ2JhKCNmOWFiMDAsICRyYW5nZS1mYWRlLWFtb3VudCksXG4gICRvdmVybGFwLWNvbG9yOiAjYThkYWI1LFxuICAkb3ZlcmxhcC1zZWxlY3RlZC1jb2xvcjogY29sb3IuYWRqdXN0KCRvdmVybGFwLWNvbG9yLCAkbGlnaHRuZXNzOiAtMzAlKSkge1xuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiAkcmFuZ2UtY29sb3I7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwsXG4gIC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICRjb21wYXJpc29uLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLXN0YXJ0OjpiZWZvcmUsXG4gIFtkaXI9J3J0bCddIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1lbmQ6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkcmFuZ2UtY29sb3IgNTAlLCAkY29tcGFyaXNvbi1jb2xvciA1MCUpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3JlLFxuICBbZGlyPSdydGwnXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2Utc3RhcnQ6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICRyYW5nZS1jb2xvciA1MCUsICRjb21wYXJpc29uLWNvbG9yIDUwJSk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktaW4tcmFuZ2UgPiAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwsXG4gIC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogJG92ZXJsYXAtY29sb3I7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQsXG4gIC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAkb3ZlcmxhcC1zZWxlY3RlZC1jb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWRhdGVwaWNrZXInKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9wcml2YXRlJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcblxuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1lbGV2YXRpb24oMjQsICRjb25maWcpO1xuICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LWRpYWxvZy10aXRsZSB7XG4gICAgQGluY2x1ZGUgdHlwb2dyYXBoeS11dGlscy50eXBvZ3JhcGh5LWxldmVsKCRjb25maWcsIHRpdGxlKTtcbiAgfVxufVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWRpYWxvZycpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1kaXZpZGVyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1kaXZpZGVyLXZlcnRpY2FsIHtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1kaXZpZGVyJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvZGVuc2l0eS9wcml2YXRlL2NvbXBhdGliaWxpdHknO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9wcml2YXRlJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcbkB1c2UgJy4vZXhwYW5zaW9uLXZhcmlhYmxlcyc7XG5AdXNlICcuL2V4cGFuc2lvbi1taXhpbnMnO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigyLCAkY29uZmlnKTtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1hY3Rpb24tcm93IHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgQGluY2x1ZGUgZXhwYW5zaW9uLW1peGlucy5wcml2YXRlLWV4cGFuc2lvbi1mb2N1cyB7XG4gICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gIH1cblxuICAvLyBEaXNhYmxlIHRoZSBob3ZlciBvbiB0b3VjaCBkZXZpY2VzIHNpbmNlIGl0IGNhbiBhcHBlYXIgbGlrZSBpdCBpcyBzdHVjay4gV2UgY2FuJ3QgdXNlXG4gIC8vIGBAbWVkaWEgKGhvdmVyKWAgYWJvdmUsIGJlY2F1c2UgdGhlIGRlc2t0b3Agc3VwcG9ydCBicm93c2VyIHN1cHBvcnQgaXNuJ3QgZ3JlYXQuXG4gIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pXG4gICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLFxuICAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgICB3ZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMuZm9udC13ZWlnaHQoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcbiAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5LXV0aWxzLnR5cG9ncmFwaHktbGV2ZWwoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5AbWl4aW4gZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRkZW5zaXR5LXNjYWxlOiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGV4cGFuZGVkLWhlaWdodDogY29tcGF0aWJpbGl0eS5wcml2YXRlLWRlbnNpdHktcHJvcC12YWx1ZShcbiAgICAgICAgZXhwYW5zaW9uLXZhcmlhYmxlcy4kaGVhZGVyLWRlbnNpdHktY29uZmlnLCAkZGVuc2l0eS1zY2FsZSwgZXhwYW5kZWQtaGVpZ2h0KTtcbiAgJGNvbGxhcHNlZC1oZWlnaHQ6IGNvbXBhdGliaWxpdHkucHJpdmF0ZS1kZW5zaXR5LXByb3AtdmFsdWUoXG4gICAgICBleHBhbnNpb24tdmFyaWFibGVzLiRoZWFkZXItZGVuc2l0eS1jb25maWcsICRkZW5zaXR5LXNjYWxlLCBjb2xsYXBzZWQtaGVpZ2h0KTtcblxuICBAaW5jbHVkZSBjb21wYXRpYmlsaXR5LnByaXZhdGUtZGVuc2l0eS1sZWdhY3ktY29tcGF0aWJpbGl0eSgpIHtcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgICAgaGVpZ2h0OiAkY29sbGFwc2VkLWhlaWdodDtcblxuICAgICAgJi5tYXQtZXhwYW5kZWQge1xuICAgICAgICBoZWlnaHQ6ICRleHBhbmRlZC1oZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1leHBhbnNpb24nKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBkZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gcHJpdmF0ZS1leHBhbnNpb24tZm9jdXMge1xuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgJiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgICAmOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgICAgJjpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSkge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvcHJpdmF0ZSc7XG5cbkB1c2UgJy4vZm9ybS1maWVsZC1maWxsLXRoZW1lLnNjc3MnO1xuQHVzZSAnLi9mb3JtLWZpZWxkLWxlZ2FjeS10aGVtZS5zY3NzJztcbkB1c2UgJy4vZm9ybS1maWVsZC1vdXRsaW5lLXRoZW1lLnNjc3MnO1xuQHVzZSAnLi9mb3JtLWZpZWxkLXN0YW5kYXJkLXRoZW1lLnNjc3MnO1xuXG4vLyBDb2xvciBzdHlsZXMgdGhhdCBhcHBseSB0byBhbGwgYXBwZWFyYW5jZXMgb2YgdGhlIGZvcm0tZmllbGQuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAuZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuXG4gIC8vIExhYmVsIGNvbG9ycy4gUmVxdWlyZWQgaXMgdXNlZCBmb3IgdGhlIGAqYCBzdGFyIHNob3duIGluIHRoZSBsYWJlbC5cbiAgJGxhYmVsLWNvbG9yOlxuICAgIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNikpO1xuICAkZm9jdXNlZC1sYWJlbC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5LCB0ZXh0KTtcbiAgJHJlcXVpcmVkLWxhYmVsLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCwgdGV4dCk7XG5cbiAgLy8gVW5kZXJsaW5lIGNvbG9ycy5cbiAgJHVuZGVybGluZS1jb2xvci1iYXNlOlxuICAgIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDEsIDAuODcpKTtcbiAgJHVuZGVybGluZS1jb2xvci1hY2NlbnQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50LCB0ZXh0KTtcbiAgJHVuZGVybGluZS1jb2xvci13YXJuOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHdhcm4sIHRleHQpO1xuICAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSwgdGV4dCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1oaW50IHtcbiAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICRmb2N1c2VkLWxhYmVsLWNvbG9yO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICAgIGNvbG9yOiAkcmVxdWlyZWQtbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWJhc2U7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yO1xuXG4gICAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIFN0eWxpbmcgZm9yIHRoZSBlcnJvciBzdGF0ZSBvZiB0aGUgZm9ybSBmaWVsZC4gTm90ZSB0aGF0IHdoaWxlIHRoZSBzYW1lIGNhbiBiZVxuICAvLyBhY2hpZXZlZCB3aXRoIHRoZSBuZy0qIGNsYXNzZXMsIHdlIHVzZSB0aGlzIGFwcHJvYWNoIGluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IHRoZSBzYW1lXG4gIC8vIGxvZ2ljIGlzIHVzZWQgdG8gc3R5bGUgdGhlIGVycm9yIHN0YXRlIGFuZCB0byBzaG93IHRoZSBlcnJvciBtZXNzYWdlcy5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuXG4gICAgICAmLm1hdC1hY2NlbnQsXG4gICAgICAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLm1hdC1lcnJvciB7XG4gICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgfVxuXG4gIEBpbmNsdWRlIGZvcm0tZmllbGQtbGVnYWN5LXRoZW1lLmxlZ2FjeS1jb2xvcigkY29uZmlnKTtcbiAgQGluY2x1ZGUgZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZS5zdGFuZGFyZC1jb2xvcigkY29uZmlnKTtcbiAgQGluY2x1ZGUgZm9ybS1maWVsZC1maWxsLXRoZW1lLmZpbGwtY29sb3IoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIGZvcm0tZmllbGQtb3V0bGluZS10aGVtZS5vdXRsaW5lLWNvbG9yKCRjb25maWcpO1xufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRkZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkZGVkdXBlKVxuICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IHByaXZhdGUucHJpdmF0ZS1kaXYoMTAwJSwgJGZvbnQtc2NhbGUpICsgJGRlZHVwZTtcblxuICAkZGVkdXBlOiAkZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMubGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBwcmVmaXggYW5kIHN1ZmZpeCBpY29ucy5cbiAgJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlOiAxLjU7XG5cbiAgLy8gVGhlIHBhZGRpbmcgb24gdGhlIGluZml4LiBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZS5cbiAgJGluZml4LXBhZGRpbmc6IDAuNWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAvLyBJZiB0aGUgbGluZS1oZWlnaHQgaXMgZ2l2ZW4gYXMgYSB1bml0bGVzcyBudW1iZXIsIGNvZXJjZSBpdCB0byBgZW1gLlxuICAkaW5maXgtbWFyZ2luLXRvcDogJHN1YnNjcmlwdC1mb250LXNjYWxlICpcbiAgICAgIHR5cG9ncmFwaHktdXRpbHMucHJpdmF0ZS1jb2VyY2UtdW5pdGxlc3MtdG8tZW0oJGxpbmUtaGVpZ2h0KTtcbiAgLy8gRm9udCBzaXplIHRvIHVzZSBmb3IgdGhlIGxhYmVsIGFuZCBzdWJzY3JpcHQgdGV4dC5cbiAgJHN1YnNjcmlwdC1mb250LXNpemU6ICRzdWJzY3JpcHQtZm9udC1zY2FsZSAqIDEwMCU7XG4gIC8vIEZvbnQgc2l6ZSB0byB1c2UgZm9yIHRoZSBmb3IgdGhlIHByZWZpeCBhbmQgc3VmZml4IGljb25zLlxuICAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2l6ZTogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMTAwJTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogcHJpdmF0ZS5wcml2YXRlLWRpdigwLjVlbSwgJHN1YnNjcmlwdC1mb250LXNjYWxlKTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgQGluY2x1ZGUgdHlwb2dyYXBoeS11dGlscy50eXBvZ3JhcGh5LWxldmVsKCRjb25maWcsIGlucHV0KTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtcHJlZml4LFxuICAubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcbiAgICAvLyBBbGxvdyBpY29ucyBpbiBhIHByZWZpeCBvciBzdWZmaXggdG8gYWRhcHQgdG8gdGhlIGNvcnJlY3Qgc2l6ZS5cbiAgICAubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2l6ZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gQWxsb3cgaWNvbiBidXR0b25zIGluIGEgcHJlZml4IG9yIHN1ZmZpeCB0byBhZGFwdCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgIC5tYXQtaWNvbi1idXR0b24ge1xuICAgICAgaGVpZ2h0OiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxZW07XG4gICAgICB3aWR0aDogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMWVtO1xuXG4gICAgICAubWF0LWljb24ge1xuICAgICAgICBoZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMucHJpdmF0ZS1jb2VyY2UtdW5pdGxlc3MtdG8tZW0oJGxpbmUtaGVpZ2h0KTtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgLy8gVGhyb3dzIG9mZiB0aGUgYmFzZWxpbmUgaWYgd2UgZG8gaXQgYXMgYSByZWFsIG1hcmdpbiwgc28gd2UgZG8gaXQgYXMgYSBib3JkZXIgaW5zdGVhZC5cbiAgICBib3JkZXItdG9wOiAkaW5maXgtbWFyZ2luLXRvcCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBAaW5jbHVkZSBfbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICB9XG5cbiAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBAaW5jbHVkZSBfbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gICAgdG9wOiAtJGluZml4LW1hcmdpbi10b3A7XG4gICAgcGFkZGluZy10b3A6ICRpbmZpeC1tYXJnaW4tdG9wO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAvLyBXZSB3YW50IHRoZSB1bmRlcmxpbmUgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQuXG4gICAgYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgZm9udC1zaXplOiAkc3Vic2NyaXB0LWZvbnQtc2l6ZTtcbiAgICBtYXJnaW4tdG9wOiAkc3Vic2NyaXB0LW1hcmdpbi10b3A7XG5cbiAgICAvLyBXZSB3YW50IHRoZSBzdWJzY3JpcHQgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQgKGFkanVzdGVkIGZvciB0aGUgc21hbGxlciBmb250IHNpemUpO1xuICAgIHRvcDogY2FsYygxMDAlIC0gI3twcml2YXRlLnByaXZhdGUtZGl2KCR3cmFwcGVyLXBhZGRpbmctYm90dG9tLCAkc3Vic2NyaXB0LWZvbnQtc2NhbGUpfSk7XG4gIH1cblxuICBAaW5jbHVkZSBmb3JtLWZpZWxkLWxlZ2FjeS10aGVtZS5sZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZS5zdGFuZGFyZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBmb3JtLWZpZWxkLWZpbGwtdGhlbWUuZmlsbC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBmb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUub3V0bGluZS10eXBvZ3JhcGh5KCRjb25maWcpO1xufVxuXG5AbWl4aW4gZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRkZW5zaXR5LXNjYWxlOiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgQGluY2x1ZGUgZm9ybS1maWVsZC1sZWdhY3ktdGhlbWUucHJpdmF0ZS1mb3JtLWZpZWxkLWxlZ2FjeS1kZW5zaXR5KCRkZW5zaXR5LXNjYWxlKTtcbiAgQGluY2x1ZGUgZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZS5wcml2YXRlLWZvcm0tZmllbGQtc3RhbmRhcmQtZGVuc2l0eSgkZGVuc2l0eS1zY2FsZSk7XG4gIEBpbmNsdWRlIGZvcm0tZmllbGQtZmlsbC10aGVtZS5wcml2YXRlLWZvcm0tZmllbGQtZmlsbC1kZW5zaXR5KCRkZW5zaXR5LXNjYWxlKTtcbiAgQGluY2x1ZGUgZm9ybS1maWVsZC1vdXRsaW5lLXRoZW1lLnByaXZhdGUtZm9ybS1maWVsZC1vdXRsaW5lLWRlbnNpdHkoJGRlbnNpdHktc2NhbGUpO1xufVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtZm9ybS1maWVsZCcpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvcHJpdmF0ZSc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL2Zvcm0tY29tbW9uJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBsZWdhY3kgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIGxlZ2FjeS1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAuZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuXG4gICRsYWJlbC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICR1bmRlcmxpbmUtY29sb3I6XG4gICAgdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjQyKSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWhpbnQge1xuICAgICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIEBpbmNsdWRlIGZvcm0tY29tbW9uLnByaXZhdGUtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJHVuZGVybGluZS1jb2xvcik7XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJGxlZ2FjeS1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICAvLyBXZSB1c2UgcGVyc3BlY3RpdmUgdG8gZml4IHRoZSB0ZXh0IGJsdXJyaW5lc3MgYXMgZGVzY3JpYmVkIGhlcmU6XG4gIC8vIGh0dHA6Ly93d3cudXNlcmFnZW50bWFuLmNvbS9ibG9nLzIwMTQvMDUvMDQvZml4aW5nLXR5cG9ncmFwaHktaW5zaWRlLW9mLTItZC1jc3MtdHJhbnNmb3Jtcy9cbiAgLy8gVGhpcyByZXN1bHRzIGluIGEgc21hbGwgaml0dGVyIGFmdGVyIHRoZSBsYWJlbCBmbG9hdHMgb24gRmlyZWZveCwgd2hpY2ggdGhlXG4gIC8vIHRyYW5zbGF0ZVogZml4ZXMuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZykgc2NhbGUoJGZvbnQtc2NhbGUpIHBlcnNwZWN0aXZlKDEwMHB4KVxuICB0cmFuc2xhdGVaKDAuMDAxcHggKyAkbGVnYWN5LWRlZHVwZSk7XG4gIC8vIFRoZSB0cmlja3MgYWJvdmUgdXNlZCB0byBzbW9vdGggb3V0IHRoZSBhbmltYXRpb24gb24gY2hyb21lIGFuZCBmaXJlZm94IGFjdHVhbGx5IG1ha2UgdGhpbmdzXG4gIC8vIHdvcnNlIG9uIElFLCBzbyB3ZSBkb24ndCBpbmNsdWRlIHRoZW0gaW4gdGhlIElFIHZlcnNpb24uXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbGVnYWN5LWRlZHVwZSlcbiAgICAgICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcblxuICB3aWR0aDogcHJpdmF0ZS5wcml2YXRlLWRpdigxMDAlLCAkZm9udC1zY2FsZSkgKyAkbGVnYWN5LWRlZHVwZTtcblxuICAkbGVnYWN5LWRlZHVwZTogJGxlZ2FjeS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbi8vIFNhbWUgYXMgbWl4aW4gYWJvdmUsIGJ1dCBvbWl0cyB0aGUgdHJhbnNsYXRlWiBmb3IgcHJpbnRpbmcgcHVycG9zZXMuXG5AbWl4aW4gX2xhYmVsLWZsb2F0aW5nLXByaW50KCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gVGhpcyByZXN1bHRzIGluIGEgc21hbGwgaml0dGVyIGFmdGVyIHRoZSBsYWJlbCBmbG9hdHMgb24gRmlyZWZveCwgd2hpY2ggdGhlXG4gIC8vIHRyYW5zbGF0ZVogZml4ZXMuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRsZWdhY3ktZGVkdXBlKVxuICAgICAgICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAkbGVnYWN5LWRlZHVwZTogJGxlZ2FjeS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBsZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMubGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIHRvcCBvZiB0aGUgbGluZSBhbmQgdGhlIHRvcCBvZiB0aGUgYWN0dWFsIHRleHRcbiAgLy8gKGFzIGEgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZSkuXG4gICRsaW5lLXNwYWNpbmc6IHByaXZhdGUucHJpdmF0ZS1kaXYoJGxpbmUtaGVpZ2h0IC0gMSwgMik7XG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRoZSBpbmZpeC4gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCBzZWVtIHRvIG1lYXN1cmUgZnJvbSB0aGUgZWRnZVxuICAvLyBvZiB0aGUgdGV4dCBpdHNlbGYsIG5vdCB0aGUgZWRnZSBvZiB0aGUgbGluZTsgdGhlcmVmb3JlIHdlIHN1YnRyYWN0IG9mZiB0aGUgbGluZSBzcGFjaW5nLlxuICAkaW5maXgtcGFkZGluZzogMC41ZW0gLSAkbGluZS1zcGFjaW5nO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAvLyBJZiB0aGUgbGluZS1oZWlnaHQgaXMgZ2l2ZW4gYXMgYSB1bml0bGVzcyBudW1iZXIsIGNvZXJjZSBpdCB0byBgZW1gLlxuICAkaW5maXgtbWFyZ2luLXRvcDpcbiAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSAqIHR5cG9ncmFwaHktdXRpbHMucHJpdmF0ZS1jb2VyY2UtdW5pdGxlc3MtdG8tZW0oJGxpbmUtaGVpZ2h0KTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuIFdlIGFnYWluIG5lZWQgdG8gc3VidHJhY3Qgb2ZmIHRoZSBsaW5lIHNwYWNpbmcgc2luY2UgdGhlIG1vY2tzIG1lYXN1cmUgdG8gdGhlIGVkZ2Ugb2YgdGhlXG4gIC8vIHRleHQsIG5vdCB0aGUgIGVkZ2Ugb2YgdGhlIGxpbmUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogcHJpdmF0ZS5wcml2YXRlLWRpdigwLjVlbSwgJHN1YnNjcmlwdC1mb250LXNjYWxlKSAtICgkbGluZS1zcGFjaW5nICogMik7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgd2lsbCByZWx5IG9uIEF1dG9maWxsTW9uaXRvciBpbnN0ZWFkLlxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX2xhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgLy8gV2Ugd2FudCB0aGUgdW5kZXJsaW5lIHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQuXG4gICAgICBib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgICBtYXJnaW4tdG9wOiAkc3Vic2NyaXB0LW1hcmdpbi10b3A7XG5cbiAgICAgIC8vIFdlIHdhbnQgdGhlIHN1YnNjcmlwdCB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50IChhZGp1c3RlZCBmb3IgdGhlIHNtYWxsZXIgZm9udCBzaXplKTtcbiAgICAgIHRvcDogY2FsYygxMDAlIC0gI3twcml2YXRlLnByaXZhdGUtZGl2KCR3cmFwcGVyLXBhZGRpbmctYm90dG9tLCAkc3Vic2NyaXB0LWZvbnQtc2NhbGUpfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gdHJhbnNsYXRlWiBjYXVzZXMgdGhlIGxhYmVsIHRvIG5vdCBhcHBlYXIgd2hpbGUgcHJpbnRpbmcsIHNvIHdlIG92ZXJyaWRlIGl0IHRvIG5vdFxuICAvLyBhcHBseSB0cmFuc2xhdGVaIHdoaWxlIHByaW50aW5nXG4gIEBtZWRpYSBwcmludCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX2xhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcHJpdmF0ZS1mb3JtLWZpZWxkLWxlZ2FjeS1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBsZWdhY3ktdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtZm9ybS1maWVsZC1sZWdhY3knKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBsZWdhY3ktY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgcHJpdmF0ZS1mb3JtLWZpZWxkLWxlZ2FjeS1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbGVnYWN5LXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vdGhlbWluZy90aGVtaW5nJztcblxuLy8gUmVuZGVycyBhIGdyYWRpZW50IGZvciBzaG93aW5nIHRoZSBkYXNoZWQgbGluZSB3aGVuIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbi8vIFVubGlrZSB1c2luZyBhIGJvcmRlciwgYSBncmFkaWVudCBhbGxvd3MgdXMgdG8gYWRqdXN0IHRoZSBzcGFjaW5nIG9mIHRoZSBkb3R0ZWQgbGluZVxuLy8gdG8gbWF0Y2ggdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjLlxuQG1peGluIHByaXZhdGUtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yIDAlLCAkY29sb3IgMzMlLCB0cmFuc3BhcmVudCAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogNHB4IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gRmlndXJlcyBvdXQgdGhlIGNvbG9yIG9mIHRoZSBwbGFjZWhvbGRlciBmb3IgYSBmb3JtIGNvbnRyb2wuXG4vLyBVc2VkIHByaW1hcmlseSB0byBwcmV2ZW50IHRoZSB2YXJpb3VzIGZvcm0gY29udHJvbHMgZnJvbVxuLy8gYmVjb21pbmcgb3V0IG9mIHN5bmMgc2luY2UgdGhlc2UgY29sb3JzIGFyZW4ndCBpbiBhIHBhbGV0dGUuXG5AZnVuY3Rpb24gcHJpdmF0ZS1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCRjb25maWcpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAuZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuICBAcmV0dXJuIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQsXG4gICAgaWYoJGlzLWRhcmstdGhlbWUsIDAuNSwgMC40MikpO1xufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9mb3JtLWNvbW1vbic7XG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgc3RhbmRhcmQgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIHN0YW5kYXJkLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC5nZXQoJGNvbmZpZywgaXMtZGFyayk7XG4gICR1bmRlcmxpbmUtY29sb3I6XG4gICAgdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjQyKSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgQGluY2x1ZGUgZm9ybS1jb21tb24ucHJpdmF0ZS1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkdW5kZXJsaW5lLWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHByaXZhdGUtZm9ybS1maWVsZC1zdGFuZGFyZC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBzdGFuZGFyZC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1mb3JtLWZpZWxkLXN0YW5kYXJkJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgc3RhbmRhcmQtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgcHJpdmF0ZS1mb3JtLWZpZWxkLXN0YW5kYXJkLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBzdGFuZGFyZC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvcHJpdmF0ZSc7XG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgZmlsbCBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gZmlsbC1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAuZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuXG4gICRmaWxsLWJhY2tncm91bmQ6XG4gICAgdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4xLCAwLjA0KSk7XG4gICRmaWxsLWRpc2FibGVkLWJhY2tncm91bmQ6XG4gICAgdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4wNSwgMC4wMikpO1xuICAkdW5kZXJsaW5lLWNvbG9yOlxuICAgIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNSwgMC40MikpO1xuICAkbGFiZWwtZGlzYWJsZWQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpbGwtYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaWxsLWRpc2FibGVkLWJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBjb2xvcjogJGxhYmVsLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kZmlsbC1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkZmlsbC1kZWR1cGUpXG4gICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogcHJpdmF0ZS5wcml2YXRlLWRpdigxMDAlLCAkZm9udC1zY2FsZSkgKyAkZmlsbC1kZWR1cGU7XG5cbiAgJGZpbGwtZGVkdXBlOiAkZmlsbC1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBmaWxsLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIHBhZGRpbmcgb24gdG9wIG9mIHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmctdG9wOiAwLjI1ZW07XG4gIC8vIFRoZSBwYWRkaW5nIGJlbG93IHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmctYm90dG9tOiAwLjc1ZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOlxuICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlICogdHlwb2dyYXBoeS11dGlscy5wcml2YXRlLWNvZXJjZS11bml0bGVzcy10by1lbSgkbGluZS1oZWlnaHQpO1xuICAvLyBUaGUgYW1vdW50IHdlIG9mZnNldCB0aGUgbGFiZWwgZnJvbSB0aGUgaW5wdXQgdGV4dCBpbiB0aGUgZmlsbCBhcHBlYXJhbmNlLlxuICAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDogLTAuNWVtO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZy10b3AgMCAkaW5maXgtcGFkZGluZy1ib3R0b20gMDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nLXRvcDtcbiAgICAgIG1hcmdpbi10b3A6ICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0O1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX2xhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX2xhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcHJpdmF0ZS1mb3JtLWZpZWxkLWZpbGwtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gZmlsbC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1mb3JtLWZpZWxkLWZpbGwnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBmaWxsLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHByaXZhdGUtZm9ybS1maWVsZC1maWxsLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBmaWxsLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9wcml2YXRlJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBvdXRsaW5lIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBvdXRsaW5lLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLmdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLmdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAuZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuXG4gICRsYWJlbC1kaXNhYmxlZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgJG91dGxpbmUtY29sb3I6XG4gICAgdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC4zLCAwLjEyKSk7XG4gICRvdXRsaW5lLWNvbG9yLWhvdmVyOlxuICAgIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDEsIDAuODcpKTtcbiAgJG91dGxpbmUtY29sb3ItcHJpbWFyeTogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5KTtcbiAgJG91dGxpbmUtY29sb3ItYWNjZW50OiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCk7XG4gICRvdXRsaW5lLWNvbG9yLXdhcm46IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2Fybik7XG4gICRvdXRsaW5lLWNvbG9yLWRpc2FibGVkOlxuICAgIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMTUsIDAuMDYpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgICBjb2xvcjogJG91dGxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWhvdmVyO1xuICAgIH1cblxuICAgICYubWF0LWZvY3VzZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItcHJpbWFyeTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWFjY2VudDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENsYXNzIHJlcGVhdGVkIHNvIHRoYXQgcnVsZSBpcyBzcGVjaWZpYyBlbm91Z2ggdG8gb3ZlcnJpZGUgZm9jdXNlZCBhY2NlbnQgY29sb3IgY2FzZS5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRsYWJlbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItZGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG91dGxpbmUtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX2xhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG91dGxpbmUtZGVkdXBlKVxuICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiBwcml2YXRlLnByaXZhdGUtZGl2KDEwMCUsICRmb250LXNjYWxlKSArICRvdXRsaW5lLWRlZHVwZTtcblxuICAkb3V0bGluZS1kZWR1cGU6ICRvdXRsaW5lLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG91dGxpbmUtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMubGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgcGFkZGluZyBhYm92ZSBhbmQgYmVsb3cgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZzogMWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDpcbiAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSAqIHR5cG9ncmFwaHktdXRpbHMucHJpdmF0ZS1jb2VyY2UtdW5pdGxlc3MtdG8tZW0oJGxpbmUtaGVpZ2h0KTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogcHJpdmF0ZS5wcml2YXRlLWRpdigwLjVlbSwgJHN1YnNjcmlwdC1mb250LXNjYWxlKTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgYW1vdW50IHdlIG9mZnNldCB0aGUgbGFiZWwgZnJvbSB0aGUgaW5wdXQgdGV4dCBpbiB0aGUgb3V0bGluZSBhcHBlYXJhbmNlLlxuICAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDogLTAuMjVlbTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMCAkaW5maXgtcGFkZGluZyAwO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gICAgICBtYXJnaW4tdG9wOiAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nICsgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX2xhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcgKyAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBwcml2YXRlLWZvcm0tZmllbGQtb3V0bGluZS1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBvdXRsaW5lLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWZvcm0tZmllbGQtb3V0bGluZScpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG91dGxpbmUtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgcHJpdmF0ZS1mb3JtLWZpZWxkLW91dGxpbmUtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG91dGxpbmUtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLmdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLmdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtaWNvbiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5LCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50LCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHdhcm4sIHRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWljb24nKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvcGFsZXR0ZSc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3ByaXZhdGUnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9mb3JtLWNvbW1vbic7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3ZlbmRvci1wcmVmaXhlcyc7XG5cblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLmdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLmdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkLFxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSwgdGV4dCk7XG5cbiAgICBAaW5jbHVkZSB2ZW5kb3ItcHJlZml4ZXMuaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IGZvcm0tY29tbW9uLnByaXZhdGUtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkY29uZmlnKTtcbiAgICB9XG5cbiAgICAvLyBPbiBkYXJrIHRoZW1lcyB3ZSBzZXQgdGhlIG5hdGl2ZSBgc2VsZWN0YCBjb2xvciB0byBzb21lIHNoYWRlIG9mIHdoaXRlLFxuICAgIC8vIGhvd2V2ZXIgdGhlIGNvbG9yIHByb3BhZ2F0ZXMgdG8gYWxsIG9mIHRoZSBgb3B0aW9uYCBlbGVtZW50cywgd2hpY2ggYXJlXG4gICAgLy8gYWx3YXlzIG9uIGEgd2hpdGUgYmFja2dyb3VuZCBpbnNpZGUgdGhlIGRyb3Bkb3duLCBjYXVzaW5nIHRoZW0gdG8gYmxlbmQgaW4uXG4gICAgLy8gU2luY2Ugd2UgY2FuJ3QgY2hhbmdlIGJhY2tncm91bmQgb2YgdGhlIGRyb3Bkb3duLCB3ZSBuZWVkIHRvIGV4cGxpY2l0bHlcbiAgICAvLyByZXNldCB0aGUgY29sb3Igb2YgdGhlIG9wdGlvbnMgdG8gc29tZXRoaW5nIGRhcmsuXG4gICAgQGlmIChtYXAuZ2V0KCRjb25maWcsIGlzLWRhcmspKSB7XG4gICAgICBvcHRpb24ge1xuICAgICAgICBjb2xvcjogcGFsZXR0ZS4kZGFyay1wcmltYXJ5LXRleHQ7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbjpkaXNhYmxlZCB7XG4gICAgICAgIGNvbG9yOiBwYWxldHRlLiRkYXJrLWRpc2FibGVkLXRleHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1hY2NlbnQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhY2NlbnQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCxcbiAgLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2FybiwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAvLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIHRvcCBvZiB0aGUgbGluZSBhbmQgdGhlIHRvcCBvZiB0aGUgYWN0dWFsIHRleHRcbiAgLy8gKGFzIGEgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZSkuXG4gICRsaW5lLXNwYWNpbmc6IHByaXZhdGUucHJpdmF0ZS1kaXYoJGxpbmUtaGVpZ2h0IC0gMSwgMik7XG5cbiAgLy8gPGlucHV0PiBlbGVtZW50cyBzZWVtIHRvIGhhdmUgdGhlaXIgaGVpZ2h0IHNldCBzbGlnaHRseSB0b28gbGFyZ2Ugb24gU2FmYXJpIGNhdXNpbmcgdGhlIHRleHQgdG9cbiAgLy8gYmUgbWlzYWxpZ25lZCB3LnIudC4gdGhlIHBsYWNlaG9sZGVyLiBBZGRpbmcgdGhpcyBtYXJnaW4gY29ycmVjdHMgaXQuXG4gIGlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBtYXJnaW4tdG9wOiB0eXBvZ3JhcGh5LXV0aWxzLnByaXZhdGUtY29lcmNlLXVuaXRsZXNzLXRvLWVtKC0kbGluZS1zcGFjaW5nKTtcbiAgfVxufVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWlucHV0Jykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIHN0eWxlbGludC1kaXNhYmxlIG1hdGVyaWFsL25vLXByZWZpeGVzXG5AbWl4aW4gdXNlci1zZWxlY3QoJHZhbHVlKSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgLW1vei11c2VyLXNlbGVjdDogJHZhbHVlO1xuICAtbXMtdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbn1cblxuQG1peGluIGlucHV0LXBsYWNlaG9sZGVyIHtcbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gY3Vyc29yLWdyYWIge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG5AbWl4aW4gY3Vyc29yLWdyYWJiaW5nIHtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xuICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuXG5AbWl4aW4gYmFja2ZhY2UtdmlzaWJpbGl0eSgkdmFsdWUpIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiAkdmFsdWU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIHBvc2l0aW9uLXN0aWNreSgkaW1wb3J0YW50OiBmYWxzZSkge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgI3tpZigkaW1wb3J0YW50LCAnIWltcG9ydGFudCcsICcnKX07XG4gIHBvc2l0aW9uOiBzdGlja3kgI3tpZigkaW1wb3J0YW50LCAnIWltcG9ydGFudCcsICcnKX07XG59XG5cbkBtaXhpbiBwcml2YXRlLWNvbG9yLWFkanVzdCgkdmFsdWUpIHtcbiAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6ICR2YWx1ZTtcbiAgY29sb3ItYWRqdXN0OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBwcml2YXRlLWJhY2tncm91bmQtY2xpcCgkdmFsdWUpIHtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6ICR2YWx1ZTtcbiAgYmFja2dyb3VuZC1jbGlwOiAkdmFsdWU7XG59XG4vLyBzdHlsZWxpbnQtZW5hYmxlXG4iLCJAdXNlICdzYXNzOm1hcCc7XG4vLyBDb2xvciBwYWxldHRlcyBmcm9tIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3BlYy5cbi8vIFNlZSBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb2xvci9cbi8vXG4vLyBDb250cmFzdCBjb2xvcnMgYXJlIGhhcmQtY29kZWQgYmVjYXVzZSBpdCBpcyB0b28gZGlmZmljdWx0IChwcm9iYWJseSBpbXBvc3NpYmxlKSB0b1xuLy8gY2FsY3VsYXRlIHRoZW0uIFRoZXNlIGNvbnRyYXN0IGNvbG9ycyBhcmUgcHVsbGVkIGZyb20gdGhlIHB1YmxpYyBNYXRlcmlhbCBEZXNpZ24gc3BlYyBzd2F0Y2hlcy5cbi8vIFdoaWxlIHRoZSBjb250cmFzdCBjb2xvcnMgaW4gdGhlIHNwZWMgYXJlIG5vdCBwcmVzY3JpcHRpdmUsIHdlIHVzZSB0aGVtIGZvciBjb252ZW5pZW5jZS5cblxuXG4vLyBAZGVwcmVjYXRlZCByZW5hbWVkIHRvICRkYXJrLXByaW1hcnktdGV4dC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay04Ny1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjg3KTtcbi8vIEBkZXByZWNhdGVkIHJlbmFtZWQgdG8gJGxpZ2h0LXByaW1hcnktdGV4dC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS04Ny1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjg3KTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkZGFyay1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTEyLW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuMTIpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRsaWdodC1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTEyLW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuMTIpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRkYXJrLVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stNi1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjA2KTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkbGlnaHQtW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS02LW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuMDYpO1xuXG4kZGFyay1wcmltYXJ5LXRleHQ6IHJnYmEoYmxhY2ssIDAuODcpO1xuJGRhcmstc2Vjb25kYXJ5LXRleHQ6IHJnYmEoYmxhY2ssIDAuNTQpO1xuJGRhcmstZGlzYWJsZWQtdGV4dDogcmdiYShibGFjaywgMC4zOCk7XG4kZGFyay1kaXZpZGVyczogcmdiYShibGFjaywgMC4xMik7XG4kZGFyay1mb2N1c2VkOiByZ2JhKGJsYWNrLCAwLjEyKTtcbiRsaWdodC1wcmltYXJ5LXRleHQ6IHdoaXRlO1xuJGxpZ2h0LXNlY29uZGFyeS10ZXh0OiByZ2JhKHdoaXRlLCAwLjcpO1xuJGxpZ2h0LWRpc2FibGVkLXRleHQ6IHJnYmEod2hpdGUsIDAuNSk7XG4kbGlnaHQtZGl2aWRlcnM6IHJnYmEod2hpdGUsIDAuMTIpO1xuJGxpZ2h0LWZvY3VzZWQ6IHJnYmEod2hpdGUsIDAuMTIpO1xuXG4kcmVkLXBhbGV0dGU6IChcbiAgNTA6ICNmZmViZWUsXG4gIDEwMDogI2ZmY2RkMixcbiAgMjAwOiAjZWY5YTlhLFxuICAzMDA6ICNlNTczNzMsXG4gIDQwMDogI2VmNTM1MCxcbiAgNTAwOiAjZjQ0MzM2LFxuICA2MDA6ICNlNTM5MzUsXG4gIDcwMDogI2QzMmYyZixcbiAgODAwOiAjYzYyODI4LFxuICA5MDA6ICNiNzFjMWMsXG4gIEExMDA6ICNmZjhhODAsXG4gIEEyMDA6ICNmZjUyNTIsXG4gIEE0MDA6ICNmZjE3NDQsXG4gIEE3MDA6ICNkNTAwMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJHBpbmstcGFsZXR0ZTogKFxuICA1MDogI2ZjZTRlYyxcbiAgMTAwOiAjZjhiYmQwLFxuICAyMDA6ICNmNDhmYjEsXG4gIDMwMDogI2YwNjI5MixcbiAgNDAwOiAjZWM0MDdhLFxuICA1MDA6ICNlOTFlNjMsXG4gIDYwMDogI2Q4MWI2MCxcbiAgNzAwOiAjYzIxODViLFxuICA4MDA6ICNhZDE0NTcsXG4gIDkwMDogIzg4MGU0ZixcbiAgQTEwMDogI2ZmODBhYixcbiAgQTIwMDogI2ZmNDA4MSxcbiAgQTQwMDogI2Y1MDA1NyxcbiAgQTcwMDogI2M1MTE2MixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kcHVycGxlLXBhbGV0dGU6IChcbiAgNTA6ICNmM2U1ZjUsXG4gIDEwMDogI2UxYmVlNyxcbiAgMjAwOiAjY2U5M2Q4LFxuICAzMDA6ICNiYTY4YzgsXG4gIDQwMDogI2FiNDdiYyxcbiAgNTAwOiAjOWMyN2IwLFxuICA2MDA6ICM4ZTI0YWEsXG4gIDcwMDogIzdiMWZhMixcbiAgODAwOiAjNmExYjlhLFxuICA5MDA6ICM0YTE0OGMsXG4gIEExMDA6ICNlYTgwZmMsXG4gIEEyMDA6ICNlMDQwZmIsXG4gIEE0MDA6ICNkNTAwZjksXG4gIEE3MDA6ICNhYTAwZmYsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kZGVlcC1wdXJwbGUtcGFsZXR0ZTogKFxuICA1MDogI2VkZTdmNixcbiAgMTAwOiAjZDFjNGU5LFxuICAyMDA6ICNiMzlkZGIsXG4gIDMwMDogIzk1NzVjZCxcbiAgNDAwOiAjN2U1N2MyLFxuICA1MDA6ICM2NzNhYjcsXG4gIDYwMDogIzVlMzViMSxcbiAgNzAwOiAjNTEyZGE4LFxuICA4MDA6ICM0NTI3YTAsXG4gIDkwMDogIzMxMWI5MixcbiAgQTEwMDogI2IzODhmZixcbiAgQTIwMDogIzdjNGRmZixcbiAgQTQwMDogIzY1MWZmZixcbiAgQTcwMDogIzYyMDBlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRpbmRpZ28tcGFsZXR0ZTogKFxuICA1MDogI2U4ZWFmNixcbiAgMTAwOiAjYzVjYWU5LFxuICAyMDA6ICM5ZmE4ZGEsXG4gIDMwMDogIzc5ODZjYixcbiAgNDAwOiAjNWM2YmMwLFxuICA1MDA6ICMzZjUxYjUsXG4gIDYwMDogIzM5NDlhYixcbiAgNzAwOiAjMzAzZjlmLFxuICA4MDA6ICMyODM1OTMsXG4gIDkwMDogIzFhMjM3ZSxcbiAgQTEwMDogIzhjOWVmZixcbiAgQTIwMDogIzUzNmRmZSxcbiAgQTQwMDogIzNkNWFmZSxcbiAgQTcwMDogIzMwNGZmZSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRibHVlLXBhbGV0dGU6IChcbiAgNTA6ICNlM2YyZmQsXG4gIDEwMDogI2JiZGVmYixcbiAgMjAwOiAjOTBjYWY5LFxuICAzMDA6ICM2NGI1ZjYsXG4gIDQwMDogIzQyYTVmNSxcbiAgNTAwOiAjMjE5NmYzLFxuICA2MDA6ICMxZTg4ZTUsXG4gIDcwMDogIzE5NzZkMixcbiAgODAwOiAjMTU2NWMwLFxuICA5MDA6ICMwZDQ3YTEsXG4gIEExMDA6ICM4MmIxZmYsXG4gIEEyMDA6ICM0NDhhZmYsXG4gIEE0MDA6ICMyOTc5ZmYsXG4gIEE3MDA6ICMyOTYyZmYsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJGxpZ2h0LWJsdWUtcGFsZXR0ZTogKFxuICA1MDogI2UxZjVmZSxcbiAgMTAwOiAjYjNlNWZjLFxuICAyMDA6ICM4MWQ0ZmEsXG4gIDMwMDogIzRmYzNmNyxcbiAgNDAwOiAjMjliNmY2LFxuICA1MDA6ICMwM2E5ZjQsXG4gIDYwMDogIzAzOWJlNSxcbiAgNzAwOiAjMDI4OGQxLFxuICA4MDA6ICMwMjc3YmQsXG4gIDkwMDogIzAxNTc5YixcbiAgQTEwMDogIzgwZDhmZixcbiAgQTIwMDogIzQwYzRmZixcbiAgQTQwMDogIzAwYjBmZixcbiAgQTcwMDogIzAwOTFlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJGN5YW4tcGFsZXR0ZTogKFxuICA1MDogI2UwZjdmYSxcbiAgMTAwOiAjYjJlYmYyLFxuICAyMDA6ICM4MGRlZWEsXG4gIDMwMDogIzRkZDBlMSxcbiAgNDAwOiAjMjZjNmRhLFxuICA1MDA6ICMwMGJjZDQsXG4gIDYwMDogIzAwYWNjMSxcbiAgNzAwOiAjMDA5N2E3LFxuICA4MDA6ICMwMDgzOGYsXG4gIDkwMDogIzAwNjA2NCxcbiAgQTEwMDogIzg0ZmZmZixcbiAgQTIwMDogIzE4ZmZmZixcbiAgQTQwMDogIzAwZTVmZixcbiAgQTcwMDogIzAwYjhkNCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kdGVhbC1wYWxldHRlOiAoXG4gIDUwOiAjZTBmMmYxLFxuICAxMDA6ICNiMmRmZGIsXG4gIDIwMDogIzgwY2JjNCxcbiAgMzAwOiAjNGRiNmFjLFxuICA0MDA6ICMyNmE2OWEsXG4gIDUwMDogIzAwOTY4OCxcbiAgNjAwOiAjMDA4OTdiLFxuICA3MDA6ICMwMDc5NmIsXG4gIDgwMDogIzAwNjk1YyxcbiAgOTAwOiAjMDA0ZDQwLFxuICBBMTAwOiAjYTdmZmViLFxuICBBMjAwOiAjNjRmZmRhLFxuICBBNDAwOiAjMWRlOWI2LFxuICBBNzAwOiAjMDBiZmE1LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRncmVlbi1wYWxldHRlOiAoXG4gIDUwOiAjZThmNWU5LFxuICAxMDA6ICNjOGU2YzksXG4gIDIwMDogI2E1ZDZhNyxcbiAgMzAwOiAjODFjNzg0LFxuICA0MDA6ICM2NmJiNmEsXG4gIDUwMDogIzRjYWY1MCxcbiAgNjAwOiAjNDNhMDQ3LFxuICA3MDA6ICMzODhlM2MsXG4gIDgwMDogIzJlN2QzMixcbiAgOTAwOiAjMWI1ZTIwLFxuICBBMTAwOiAjYjlmNmNhLFxuICBBMjAwOiAjNjlmMGFlLFxuICBBNDAwOiAjMDBlNjc2LFxuICBBNzAwOiAjMDBjODUzLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJGxpZ2h0LWdyZWVuLXBhbGV0dGU6IChcbiAgNTA6ICNmMWY4ZTksXG4gIDEwMDogI2RjZWRjOCxcbiAgMjAwOiAjYzVlMWE1LFxuICAzMDA6ICNhZWQ1ODEsXG4gIDQwMDogIzljY2M2NSxcbiAgNTAwOiAjOGJjMzRhLFxuICA2MDA6ICM3Y2IzNDIsXG4gIDcwMDogIzY4OWYzOCxcbiAgODAwOiAjNTU4YjJmLFxuICA5MDA6ICMzMzY5MWUsXG4gIEExMDA6ICNjY2ZmOTAsXG4gIEEyMDA6ICNiMmZmNTksXG4gIEE0MDA6ICM3NmZmMDMsXG4gIEE3MDA6ICM2NGRkMTcsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRsaW1lLXBhbGV0dGU6IChcbiAgNTA6ICNmOWZiZTcsXG4gIDEwMDogI2YwZjRjMyxcbiAgMjAwOiAjZTZlZTljLFxuICAzMDA6ICNkY2U3NzUsXG4gIDQwMDogI2Q0ZTE1NyxcbiAgNTAwOiAjY2RkYzM5LFxuICA2MDA6ICNjMGNhMzMsXG4gIDcwMDogI2FmYjQyYixcbiAgODAwOiAjOWU5ZDI0LFxuICA5MDA6ICM4Mjc3MTcsXG4gIEExMDA6ICNmNGZmODEsXG4gIEEyMDA6ICNlZWZmNDEsXG4gIEE0MDA6ICNjNmZmMDAsXG4gIEE3MDA6ICNhZWVhMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4keWVsbG93LXBhbGV0dGU6IChcbiAgNTA6ICNmZmZkZTcsXG4gIDEwMDogI2ZmZjljNCxcbiAgMjAwOiAjZmZmNTlkLFxuICAzMDA6ICNmZmYxNzYsXG4gIDQwMDogI2ZmZWU1OCxcbiAgNTAwOiAjZmZlYjNiLFxuICA2MDA6ICNmZGQ4MzUsXG4gIDcwMDogI2ZiYzAyZCxcbiAgODAwOiAjZjlhODI1LFxuICA5MDA6ICNmNTdmMTcsXG4gIEExMDA6ICNmZmZmOGQsXG4gIEEyMDA6ICNmZmZmMDAsXG4gIEE0MDA6ICNmZmVhMDAsXG4gIEE3MDA6ICNmZmQ2MDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRhbWJlci1wYWxldHRlOiAoXG4gIDUwOiAjZmZmOGUxLFxuICAxMDA6ICNmZmVjYjMsXG4gIDIwMDogI2ZmZTA4MixcbiAgMzAwOiAjZmZkNTRmLFxuICA0MDA6ICNmZmNhMjgsXG4gIDUwMDogI2ZmYzEwNyxcbiAgNjAwOiAjZmZiMzAwLFxuICA3MDA6ICNmZmEwMDAsXG4gIDgwMDogI2ZmOGYwMCxcbiAgOTAwOiAjZmY2ZjAwLFxuICBBMTAwOiAjZmZlNTdmLFxuICBBMjAwOiAjZmZkNzQwLFxuICBBNDAwOiAjZmZjNDAwLFxuICBBNzAwOiAjZmZhYjAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kb3JhbmdlLXBhbGV0dGU6IChcbiAgNTA6ICNmZmYzZTAsXG4gIDEwMDogI2ZmZTBiMixcbiAgMjAwOiAjZmZjYzgwLFxuICAzMDA6ICNmZmI3NGQsXG4gIDQwMDogI2ZmYTcyNixcbiAgNTAwOiAjZmY5ODAwLFxuICA2MDA6ICNmYjhjMDAsXG4gIDcwMDogI2Y1N2MwMCxcbiAgODAwOiAjZWY2YzAwLFxuICA5MDA6ICNlNjUxMDAsXG4gIEExMDA6ICNmZmQxODAsXG4gIEEyMDA6ICNmZmFiNDAsXG4gIEE0MDA6ICNmZjkxMDAsXG4gIEE3MDA6ICNmZjZkMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6IGJsYWNrLFxuICApXG4pO1xuXG4kZGVlcC1vcmFuZ2UtcGFsZXR0ZTogKFxuICA1MDogI2ZiZTllNyxcbiAgMTAwOiAjZmZjY2JjLFxuICAyMDA6ICNmZmFiOTEsXG4gIDMwMDogI2ZmOGE2NSxcbiAgNDAwOiAjZmY3MDQzLFxuICA1MDA6ICNmZjU3MjIsXG4gIDYwMDogI2Y0NTExZSxcbiAgNzAwOiAjZTY0YTE5LFxuICA4MDA6ICNkODQzMTUsXG4gIDkwMDogI2JmMzYwYyxcbiAgQTEwMDogI2ZmOWU4MCxcbiAgQTIwMDogI2ZmNmU0MCxcbiAgQTQwMDogI2ZmM2QwMCxcbiAgQTcwMDogI2RkMmMwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRicm93bi1wYWxldHRlOiAoXG4gIDUwOiAjZWZlYmU5LFxuICAxMDA6ICNkN2NjYzgsXG4gIDIwMDogI2JjYWFhNCxcbiAgMzAwOiAjYTE4ODdmLFxuICA0MDA6ICM4ZDZlNjMsXG4gIDUwMDogIzc5NTU0OCxcbiAgNjAwOiAjNmQ0YzQxLFxuICA3MDA6ICM1ZDQwMzcsXG4gIDgwMDogIzRlMzQyZSxcbiAgOTAwOiAjM2UyNzIzLFxuICBBMTAwOiAjZDdjY2M4LFxuICBBMjAwOiAjYmNhYWE0LFxuICBBNDAwOiAjOGQ2ZTYzLFxuICBBNzAwOiAjNWQ0MDM3LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kZ3JleS1wYWxldHRlOiAoXG4gIDUwOiAjZmFmYWZhLFxuICAxMDA6ICNmNWY1ZjUsXG4gIDIwMDogI2VlZWVlZSxcbiAgMzAwOiAjZTBlMGUwLFxuICA0MDA6ICNiZGJkYmQsXG4gIDUwMDogIzllOWU5ZSxcbiAgNjAwOiAjNzU3NTc1LFxuICA3MDA6ICM2MTYxNjEsXG4gIDgwMDogIzQyNDI0MixcbiAgOTAwOiAjMjEyMTIxLFxuICBBMTAwOiAjZmZmZmZmLFxuICBBMjAwOiAjZWVlZWVlLFxuICBBNDAwOiAjYmRiZGJkLFxuICBBNzAwOiAjNjE2MTYxLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbi8vIEFsaWFzIGZvciBhbHRlcm5hdGUgc3BlbGxpbmcuXG4kZ3JheS1wYWxldHRlOiAkZ3JleS1wYWxldHRlO1xuXG4kYmx1ZS1ncmV5LXBhbGV0dGU6IChcbiAgNTA6ICNlY2VmZjEsXG4gIDEwMDogI2NmZDhkYyxcbiAgMjAwOiAjYjBiZWM1LFxuICAzMDA6ICM5MGE0YWUsXG4gIDQwMDogIzc4OTA5YyxcbiAgNTAwOiAjNjA3ZDhiLFxuICA2MDA6ICM1NDZlN2EsXG4gIDcwMDogIzQ1NWE2NCxcbiAgODAwOiAjMzc0NzRmLFxuICA5MDA6ICMyNjMyMzgsXG4gIEExMDA6ICNjZmQ4ZGMsXG4gIEEyMDA6ICNiMGJlYzUsXG4gIEE0MDA6ICM3ODkwOWMsXG4gIEE3MDA6ICM0NTVhNjQsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuLy8gQWxpYXMgZm9yIGFsdGVybmF0ZSBzcGVsbGluZy5cbiRibHVlLWdyYXktcGFsZXR0ZTogJGJsdWUtZ3JleS1wYWxldHRlO1xuXG5cbi8vIEJhY2tncm91bmQgcGFsZXR0ZSBmb3IgbGlnaHQgdGhlbWVzLlxuJGxpZ2h0LXRoZW1lLWJhY2tncm91bmQtcGFsZXR0ZTogKFxuICBzdGF0dXMtYmFyOiBtYXAuZ2V0KCRncmV5LXBhbGV0dGUsIDMwMCksXG4gIGFwcC1iYXI6ICAgIG1hcC5nZXQoJGdyZXktcGFsZXR0ZSwgMTAwKSxcbiAgYmFja2dyb3VuZDogbWFwLmdldCgkZ3JleS1wYWxldHRlLCA1MCksXG4gIGhvdmVyOiAgICAgIHJnYmEoYmxhY2ssIDAuMDQpLCAvLyBUT0RPKGthcmEpOiBjaGVjayBzdHlsZSB3aXRoIE1hdGVyaWFsIERlc2lnbiBVWFxuICBjYXJkOiAgICAgICB3aGl0ZSxcbiAgZGlhbG9nOiAgICAgd2hpdGUsXG4gIGRpc2FibGVkLWJ1dHRvbjogcmdiYShibGFjaywgMC4xMiksXG4gIHJhaXNlZC1idXR0b246IHdoaXRlLFxuICBmb2N1c2VkLWJ1dHRvbjogJGRhcmstZm9jdXNlZCxcbiAgc2VsZWN0ZWQtYnV0dG9uOiBtYXAuZ2V0KCRncmV5LXBhbGV0dGUsIDMwMCksXG4gIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbjogbWFwLmdldCgkZ3JleS1wYWxldHRlLCA0MDApLFxuICBkaXNhYmxlZC1idXR0b24tdG9nZ2xlOiBtYXAuZ2V0KCRncmV5LXBhbGV0dGUsIDIwMCksXG4gIHVuc2VsZWN0ZWQtY2hpcDogbWFwLmdldCgkZ3JleS1wYWxldHRlLCAzMDApLFxuICBkaXNhYmxlZC1saXN0LW9wdGlvbjogbWFwLmdldCgkZ3JleS1wYWxldHRlLCAyMDApLFxuICB0b29sdGlwOiBtYXAuZ2V0KCRncmV5LXBhbGV0dGUsIDcwMCksXG4pO1xuXG4vLyBCYWNrZ3JvdW5kIHBhbGV0dGUgZm9yIGRhcmsgdGhlbWVzLlxuJGRhcmstdGhlbWUtYmFja2dyb3VuZC1wYWxldHRlOiAoXG4gIHN0YXR1cy1iYXI6IGJsYWNrLFxuICBhcHAtYmFyOiAgICBtYXAuZ2V0KCRncmV5LXBhbGV0dGUsIDkwMCksXG4gIGJhY2tncm91bmQ6ICMzMDMwMzAsXG4gIGhvdmVyOiAgICAgIHJnYmEod2hpdGUsIDAuMDQpLCAvLyBUT0RPKGthcmEpOiBjaGVjayBzdHlsZSB3aXRoIE1hdGVyaWFsIERlc2lnbiBVWFxuICBjYXJkOiAgICAgICBtYXAuZ2V0KCRncmV5LXBhbGV0dGUsIDgwMCksXG4gIGRpYWxvZzogICAgIG1hcC5nZXQoJGdyZXktcGFsZXR0ZSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uOiByZ2JhKHdoaXRlLCAwLjEyKSxcbiAgcmFpc2VkLWJ1dHRvbjogbWFwLmdldCgkZ3JleS1wYWxldHRlLCA4MDApLFxuICBmb2N1c2VkLWJ1dHRvbjogJGxpZ2h0LWZvY3VzZWQsXG4gIHNlbGVjdGVkLWJ1dHRvbjogbWFwLmdldCgkZ3JleS1wYWxldHRlLCA5MDApLFxuICBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b246IG1hcC5nZXQoJGdyZXktcGFsZXR0ZSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZTogYmxhY2ssXG4gIHVuc2VsZWN0ZWQtY2hpcDogbWFwLmdldCgkZ3JleS1wYWxldHRlLCA3MDApLFxuICBkaXNhYmxlZC1saXN0LW9wdGlvbjogYmxhY2ssXG4gIHRvb2x0aXA6IG1hcC5nZXQoJGdyZXktcGFsZXR0ZSwgNzAwKSxcbik7XG5cbi8vIEZvcmVncm91bmQgcGFsZXR0ZSBmb3IgbGlnaHQgdGhlbWVzLlxuJGxpZ2h0LXRoZW1lLWZvcmVncm91bmQtcGFsZXR0ZTogKFxuICBiYXNlOiAgICAgICAgICAgICAgYmxhY2ssXG4gIGRpdmlkZXI6ICAgICAgICAgICAkZGFyay1kaXZpZGVycyxcbiAgZGl2aWRlcnM6ICAgICAgICAgICRkYXJrLWRpdmlkZXJzLFxuICBkaXNhYmxlZDogICAgICAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgZGlzYWJsZWQtYnV0dG9uOiAgIHJnYmEoYmxhY2ssIDAuMjYpLFxuICBkaXNhYmxlZC10ZXh0OiAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgZWxldmF0aW9uOiAgICAgICAgIGJsYWNrLFxuICBoaW50LXRleHQ6ICAgICAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgc2Vjb25kYXJ5LXRleHQ6ICAgICRkYXJrLXNlY29uZGFyeS10ZXh0LFxuICBpY29uOiAgICAgICAgICAgICAgcmdiYShibGFjaywgMC41NCksXG4gIGljb25zOiAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjU0KSxcbiAgdGV4dDogICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuODcpLFxuICBzbGlkZXItbWluOiAgICAgICAgcmdiYShibGFjaywgMC44NyksXG4gIHNsaWRlci1vZmY6ICAgICAgICByZ2JhKGJsYWNrLCAwLjI2KSxcbiAgc2xpZGVyLW9mZi1hY3RpdmU6IHJnYmEoYmxhY2ssIDAuMzgpLFxuKTtcblxuLy8gRm9yZWdyb3VuZCBwYWxldHRlIGZvciBkYXJrIHRoZW1lcy5cbiRkYXJrLXRoZW1lLWZvcmVncm91bmQtcGFsZXR0ZTogKFxuICBiYXNlOiAgICAgICAgICAgICAgd2hpdGUsXG4gIGRpdmlkZXI6ICAgICAgICAgICAkbGlnaHQtZGl2aWRlcnMsXG4gIGRpdmlkZXJzOiAgICAgICAgICAkbGlnaHQtZGl2aWRlcnMsXG4gIGRpc2FibGVkOiAgICAgICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgZGlzYWJsZWQtYnV0dG9uOiAgIHJnYmEod2hpdGUsIDAuMyksXG4gIGRpc2FibGVkLXRleHQ6ICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgZWxldmF0aW9uOiAgICAgICAgIGJsYWNrLFxuICBoaW50LXRleHQ6ICAgICAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIHNlY29uZGFyeS10ZXh0OiAgICAkbGlnaHQtc2Vjb25kYXJ5LXRleHQsXG4gIGljb246ICAgICAgICAgICAgICB3aGl0ZSxcbiAgaWNvbnM6ICAgICAgICAgICAgIHdoaXRlLFxuICB0ZXh0OiAgICAgICAgICAgICAgd2hpdGUsXG4gIHNsaWRlci1taW46ICAgICAgICB3aGl0ZSxcbiAgc2xpZGVyLW9mZjogICAgICAgIHJnYmEod2hpdGUsIDAuMyksXG4gIHNsaWRlci1vZmYtYWN0aXZlOiByZ2JhKHdoaXRlLCAwLjMpLFxuKTtcbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvbGlzdC1jb21tb24nO1xuXG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtbGlzdC1iYXNlIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWxpc3QtaXRlbS1kaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1saXN0LW9wdGlvbik7XG4gIH1cblxuICAubWF0LWxpc3Qtb3B0aW9uLFxuICAubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtLFxuICAubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtIHtcbiAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgJ2hvdmVyJyk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1saXN0LXNpbmdsZS1zZWxlY3RlZC1vcHRpb24ge1xuICAgICYsICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBob3ZlciwgMC4xMik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gICRmb250LWZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnKTtcblxuICAubWF0LWxpc3QtaXRlbSB7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuXG4gIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cblxuICAvLyBEZWZhdWx0IGxpc3RcbiAgLm1hdC1saXN0LWJhc2Uge1xuICAgIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgIGZvbnQtc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIGxpc3QtY29tbW9uLmJhc2UodHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBmb250LXNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgICBAaW5jbHVkZSBsaXN0LWNvbW1vbi5iYXNlKHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMik7XG4gICAgICBmb250LXNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgICBmb250LXdlaWdodDogdHlwb2dyYXBoeS11dGlscy5mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERlbnNlIGxpc3RcbiAgLm1hdC1saXN0LWJhc2VbZGVuc2VdIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbGlzdC1jb21tb24uYmFzZSh0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBmb250LXNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbGlzdC1jb21tb24uYmFzZSh0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgICAgIGZvbnQtc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBmb250LXdlaWdodDogdHlwb2dyYXBoeS11dGlscy5mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWxpc3QnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9wcml2YXRlJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcblxuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LW1lbnUtcGFuZWwge1xuICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJGNvbmZpZyk7XG4gICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW0ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsICd0ZXh0Jyk7XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAmLFxuICAgICAgLm1hdC1tZW51LXN1Ym1lbnUtaWNvbixcbiAgICAgIC5tYXQtaWNvbi1uby1jb2xvciB7XG4gICAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsICdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtIC5tYXQtaWNvbi1uby1jb2xvcixcbiAgLm1hdC1tZW51LXN1Ym1lbnUtaWNvbiB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtOmhvdmVyLFxuICAubWF0LW1lbnUtaXRlbS5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAubWF0LW1lbnUtaXRlbS5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgLm1hdC1tZW51LWl0ZW0taGlnaGxpZ2h0ZWQge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgJ2hvdmVyJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgICB3ZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMuZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1tZW51Jykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuQHVzZSAnLi4vY29yZS9kZW5zaXR5L3ByaXZhdGUvY29tcGF0aWJpbGl0eSc7XG5AdXNlICcuL3BhZ2luYXRvci12YXJpYWJsZXMnO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LXBhZ2luYXRvciB7XG4gICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3IsXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1maXJzdCxcbiAgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIHtcbiAgICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gICAgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50LFxuICAgIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuICAgIC5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICAgICAgYm9yZGVyLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsICdkaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIHNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRkZW5zaXR5LXNjYWxlOiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGhlaWdodDogY29tcGF0aWJpbGl0eS5wcml2YXRlLWRlbnNpdHktcHJvcC12YWx1ZShwYWdpbmF0b3ItdmFyaWFibGVzLiRkZW5zaXR5LWNvbmZpZyxcbiAgICAkZGVuc2l0eS1zY2FsZSwgaGVpZ2h0KTtcblxuICBAaW5jbHVkZSBjb21wYXRpYmlsaXR5LnByaXZhdGUtZGVuc2l0eS1sZWdhY3ktY29tcGF0aWJpbGl0eSgpIHtcbiAgICAubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xuICAgICAgbWluLWhlaWdodDogJGhlaWdodDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXBhZ2luYXRvcicpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICdzYXNzOmNvbG9yJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcblxuLy8gQXBwcm94aW1hdGVzIHRoZSBjb3JyZWN0IGJ1ZmZlciBjb2xvciBieSB1c2luZyBhIG1peCBiZXR3ZWVuIHRoZSB0aGVtZSBjb2xvclxuLy8gYW5kIHRoZSB0aGVtZSdzIGJhY2tncm91bmQgY29sb3IuXG5AZnVuY3Rpb24gX2dldC1idWZmZXItY29sb3IoJHRoZW1lLCAkYmFja2dyb3VuZCkge1xuICAkdGhlbWUtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkdGhlbWUpO1xuICAvLyBSZXR1cm4gZmFsbGJhY2sgY29sb3IgaWYgdGhlIHRoZW1lIHVzZXMgdmFyaWFibGVzIHRvIGRlZmluZSBjb2xvcnMuXG4gIEBpZiAobWV0YS50eXBlLW9mKCR0aGVtZS1jb2xvcikgIT0gJ2NvbG9yJyBvciBtZXRhLnR5cGUtb2YoJGJhY2tncm91bmQpICE9ICdjb2xvcicpIHtcbiAgICBAcmV0dXJuIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkdGhlbWUsIGxpZ2h0ZXIpO1xuICB9XG4gIEByZXR1cm4gY29sb3IubWl4KCR0aGVtZS1jb2xvciwgJGJhY2tncm91bmQsICR3ZWlnaHQ6IDI1JSk7XG59XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCksIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgIGZpbGw6IF9nZXQtYnVmZmVyLWNvbG9yKCRwcmltYXJ5LCAkYmFja2dyb3VuZCk7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IF9nZXQtYnVmZmVyLWNvbG9yKCRwcmltYXJ5LCAkYmFja2dyb3VuZCk7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQge1xuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgICAgZmlsbDogX2dldC1idWZmZXItY29sb3IoJGFjY2VudCwgJGJhY2tncm91bmQpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBfZ2V0LWJ1ZmZlci1jb2xvcigkYWNjZW50LCAkYmFja2dyb3VuZCk7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhY2NlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIHtcbiAgICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICAgIGZpbGw6IF9nZXQtYnVmZmVyLWNvbG9yKCR3YXJuLCAkYmFja2dyb3VuZCk7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IF9nZXQtYnVmZmVyLWNvbG9yKCR3YXJuLCAkYmFja2dyb3VuZCk7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1wcm9ncmVzcy1iYXInKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG5cbiAgLm1hdC1wcm9ncmVzcy1zcGlubmVyLCAubWF0LXNwaW5uZXIge1xuICAgIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IGNpcmNsZSB7XG4gICAgICBzdHJva2U6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtcHJvZ3Jlc3Mtc3Bpbm5lcicpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5cbkBtaXhpbiBfY29sb3IoJHBhbGV0dGUpIHtcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHBhbGV0dGUpO1xuICB9XG5cbiAgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsXG4gIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLFxuICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsXG4gICY6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSk7XG4gIH1cbn1cblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLmdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLmdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX2NvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX2NvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX2NvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIG5lZWRzIGV4dHJhIHNwZWNpZmljaXR5LCBiZWNhdXNlIHRoZSBjbGFzc2VzIGFib3ZlIGFyZSBjb21iaW5lZFxuICAgIC8vIChlLmcuIGAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50YCkgd2hpY2ggaW5jcmVhc2VzIHRoZWlyIHNwZWNpZmljaXR5IGEgbG90LlxuICAgIC8vIFRPRE86IGNvbnNpZGVyIG1ha2luZyB0aGUgc2VsZWN0b3JzIGludG8gZGVzY2VuZGFudHMgKGAubWF0LXByaW1hcnkgLm1hdC1yYWRpby1idXR0b25gKS5cbiAgICAmLm1hdC1yYWRpby1kaXNhYmxlZCB7XG4gICAgICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLFxuICAgICAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgICAgICBib3JkZXItY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50LFxuICAgICAgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50IHtcbiAgICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN3aXRjaCB0aGlzIHRvIGEgc29saWQgY29sb3Igc2luY2Ugd2UncmUgdXNpbmcgYG9wYWNpdHlgXG4gICAgLy8gdG8gY29udHJvbCBob3cgb3BhcXVlIHRoZSByaXBwbGUgc2hvdWxkIGJlLlxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLmdldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXJhZGlvJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvcHJpdmF0ZSc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL2Zvcm0tY29tbW9uJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcblxuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG5cbiAgLm1hdC1zZWxlY3QtdmFsdWUge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiBmb3JtLWNvbW1vbi5wcml2YXRlLWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtcGFuZWwge1xuICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkY29uZmlnKTtcblxuICAgIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpIHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgaG92ZXIsIDAuMTIpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgJi5tYXQtZm9jdXNlZCB7XG4gICAgICAmLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSwgdGV4dCk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWFjY2VudCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCwgdGV4dCk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4gLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuLCB0ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWludmFsaWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2FybiwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAubWF0LXNlbGVjdCB7XG4gICAgZm9udC1mYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBoZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMucHJpdmF0ZS1jb2VyY2UtdW5pdGxlc3MtdG8tZW0oJGxpbmUtaGVpZ2h0KTtcbiAgfVxufVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXNlbGVjdCcpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOmNvbG9yJztcbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3ByaXZhdGUnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgJGRyYXdlci1iYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICRkcmF3ZXItY29udGFpbmVyLWJhY2tncm91bmQtY29sb3I6ICB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAkZHJhd2VyLXB1c2gtYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAkZHJhd2VyLXNpZGUtYm9yZGVyOiBzb2xpZCAxcHggdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItY29udGFpbmVyLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWRyYXdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtZHJhd2VyLXB1c2gge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1wdXNoLWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1kcmF3ZXItc2lkZSkge1xuICAgICAgLy8gVGhlIGVsZXZhdGlvbiBvZiB6LTE2IGlzIG5vdGVkIGluIHRoZSBkZXNpZ24gc3BlY2lmaWNhdGlvbnMuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9uYXZpZ2F0aW9uLWRyYXdlci5odG1sXG4gICAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtZWxldmF0aW9uKDE2LCAkY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWRyYXdlci1zaWRlIHtcbiAgICBib3JkZXItcmlnaHQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG5cbiAgICAmLm1hdC1kcmF3ZXItZW5kIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddIC5tYXQtZHJhd2VyLXNpZGUge1xuICAgIGJvcmRlci1sZWZ0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcblxuICAgICYubWF0LWRyYXdlci1lbmQge1xuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kcmF3ZXItYmFja2Ryb3AubWF0LWRyYXdlci1zaG93biB7XG4gICAgJG9wYWNpdHk6IDAuNjtcbiAgICAkYmFja2Ryb3AtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgY2FyZCwgJG9wYWNpdHkpO1xuXG4gICAgQGlmIChtZXRhLnR5cGUtb2YoJGJhY2tkcm9wLWNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgLy8gV2UgdXNlIGludmVydCgpIGhlcmUgdG8gaGF2ZSB0aGUgZGFya2VuIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGV4cGVjdGVkIHRvIGJlIHVzZWQuIElmIHRoZVxuICAgICAgLy8gYmFja2dyb3VuZCBpcyBsaWdodCwgd2UgdXNlIGEgZGFyayBiYWNrZHJvcC4gSWYgdGhlIGJhY2tncm91bmQgaXMgZGFyayxcbiAgICAgIC8vIHdlIHVzZSBhIGxpZ2h0IGJhY2tkcm9wLlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IuaW52ZXJ0KCRiYWNrZHJvcC1jb2xvcik7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHdlIGNvdWxkbid0IHJlc29sdmUgdGhlIGJhY2tkcm9wIGNvbG9yIHRvIGEgY29sb3IgdmFsdWUsIGZhbGwgYmFjayB0byB1c2luZ1xuICAgICAgLy8gYG9wYWNpdHlgIHRvIG1ha2UgaXQgb3BhcXVlIHNpbmNlIGl0cyBlbmQgdmFsdWUgY291bGQgYmUgYSBzb2xpZCBjb2xvci5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZHJvcC1jb2xvcjtcbiAgICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXNpZGVuYXYnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9wcml2YXRlJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy9wYWxldHRlJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcblxuQG1peGluIF9jaGVja2VkLWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpIHtcbiAgJi5tYXQtY2hlY2tlZCB7XG4gICAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gICAgICAvLyBPcGFjaXR5IGlzIGRldGVybWluZWQgZnJvbSB0aGUgc3BlY3MgZm9yIHRoZSBzZWxlY3Rpb24gY29udHJvbHMuXG4gICAgICAvLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvc2VsZWN0aW9uLWNvbnRyb2xzLmh0bWwjc3BlY3NcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlLCAwLjU0KTtcbiAgICB9XG5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIC8vIFNldCBubyBvcGFjaXR5IGZvciB0aGUgcmlwcGxlcyBiZWNhdXNlIHRoZSByaXBwbGUgb3BhY2l0eSB3aWxsIGJlIGFkanVzdGVkIGR5bmFtaWNhbGx5XG4gICAgICAvLyBiYXNlZCBvbiB0aGUgdHlwZSBvZiBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZS10b2dnbGUgKGUuZy4gZm9yIGhvdmVyLCBmb2N1cylcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkaXMtZGFyazogbWFwLmdldCgkY29uZmlnLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAvLyBDb2xvciBodWVzIGFyZSBiYXNlZCBvbiB0aGUgc3BlY3Mgd2hpY2ggYnJpZWZseSBzaG93IHRoZSBodWVzIHRoYXQgYXJlIGFwcGxpZWQgdG8gYSBzd2l0Y2guXG4gIC8vIFRoZSAyMDE4IHNwZWNzIG5vIGxvbmdlciBkZXNjcmliZSBob3cgZGFyayBzd2l0Y2hlcyBzaG91bGQgbG9vayBsaWtlLiBEdWUgdG8gdGhlIGxhY2sgb2ZcbiAgLy8gaW5mb3JtYXRpb24gZm9yIGRhcmsgdGhlbWVkIHN3aXRjaGVzLCB3ZSBwYXJ0aWFsbHkga2VlcCB0aGUgb2xkIGJlaGF2aW9yIHRoYXQgaXMgYmFzZWQgb25cbiAgLy8gdGhlIHByZXZpb3VzIHNwZWNpZmljYXRpb25zLiBGb3IgdGhlIGNoZWNrZWQgY29sb3Igd2UgYWx3YXlzIHVzZSB0aGUgYGRlZmF1bHRgIGh1ZSBiZWNhdXNlXG4gIC8vIHRoYXQgZm9sbG93cyBNREMgYW5kIGFsc28gbWFrZXMgaXQgZWFzaWVyIGZvciBwZW9wbGUgdG8gY3JlYXRlIGEgY3VzdG9tIHRoZW1lIHdpdGhvdXQgbmVlZGluZ1xuICAvLyB0byBzcGVjaWZ5IGVhY2ggaHVlIGluZGl2aWR1YWxseS5cbiAgJHRodW1iLXVuY2hlY2tlZC1odWU6IGlmKCRpcy1kYXJrLCA0MDAsIDUwKTtcbiAgJHRodW1iLWNoZWNrZWQtaHVlOiBkZWZhdWx0O1xuXG4gICRiYXItdW5jaGVja2VkLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgJHJpcHBsZS11bmNoZWNrZWQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgYmFzZSk7XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUge1xuICAgIEBpbmNsdWRlIF9jaGVja2VkLWNvbG9yKCRhY2NlbnQsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG5cbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9jaGVja2VkLWNvbG9yKCRwcmltYXJ5LCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX2NoZWNrZWQtY29sb3IoJHdhcm4sICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2VkKSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIC8vIFNldCBubyBvcGFjaXR5IGZvciB0aGUgcmlwcGxlcyBiZWNhdXNlIHRoZSByaXBwbGUgb3BhY2l0eSB3aWxsIGJlIGFkanVzdGVkIGR5bmFtaWNhbGx5XG4gICAgICAvLyBiYXNlZCBvbiB0aGUgdHlwZSBvZiBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZS10b2dnbGUgKGUuZy4gZm9yIGhvdmVyLCBmb2N1cylcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtZWxldmF0aW9uKDEsICRjb25maWcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZShwYWxldHRlLiRncmV5LXBhbGV0dGUsICR0aHVtYi11bmNoZWNrZWQtaHVlKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhci11bmNoZWNrZWQtY29sb3I7XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC1zbGlkZS10b2dnbGUtY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1zbGlkZS10b2dnbGUnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1ldGEnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuXG5AbWl4aW4gX2lubmVyLWNvbnRlbnQtdGhlbWUoJHBhbGV0dGUpIHtcbiAgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbiAgLm1hdC1zbGlkZXItdGh1bWIsXG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHBhbGV0dGUpO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgICAkb3BhY2l0eTogMC4yO1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwYWxldHRlLCBkZWZhdWx0LCAkb3BhY2l0eSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuXG4gICAgLy8gYG1hdC1jb2xvcmAgdXNlcyBgcmdiYWAgZm9yIHRoZSBvcGFjaXR5IHdoaWNoIHdvbid0IHdvcmsgd2l0aFxuICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgQGlmIChtZXRhLnR5cGUtb2YoJGNvbG9yKSAhPSBjb2xvcikge1xuICAgICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAkbWF0LXNsaWRlci1vZmYtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNsaWRlci1vZmYtYWN0aXZlKTtcbiAgJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWNvbG9yOlxuICAgIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2xpZGVyLW1pbik7XG4gICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWxhYmVsLWNvbG9yOlxuICAgIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eTogMC43O1xuICAkbWF0LXNsaWRlci10aWNrLWNvbG9yOlxuICAgIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgYmFzZSwgJG1hdC1zbGlkZXItdGljay1vcGFjaXR5KTtcbiAgJG1hdC1zbGlkZXItdGljay1zaXplOiAycHg7XG5cbiAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBfaW5uZXItY29udGVudC10aGVtZSgkcHJpbWFyeSk7XG4gIH1cblxuICAubWF0LWFjY2VudCB7XG4gICAgQGluY2x1ZGUgX2lubmVyLWNvbnRlbnQtdGhlbWUoJGFjY2VudCk7XG4gIH1cblxuICAubWF0LXdhcm4ge1xuICAgIEBpbmNsdWRlIF9pbm5lci1jb250ZW50LXRoZW1lKCR3YXJuKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyOmhvdmVyLFxuICAubWF0LXNsaWRlci5jZGstZm9jdXNlZCB7XG4gICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1kaXNhYmxlZCB7XG4gICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCxcbiAgICAubWF0LXNsaWRlci10cmFjay1maWxsLFxuICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLW1pbi12YWx1ZSB7XG4gICAgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gICAgICAkb3BhY2l0eTogMC4xMjtcbiAgICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBiYXNlLCAkb3BhY2l0eSk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG5cbiAgICAgIC8vIGBtYXQtY29sb3JgIHVzZXMgYHJnYmFgIGZvciB0aGUgb3BhY2l0eSB3aGljaCB3b24ndCB3b3JrIHdpdGhcbiAgICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgICBAaWYgKG1ldGEudHlwZS1vZigkY29sb3IpICE9IGNvbG9yKSB7XG4gICAgICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iLFxuICAgICAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgJi5jZGstZm9jdXNlZCB7XG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iLFxuICAgICAgICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItbGFiZWwtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKSB7XG4gICAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlcixcbiAgICAgICYuY2RrLWZvY3VzZWQge1xuICAgICAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWhhcy10aWNrcyAubWF0LXNsaWRlci13cmFwcGVyOjphZnRlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci10aWNrLWNvbG9yO1xuXG4gICAgLy8gYG1hdC1jb2xvcmAgdXNlcyBgcmdiYWAgZm9yIHRoZSBvcGFjaXR5IHdoaWNoIHdvbid0IHdvcmsgd2l0aFxuICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgQGlmIChtZXRhLnR5cGUtb2YoJG1hdC1zbGlkZXItdGljay1jb2xvcikgIT0gY29sb3IpIHtcbiAgICAgIG9wYWNpdHk6ICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuICAgIC8vIEZpcmVmb3ggZG9lc24ndCBkcmF3IHRoZSBncmFkaWVudCBjb3JyZWN0bHkgd2l0aCAndG8gcmlnaHQnXG4gICAgLy8gKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzE0MzE5KS5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoMC4wMDAxZGVnLCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuXG4gICAgLy8gYG1hdC1jb2xvcmAgdXNlcyBgcmdiYWAgZm9yIHRoZSBvcGFjaXR5IHdoaWNoIHdvbid0IHdvcmsgd2l0aFxuICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgQGlmIChtZXRhLnR5cGUtb2YoJG1hdC1zbGlkZXItdGljay1jb2xvcikgIT0gY29sb3IpIHtcbiAgICAgIG9wYWNpdHk6ICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci12ZXJ0aWNhbCAubWF0LXNsaWRlci10aWNrcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG5cbiAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgLy8gQ1NTIHZhcmlhYmxlcyBzbyB3ZSBuZWVkIHRvIHVzZSBgb3BhY2l0eWAgYXMgYSBmYWxsYmFjay5cbiAgICBAaWYgKG1ldGEudHlwZS1vZigkbWF0LXNsaWRlci10aWNrLWNvbG9yKSAhPSBjb2xvcikge1xuICAgICAgb3BhY2l0eTogJG1hdC1zbGlkZXItdGljay1vcGFjaXR5O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgICBzaXplOiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIHdlaWdodDogdHlwb2dyYXBoeS11dGlscy5mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXNsaWRlcicpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5AdXNlICcuLi9jb3JlL2RlbnNpdHkvcHJpdmF0ZS9jb21wYXRpYmlsaXR5JztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvcHJpdmF0ZSc7XG5AdXNlICcuL3N0ZXBwZXItdmFyaWFibGVzJztcblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuXG4gIC5tYXQtc3RlcC1oZWFkZXIge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAgICY6aG92ZXI6bm90KFthcmlhLWRpc2FibGVkXSksXG4gICAgJjpob3ZlclthcmlhLWRpc2FibGVkPSdmYWxzZSddIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgICY6aG92ZXJbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddIHtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB9XG5cbiAgICAvLyBPbiB0b3VjaCBkZXZpY2VzIHRoZSA6aG92ZXIgc3RhdGUgd2lsbCBsaW5nZXIgb24gdGhlIGVsZW1lbnQgYWZ0ZXIgYSB0YXAuXG4gICAgLy8gUmVzZXQgaXQgdmlhIGBAbWVkaWFgIGFmdGVyIHRoZSBkZWNsYXJhdGlvbiwgYmVjYXVzZSB0aGUgbWVkaWEgcXVlcnkgaXNuJ3RcbiAgICAvLyBzdXBwb3J0ZWQgYnkgYWxsIGJyb3dzZXJzIHlldC5cbiAgICBAbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwsXG4gICAgLm1hdC1zdGVwLW9wdGlvbmFsIHtcbiAgICAgIC8vIFRPRE8oam9zZXBocGVycm90dCk6IFVwZGF0ZSB0byB1c2luZyBhIGNvcnJlY3RlZCBkaXNhYmxlZC10ZXh0IGNvbnRyYXN0XG4gICAgICAvLyBpbnN0ZWFkIG9mIHNlY29uZGFyeS10ZXh0LlxuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uIHtcbiAgICAgIC8vIFRPRE8oam9zZXBocGVycm90dCk6IFVwZGF0ZSB0byB1c2luZyBhIGNvcnJlY3RlZCBkaXNhYmxlZC10ZXh0IGNvbnRyYXN0XG4gICAgICAvLyBpbnN0ZWFkIG9mIHNlY29uZGFyeS10ZXh0LlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLFxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICAubWF0LXN0ZXAtaWNvbiB7XG4gICAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxuICAgICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcbiAgICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCk7XG4gICAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICAubWF0LXN0ZXAtaWNvbiB7XG4gICAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHdhcm4sIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbiAgICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG4gICAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuKTtcbiAgICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2FybiwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZXJyb3Ige1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZlIHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwgLm1hdC1zdGVwcGVyLXZlcnRpY2FsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGNhcmQpO1xuICB9XG5cbiAgLm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZSB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmJlZm9yZSxcbiAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjphZnRlcixcbiAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LXN0ZXBwZXItdmVydGljYWwsIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgICBmb250LWZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHdlaWdodDogdHlwb2dyYXBoeS11dGlscy5mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH07XG4gIH1cblxuICAubWF0LXN0ZXAtc3ViLWxhYmVsLWVycm9yIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgICBmb250LXNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwtc2VsZWN0ZWQge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgICB3ZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMuZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9O1xuICB9XG59XG5cbkBtaXhpbiBkZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGRlbnNpdHktc2NhbGU6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkaGVpZ2h0OiBjb21wYXRpYmlsaXR5LnByaXZhdGUtZGVuc2l0eS1wcm9wLXZhbHVlKHN0ZXBwZXItdmFyaWFibGVzLiRkZW5zaXR5LWNvbmZpZyxcbiAgICAkZGVuc2l0eS1zY2FsZSwgaGVpZ2h0KTtcbiAgJHZlcnRpY2FsLXBhZGRpbmc6IHByaXZhdGUucHJpdmF0ZS1kaXYoJGhlaWdodCAtIHN0ZXBwZXItdmFyaWFibGVzLiRsYWJlbC1oZWFkZXItaGVpZ2h0LCAyKTtcblxuICBAaW5jbHVkZSBjb21wYXRpYmlsaXR5LnByaXZhdGUtZGVuc2l0eS1sZWdhY3ktY29tcGF0aWJpbGl0eSgpIHtcbiAgICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIge1xuICAgICAgaGVpZ2h0OiAkaGVpZ2h0O1xuICAgIH1cblxuICAgIC5tYXQtc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20gLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLFxuICAgIC5tYXQtdmVydGljYWwtc3RlcHBlci1oZWFkZXIge1xuICAgICAgcGFkZGluZzogJHZlcnRpY2FsLXBhZGRpbmcgc3RlcHBlci12YXJpYWJsZXMuJHNpZGUtZ2FwO1xuICAgIH1cblxuICAgIC8vIEVuc3VyZXMgdGhhdCB0aGUgdmVydGljYWwgbGluZXMgZm9yIHRoZSBzdGVwIGNvbnRlbnQgZXhjZWVkIGludG8gdGhlIHN0ZXBcbiAgICAvLyBoZWFkZXJzIHdpdGggYSBnaXZlbiBkaXN0YW5jZSAoYCRtYXQtc3RlcHBlci1saW5lLWdhcGApIHRvIHRoZSBzdGVwIGljb24uXG4gICAgLm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZSB7XG4gICAgICB0b3A6IHN0ZXBwZXItdmFyaWFibGVzLiRsaW5lLWdhcCAtICR2ZXJ0aWNhbC1wYWRkaW5nO1xuICAgICAgYm90dG9tOiBzdGVwcGVyLXZhcmlhYmxlcy4kbGluZS1nYXAgLSAkdmVydGljYWwtcGFkZGluZztcbiAgICB9XG5cbiAgICAvLyBFbnN1cmVzIHRoYXQgdGhlIGhvcml6b250YWwgbGluZXMgZm9yIHRoZSBzdGVwIGhlYWRlciBhcmUgY2VudGVyZWQgdmVydGljYWxseS5cbiAgICAubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XG4gICAgICAmOjphZnRlciwgJjo6YmVmb3JlIHtcbiAgICAgICAgdG9wOiAkdmVydGljYWwtcGFkZGluZyArIHByaXZhdGUucHJpdmF0ZS1kaXYoc3RlcHBlci12YXJpYWJsZXMuJGxhYmVsLWhlYWRlci1oZWlnaHQsIDIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEVuc3VyZXMgdGhhdCB0aGUgaG9yaXpvbnRhbCBsaW5lIGZvciB0aGUgc3RlcCBjb250ZW50IGlzIGFsaWduZWQgY2VudGVyZWQgdmVydGljYWxseS5cbiAgICAubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xuICAgICAgdG9wOiAkdmVydGljYWwtcGFkZGluZyArIHByaXZhdGUucHJpdmF0ZS1kaXYoc3RlcHBlci12YXJpYWJsZXMuJGxhYmVsLWhlYWRlci1oZWlnaHQsIDIpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtc3RlcHBlcicpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6Y29sb3InO1xuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptZXRhJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1zb3J0LWhlYWRlci1hcnJvdyB7XG4gICAgJHRhYmxlLWJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgICAkdGV4dC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAvLyBCZWNhdXNlIHRoZSBhcnJvdyBpcyBtYWRlIHVwIG9mIG11bHRpcGxlIGVsZW1lbnRzIHRoYXQgYXJlIHN0YWNrZWQgb24gdG9wIG9mIGVhY2ggb3RoZXIsXG4gICAgLy8gd2UgY2FuJ3QgdXNlIHRoZSBzZW1pLXRyYW5zcGFyZW50IGNvbG9yIGZyb20gdGhlIHRoZW1lIGRpcmVjdGx5LiBJZiB0aGUgdmFsdWUgaXMgYSBjb2xvclxuICAgIC8vICp0eXBlKiwgd2UgY29udmVydCBpdCBpbnRvIGEgc29saWQgY29sb3IgYnkgdGFraW5nIHRoZSBvcGFjaXR5IGZyb20gdGhlIHJnYmEgdmFsdWUgYW5kXG4gICAgLy8gdXNpbmcgdGhlIHZhbHVlIHRvIGRldGVybWluZSB0aGUgcGVyY2VudGFnZSBvZiB0aGUgYmFja2dyb3VuZCB0byBwdXQgaW50byBmb3JlZ3JvdW5kXG4gICAgLy8gd2hlbiBtaXhpbmcgdGhlIGNvbG9ycyB0b2dldGhlci4gT3RoZXJ3aXNlLCBpZiBpdCByZXNvbHZlcyB0byBzb21ldGhpbmcgZGlmZmVyZW50XG4gICAgLy8gKGUuZy4gaXQgcmVzb2x2ZXMgdG8gYSBDU1MgdmFyaWFibGUpLCB3ZSB1c2UgdGhlIGNvbG9yIGRpcmVjdGx5LlxuICAgIEBpZiAobWV0YS50eXBlLW9mKCR0YWJsZS1iYWNrZ3JvdW5kKSA9PSBjb2xvciBhbmQgbWV0YS50eXBlLW9mKCR0ZXh0LWNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgJHRleHQtb3BhY2l0eTogb3BhY2l0eSgkdGV4dC1jb2xvcik7XG4gICAgICBjb2xvcjogY29sb3IubWl4KCR0YWJsZS1iYWNrZ3JvdW5kLCByZ2JhKCR0ZXh0LWNvbG9yLCAxKSwgKDEgLSAkdGV4dC1vcGFjaXR5KSAqIDEwMCUpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtc29ydCcpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGhlYWRlci1ib3JkZXI6IDFweCBzb2xpZCB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtdGFiLW5hdi1iYXIsXG4gIC5tYXQtdGFiLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogJGhlYWRlci1ib3JkZXI7XG4gIH1cblxuICAubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIge1xuICAgIC5tYXQtdGFiLW5hdi1iYXIsXG4gICAgLm1hdC10YWItaGVhZGVyIHtcbiAgICAgIGJvcmRlci10b3A6ICRoZWFkZXItYm9yZGVyO1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC10YWItZGlzYWJsZWQge1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGhlYWRlciBib3JkZXIgd2hlbiB0aGVyZSBpcyBhIGJhY2tncm91bmQgY29sb3JcbiAgLm1hdC10YWItZ3JvdXBbY2xhc3MqPSdtYXQtYmFja2dyb3VuZC0nXSA+IC5tYXQtdGFiLWhlYWRlcixcbiAgLm1hdC10YWItbmF2LWJhcltjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cblxuICAubWF0LXRhYi1ncm91cCwgLm1hdC10YWItbmF2LWJhciB7XG4gICAgJHRoZW1lLWNvbG9yczogKFxuICAgICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgICB3YXJuOiAkd2FyblxuICAgICk7XG5cbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1jb2xvcnMge1xuICAgICAgLy8gU2V0IHRoZSBmb3JlZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzXG4gICAgICAmLm1hdC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9sYWJlbC1mb2N1cy1jb2xvcigkY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBfaW5rLWJhci1jb2xvcigkY29sb3IpO1xuXG4gICAgICAgIC8vIE92ZXJyaWRlIGluayBiYXIgd2hlbiBiYWNrZ3JvdW5kIGNvbG9yIGlzIHRoZSBzYW1lXG4gICAgICAgICYubWF0LWJhY2tncm91bmQtI3skbmFtZX0ge1xuICAgICAgICAgID4gLm1hdC10YWItaGVhZGVyLCA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIF9pbmstYmFyLWNvbG9yKCRjb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkdGhlbWUtY29sb3JzIHtcbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzIGFuZCBvdmVycmlkZSBmb2N1cyBjb2xvclxuICAgICAgJi5tYXQtYmFja2dyb3VuZC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9sYWJlbC1mb2N1cy1jb2xvcigkY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBfdGFicy1iYWNrZ3JvdW5kKCRjb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfaW5rLWJhci1jb2xvcigkY29sb3IsICRodWU6IGRlZmF1bHQpIHtcbiAgLm1hdC1pbmstYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGNvbG9yLCAkaHVlKTtcbiAgfVxufVxuXG5AbWl4aW4gX2xhYmVsLWZvY3VzLWNvbG9yKCR0YWItZm9jdXMtY29sb3IpIHtcbiAgLm1hdC10YWItbGFiZWwsXG4gIC5tYXQtdGFiLWxpbmsge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkIHtcbiAgICAgICY6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkdGFiLWZvY3VzLWNvbG9yLCBsaWdodGVyLCAwLjMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX3RhYnMtYmFja2dyb3VuZCgkYmFja2dyb3VuZC1jb2xvcikge1xuICAvLyBOb3RlIHRoYXQgdGhlc2Ugc2VsZWN0b3JzIHRhcmdldCBkaXJlY3QgZGVzY2VuZGFudHMgc29cbiAgLy8gdGhhdCB0aGUgc3R5bGVzIGRvbid0IGFwcGx5IHRvIGFueSBuZXN0ZWQgdGFiIGdyb3Vwcy5cblxuICAvLyBTZXQgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIHRhYiBncm91cFxuICA+IC5tYXQtdGFiLWhlYWRlciwgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciwgPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLWNvbG9yKTtcbiAgfVxuXG4gIC8vIFNldCBsYWJlbHMgdG8gY29udHJhc3QgYWdhaW5zdCBiYWNrZ3JvdW5kXG4gID4gLm1hdC10YWItaGVhZGVyIC5tYXQtdGFiLWxhYmVsLCA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtdGFiLWxpbmsge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuXG4gICAgJi5tYXQtdGFiLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuNCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IHBhZ2luYXRpb24gY2hldnJvbnMgdG8gY29udHJhc3QgYmFja2dyb3VuZFxuICA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLFxuICA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sXG4gID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC1mb2N1cy1pbmRpY2F0b3I6OmJlZm9yZSxcbiAgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC1mb2N1cy1pbmRpY2F0b3I6OmJlZm9yZSB7XG4gICAgYm9yZGVyLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbixcbiAgPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC40KTtcbiAgfVxuXG4gIC8vIFNldCByaXBwbGVzIGNvbG9yIHRvIGJlIHRoZSBjb250cmFzdCBjb2xvciBvZiB0aGUgbmV3IGJhY2tncm91bmQuIE90aGVyd2lzZSB0aGUgcmlwcGxlXG4gIC8vIGNvbG9yIHdpbGwgYmUgYmFzZWQgb24gdGhlIGFwcCBiYWNrZ3JvdW5kIGNvbG9yLlxuICA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXJpcHBsZS1lbGVtZW50LFxuICA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4gID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjEyKTtcbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LXRhYi1ncm91cCB7XG4gICAgZm9udC1mYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcsIGJ1dHRvbik7XG4gICAgICBzaXplOiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtdGFicycpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL2RlbnNpdHkvcHJpdmF0ZS9jb21wYXRpYmlsaXR5JztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvdmFyaWFibGVzJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcbkB1c2UgJy4vdG9vbGJhci12YXJpYWJsZXMnO1xuXG5AbWl4aW4gX2hlaWdodCgkaGVpZ2h0KSB7XG4gIC5tYXQtdG9vbGJhci1tdWx0aXBsZS1yb3dzIHtcbiAgICBtaW4taGVpZ2h0OiAkaGVpZ2h0O1xuICB9XG4gIC5tYXQtdG9vbGJhci1yb3csIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIH1cbn1cblxuQG1peGluIF9wYWxldHRlLXN0eWxlcygkcGFsZXR0ZSkge1xuICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHBhbGV0dGUpO1xuICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbn1cblxuQG1peGluIF9mb3JtLWZpZWxkLW92ZXJyaWRlcyB7XG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gIC5tYXQtc2VsZWN0LXZhbHVlLFxuICAubWF0LXNlbGVjdC1hcnJvdyxcbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGFwcC1iYXIpO1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfcGFsZXR0ZS1zdHlsZXMoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfcGFsZXR0ZS1zdHlsZXMoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfcGFsZXR0ZS1zdHlsZXMoJHdhcm4pO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIF9mb3JtLWZpZWxkLW92ZXJyaWRlcztcbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LXRvb2xiYXIsXG4gIC5tYXQtdG9vbGJhciBoMSxcbiAgLm1hdC10b29sYmFyIGgyLFxuICAubWF0LXRvb2xiYXIgaDMsXG4gIC5tYXQtdG9vbGJhciBoNCxcbiAgLm1hdC10b29sYmFyIGg1LFxuICAubWF0LXRvb2xiYXIgaDYge1xuICAgIEBpbmNsdWRlIHR5cG9ncmFwaHktdXRpbHMudHlwb2dyYXBoeS1sZXZlbCgkY29uZmlnLCB0aXRsZSk7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbkBtaXhpbiBkZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGRlbnNpdHktc2NhbGU6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkaGVpZ2h0LWRlc2t0b3A6IGNvbXBhdGliaWxpdHkucHJpdmF0ZS1kZW5zaXR5LXByb3AtdmFsdWUoXG4gICAgICB0b29sYmFyLXZhcmlhYmxlcy4kZGVza3RvcC1kZW5zaXR5LWNvbmZpZywgJGRlbnNpdHktc2NhbGUsIGhlaWdodCk7XG4gICRoZWlnaHQtbW9iaWxlOiBjb21wYXRpYmlsaXR5LnByaXZhdGUtZGVuc2l0eS1wcm9wLXZhbHVlKFxuICAgICAgdG9vbGJhci12YXJpYWJsZXMuJG1vYmlsZS1kZW5zaXR5LWNvbmZpZywgJGRlbnNpdHktc2NhbGUsIGhlaWdodCk7XG5cbiAgQGluY2x1ZGUgY29tcGF0aWJpbGl0eS5wcml2YXRlLWRlbnNpdHktbGVnYWN5LWNvbXBhdGliaWxpdHkoKSB7XG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IGhlaWdodCBmb3IgdGhlIHRvb2xiYXIuXG4gICAgQGluY2x1ZGUgX2hlaWdodCgkaGVpZ2h0LWRlc2t0b3ApO1xuXG4gICAgLy8gQXMgcGVyIHNwZWNzLCB0b29sYmFycyBzaG91bGQgaGF2ZSBhIGRpZmZlcmVudCBoZWlnaHQgaW4gbW9iaWxlIGRldmljZXMuIFRoaXMgaGFzIGJlZW5cbiAgICAvLyBzcGVjaWZpZWQgaW4gdGhlIG9sZCBndWlkZWxpbmVzIGFuZCBpcyBzdGlsbCBvYnNlcnZhYmxlIGluIHRoZSBuZXcgc3BlY2lmaWNhdGlvbnMgYnlcbiAgICAvLyBsb29raW5nIGF0IHRoZSBzcGVjIGltYWdlcy4gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL2FwcC1iYXJzLXRvcC5odG1sI2FuYXRvbXlcbiAgICBAbWVkaWEgKHZhcmlhYmxlcy4keHNtYWxsKSB7XG4gICAgICBAaW5jbHVkZSBfaGVpZ2h0KCRoZWlnaHQtbW9iaWxlKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXRvb2xiYXInKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBkZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3ByaXZhdGUnO1xuXG4kdGFyZ2V0LWhlaWdodDogMjJweDtcbiRmb250LXNpemU6IDEwcHg7XG4kdmVydGljYWwtcGFkZGluZzogcHJpdmF0ZS5wcml2YXRlLWRpdigkdGFyZ2V0LWhlaWdodCAtICRmb250LXNpemUsIDIpO1xuXG4kaGFuZHNldC10YXJnZXQtaGVpZ2h0OiAzMHB4O1xuJGhhbmRzZXQtZm9udC1zaXplOiAxNHB4O1xuJGhhbmRzZXQtdmVydGljYWwtcGFkZGluZzpcbiAgICBwcml2YXRlLnByaXZhdGUtZGl2KCRoYW5kc2V0LXRhcmdldC1oZWlnaHQgLSAkaGFuZHNldC1mb250LXNpemUsIDIpO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtdG9vbHRpcCB7XG4gICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCB0b29sdGlwLCAwLjkpO1xuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtdG9vbHRpcCB7XG4gICAgZm9udC1mYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICAgIHBhZGRpbmctdG9wOiAkdmVydGljYWwtcGFkZGluZztcbiAgICBwYWRkaW5nLWJvdHRvbTogJHZlcnRpY2FsLXBhZGRpbmc7XG4gIH1cblxuICAubWF0LXRvb2x0aXAtaGFuZHNldCB7XG4gICAgZm9udC1zaXplOiAkaGFuZHNldC1mb250LXNpemU7XG4gICAgcGFkZGluZy10b3A6ICRoYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc7XG4gICAgcGFkZGluZy1ib3R0b206ICRoYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc7XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC10b29sdGlwJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS9kZW5zaXR5L3ByaXZhdGUvY29tcGF0aWJpbGl0eSc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5AdXNlICcuL3RyZWUtdmFyaWFibGVzJztcblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10cmVlIHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXRyZWUtbm9kZSxcbiAgLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LXRyZWUge1xuICAgIGZvbnQtZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgZm9udC13ZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMuZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICBmb250LXNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuQG1peGluIGRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkZGVuc2l0eS1zY2FsZTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRoZWlnaHQ6IGNvbXBhdGliaWxpdHkucHJpdmF0ZS1kZW5zaXR5LXByb3AtdmFsdWUodHJlZS12YXJpYWJsZXMuJGRlbnNpdHktY29uZmlnLFxuICAgICRkZW5zaXR5LXNjYWxlLCBoZWlnaHQpO1xuXG4gIEBpbmNsdWRlIGNvbXBhdGliaWxpdHkucHJpdmF0ZS1kZW5zaXR5LWxlZ2FjeS1jb21wYXRpYmlsaXR5KCkge1xuICAgIC5tYXQtdHJlZS1ub2RlIHtcbiAgICAgIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC10cmVlJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvcGFsZXR0ZSc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3ByaXZhdGUnO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAuZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG5cbiAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcbiAgICAvLyBVc2UgdGhlIHByaW1hcnkgdGV4dCBvbiB0aGUgZGFyayB0aGVtZSwgZXZlbiB0aG91Z2ggdGhlIGxpZ2h0ZXIgb25lIHVzZXNcbiAgICAvLyBhIHNlY29uZGFyeSwgYmVjYXVzZSB0aGUgY29udHJhc3Qgb24gdGhlIGxpZ2h0IHByaW1hcnkgdGV4dCBpcyBwb29yLlxuICAgIGNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgcGFsZXR0ZS4kZGFyay1wcmltYXJ5LXRleHQsIHBhbGV0dGUuJGxpZ2h0LXNlY29uZGFyeS10ZXh0KTtcbiAgICBiYWNrZ3JvdW5kOiBpZigkaXMtZGFyay10aGVtZSwgbWFwLmdldChwYWxldHRlLiRncmV5LXBhbGV0dGUsIDUwKSwgIzMyMzIzMik7XG5cbiAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtZWxldmF0aW9uKDYsICRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgICBjb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsIGluaGVyaXQsIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50LCB0ZXh0KSk7XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC1zaW1wbGUtc25hY2tiYXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogaW5oZXJpdDtcbiAgICAgIHNpemU6IGluaGVyaXQ7XG4gICAgICB3ZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMuZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1zbmFjay1iYXInKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnfkBhbmd1bGFyL21hdGVyaWFsJyBhcyBtYXQ7XHJcblxyXG4kbWQtcGFsZXR0ZTogKFxyXG4gIDUwIDogI2YzZTBmMyxcclxuICAxMDAgOiAjZTBiM2UxLFxyXG4gIDIwMCA6ICNjYzgwY2UsXHJcbiAgMzAwIDogI2I4NGRiYSxcclxuICA0MDAgOiAjYTgyNmFiLFxyXG4gIDUwMCA6ICM5OTAwOWMsXHJcbiAgNjAwIDogIzkxMDA5NCxcclxuICA3MDAgOiAjODYwMDhhLFxyXG4gIDgwMCA6ICM3YzAwODAsXHJcbiAgOTAwIDogIzZiMDA2ZSxcclxuICBBMTAwIDogI2ZiOWRmZixcclxuICBBMjAwIDogI2Y5NmFmZixcclxuICBBNDAwIDogI2Y3MzdmZixcclxuICBBNzAwIDogI2Y2MWVmZixcclxuICBjb250cmFzdDogKFxyXG4gICAgNTAgOiAjMDAwMDAwLFxyXG4gICAgMTAwIDogIzAwMDAwMCxcclxuICAgIDIwMCA6ICMwMDAwMDAsXHJcbiAgICAzMDAgOiAjZmZmZmZmLFxyXG4gICAgNDAwIDogI2ZmZmZmZixcclxuICAgIDUwMCA6ICNmZmZmZmYsXHJcbiAgICA2MDAgOiAjZmZmZmZmLFxyXG4gICAgNzAwIDogI2ZmZmZmZixcclxuICAgIDgwMCA6ICNmZmZmZmYsXHJcbiAgICA5MDAgOiAjZmZmZmZmLFxyXG4gICAgQTEwMCA6ICMwMDAwMDAsXHJcbiAgICBBMjAwIDogIzAwMDAwMCxcclxuICAgIEE0MDAgOiAjMDAwMDAwLFxyXG4gICAgQTcwMCA6ICNmZmZmZmYsXHJcbiAgKVxyXG4pO1xyXG5cclxuJHRoZW1lLXByaW1hcnk6IG1hdC5kZWZpbmUtcGFsZXR0ZSgkbWQtcGFsZXR0ZSk7XHJcbiR0aGVtZS1hY2NlbnQ6IG1hdC5kZWZpbmUtcGFsZXR0ZShtYXQuJGdyZWVuLXBhbGV0dGUsIDgwMCk7XHJcbiR0aGVtZS13YXJuOiBtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRyZWQtcGFsZXR0ZSwgODAwKTtcclxuJHRoZW1lOiBtYXQuZGVmaW5lLWRhcmstdGhlbWUoJHRoZW1lLXByaW1hcnksICR0aGVtZS1hY2NlbnQsICR0aGVtZS13YXJuKTtcclxuQGluY2x1ZGUgbWF0LmFsbC1jb21wb25lbnQtdGhlbWVzKCR0aGVtZSk7XHJcblxyXG4kdGhlbWUtYmxhY2s6IG1hdC5kZWZpbmUtcGFsZXR0ZShtYXQuJHB1cnBsZS1wYWxldHRlLCA5MDApO1xyXG4kdGhlbWUtcmVkOiBtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRyZWQtcGFsZXR0ZSwgOTAwKTtcclxuJHRoZW1lLWdyZWVuOiBtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRncmVlbi1wYWxldHRlLCA5MDApO1xyXG4kdGhlbWUtYmx1ZTogbWF0LmRlZmluZS1wYWxldHRlKG1hdC4kYmx1ZS1wYWxldHRlLCA5MDApO1xyXG4kdGhlbWUtd2hpdGU6IG1hdC5kZWZpbmUtcGFsZXR0ZShtYXQuJGJsdWUtZ3JleS1wYWxldHRlLCAyMDApO1xyXG4kdGhlbWUtY29tbW9uOiBtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRicm93bi1wYWxldHRlLCA5MDApO1xyXG5cclxuJHByaW1hcnktY29sb3I6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR0aGVtZS1wcmltYXJ5KTtcclxuJGFjY2VudC1jb2xvcjogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHRoZW1lLWFjY2VudCk7XHJcbiR3YXJuLWNvbG9yOiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkdGhlbWUtd2Fybik7XHJcblxyXG4kYmxhY2stY29sb3I6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR0aGVtZS1ibGFjayk7XHJcbiRyZWQtY29sb3I6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR0aGVtZS1yZWQpO1xyXG4kZ3JlZW4tY29sb3I6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR0aGVtZS1ncmVlbik7XHJcbiRibHVlLWNvbG9yOiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkdGhlbWUtYmx1ZSk7XHJcbiR3aGl0ZS1jb2xvcjogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHRoZW1lLXdoaXRlKTtcclxuXHJcbiRjb21tb24tY29sb3I6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR0aGVtZS1jb21tb24pO1xyXG4kbGVnZW5kYXJ5LWNvbG9yOiBkYXJrZ29sZGVucm9kO1xyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    15119: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LegendComponent": function LegendComponent() {
          return (
            /* binding */
            _LegendComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var src_app_shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/auth/auth.state */
      35917);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/table */
      54302);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/sort */
      45381);
      /* harmony import */


      var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngneat/until-destroy */
      99758);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngxs/store */
      14835);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var src_app_services_tutorial_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tutorial.service */
      80595);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-ui-tour-md-menu */
      81252);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/chips */
      79243);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/datepicker */
      42937);
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


      var _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../pipes/long.pipe */
      16757);
      /* harmony import */


      var _pipes_short_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../pipes/short.pipe */
      61357);

      function LegendComponent_ng_container_24_mat_header_cell_1_mat_form_field_4_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LegendComponent_ng_container_24_mat_header_cell_1_mat_form_field_4_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);

            var column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            ctx_r9.filters[column_r3].value = "";
            return ctx_r9.applyFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function LegendComponent_ng_container_24_mat_header_cell_1_mat_form_field_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function LegendComponent_ng_container_24_mat_header_cell_1_mat_form_field_4_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);

            var column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r12.filters[column_r3].value = $event;
          })("keyup", function LegendComponent_ng_container_24_mat_header_cell_1_mat_form_field_4_Template_input_keyup_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r15.applyFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, LegendComponent_ng_container_24_mat_header_cell_1_mat_form_field_4_button_2_Template, 3, 0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r6.filters[column_r3].value);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.filters[column_r3].value);
        }
      }

      function LegendComponent_ng_container_24_mat_header_cell_1_mat_form_field_5_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LegendComponent_ng_container_24_mat_header_cell_1_mat_form_field_5_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);

            var column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            ctx_r19.filters[column_r3].value = null;
            return ctx_r19.applyFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function LegendComponent_ng_container_24_mat_header_cell_1_mat_form_field_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function LegendComponent_ng_container_24_mat_header_cell_1_mat_form_field_5_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);

            var column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r22.filters[column_r3].value = $event;
          })("dateChange", function LegendComponent_ng_container_24_mat_header_cell_1_mat_form_field_5_Template_input_dateChange_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r25.applyFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "mat-datepicker-toggle", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "mat-datepicker", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, LegendComponent_ng_container_24_mat_header_cell_1_mat_form_field_5_button_5_Template, 3, 0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);

          var column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r7.filters[column_r3].value)("matDatepicker", _r17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.filters[column_r3].value);
        }
      }

      function LegendComponent_ng_container_24_mat_header_cell_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, LegendComponent_ng_container_24_mat_header_cell_1_mat_form_field_4_Template, 3, 2, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, LegendComponent_ng_container_24_mat_header_cell_1_mat_form_field_5_Template, 6, 4, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, "table.column." + column_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.filters[column_r3] && ctx_r4.filters[column_r3].type === "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.filters[column_r3] && ctx_r4.filters[column_r3].type === "timestamp");
        }
      }

      var _c0 = function _c0(a0) {
        return [a0, "legendary"];
      };

      function LegendComponent_ng_container_24_mat_cell_2_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-list", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-list-item", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "long");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "short");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var legend_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](20, _c0, legend_r28.faction.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 8, legend_r28.position));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", legend_r28.faction.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 10, legend_r28.faction.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 12, legend_r28.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 14, legend_r28.faction.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 16, legend_r28.power));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 18, "icon.power.name"));
        }
      }

      function LegendComponent_ng_container_24_mat_cell_2_ng_template_3_mat_list_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-list", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var legend_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", legend_r28.clan.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, "kingdom.clan.name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](legend_r28.clan.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](legend_r28.clan.description);
        }
      }

      function LegendComponent_ng_container_24_mat_cell_2_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, LegendComponent_ng_container_24_mat_cell_2_ng_template_3_mat_list_0_Template, 9, 6, "mat-list", 34);
        }

        if (rf & 2) {
          var legend_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", legend_r28.clan);
        }
      }

      function LegendComponent_ng_container_24_mat_cell_2_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "date");
        }

        if (rf & 2) {
          var legend_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, legend_r28.timestamp.toMillis()), " ");
        }
      }

      function LegendComponent_ng_container_24_mat_cell_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, LegendComponent_ng_container_24_mat_cell_2_ng_template_2_Template, 16, 22, "ng-template", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, LegendComponent_ng_container_24_mat_cell_2_ng_template_3_Template, 1, 1, "ng-template", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, LegendComponent_ng_container_24_mat_cell_2_ng_template_4_Template, 2, 3, "ng-template", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 4, "table.column." + column_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r3 === "name");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r3 === "clan");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r3 === "timestamp");
        }
      }

      function LegendComponent_ng_container_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, LegendComponent_ng_container_24_mat_header_cell_1_Template, 6, 5, "mat-header-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, LegendComponent_ng_container_24_mat_cell_2_Template, 5, 6, "mat-cell", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var column_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("matColumnDef", column_r3);
        }
      }

      function LegendComponent_mat_header_row_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function LegendComponent_mat_row_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-row");
        }
      }

      var _c1 = function _c1() {
        return [5, 10, 20];
      };

      var _LegendComponent = /*#__PURE__*/function () {
        function LegendComponent(store, angularFirestore, tutorialService) {
          _classCallCheck(this, LegendComponent);

          this.store = store;
          this.angularFirestore = angularFirestore;
          this.tutorialService = tutorialService;
          this.uid = this.store.selectSnapshot(src_app_shared_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.getUserUID);
          this.columns = ['name', 'clan', 'timestamp'];
          this.filters = {
            name: {
              type: 'text',
              value: ''
            },
            clan: {
              type: 'text',
              value: ''
            },
            timestamp: {
              type: 'timestamp',
              value: null
            }
          };
          this.data = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource();
        }

        _createClass(LegendComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.angularFirestore.collection('legends').valueChanges({
              idField: 'fid'
            }).pipe((0, _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this)).subscribe(function (legends) {
              _this3.data = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(legends);
              _this3.data.paginator = _this3.paginator;

              _this3.data.sortingDataAccessor = function (obj, property) {
                return property === 'name' ? obj['power'] : obj[property];
              };

              _this3.data.sort = _this3.sort;
              _this3.data.filterPredicate = _this3.createFilter();

              _this3.applyFilter();
            });
          }
        }, {
          key: "applyFilter",
          value: function applyFilter() {
            this.data.filter = JSON.stringify({
              name: this.filters.name.value,
              clan: this.filters.clan.value
            });
          }
        }, {
          key: "createFilter",
          value: function createFilter() {
            var filterFunction = function filterFunction(data, filter) {
              var filters = JSON.parse(filter);
              return data.name.toLowerCase().includes(filters.name) && (!filters.timestamp || moment__WEBPACK_IMPORTED_MODULE_1__(data.timestamp.toMillis()).isBetween(moment__WEBPACK_IMPORTED_MODULE_1__(filters.timestamp).startOf('day'), moment__WEBPACK_IMPORTED_MODULE_1__(filters.timestamp).endOf('day'), 'days', '[]')) && (!filters.clan || data.clan && data.clan.name.toLowerCase().includes(filters.clan)); // clan can be null
            };

            return filterFunction;
          }
        }]);

        return LegendComponent;
      }();

      _LegendComponent.ɵfac = function LegendComponent_Factory(t) {
        return new (t || _LegendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_tutorial_service__WEBPACK_IMPORTED_MODULE_3__.TutorialService));
      };

      _LegendComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _LegendComponent,
        selectors: [["app-legend"]],
        viewQuery: function LegendComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        decls: 28,
        vars: 22,
        consts: [[1, "app-legend", "table-responsive"], ["tourAnchor", "tour.legend"], ["mat-card-avatar", "", "src", "/assets/images/cards/legend.png", 3, "alt"], [1, "mat-card-extras"], ["mat-icon-button", "", 3, "click"], ["color", "primary"], ["mat-table", "", "matSort", "", "matSortActive", "timestamp", "matSortDirection", "desc", "matSortDisableClear", "", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], [4, "matHeaderRowDef", "matHeaderRowDefSticky"], [4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], [3, "matColumnDef"], ["class", "table-header", 4, "matHeaderCellDef"], [4, "matCellDef"], [1, "table-header"], ["mat-sort-header", ""], ["class", "table-filter", 4, "ngIf"], [1, "table-filter"], ["matInput", "", "autocomplete", "off", 3, "ngModel", "ngModelChange", "keyup"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", 3, "click"], ["matInput", "", "disabled", "", 3, "ngModel", "matDatepicker", "ngModelChange", "dateChange"], ["matSuffix", "", 3, "for"], ["disabled", "false"], ["timestamp", ""], [3, "ngIf"], ["dense", ""], [3, "ngClass"], ["mat-list-avatar", "", "matBadgePosition", "above before", 3, "matBadge"], ["mat-list-avatar", "", 3, "src", "alt"], ["mat-line", ""], ["mat-line", "", 1, "mat-card-subtitle"], ["mat-list-avatar", "", "matBadgePosition", "above after", 3, "matBadge"], ["mat-list-avatar", "", "src", "/assets/images/icons/power.png", 3, "alt"], ["dense", "", 4, "ngIf"], ["mat-list-avatar", ""]],
        template: function LegendComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LegendComponent_Template_button_click_12_listener() {
              return ctx.tutorialService.start("tour.legend");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "help");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-chip", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "person");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "long");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](23, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, LegendComponent_ng_container_24_Template, 3, 1, "ng-container", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, LegendComponent_mat_header_row_25_Template, 1, 0, "mat-header-row", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, LegendComponent_mat_row_26_Template, 1, 0, "mat-row", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "mat-paginator", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 11, "kingdom.legend.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 13, "user.legend.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 15, "user.legend.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 17, ctx.data.data.length));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](23, 19, "user.legend.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.columns);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.columns);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](21, _c1));
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_13__.TourAnchorMatMenuDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardSubtitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChip, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepicker, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_list__WEBPACK_IMPORTED_MODULE_22__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_22__.MatListItem, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__.DefaultClassDirective, _angular_material_list__WEBPACK_IMPORTED_MODULE_22__.MatListAvatarCssMatStyler, _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadge, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatLine, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslatePipe, _pipes_long_pipe__WEBPACK_IMPORTED_MODULE_4__.LongPipe, _pipes_short_pipe__WEBPACK_IMPORTED_MODULE_5__.ShortPipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe],
        styles: [".app-legend[_ngcontent-%COMP%] {\n  margin: 20px -10px;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZ2VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJsZWdlbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWxlZ2VuZCB7XHJcbiAgbWFyZ2luOiAyMHB4IC0xMHB4OyAvLyB0byBmaXggaW4gbGFuZGluZyBmbGV4XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4iXX0= */"]
      });
      _LegendComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0, _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.UntilDestroy)()], _LegendComponent);
      /***/
    },

    /***/
    58764: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GeolocationComponent": function GeolocationComponent() {
          return (
            /* binding */
            _GeolocationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      var _GeolocationComponent = /*#__PURE__*/function () {
        function _GeolocationComponent(dialogRef) {
          _classCallCheck(this, _GeolocationComponent);

          this.dialogRef = dialogRef;
        }

        _createClass(_GeolocationComponent, [{
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }]);

        return _GeolocationComponent;
      }();

      _GeolocationComponent.ɵfac = function GeolocationComponent_Factory(t) {
        return new (t || _GeolocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
      };

      _GeolocationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _GeolocationComponent,
        selectors: [["app-geolocation"]],
        decls: 10,
        vars: 9,
        consts: [[1, "dialog-title"], ["mat-dialog-title", ""], ["mat-dialog-content", "", 3, "innerHTML"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", "cdkFocusInitial", "", 3, "click"]],
        template: function GeolocationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeolocationComponent_Template_button_click_7_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "user.geolocation.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "user.geolocation.description"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, "user.geolocation.close"));
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    74270: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginComponent": function LoginComponent() {
          return (
            /* binding */
            _LoginComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_shared_auth_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/auth/auth.actions */
      89104);
      /* harmony import */


      var _geolocation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./geolocation.component */
      58764);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/notification.service */
      12013);
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngxs/store */
      14835);
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/api.service */
      5830);
      /* harmony import */


      var src_app_services_cache_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/cache.service */
      12622);
      /* harmony import */


      var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/loading.service */
      4471);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      30582);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/tabs */
      9348);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/list */
      28417);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../pipes/icon.pipe */
      38262);

      function LoginComponent_mat_tab_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "mat-tab", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          var type_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "user.login." + type_r5));
        }
      }

      function LoginComponent_mat_form_field_15_mat_select_trigger_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-select-trigger");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-list", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r6.form.value.faction.image, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 4, ctx_r6.form.value.faction.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 6, ctx_r6.form.value.faction.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](10, 8, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 11, ctx_r6.form.value.faction.description), ctx_r6.form.value.faction), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
        }
      }

      function LoginComponent_mat_form_field_15_mat_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-list", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var faction_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", faction_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", faction_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 5, faction_r8.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 7, faction_r8.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](10, 9, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 12, faction_r8.description), faction_r8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
        }
      }

      function LoginComponent_mat_form_field_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, LoginComponent_mat_form_field_15_mat_select_trigger_5_Template, 12, 13, "mat-select-trigger", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, LoginComponent_mat_form_field_15_mat_option_6_Template, 12, 14, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 4, "user.login.faction"));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.form.value.faction);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.factions);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 6, "user.login.unfactioned"));
        }
      }

      function LoginComponent_mat_form_field_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "user.login.username"));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 4, "user.login.invalid"));
        }
      }

      function LoginComponent_mat_form_field_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "user.login.password"));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 4, "user.login.insecure"));
        }
      }

      function LoginComponent_mat_form_field_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "user.login.password2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 4, "user.login.mismatch"));
        }
      }

      var _LoginComponent = /*#__PURE__*/function () {
        function _LoginComponent(angularFireAuth, formBuilder, notificationService, store, apiService, cacheService, loadingService, dialog) {
          _classCallCheck(this, _LoginComponent);

          this.angularFireAuth = angularFireAuth;
          this.formBuilder = formBuilder;
          this.notificationService = notificationService;
          this.store = store;
          this.apiService = apiService;
          this.cacheService = cacheService;
          this.loadingService = loadingService;
          this.dialog = dialog;
          this.types = ['login', 'signup', 'reset'];
          this.type = 'login';
          this.factions = [];
          this.createForm();
        }

        _createClass(_LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var factions;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.cacheService.getFactions();

                    case 2:
                      factions = _context2.sent;
                      this.factions = factions.filter(function (faction) {
                        return faction.id !== 'grey';
                      });

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "createForm",
          value: function createForm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.form = this.formBuilder.group({
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.email]],
                        username: ['', this.type === 'signup' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(12)] : []],
                        password: ['', this.type !== 'reset' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(12)] : []],
                        password2: ['', this.type === 'signup' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(12), this.matchValues('password')] : []],
                        faction: [null, this.type === 'signup' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required] : []]
                      });

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "changeType",
          value: function changeType($event) {
            this.type = this.types[$event.index];
            this.createForm();

            if (this.type === 'signup') {
              this.dialog.open(_geolocation_component__WEBPACK_IMPORTED_MODULE_1__.GeolocationComponent, {
                panelClass: 'dialog-responsive',
                data: null
              });
            }
          }
        }, {
          key: "matchValues",
          value: function matchValues(matchTo) {
            return function (control) {
              return !!control.parent && !!control.parent.value && control.value === control.parent.controls[matchTo].value ? null : {
                isMatching: false
              };
            };
          }
        }, {
          key: "getCurrentPosition",
          value: function getCurrentPosition() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      return _context4.abrupt("return", new Promise(function (resolve, reject) {
                        navigator.geolocation.getCurrentPosition(resolve, reject, {
                          enableHighAccuracy: true,
                          timeout: 5000,
                          maximumAge: 0
                        });
                      }));

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
          }
        }, {
          key: "login",
          value: function login() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var email, password, position, credentials;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!this.form.valid) {
                        _context5.next = 34;
                        break;
                      }

                      email = this.form.value.email;
                      password = this.form.value.password;
                      this.loadingService.startLoading();
                      _context5.prev = 4;
                      _context5.t0 = this.type;
                      _context5.next = _context5.t0 === 'login' ? 8 : _context5.t0 === 'signup' ? 11 : _context5.t0 === 'reset' ? 21 : 25;
                      break;

                    case 8:
                      _context5.next = 10;
                      return this.angularFireAuth.signInWithEmailAndPassword(email, password);

                    case 10:
                      return _context5.abrupt("break", 25);

                    case 11:
                      _context5.next = 13;
                      return this.getCurrentPosition();

                    case 13:
                      position = _context5.sent;
                      _context5.next = 16;
                      return this.angularFireAuth.createUserWithEmailAndPassword(email, password);

                    case 16:
                      credentials = _context5.sent;
                      this.apiService.populateMap(position.coords.latitude, position.coords.longitude);
                      _context5.next = 20;
                      return this.apiService.createKingdom(credentials.user.uid, this.form.value.faction.id, this.form.value.username, position.coords.latitude, position.coords.longitude);

                    case 20:
                      return _context5.abrupt("break", 25);

                    case 21:
                      _context5.next = 23;
                      return this.angularFireAuth.sendPasswordResetEmail(email);

                    case 23:
                      this.notificationService.warning('user.login.check');
                      return _context5.abrupt("break", 25);

                    case 25:
                      _context5.next = 33;
                      break;

                    case 27:
                      _context5.prev = 27;
                      _context5.t1 = _context5["catch"](4);
                      _context5.next = 31;
                      return this.angularFireAuth.signOut();

                    case 31:
                      console.error(_context5.t1);
                      this.notificationService.error('user.login.error');

                    case 33:
                      this.loadingService.stopLoading();

                    case 34:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[4, 27]]);
            }));
          }
        }, {
          key: "google",
          value: function google() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.store.dispatch(new src_app_shared_auth_auth_actions__WEBPACK_IMPORTED_MODULE_0__.LoginWithGoogleAction());

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return _LoginComponent;
      }();

      _LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || _LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_cache_service__WEBPACK_IMPORTED_MODULE_5__.CacheService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog));
      };

      _LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: _LoginComponent,
        selectors: [["app-login"]],
        decls: 34,
        vars: 25,
        consts: [[1, "app-login"], ["fxLayout", "row", "fxLayoutAlign", "center center", 3, "formGroup", "ngSubmit"], ["fxFlex.xl", "25", "fxFlex.lg", "33", "fxFlex.md", "50", "fxFlex.sm", "66", "fxFlex.xs", "100"], ["mat-card-avatar", "", "src", "/assets/images/cards/login.png", 3, "alt"], ["mat-align-tabs", "center", 3, "selectedTabChange"], [3, "label", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "email", "autocomplete", "off", 3, "placeholder"], ["mat-stroked-button", "", "type", "button", 1, "flag-menu", 3, "click"], ["src", "/assets/images/brands/google.png", "alt", "Google"], [1, "fill-space"], ["mat-raised-button", "", "color", "primary", "type", "submit", "cdkFocusInitial", "", 3, "disabled"], [3, "label"], ["formControlName", "faction"], [3, "value", 4, "ngFor", "ngForOf"], ["dense", ""], ["mat-list-avatar", ""], ["mat-list-avatar", "", 3, "src", "alt"], ["mat-line", ""], ["mat-line", "", 1, "mat-card-subtitle", 3, "innerHTML"], [3, "value"], ["matInput", "", "type", "text", "formControlName", "username", "autocomplete", "off", 3, "placeholder"], ["matInput", "", "type", "password", "formControlName", "password", "autocomplete", "off", 3, "placeholder"], ["matInput", "", "type", "password", "formControlName", "password2", "autocomplete", "off", 3, "placeholder"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-tab-group", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectedTabChange", function LoginComponent_Template_mat_tab_group_selectedTabChange_13_listener($event) {
              return ctx.changeType($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, LoginComponent_mat_tab_14_Template, 2, 3, "mat-tab", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, LoginComponent_mat_form_field_15_Template, 10, 8, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, LoginComponent_mat_form_field_16_Template, 6, 6, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, LoginComponent_mat_form_field_23_Template, 6, 6, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, LoginComponent_mat_form_field_24_Template, 6, 6, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_26_listener() {
              return ctx.google();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Google");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 13, "user.login.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 15, "user.login.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 17, "user.login.description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.types);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.type === "signup");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.type === "signup");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 19, "user.login.email"));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 21, "user.login.invalid"));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.type !== "reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.type === "signup");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.form.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 23, "user.login.accept"));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTabGroup, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatError, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__.MatTab, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectTrigger, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListAvatarCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatLine, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOption],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe, _pipes_icon_pipe__WEBPACK_IMPORTED_MODULE_7__.IconPipe],
        styles: [".app-login[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 0;\n}\n.app-login[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.app-login[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n.app-login[_ngcontent-%COMP%]   .server-error[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n.app-login[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.app-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 2em;\n}\n.app-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   div.mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.3em 0;\n}\n.app-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   div.mat-form-field-infix[_ngcontent-%COMP%]   input.mat-input-element[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n.app-login[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n}\n.app-login[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  margin: 0 8px !important;\n}\n.app-login[_ngcontent-%COMP%]   div.mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 1.15em;\n}\n.app-login[_ngcontent-%COMP%]    .mat-tab-labels {\n  justify-content: space-around;\n}\n.app-login[_ngcontent-%COMP%]    .mat-tab-group {\n  margin-bottom: 10px;\n}\n.app-login[_ngcontent-%COMP%]    .mat-tab-label, .app-login[_ngcontent-%COMP%]    .mat-tab-label-active {\n  min-width: 0px;\n  padding: 3px;\n  margin: 3px;\n  width: 100%;\n}\n.app-login[_ngcontent-%COMP%]    .mat-tab-body-content {\n  display: none !important;\n}\n.app-login[_ngcontent-%COMP%]    .mat-tab-nav-bar, .app-login[_ngcontent-%COMP%]    .mat-tab-header {\n  border: none;\n}\n.app-login[_ngcontent-%COMP%]     .mat-tab-label .mat-tab-label-content {\n  white-space: break-spaces;\n}\n.app-login[_ngcontent-%COMP%]     .mat-card {\n  max-height: calc(100% - 84px);\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsWUFBQTtFQUNBLFVBQUE7QUFBRjtBQUNFO0VBQ0UsWUFBQTtBQUNKO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNFO0VBQ0UsYUFBQTtBQUNKO0FBQ0U7RUFDRSxZQUFBO0FBQ0o7QUFDRTtFQUNFLFdBQUE7QUFDSjtBQUFJO0VBQ0UsZ0JBQUE7QUFFTjtBQURNO0VBQ0UsbUJBQUE7QUFHUjtBQUNFO0VBQ0UsYUFBQTtBQUNKO0FBQUk7RUFDRSx3QkFBQTtBQUVOO0FBQ0U7RUFDRSxzQkFBQTtBQUNKO0FBQ0U7RUFDRSw2QkFBQTtBQUNKO0FBQ0U7RUFDRSxtQkFBQTtBQUNKO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDRTtFQUNFLHdCQUFBO0FBQ0o7QUFDRTtFQUNFLFlBQUE7QUFDSjtBQUNFO0VBQ0UseUJBQUE7QUFDSjtBQUNFO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWxvZ2luIHtcclxuICAvLyBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gID4gZm9ybSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICB9XHJcbiAgLnNlcnZlci1lcnJvciB7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gIH1cclxuICAubWF0LWNhcmQge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIGRpdi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICAgIHBhZGRpbmc6IC4zZW0gMDtcclxuICAgICAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xyXG4gICAgICBtYXJnaW46IDAgOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEuMTVlbTtcclxuICB9XHJcbiAgOjpuZy1kZWVwLm1hdC10YWItbGFiZWxzIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIH1cclxuICA6Om5nLWRlZXAubWF0LXRhYi1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICA6Om5nLWRlZXAubWF0LXRhYi1sYWJlbCwgOjpuZy1kZWVwLm1hdC10YWItbGFiZWwtYWN0aXZle1xyXG4gICAgbWluLXdpZHRoOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICA6Om5nLWRlZXAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6Om5nLWRlZXAubWF0LXRhYi1uYXYtYmFyLCA6Om5nLWRlZXAubWF0LXRhYi1oZWFkZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwgLm1hdC10YWItbGFiZWwtY29udGVudCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC1jYXJkIHtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDg0cHgpO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    20454: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserRoutingModule": function UserRoutingModule() {
          return (
            /* binding */
            _UserRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _encyclopedia_encyclopedia_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./encyclopedia/encyclopedia.component */
      51227);
      /* harmony import */


      var _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./landing/landing.component */
      29042);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: 'landing',
        component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent
      }, {
        path: 'encyclopedia',
        component: _encyclopedia_encyclopedia_component__WEBPACK_IMPORTED_MODULE_0__.EncyclopediaComponent
      }];

      var _UserRoutingModule = function _UserRoutingModule() {
        _classCallCheck(this, _UserRoutingModule);
      };

      _UserRoutingModule.ɵfac = function UserRoutingModule_Factory(t) {
        return new (t || _UserRoutingModule)();
      };

      _UserRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _UserRoutingModule
      });
      _UserRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_UserRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    88524: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserModule": function UserModule() {
          return (
            /* binding */
            _UserModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user-routing.module */
      20454);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/shared.module */
      44466);
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/login.component */
      74270);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _encyclopedia_encyclopedia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./encyclopedia/encyclopedia.component */
      51227);
      /* harmony import */


      var _encyclopedia_tome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./encyclopedia/tome.component */
      94648);
      /* harmony import */


      var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./landing/landing.component */
      29042);
      /* harmony import */


      var _legend_legend_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./legend/legend.component */
      15119);
      /* harmony import */


      var ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-ui-tour-md-menu */
      81252);
      /* harmony import */


      var ngx_disqus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-disqus */
      45916);
      /* harmony import */


      var _login_geolocation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login/geolocation.component */
      58764);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _UserModule = function _UserModule() {
        _classCallCheck(this, _UserModule);
      };

      _UserModule.ɵfac = function UserModule_Factory(t) {
        return new (t || _UserModule)();
      };

      _UserModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: _UserModule
      });
      _UserModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_11__.TourMatMenuModule, ngx_disqus__WEBPACK_IMPORTED_MODULE_12__.DisqusModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](_UserModule, {
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _encyclopedia_encyclopedia_component__WEBPACK_IMPORTED_MODULE_3__.EncyclopediaComponent, _encyclopedia_tome_component__WEBPACK_IMPORTED_MODULE_4__.TomeComponent, _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__.LandingComponent, _legend_legend_component__WEBPACK_IMPORTED_MODULE_6__.LegendComponent, _login_geolocation_component__WEBPACK_IMPORTED_MODULE_7__.GeolocationComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, ngx_ui_tour_md_menu__WEBPACK_IMPORTED_MODULE_11__.TourMatMenuModule, ngx_disqus__WEBPACK_IMPORTED_MODULE_12__.DisqusModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_user_user_module_ts-es5.js.map