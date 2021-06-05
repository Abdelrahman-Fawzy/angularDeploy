(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\my-first-project\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DJT7":
/*!**********************************************!*\
  !*** ./src/app/binding/binding.component.ts ***!
  \**********************************************/
/*! exports provided: BindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingComponent", function() { return BindingComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/posts/posts.service */ "ePj2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_upper_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directives/upper.directive */ "w7Vb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _pipes_summary_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/summary.pipe */ "KOGw");










function BindingComponent_ul_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, person_r13));
} }
function BindingComponent_ul_61_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, name_r16.name), " ");
} }
function BindingComponent_ul_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BindingComponent_ul_61_li_5_Template, 3, 3, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, country_r14.country));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", country_r14.names);
} }
function BindingComponent_ul_64_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BindingComponent_ul_64_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const course_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.onRemove(course_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", course_r17, "");
} }
function BindingComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
} }
function BindingComponent_ng_template_70_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](course_r21);
} }
function BindingComponent_ng_template_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BindingComponent_ng_template_70_li_1_Template, 2, 1, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.courses);
} }
function BindingComponent_ng_template_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " no courses yet\n");
} }
function BindingComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "list of courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BindingComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "list of certifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BindingComponent_li_111_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BindingComponent_li_111_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const post_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](109); return ctx_r23.updatepost(post_r22, _r11.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BindingComponent_li_111_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const post_r22 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.deletepost(post_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", post_r22.title, " ");
} }
const _c0 = [[["", 8, "title"]], [["", 8, "body"]]];
const _c1 = function (a0, a1) { return { "blue": a0, "red": a1 }; };
const _c2 = function (a0, a1) { return { "color": a0, "fontSize": a1 }; };
const _c3 = [".title", ".body"];
class BindingComponent {
    constructor(postsService) {
        this.postsService = postsService;
        this.course = 'Angular';
        this.imageURL = 'https://media.gettyimages.com/photos/giza-egypt-pyramids-in-sunset-scene-wonders-of-the-world-picture-id1085205362?s=612x612';
        this.isActive = true;
        this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeart"];
        this.faHeartbeat = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeartbeat"];
        this.employees = {
            name: 'abdelrahman fawzy',
            hiring: new Date(2021, 4, 9)
        };
        this.title = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
        this.persons = ['abdelrahman', 'eslam', 'Ali'];
        this.peopleOfCountries = [
            {
                country: 'egypt',
                names: [
                    { name: 'abdelrahman fawzy' },
                    { name: 'abdelrahman Gharieb' },
                    { name: 'abdelrahman mostafa' },
                ]
            },
            {
                country: 'turkey',
                names: [
                    { name: 'ali hossam' },
                    { name: 'eslam badr' },
                ]
            }
        ];
        //
        this.courses = ['java', 'js', 'angular'];
        this.defaultView = 'courses';
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
        // obs = Observable.interval(1000).subscribe(a => {
        //   console.log(a);
        // })
        // fetch data
        this.posts = [];
    }
    get firstName() {
        return this.profileForm.get('firstName');
    }
    divClicked() {
        console.log('Div fired');
        alert('Div fired');
    }
    buttonClicked($event) {
        $event.stopPropagation();
        console.log('Button fired');
        alert('Button fired');
    }
    inputKeyUp(firstname, $event) {
        console.log($event);
        this.value = firstname.value;
    }
    anotherInputKeyUp() {
    }
    onClickHeart() {
        this.isFav = !this.isFav;
    }
    onAdd() {
        this.courses.push('react');
    }
    onRemove(course) {
        console.log(course);
        console.log(this.courses.indexOf(course));
        const index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
    }
    setView(view) {
        this.defaultView = view;
    }
    chObj(email) {
        console.log(email);
        console.log(email.touched);
        console.log(email.invalid);
    }
    Submit(f) {
        console.log(f);
    }
    getName(firstName) {
        console.log(firstName);
        console.log(firstName.touched);
    }
    ngOnInit() {
        this.postsService.get().subscribe(response => {
            console.log(response);
            this.posts = response;
        });
    }
    createpost(input) {
        const post = { title: input.value, id: '' };
        this.postsService.add(post).subscribe(res => { this.posts.splice(0, 0, post); });
        console.log(input);
        console.log(post);
    }
    updatepost(post, apititle) {
        console.log(post, apititle);
        const updatedPost = { title: apititle, id: post.id };
        console.log(this.posts.indexOf(post));
        this.postsService.update(post, apititle).subscribe(res => {
            const index = this.posts.indexOf(post);
            this.posts[index] = updatedPost;
        });
    }
    deletepost(post) {
        console.log(post);
        const index = this.posts.indexOf(post);
        console.log(index);
        this.postsService.delete(post).subscribe(res => {
            this.posts.splice(index, 1);
        });
    }
}
BindingComponent.ɵfac = function BindingComponent_Factory(t) { return new (t || BindingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_posts_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"])); };
BindingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BindingComponent, selectors: [["binding"]], inputs: { isFav: ["isClicked", "isFav"] }, ngContentSelectors: _c3, decls: 116, vars: 44, consts: [[3, "src"], [3, "textContent"], [3, "click"], [1, "btn", "btn-primary", 3, "click"], ["type", "text", 3, "keyup"], ["firstName", ""], ["type", "text", 3, "ngModel", "ngModelChange", "keyup"], [1, "card"], [1, "card-title"], [1, "card-body"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["coursesList", ""], ["noCourses", ""], [1, "nav", "nav-pills"], [1, "nav-item"], [1, "nav-link", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["type", "text", "appUpper", ""], [3, "formGroup"], [1, "form-group"], ["for", "exampleInputEmail3"], ["type", "text", "name", "firstName", "id", "exampleInputEmail3", "formControlName", "firstName", 1, "form-control", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "text", 1, "form-control", 3, "keyup.enter"], ["apititle", ""], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [3, "icon", "click"], [3, "ngClass", "ngStyle", "click"], [1, "list-group-item"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function BindingComponent_Template(rf, ctx) { if (rf & 1) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "interpolation binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "property binding one way");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "for testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "event firing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BindingComponent_Template_div_click_17_listener() { return ctx.divClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BindingComponent_Template_button_click_18_listener($event) { return ctx.buttonClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "two way binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function BindingComponent_Template_input_keyup_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25); return ctx.inputKeyUp(_r0, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BindingComponent_Template_input_ngModelChange_28_listener($event) { return ctx.names = $event; })("keyup", function BindingComponent_Template_input_keyup_28_listener() { return ctx.anotherInputKeyUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](40, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "custom pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](45, "summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "ng-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](54, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "ng-for");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, BindingComponent_ul_59_Template, 4, 3, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, BindingComponent_ul_61_Template, 6, 4, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BindingComponent_Template_button_click_62_listener() { return ctx.onAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, BindingComponent_ul_64_Template, 5, 1, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "ng-if");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, BindingComponent_div_69_Template, 1, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, BindingComponent_ng_template_70_Template, 2, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, BindingComponent_ng_template_72_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "ng-switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BindingComponent_Template_a_click_80_listener() { return ctx.setView("courses"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BindingComponent_Template_a_click_83_listener() { return ctx.setView("certifications"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "certifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](86, BindingComponent_div_86_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](87, BindingComponent_div_87_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "custom directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "form validation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "template driven");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "reactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BindingComponent_Template_input_click_105_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25); return ctx.getName(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function BindingComponent_Template_input_keyup_enter_108_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](109); return ctx.createpost(_r11); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](111, BindingComponent_li_111_Template, 6, 1, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "fa-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BindingComponent_Template_fa_icon_click_113_listener() { return ctx.onClickHeart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BindingComponent_Template_button_click_114_listener() { return ctx.onClickHeart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "click");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](71);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Course is : ", ctx.course, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("textContent", ctx.course);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", ctx.isActive ? "yellow" : "blue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.names);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.names);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 30, ctx.employees.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](40, 32, ctx.employees.hiring, "fullDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](45, 35, ctx.title, 48));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.persons);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.peopleOfCountries);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.courses);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.courses.length > 0)("ngIfThen", _r5)("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.defaultView === "courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.defaultView === "certifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.defaultView);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "certifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.isFav ? ctx.faHeart : ctx.faHeartbeat);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](38, _c1, ctx.isFav, !ctx.isFav))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](41, _c2, ctx.isFav ? "red" : "blue", ctx.isFav ? "18px" : "24px"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _directives_upper_directive__WEBPACK_IMPORTED_MODULE_5__["UpperDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _pipes_summary_pipe__WEBPACK_IMPORTED_MODULE_7__["SummaryPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]], styles: [".blue[_ngcontent-%COMP%] {\r\n  background-color: blue;\r\n}\r\n.red[_ngcontent-%COMP%] {\r\n  background-color: red;\r\n}\r\n.form-control.ng-dirty.ng-valid.ng-touched[_ngcontent-%COMP%] {\r\n  border-color: green ;\r\n}\r\n.form-control.ng-dirty.ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n  border-color: red ;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJiaW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG4ucmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wubmctZGlydHkubmctdmFsaWQubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiBncmVlbiA7XHJcbn1cclxuLmZvcm0tY29udHJvbC5uZy1kaXJ0eS5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlci1jb2xvcjogcmVkIDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "KOGw":
/*!***************************************!*\
  !*** ./src/app/pipes/summary.pipe.ts ***!
  \***************************************/
/*! exports provided: SummaryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPipe", function() { return SummaryPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SummaryPipe {
    transform(value, limit) {
        if (!value) {
            return null;
        }
        const actualLimit = (limit) ? limit : 20;
        return value.substring(0, actualLimit) + '...';
    }
}
SummaryPipe.ɵfac = function SummaryPipe_Factory(t) { return new (t || SummaryPipe)(); };
SummaryPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "summary", type: SummaryPipe, pure: true });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar/navbar.component */ "tZhi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'my-first-project';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _component_from_cli_component_from_cli_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component-from-cli/component-from-cli.component */ "keyd");
/* harmony import */ var _services_db_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/db.services */ "t+jt");
/* harmony import */ var _binding_binding_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./binding/binding.component */ "DJT7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _pipes_summary_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/summary.pipe */ "KOGw");
/* harmony import */ var _directives_upper_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/upper.directive */ "w7Vb");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-validation */ "ywVC");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar/navbar.component */ "tZhi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
        _services_db_services__WEBPACK_IMPORTED_MODULE_4__["dbServices"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            ng2_validation__WEBPACK_IMPORTED_MODULE_10__["CustomFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _component_from_cli_component_from_cli_component__WEBPACK_IMPORTED_MODULE_3__["ComponentFromCliComponent"],
        _binding_binding_component__WEBPACK_IMPORTED_MODULE_5__["BindingComponent"],
        _pipes_summary_pipe__WEBPACK_IMPORTED_MODULE_8__["SummaryPipe"],
        _directives_upper_directive__WEBPACK_IMPORTED_MODULE_9__["UpperDirective"],
        _navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
        ng2_validation__WEBPACK_IMPORTED_MODULE_10__["CustomFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]] }); })();


/***/ }),

/***/ "ePj2":
/*!*************************************************!*\
  !*** ./src/app/services/posts/posts.service.ts ***!
  \*************************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class PostsService {
    constructor(http) {
        this.http = http;
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }
    get() {
        return this.http.get(this.url);
    }
    add(post) {
        return this.http.post(this.url, post);
    }
    update(post, updatedPost) {
        return this.http.put(this.url + `/${post.id}`, updatedPost);
    }
    delete(post) {
        return this.http.delete(this.url + `/${post.id}`);
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "keyd":
/*!********************************************************************!*\
  !*** ./src/app/component-from-cli/component-from-cli.component.ts ***!
  \********************************************************************/
/*! exports provided: ComponentFromCliComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentFromCliComponent", function() { return ComponentFromCliComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_db_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/db.services */ "t+jt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ComponentFromCliComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r2);
} }
function ComponentFromCliComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r3);
} }
class ComponentFromCliComponent {
    constructor(dbServices) {
        // how to create basic elements
        this.courses = ['c#', 'PHP', 'PYTHON'];
        this.coursess = dbServices.getAll();
    }
}
ComponentFromCliComponent.ɵfac = function ComponentFromCliComponent_Factory(t) { return new (t || ComponentFromCliComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_db_services__WEBPACK_IMPORTED_MODULE_1__["dbServices"])); };
ComponentFromCliComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComponentFromCliComponent, selectors: [["app-component-from-cli"]], decls: 8, vars: 2, consts: [[4, "ngFor", "ngForOf"]], template: function ComponentFromCliComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Creating simple static elements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ComponentFromCliComponent_ul_3_Template, 3, 1, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "calling functionality elements from services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ComponentFromCliComponent_ul_7_Template, 3, 1, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.coursess);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnQtZnJvbS1jbGkuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "t+jt":
/*!*****************************************!*\
  !*** ./src/app/services/db.services.ts ***!
  \*****************************************/
/*! exports provided: dbServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbServices", function() { return dbServices; });
class dbServices {
    constructor() {
    }
    getAll() {
        return ['Angular', 'React', 'Vue'];
    }
}


/***/ }),

