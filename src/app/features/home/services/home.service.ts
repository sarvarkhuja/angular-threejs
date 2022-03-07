import * as THREE from 'three';
import { ElementRef, Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private canvas!: HTMLCanvasElement;
  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private light!: THREE.AmbientLight;

  private frameId!: number;

  public DEFAULT_COLOR = '#00ff00';
  private behaviorSubject = new BehaviorSubject(this.DEFAULT_COLOR);
  public observable$ = this.behaviorSubject.asObservable();

  public constructor(private ngZone: NgZone) {}

  public updateColor(color: any) {
    this.behaviorSubject.next(color);
  }
  public createScene(canvas: ElementRef<HTMLCanvasElement>, cube: THREE.Mesh): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true, // transparent background
      antialias: true, // smooth edges
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // create the scene
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;
    this.scene.add(this.camera);

    // soft white light
    this.light = new THREE.AmbientLight(0x404040);
    this.light.position.z = 10;
    this.scene.add(this.light);
    this.scene.add(cube);
  }

  public animate(cube: THREE.Mesh): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render(cube);
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render(cube);
        });
      }

      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

  public render(cube: THREE.Mesh): void {
    this.frameId = requestAnimationFrame(() => {
      this.render(cube);
    });
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  public resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }

  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
    if (this.renderer != null) {
      this.renderer.dispose();
    }
  }
}
