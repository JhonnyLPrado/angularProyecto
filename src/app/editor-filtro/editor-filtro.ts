import { Component , signal,computed} from '@angular/core';

@Component({
  selector: 'app-editor-filtro',
  standalone: true,
  templateUrl: './editor-filtro.html',
  styleUrl: './editor-filtro.scss',
})
export class EditorFiltroComponent {
  brillo= signal(100);
  contraste = signal(100);
  blur = signal(0);
  color = signal(100);
  ruido = signal(100);

  filtroScss = computed(()=>{
    return `brightness(${this.brillo()}%) contrast(${this.contraste()}%) blur(${this.blur()}px) sepia(${this.color()}%) saturate(${this.ruido()}%) hue-rotate(${this.color()}deg)`;
  })

  actualizar (prop: string, evento: Event){
    const valor = (evento.target as HTMLInputElement).value;
    if (prop === 'brillo') this.brillo.set(+valor);
    if (prop === 'contraste') this.contraste.set(+valor);
    if (prop === 'blur') this.blur.set(+valor);
    if (prop === 'color') this.color.set(+valor);
    if (prop === 'ruido') this.ruido.set(+valor);
  }
}
