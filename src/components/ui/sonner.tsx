import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
  position="top-center"
  theme={theme as ToasterProps["theme"]}
  className="toaster group"
  style={
    {
      "--normal-bg": "white",           
      "--normal-text": "black",        
      "--normal-border": "#e5e7eb",    
    } as React.CSSProperties
  }
  {...props}
/>

  )
}

export { Toaster }
