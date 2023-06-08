import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  @Input() comments: any
  @Input() projectId: any

  commentObject: any
  constructor(private commentService: CommentService, private authService: AuthService) { }
  placeholder: String = 'add new comment'
  myform: FormGroup = new FormGroup({
    value: new FormControl('', [Validators.required]),
  });

  get getCommentValue() {
    return this.myform.controls['value'];
  }

  submit(e: Event) {
    e.preventDefault();
    if (this.myform.status == 'VALID') {
      console.log("sdadas", this.getCommentValue.value)
      this.commentObject = {
        "project": this.projectId,
        "comment_message": this.getCommentValue.value
      }
      this.commentService.addComment(this.commentObject).subscribe(
        {
          next: (res: any) => {
            this.commentObject.user = this.authService.getLoggedUser.username
            this.commentObject.created_at = new Date()
            this.comments.push(this.commentObject)
            this.myform.controls['value'].setValue('')
            console.log(res);
          },
          error: (err) => {
            console.log(err);
            //     this.errors = err.error;
          },
        });
    } else {
      this.placeholder = 'please provide a comment message first!'
      this.myform.markAllAsTouched();
    }
  }
}
