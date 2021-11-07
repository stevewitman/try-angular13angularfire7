import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../services/data.service';

interface PostType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-post-page',
  templateUrl: './add-post-page.component.html',
  styleUrls: ['./add-post-page.component.scss'],
})
export class AddPostPageComponent implements OnInit {
  addPostForm!: FormGroup;
  postTypes: PostType[] = [
    { value: 'video', viewValue: 'Video' },
    { value: 'blog', viewValue: 'Blog' },
    { value: 'podcast', viewValue: 'Podcast' },
  ];

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.addPostForm = this.fb.group({
      url: ['', Validators.required],
      postType: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addPost() {
    console.log('TITLE:', this.addPostForm.value.title);
    this.dataService.addPost({
      url: this.addPostForm.value.url,
      type: this.addPostForm.value.postType,
      title: this.addPostForm.value.title,
      description: this.addPostForm.value.description,
    });
  }
}
