interface TypoProps {
  customClass?: string;
  children: React.ReactNode;
}

export function H1({ customClass, children }: TypoProps) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${customClass}`}
    >
      {children}
    </h1>
  );
}

export function H2({ customClass, children }: TypoProps) {
  return (
    <h2
      className={`scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${customClass}`}
    >
      {children}
    </h2>
  );
}

export function H3({ customClass, children }: TypoProps) {
  return (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${customClass}`}
    >
      {children}
    </h3>
  );
}

export function H4({ customClass, children }: TypoProps) {
  return (
    <h4
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${customClass}`}
    >
      {children}
    </h4>
  );
}

export function P({ customClass, children }: TypoProps) {
  return <p className={`leading-7  ${customClass}`}>{children}</p>;
}

export function Blockquote({ customClass, children }: TypoProps) {
  return (
    <blockquote className={`mt-6 border-l-2 pl-6 italic ${customClass}`}>
      {children}
    </blockquote>
  );
}

export function Lead({ customClass, children }: TypoProps) {
  return (
    <p className={`text-xl text-muted-foreground ${customClass}`}>{children}</p>
  );
}

export function Small({ customClass, children }: TypoProps) {
  return (
    <small className={`text-sm font-medium leading-none ${customClass}`}>
      {" "}
      {children}
    </small>
  );
}

export function Muted({ customClass, children }: TypoProps) {
  return (
    <p className={`text-sm text-muted-foreground ${customClass}`}>{children}</p>
  );
}
