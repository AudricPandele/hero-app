import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerstatsComponent } from './powerstats/powerstats.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PowerstatsComponent],
  imports: [CommonModule, IonicModule],
  exports: [PowerstatsComponent]
})
export class ComponentsModule {}
