import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@fttx/core';

/**
 * @name Pin Dialog
 * @description
 * PhoneGap numeric password dialog plugin for Android and iOS.
 *
 * Requires Cordova plugin: `cordova-plugin-pin-dialog`. For more info, please see the [Pin Dialog plugin docs](https://github.com/Paldom/PinDialog).
 *
 *
 *
 * @usage
 * ```typescript
 * import { PinDialog } from '@fttx/pin-dialog/ngx';
 *
 *
 * constructor(private pinDialog: PinDialog) { }
 *
 * ...
 *
 * this.pinDialog.prompt('Enter your PIN', 'Verify PIN', ['OK', 'Cancel'])
 *   .then(
 *     (result: any) => {
 *       if (result.buttonIndex == 1) console.log('User clicked OK, value is: ', result.input1);
 *       else if(result.buttonIndex == 2) console.log('User cancelled');
 *     }
 *   );
 * ```
 */
@Plugin({
  pluginName: 'PinDialog',
  plugin: 'cordova-plugin-pin-dialog',
  pluginRef: 'plugins.pinDialog',
  repo: 'https://github.com/Paldom/PinDialog',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class PinDialog extends IonicNativePlugin {
  /**
   * Show pin dialog
   * @param {string} message Message to show the user
   * @param {string} title Title of the dialog
   * @param {string[]} buttons Buttons to show
   * @returns {Promise<{ buttonIndex: number, input1: string }>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 4, // no error callback
  })
  prompt(message: string, title: string, buttons: string[]): Promise<{ buttonIndex: number; input1: string }> {
    return;
  }
}
