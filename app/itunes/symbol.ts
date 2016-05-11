import {Pipe} from 'angular2/core';
import {LanguageSetting} from '../pages/setings/language';

@Pipe({
  name: 'toSymbol'
})
export class ToSymbolPipe {
  constructor(public settings: LanguageSetting) {
  }
  transform(v, args) {
    return this.settings.country.currency || v;
  }
}
