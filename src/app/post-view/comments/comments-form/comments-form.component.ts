import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Comments } from './../interfaces/comments.interface';
import { CommentsDataService } from './../services/comments-data.service';

@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css'],
})
export class CommentsFormComponent implements OnInit {
  commentForm: FormGroup;

  constructor(private commentsDataService: CommentsDataService) {
    this.commentForm = new FormGroup({
      commentTxt: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  ngOnInit(): void {}

  sendForm() {
    const comment: Comments = {
      createdAt: '',
      userId: 123,
      postId: 321,
      comment: this.commentForm.value.commentTxt,
    };
    this.commentsDataService
      .postComments(comment)
      .subscribe((res) => console.log(res));
  }
}
