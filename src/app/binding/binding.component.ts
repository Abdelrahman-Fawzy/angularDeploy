import { PostsService } from './../services/posts/posts.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { CustomValidators } from 'ng2-validation';
import { observable } from 'rxjs';
import { take } from 'rxjs/internal/operators/take';
// import { take } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor(private postsService: PostsService) {}

  get firstName() {
    return this.profileForm.get('firstName');
  }

  course = 'Angular';
  imageURL = 'https://media.gettyimages.com/photos/giza-egypt-pyramids-in-sunset-scene-wonders-of-the-world-picture-id1085205362?s=612x612';
  isActive = true;

  value;
  names;

  @Input('isClicked') isFav;
  faHeart = faHeart;
  faHeartbeat = faHeartbeat;

  employees = {
    name: 'abdelrahman fawzy',
    hiring: new Date(2021, 4, 9)
  };

  title = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

  persons = ['abdelrahman', 'eslam', 'Ali'];

  peopleOfCountries = [
    {
      country: 'egypt',
      names: [
        {name: 'abdelrahman fawzy'},
        {name: 'abdelrahman Gharieb'},
        {name: 'abdelrahman mostafa'},
      ]
    },
    {
      country: 'turkey',
      names: [
        {name: 'ali hossam'},
        {name: 'eslam badr'},
      ]
    }
  ];

  //
  courses: any[] = ['java', 'js', 'angular'];

  defaultView = 'courses';

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  // obs = Observable.interval(1000).subscribe(a => {
  //   console.log(a);

  // })

  // fetch data
  posts: any = [];

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
  ngOnInit(): void {
    this.postsService.get().subscribe(response => {
      console.log(response);
      this.posts = response;
    });
  }

  createpost(input: HTMLInputElement) {
    const post = {title: input.value, id: ''};
    this.postsService.add(post).subscribe(res => {this.posts.splice(0, 0, post); });
    console.log(input);
    console.log(post);
  }

  updatepost(post, apititle) {
    console.log(post, apititle);
    const updatedPost = {title: apititle, id: post.id};
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

