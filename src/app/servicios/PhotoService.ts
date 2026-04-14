import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
  getData() {
    return [
      {
        itemImageSrc: 'assets/img/3.jpg',
        thumbnailImageSrc: 'assets/img/3.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'assets/img/3.jpg',
        thumbnailImageSrc: 'assets/img/3.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2'
      },
      {
        itemImageSrc: 'assets/img/3.jpg',
        thumbnailImageSrc: 'assets/img/3.jpg',
        alt: 'Description for Image 3',
        title: 'Title 3'
      },
      {
        itemImageSrc: 'assets/img/3.jpg',
        thumbnailImageSrc: 'assets/img/3.jpg',
        alt: 'Description for Image 4',
        title: 'Title 4'
      },
      {
        itemImageSrc: 'assets/img/3.jpg',
        thumbnailImageSrc: 'assets/img/3.jpg',
        alt: 'Description for Image 5',
        title: 'Title 5'
      },
      {
        itemImageSrc: 'assets/img/3.jpg',
        thumbnailImageSrc: 'assets/img/3.jpg',
        alt: 'Description for Image 6',
        title: 'Title 6'
      },
      {
        itemImageSrc: 'assets/img/3.jpg',
        thumbnailImageSrc: 'assets/img/3.jpg',
        alt: 'Description for Image 7',
        title: 'Title 7'
      },
      {
        itemImageSrc: 'assets/img/3.jpg',
        thumbnailImageSrc: 'assets/img/3.jpg',
        alt: 'Description for Image 8',
        title: 'Title 8'
      },
      {
        itemImageSrc: 'assets/img/3.jpg',
        thumbnailImageSrc: 'assets/img/3.jpg',
        alt: 'Description for Image 9',
        title: 'Title 9'
      },
      {
        itemImageSrc: 'assets/img/3.jpg',
        thumbnailImageSrc: 'assets/img/3.jpg',
        alt: 'Description for Image 10',
        title: 'Title 10'
      },
      {
        itemImageSrc: 'assets/img/3.jpg',
        thumbnailImageSrc: 'assets/img/3.jpg',
        alt: 'Description for Image 11',
        title: 'Title 11'
      },
      {
        itemImageSrc: 'assets/img/3.jpg',
        thumbnailImageSrc: 'assets/img/3.jpg',
        alt: 'Description for Image 12',
        title: 'Title 12'
      },
      {
        itemImageSrc: 'assets/img/3.jpg',
        thumbnailImageSrc: 'assets/img/3.jpg',
        alt: 'Description for Image 13',
        title: 'Title 13'
      },
      {
        itemImageSrc: 'assets/img/3.jpg',
        thumbnailImageSrc: 'assets/img/3.jpg',
        alt: 'Description for Image 14',
        title: 'Title 14'
      },
      {
        itemImageSrc: 'assets/img/3.jpg',
        thumbnailImageSrc: 'assets/img/3.jpg',
        alt: 'Description for Image 15',
        title: 'Title 15'
      }
    ];
  }

  getImages() {
    return Promise.resolve(this.getData());
  }
};
