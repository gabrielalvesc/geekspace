import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  image: string;
  file: File;
  sizeLimit:boolean;
  filestring: string;

  constructor() { }

  
}
