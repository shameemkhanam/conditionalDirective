import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ConditionalDirective';
  videos = [
    {
      title: 'video1',
      share: 415,
      likes: 257,
      dislikes: 12,
      thumbnail: 'assets/images/img1.jpg',
    },
    {
      title: 'video2',
      share: 215,
      likes: 325,
      dislikes: 12,
      thumbnail: 'assets/images/img2.jpg',
    },
    {
      title: 'video3',
      share: 513,
      likes: 105,
      dislikes: 12,
      thumbnail: 'assets/images/img3.jpg',
    },
  ];

  mostLikedVideo = this.getMostLikedVideo();

  getMostLikedVideo() {
    let videosCopy = [...this.videos]; //making a copy of videos array,bcoz v want the original array to keep it as it is....v don't want to sort the original array.
    return videosCopy.sort((cur, next) => next.likes - cur.likes)[0]; // sort array in desc order..so video with highest likes will be the first ele of array
  }
}
