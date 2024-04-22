function not (a, filter, keyFilter) {
  return a.filter((value) => value[keyFilter] !== filter)
}

function union (a, b) {
  return [...a, ...not(b, a)]
}

export { not, union }

