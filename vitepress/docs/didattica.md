# Didattica & Animazioni

Materiale di supporto per i corsi e visualizzazioni geometriche.

## Fondamenti Matematici (Test di LaTeX)

Il modello si basa sull'equazione fondamentale delle onde inline $c = \lambda \cdot f$. 

In forma estesa, analizziamo la trasformata di Fourier:

$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} \, dx
$$

Se la formula è corretta, apparirà con la formattazione tipografica nativa del LaTeX.

## Animazioni con Manim (Python)

Ecco un esempio di concetto geometrico spiegato visivamente tramite il pacchetto Python `manim`.

### Metodo 1: Render Video Standard (Consigliato per semplicità)
Se esporti l'animazione da Python con `manim -pql scene.py`, ottieni un file `.mp4`. Puoi inserirlo così:

<video controls width="100%" style="border-radius: 8px; margin: 15px 0;">
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  Il tuo browser non supporta i video HTML5.
</video>
*(Nota: basterà mettere il file .mp4 nella cartella `docs/public/animazioni/` e richiamarlo con `/animazioni/file.mp4`)*

### Metodo 2: Snippet Interattivo (HTML/JS Custom)
Se usi librerie che esportano in WebGL o se vuoi creare un bottone interattivo Vue direttamente nella pagina:

<div style="background: var(--vp-c-bg-soft); padding: 20px; border-radius: 8px; border: 1px solid var(--vp-c-divider);">
  <p>Compila i parametri dell'onda per testare l'interattività (Componente Vue dinamico):</p>
  <input type="range" min="1" max="10" value="5" style="width: 100%" />
</div>