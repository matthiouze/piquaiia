export default function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#515151] leading-[120%] text-[1rem] font-semibold text-center">{children}</p>
  )
}