export const throttleRAF = <T extends (...args: any[]) => any>(
    fn: T
): ((...args: Parameters<T>) => void) => {
    let ticking = false;

    return (...args: Parameters<T>) => {
        if (!ticking) {
            requestAnimationFrame(() => {
                fn(...args);
                ticking = false;
            });
            ticking = true;
        }
    };
};
