export default function LongText({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#F8F8F8] text-[0.875rem] font-normal text-[#000] border border-[#EFEFEF] rounded-[0.5rem] p-[1.5rem] max-h-[20rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 whitespace-pre-line">{children}</div>
  )
}