export default function Separator({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-1 h-px bg-black opacity-20 mt-1" />
      {children && (
        <p className="text-[#000] mx-4 text-[14px]">{children}</p>
      )}
      <div className="flex flex-1 h-px bg-black opacity-20 mt-1" />
    </div>
  )
}
