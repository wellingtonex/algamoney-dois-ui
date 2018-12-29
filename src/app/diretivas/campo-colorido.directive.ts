import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor') corDeFundo: string;

  constructor() {}

  @HostListener('focus') ganharFoco() {
    this.corDeFundo = 'yellow';
  }

  @HostListener('blur') perderFoco() {
    this.corDeFundo = 'transparent';
  }

}
