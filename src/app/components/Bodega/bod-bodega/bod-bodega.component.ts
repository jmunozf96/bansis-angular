import {Component, OnInit} from '@angular/core';
import {BodegaService} from '../../../services/bodega.service';
import {Bod_bodega} from '../../../models/Bodega/bod_bodega';

@Component({
  selector: 'app-bod-bodega',
  templateUrl: './bod-bodega.component.html',
  styleUrls: ['./bod-bodega.component.css'],
  providers: [BodegaService]
})
export class BodBodegaComponent implements OnInit {
  public bodegas: Bod_bodega[];
  public bodega: Bod_bodega;

  constructor(
    private _bodegaService: BodegaService
  ) {
    this.bodega = new Bod_bodega(1, '', 0);
    this.bodegas = new Array<Bod_bodega>();
  }

  ngOnInit(): void {
    this._bodegaService.getBodegas().subscribe(
      response => {
        for (let bodega of response.bodegas) {
          this.bodega = new Bod_bodega(bodega.id, bodega.descripcion, bodega.idhacienda);
          this.bodegas.push(this.bodega);
        }
      },
      error => {
        console.log(<any> error);
      }
    );
  }

}
