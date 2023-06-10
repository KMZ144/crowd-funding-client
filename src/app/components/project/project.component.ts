import { ActivatedRoute } from '@angular/router';
import { ProjectService } from './../../services/project.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  private id: Number = Number(this.activatedRoute.snapshot.paramMap.get('id'));

  back_end_url: any = environment.API_URL
  constructor(private projectService: ProjectService, private activatedRoute: ActivatedRoute) { }
  @ViewChild('closeReportModalBtn')
  myButton!: ElementRef;
  data: any = null
  project: any = null
  similarProjects: any
  targetDonations: any
  progress: any
  urls: String[] = []
  loggedUser: any
  validDonation: boolean = false
  userRate: any;
  form: FormGroup = new FormGroup({
    amount: new FormControl(5, [Validators.required, Validators.pattern('[0-9]+')])
  })
  ngOnInit(): void {
    this.projectService.getProjectById(this.id).subscribe(
      {
        next: (res) => {
          this.loggedUser = localStorage.getItem('user')
          this.loggedUser = JSON.parse(this.loggedUser)
          this.data = res
          this.project = this.data.project
          this.userRate = this.data?.project?.ratings.filter((element: any) => {
            return element.user === this.loggedUser.id
          })[0];
          this.similarProjects = this.data.similar_projects
          this.targetDonations = 0.25 * this.project.target_donations
          console.log(this.userRate);
        },
        error: (err) => {
          console.log(err);
        }
      }
    )

  }
  donate() {

  }
  get getAmount() {
    return this.form.controls['amount']
  }
  submit(e: any) {
    e.preventDefault();
    if (this.form.status == 'VALID') {
      console.log({ project: this.project.id, amount: this.getAmount.value });
      this.projectService.donate({ project: this.project.id, amount: this.getAmount.value }).subscribe({
        next: (res) => {
          this.validDonation = true
          console.log(res);
        },
        error: (err) => {
          console.log(err);

        }
      })
    }
  }



  reportProjectForm: FormGroup = new FormGroup({
    report_project_message: new FormControl('', [Validators.required]),
  });

  get getReportValue() {
    return this.reportProjectForm.controls['report_project_message'];
  }
  // setReportProject(project: any) {
  //   this.reportProject = project
  // }
  submitReport(e: Event) {
    e.preventDefault();
    if (this.reportProjectForm.status == 'VALID') {

      this.projectService.reportProject(
        {
          "project": this.project.id,
          "report_message": this.getReportValue.value
        }).subscribe(
          {
            next: (res: any) => {
              this.myButton.nativeElement.click();
              this.reportProjectForm.controls['report_project_message'].setValue('')
              console.log(res);
            },
            error: (err) => {
              console.log(err);
              //     this.errors = err.error;
            },
          });
    } else {
      // this.placeholder = 'please provide a comment message first!'
      this.reportProjectForm.markAllAsTouched();
    }
  }

}

