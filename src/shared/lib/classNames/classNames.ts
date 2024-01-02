type Mods = Record<string, boolean | string>;

export function classNames(
  className: string,
  mods: Mods = {},
  additional: string[] = []
): string {
  return [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([key, value]) => Boolean(value))
      .map(([key, value]) => key)
  ].join(' ');
}

console.log(
  classNames('someClass', { hovered: true, scrollable: true }, [
    'class1',
    'class2'
  ])
);
