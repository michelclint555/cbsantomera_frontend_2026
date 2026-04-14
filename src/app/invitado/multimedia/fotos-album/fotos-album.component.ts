import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../../interfaces/album';
import { AlbumService } from '../../../servicios/AlbumService';
import { PhotoService } from '../../../servicios/PhotoService';

@Component({
  selector: 'app-fotos-album',
  standalone: false,
  templateUrl: './fotos-album.component.html',
  styleUrls: ['./fotos-album.component.css']
})
export class FotosAlbumComponent  implements OnInit{
  displayBasic!: boolean;
  _activeIndex: number = 0;
    modelo: string = "Albumes";
  titulo: string = "";

  responsiveOptions: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5
    },
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  id: string | null | undefined;
  album: Album = {
      portada: '',
      nombre: '',
      idAlbum: 0,
      fecha: '',
      fotos: [],
      fotosAlbum: [],
      descripcion: '',
    temporada: {
        id: 0,
        nombre: '',
        inicio: '',
        fin: '',
        activo: false,
        fechaRegistro: '',
        source: ''
    }
  };
  http: string = "";

  constructor(private albumService: AlbumService, private route: ActivatedRoute) {
    this.http = albumService.serverFile;
  }

  ngOnInit() {
    //this.photoService.getImages().then((images) => (this.images = images));

    const id = this.route.paramMap.subscribe(param => {
      this.id = param.get('id');
    });
    if (id) {
      this.albumService.getAlbum(Number(this.id)).subscribe((data) => {
        //this.albumes = data;
        this.album = data.value as Album;
        this.titulo = this.album.nombre;
        console.log("los datos");
        console.log(this.album);

      });
    }
  }

  get activeIndex(): number {
    return this._activeIndex;
  }

  set activeIndex(newValue) {
    if (this.album?.fotosAlbum && 0 <= newValue && newValue <= this.album?.fotosAlbum.length - 1) {
      this._activeIndex = newValue;
    }
  }



  imageClick(index: number) {
    
    this.activeIndex = index;
    this.displayBasic = true;
  }
  next() {
    this.activeIndex++;
  }

  prev() {
    this.activeIndex--;
  }
}
