import { Subscription } from 'rxjs';
import { HomeService } from './../../services/home.service';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { Color } from 'three';

@Component({
  selector: 'aa-single-entry-canvas',
  templateUrl: './single-entry-canvas.component.html',
  styleUrls: ['./single-entry-canvas.component.scss'],
})
export class SingleEntryCanvasComponent implements OnInit, OnDestroy {
  @ViewChild('rendererCanvas', { static: true })
  rendererCanvas!: ElementRef<HTMLCanvasElement>;

  private cube!: THREE.Mesh;
  constructor(private data$: HomeService) {}
  private _subscription!: Subscription;

  ngOnInit() {
    this.createCube();
  }
  createCube() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    this._subscription = this.data$.observable$.subscribe(color => {
      const material = new THREE.MeshBasicMaterial({ color: new Color(color) });
      this.cube = new THREE.Mesh(geometry, material);
      this.data$.createScene(this.rendererCanvas, this.cube);
      this.data$.animate(this.cube);
    });
  }
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
