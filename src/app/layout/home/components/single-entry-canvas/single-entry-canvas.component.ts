import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import * as THREE from 'three';
import { Color } from 'three';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'aa-single-entry-canvas',
  templateUrl: './single-entry-canvas.component.html',
  styleUrls: ['./single-entry-canvas.component.scss'],
})
export class SingleEntryCanvasComponent implements OnInit, OnDestroy {
  private _subscription!: Subscription;

  @ViewChild('rendererCanvas', { static: true })
  rendererCanvas!: ElementRef<HTMLCanvasElement>;

  private cube!: THREE.Mesh;
  constructor(private data$: HomeService) {}

  ngOnInit() {
    this.resetColor();
    this.createCube();
  }
  resetColor() {
    this.data$.resetColor();
  }
  createCube() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    this._subscription = this.data$.observable$.subscribe(color => {
      const material = new THREE.MeshBasicMaterial({
        color: new Color(color),
        wireframe: true,
      });

      this.cube = new THREE.Mesh(geometry, material);
      this.data$.createScene(this.rendererCanvas, this.cube);
      this.data$.animate(this.cube);
    });
  }
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
