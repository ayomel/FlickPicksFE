type MovieTitleProps = {
  title: string
}

export const MovieTitle = ({ title }: MovieTitleProps) => {
  return (
    <h1 className="max-w-xl text-[clamp(2.75rem,8vw,4.5rem)] leading-[0.92] font-semibold tracking-[-0.04em] text-foreground">
      {title}
    </h1>
  )
}
