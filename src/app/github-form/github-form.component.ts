import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Github } from '../github'; 

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {

  @Output() submit = new EventEmitter<Github>();

  constructor() { }

  ngOnInit() {
  }

}
