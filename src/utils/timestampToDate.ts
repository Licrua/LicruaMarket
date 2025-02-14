const timestampToDate = (seconds: number, nanoseconds: number) => {
  const milliseconds = seconds * 1000 + Math.floor(nanoseconds / 1_000_000)
  return new Date(milliseconds).toLocaleString() // Возвращает строку с локальной датой и временем
}

export default timestampToDate
