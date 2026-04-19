export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#000] font-bold text-center flex items-center justify-center gap-2 leading-[120%] text-[1rem]">
      {children}
    </p>
  );
}