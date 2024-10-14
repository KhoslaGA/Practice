export default function ProductLayout({
  children,
}: {
  children: {
    children: React.ReactNode;
  };
}) {
  return (
    <>
      {children}
      <h2>Features Products</h2>
    </>
  );
}
