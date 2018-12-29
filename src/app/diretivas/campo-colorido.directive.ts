import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @Input() cor = 'gray';
  @HostBinding('style.backgroundColor') corDeFundo: string;

  constructor() {}

  @HostListener('focus') ganharFoco() {
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') perderFoco() {
    this.cor = 'transparent';
  }

}