/***/ "tZhi":
/*!***************************************************!*\
  !*** ./src/app/navbar/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["navbar"]], decls: 18, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "active"], ["routerLink", "/", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["routerLink", "/binding", 1, "nav-link"], ["routerLink", "/cli", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _binding_binding_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding/binding.component */ "DJT7");
/* harmony import */ var _component_from_cli_component_from_cli_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-from-cli/component-from-cli.component */ "keyd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: 'binding',
        component: _binding_binding_component__WEBPACK_IMPORTED_MODULE_1__["BindingComponent"]
    },
    {
        path: 'cli',
        component: _component_from_cli_component_from_cli_component__WEBPACK_IMPORTED_MODULE_2__["ComponentFromCliComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "w7Vb":
/*!***********************************************!*\
  !*** ./src/app/directives/upper.directive.ts ***!
  \***********************************************/
/*! exports provided: UpperDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpperDirective", function() { return UpperDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UpperDirective {
    constructor(ref) {
        this.ref = ref;
    }
    onFocus() {
        console.log('focus');
    }
    onBlur() {
        const getValue = this.ref.nativeElement.value;
        this.ref.nativeElement.value = getValue.toUpperCase();
    }
}
UpperDirective.ɵfac = function UpperDirective_Factory(t) { return new (t || UpperDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
UpperDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: UpperDirective, selectors: [["", "appUpper", ""]], hostBindings: function UpperDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function UpperDirective_focus_HostBindingHandler() { return ctx.onFocus(); })("blur", function UpperDirective_blur_HostBindingHandler() { return ctx.onBlur(); });
    } } });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map