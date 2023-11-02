export function customInputMask(input: string) {
  const value = input.replace(/\D/g, "")

  return value.slice(0, 6).replace(/(\d{0,2})(\d{0,2})(\d{0,2})/, (_match, p1, p2, p3) => {
    let formatted = ""
    if (p1) formatted += p1
    if (p2) formatted += `-${p2}`
    if (p3) formatted += `-${p3}`
    return formatted
  })
}
