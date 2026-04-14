import { Component, OnInit } from '@angular/core';
import { Album } from '../../interfaces/album';
import { Temporada } from '../../interfaces/temporada';
import { TemporadaService } from '../../servicios/TemporadaService';
import { AlbumService } from '../../servicios/AlbumService';



@Component({
    selector: 'app-multimedia',
    standalone: false,
    templateUrl: './multimedia.component.html',
    styleUrl: './multimedia.component.css',
})
export class MultimediaComponent implements OnInit {
  albumes: Album[] = [];
  titulo: string = "albumes";
    isReady: boolean = false;
    http: string = "";
    modelo: string = "Albumes";
    temporadas: Temporada[] = [];
    temporadaSelected: Temporada = {
        id: 0,
        nombre: '',
        inicio: '',
        fin: '',
        activo: false,
        fechaRegistro: '',
        source: ''
    };
    constructor(private AlbumService: AlbumService, private temporadaService: TemporadaService) {
        //this.albumes = AlbumService.getAlbumes();
        this.http = this.AlbumService.serverFile;

        this.GetTemporadaActiva();
        this.cargartemporadas();

    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    GetTemporadaActiva() {
        this.temporadaService.getTemporadaActiva().subscribe(data => {

            if (data.status == true) {
                this.temporadaSelected = data.value;
                this.isReady = true;
                console.log(this.temporadaSelected);
                this.cargarAlbumes();
            }
            else {
            }

        });
    }

    cargarAlbumes() {
        console.log(this.temporadaSelected);
        this.AlbumService.getAlbumes(this.temporadaSelected.nombre).subscribe((data) => {
            //this.albumes = data;
            this.albumes = data.value as Album[];


        });

    }

    cargartemporadas() {
        this.temporadaService.getTemporadas().subscribe(data => {

            if (data.status == true) {
                this.temporadas = data.value;



            }
            else {
            }

        });
    }
}
