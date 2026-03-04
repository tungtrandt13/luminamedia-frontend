'use client';

import { useEffect, useCallback } from 'react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    /** Override the title lines. Default: "Bạn đã gửi" */
    title?: string;
    /** Override the highlighted word. Default: "thành công" */
    highlightText?: string;
    /** Override button label. Default: "Đóng" */
    buttonText?: string;
}

export default function SuccessModal({
    isOpen,
    onClose,
    title = 'Bạn đã gửi',
    highlightText = 'thành công',
    buttonText = 'Đóng',
}: Props) {
    // Close on Escape key
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        },
        [onClose]
    );

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, handleKeyDown]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal Card */}
            <div
                className="relative bg-white rounded-[16px] px-[96px] py-[47px] flex flex-col items-center gap-[40px] animate-[modalIn_0.25s_ease-out] max-w-[90vw]"
                onClick={(e) => e.stopPropagation()}
            >
                <p className="font-semibold text-[28px] sm:text-[40px] text-black text-center leading-[1.3]">
                    {title}
                    <br />
                    <span className="text-[#AF7E2D] italic">{highlightText}</span>
                </p>

                <button
                    onClick={onClose}
                    className="bg-[#AF7E2D] px-[40px] py-[20px] rounded-[8px] text-white font-medium text-[16px] hover:bg-[#8f6623] active:scale-[0.97] transition-all cursor-pointer"
                >
                    {buttonText}
                </button>
            </div>

            <style jsx>{`
                @keyframes modalIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9) translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}
