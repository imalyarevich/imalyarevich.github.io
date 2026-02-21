import { useCallback } from 'react';

export const useDownloadResume = () =>
    useCallback(() => {
        // Overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.inset = '0';
        overlay.style.background = 'rgba(0,0,0,0.6)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '9999';
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 200ms ease';

        // Modal
        const modal = document.createElement('div');
        modal.style.width = '90vw';
        modal.style.height = '90vh';
        modal.style.maxWidth = '840px';
        modal.style.background = '#111';
        modal.style.borderRadius = '16px';
        modal.style.overflow = 'hidden';
        modal.style.position = 'relative';
        modal.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)';
        modal.style.transform = 'scale(0.95)';
        modal.style.transition = 'transform 200ms ease';

        // Close button
        const closeBtn = document.createElement('button');
        closeBtn.innerText = '✕';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '12px';
        closeBtn.style.right = '16px';
        closeBtn.style.zIndex = '10';
        closeBtn.style.background = 'rgba(0,0,0,0.6)';
        closeBtn.style.color = '#fff';
        closeBtn.style.border = 'none';
        closeBtn.style.borderRadius = '8px';
        closeBtn.style.padding = '6px 10px';
        closeBtn.style.cursor = 'pointer';

        // iframe
        const iframe = document.createElement('iframe');
        iframe.src = 'https://imalyarevich.github.io/assets/Ivan_Malyarevich_Resume.pdf#zoom=page-width';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';

        // close logic
        const closeModal = () => {
            overlay.style.opacity = '0';
            modal.style.transform = 'scale(0.95)';

            setTimeout(() => {
                document.removeEventListener('keydown', handleEsc);
                overlay.remove();
            }, 200);
        };

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        // events
        closeBtn.onclick = closeModal;

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal();
            }
        });

        document.addEventListener('keydown', handleEsc);

        // assemble
        modal.appendChild(closeBtn);
        modal.appendChild(iframe);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // trigger animation
        requestAnimationFrame(() => {
            overlay.style.opacity = '1';
            modal.style.transform = 'scale(1)';
        });
    }, []);
