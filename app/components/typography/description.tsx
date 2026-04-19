export default function Description({
  children,
  variant = 'default',
  center = false,
}: {
  children: React.ReactNode,
  variant?: 'default' | 'custom' | 'left',
  center?: boolean,
}) {
  const baseClasses = "leading-normal";

  const variantClasses = {
    default: "text-[#515151] text-[1rem] font-semibold tracking-[-0.24px]",
    custom: "text-[#060F23] text-[0.875rem] tracking-[-0.0175rem] font-normal",
    left: "text-[#000] text-[0.875rem] tracking-[-0.0175rem] font-semibold"
  };

  return (
    <p
      className={`${baseClasses} ${variantClasses[variant]} ${center ? "text-center" : ""}`}
      style={{
        fontFeatureSettings: "'liga' off, 'clig' off"
      } as React.CSSProperties}
    >
      {children}
    </p>
  )
}