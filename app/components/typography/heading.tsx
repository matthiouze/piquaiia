import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  type?: 'h1' | 'h2';
  smCenter?: boolean;
  withExtraMargin?: boolean;
}

export default function Heading({ children, type = 'h2', withExtraMargin = false, smCenter = false }: HeadingProps) {
  if (type === 'h2') {
    return (
      <h2 className={cn("text-[#000] font-mulish text-[1.5rem] font-bold leading-[115%]", smCenter && "text-center", withExtraMargin && "mt-[2.5rem]")}>
        {children}
      </h2>
    )
  }

  return (
    <h1 className={cn("text-[#000] font-mulish text-[2rem] font-bold leading-[115%] text-center sm:text-center", smCenter && "text-center", withExtraMargin && "mt-[2.5rem]")}>
      {children}
    </h1>
  )
}
