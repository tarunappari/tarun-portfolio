// utils/WebGLContextManager.ts
import { WebGLRenderer } from "three";

class WebGLContextManager {
    private static instance: WebGLContextManager;
    private contexts: WebGLRenderer[] = [];
    private static readonly MAX_CONTEXTS = 4;

    private constructor() {}

    static getInstance() {
        if (!WebGLContextManager.instance) {
            WebGLContextManager.instance = new WebGLContextManager();
        }
        return WebGLContextManager.instance;
    }

    createContext(): WebGLRenderer {
        const renderer = new WebGLRenderer();
        this.contexts.push(renderer);

        if (this.contexts.length > WebGLContextManager.MAX_CONTEXTS) {
            this.destroyOldestContext();
        }

        return renderer;
    }

    destroyOldestContext() {
        const oldestContext = this.contexts.shift();
        oldestContext?.dispose();
    }
}

export default WebGLContextManager;
