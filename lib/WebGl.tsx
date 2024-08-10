import * as THREE from 'three';

class WebGLManager {
  private contexts: Set<THREE.WebGLRenderer> = new Set();

  constructor() {
    // Optionally initialize here
  }

  addRenderer(renderer: THREE.WebGLRenderer) {
    this.contexts.add(renderer);
    renderer.domElement.addEventListener('webglcontextlost', this.onContextLost.bind(this));
  }

  removeRenderer(renderer: THREE.WebGLRenderer) {
    this.contexts.delete(renderer);
    renderer.domElement.removeEventListener('webglcontextlost', this.onContextLost.bind(this));
  }

  private onContextLost(event: Event) {
    console.warn('WebGL context lost');
    // Handle the context loss
  }

  dispose() {
    this.contexts.forEach(renderer => {
      renderer.dispose();
    });
    this.contexts.clear();
  }
}

export default WebGLManager;
