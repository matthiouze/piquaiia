interface ProfileTitleProps {
  children: React.ReactNode
  className?: string
}

export default function ProfileTitle({ children, className = "" }: ProfileTitleProps) {
  return (
    <h2 className={`font-bold text-xl text-black leading-tight ${className}`}>
      {children}
    </h2>
  )
}
