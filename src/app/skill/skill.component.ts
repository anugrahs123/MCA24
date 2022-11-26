import { Component, OnInit } from '@angular/core';
import Team from './../Team.json'
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  public TeamList : any ;
  constructor() { }

  ngOnInit(): void {
    this.TeamList=Team;
    console.log(this.TeamList);

    
  }

}
