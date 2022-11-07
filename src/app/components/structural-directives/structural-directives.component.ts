import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  colors = ["orange", 'red', 'green', 'yellow']
  constructor() { }

  ngOnInit(): void {
  }

}
