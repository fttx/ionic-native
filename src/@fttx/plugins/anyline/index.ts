import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@fttx/core';

export interface AnylineOptions {
  // Valid License Key
  licenseKey: string;

  // Scanning options
  config: any;
}

/**
 * @name Anyline
 * @description
 * Anyline provides an easy-to-use SDK for applications to enable Optical Character Recognition (OCR) on mobile devices.
 *
 * @usage
 * ```typescript
 * import { Anyline } from '@fttx/anyline/ngx';
 *
 *
 * constructor(private anyline: Anyline) { }
 *
 * ...
 *
 *
 * this.anyline.scan(options)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Anyline',
  plugin: 'io-anyline-cordova',
  pluginRef: 'Anyline',
  repo: 'https://github.com/Anyline/anyline-ocr-cordova-module',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Anyline extends IonicNativePlugin {
  /**
   * Scan
   * @param options {AnylineOptions} Scanning options
   * @return {Promise<any>} Returns a promise that resolves when Code is captured
   */
  @Cordova()
  scan(options: AnylineOptions): Promise<any> {
    return;
  }
}
