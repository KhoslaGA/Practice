function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductLayout({
  children,
}: {
  children: {
    children: React.ReactNode;
  };
}) {
  const randomNo = getRandomInt(2);

  if (randomNo === 1) {
    throw new Error("Error loading Product");
  }
  return (
    <>
      {children}
      <h2>Features Products</h2>
    </>
  );
}
