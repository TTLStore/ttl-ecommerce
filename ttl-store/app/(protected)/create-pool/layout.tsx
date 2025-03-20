import PoolProvider from "@/provider/PoolProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PoolProvider>
      {children}
    </PoolProvider>
  );
}