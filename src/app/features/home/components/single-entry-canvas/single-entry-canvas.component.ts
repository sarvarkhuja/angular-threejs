import { HomeService } from './../../services/home.service';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { Color } from 'three';
import { Subscription } from 'rxjs';

@Component({
  selector: 'aa-single-entry-canvas',
  templateUrl: './single-entry-canvas.component.html',
  styleUrls: ['./single-entry-canvas.component.scss'],
})
export class SingleEntryCanvasComponent implements OnInit, OnDestroy {
  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas!: ElementRef<HTMLCanvasElement>;

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
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._subscription.unsubscribe();
  }
}
