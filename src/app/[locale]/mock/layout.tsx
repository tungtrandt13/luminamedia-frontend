/**
 * Layout riêng cho /mock route.
 * Không gọi Strapi API để trang mock có thể chạy
 * kể cả khi Strapi backend offline.
 */
export default function MockLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
