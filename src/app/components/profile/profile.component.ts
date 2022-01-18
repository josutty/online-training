import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  experiencedCandidate: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleChange(evt:any) {
    var target = evt.target.value;
    if(target == 'prof') {
      this.experiencedCandidate = true;
    } else {
      this.experiencedCandidate = false;
    }
    console.log(target)
  }

}
