export {};
declare global {
  interface Window {
    // Because tiny mce very old . Don't suport typescript
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tinymce: any;
  }
}
