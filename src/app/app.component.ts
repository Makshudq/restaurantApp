import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project1';

  ngOnInit(): void {

    var item: any = document.getElementById('newdiv');


    window.addEventListener('wheel', function (e) {

      if (e.deltaY > 0) item.scrollLeft += 100;
      else item.scrollLeft -= 100;
    });

  }
}

