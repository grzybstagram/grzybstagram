const rules = new Intl.PluralRules('pl');

export function pluralPL(n, forms) {
  const form = rules.select(n);
  if (form === 'one') return `${n} ${forms[0]}`;
  if (form === 'few') return `${n} ${forms[1]}`;
  return `${n} ${forms[2]}`;
}

export function formatReadingTime(minutes) {
  return pluralPL(minutes, ['minuta czytania', 'minuty czytania', 'minut czytania']);
}
