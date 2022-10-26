// Uncomment these imports to begin using these cool features!

import {get} from '@loopback/rest';

export class Saludo2Controller {
  constructor() {}

  @get('/saludar2')
  saludars():string {
  return ('hola desde loopback');
   
   }
  }
