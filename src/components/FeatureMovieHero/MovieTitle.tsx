type MovieTitleProps = {
  title: string
}

export const MovieTitle = ({ title }: MovieTitleProps) => {
  return (
    <h1 className="m-0 max-w-xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
      {title}
    </h1>
  )
}
