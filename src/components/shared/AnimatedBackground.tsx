// components/shared/AnimatedBackground.tsx
export const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -inset-[10px] opacity-30 md:opacity-50">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl hidden md:block motion-safe:animate-blob" />
                <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl hidden md:block motion-safe:animate-blob animation-delay-2000" />
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl hidden md:block motion-safe:animate-blob animation-delay-4000" />
            </div>
        </div>
    );
};