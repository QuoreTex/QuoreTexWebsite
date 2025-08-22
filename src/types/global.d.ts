// Global window augmentations for optional libraries loaded via script tags
// This keeps TypeScript happy when checking feature presence like `if (window.THREE)`

export {};

declare global {
  interface Window {
    THREE?: any;
    anime?: any;
  }
}
