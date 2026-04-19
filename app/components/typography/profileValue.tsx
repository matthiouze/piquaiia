interface ProfileValueProps {
  children: React.ReactNode
  className?: string
  isMultiple?: boolean
}

export default function ProfileValue({
  children,
  className = "",
  isMultiple = false
}: ProfileValueProps) {
  return (
    <div className={`flex flex-col gap-4 ${isMultiple ? '' : ''} ${className}`}>
      {isMultiple ? (
        <div className="space-y-1">
          {Array.isArray(children) ? children.map((child, index) => (
            <p key={index} className="text-sm font-extrabold text-black tracking-tight">
              {child}
            </p>
          )) : (
            <p className="text-sm font-extrabold text-black tracking-tight">
              {children}
            </p>
          )}
        </div>
      ) : (
        <p className="text-sm font-extrabold text-black tracking-tight">
          {children}
        </p>
      )}
    </div>
  )
}
