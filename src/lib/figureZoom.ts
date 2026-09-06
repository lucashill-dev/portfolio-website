/**
 * Opens a figure at its natural size in a native <dialog>.
 *
 * The screenshots are displayed at roughly 300px so they don't dominate the
 * page, which is legible but too small to actually read. This is the only
 * way to inspect them. Native dialog gives Escape, focus trapping and a
 * backdrop for free; the visible close button is there because phones have
 * no Escape key.
 */
export function initFigureZoom(): void {
  const dialog = document.querySelector<HTMLDialogElement>('#figure-dialog');
  const full = dialog?.querySelector<HTMLImageElement>('.lightbox-image');
  if (!dialog || !full || typeof dialog.showModal !== 'function') return;

  document.querySelectorAll<HTMLButtonElement>('.shot-zoom').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const img = trigger.querySelector('img');
      if (!img) return;
      full.src = img.currentSrc || img.src;
      full.alt = img.alt;
      dialog.showModal();
    });
  });

  // Clicking the image closes it again, which is what anyone who just
  // clicked to open expects. The Close button stays as the keyboard and
  // screen-reader path.
  full.addEventListener('click', () => dialog.close());

  // A click that lands on the dialog element itself is either the backdrop
  // or the padding around the image, so close on that too.
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
}
