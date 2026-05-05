'use client';

import { useEffect, useCallback } from 'react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    /** Override the full message. Default: "Bạn đã gửi thành công" */
    title?: string;
    /** Highlighted text displayed in accent color after the title */
    highlightText?: string;
    /** Optional subtitle displayed below the main message */
    subtitle?: string;
    /** Override button label. Default: "Đóng" */
    buttonText?: string;
}

export default function SuccessModal({
    isOpen,
    onClose,
    title = 'Bạn đã gửi thành công',
    highlightText,
    subtitle = 'Tư vấn viên sẽ liên hệ bạn ngay trong hôm nay, hoặc gọi SĐT 0965509990 để được phản hồi nhanh nhất',
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
                className="relative bg-white rounded-[16px] px-5 sm:px-16 md:px-[96px] py-8 sm:py-[47px] flex flex-col items-center gap-5 sm:gap-[40px] animate-[modalIn_0.25s_ease-out] max-w-[90vw] sm:max-w-md md:max-w-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col items-center gap-3">
                    <p className="font-semibold text-xl sm:text-[28px] md:text-[32px] text-black text-center leading-[1.3]">
                        {title}{highlightText && <span className="text-[#AF7E2D]"> {highlightText}</span>}
                    </p>
                    {subtitle && (
                        <p className="text-[13px] sm:text-[16px] text-gray-500 text-center leading-relaxed px-2">
                            {subtitle}
                        </p>
                    )}
                </div>

                <button
                    onClick={onClose}
                    className="bg-[#AF7E2D] px-6 sm:px-[40px] py-3 sm:py-[20px] rounded-[8px] text-white font-medium text-sm sm:text-[16px] hover:bg-[#8f6623] active:scale-[0.97] transition-all cursor-pointer"
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
