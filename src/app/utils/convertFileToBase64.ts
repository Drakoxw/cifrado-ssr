const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onloadend = () => {
      if (reader.result && typeof reader.result === 'string') {
        const base64String = reader.result
          .replace('data:', '')
          .replace(/^.+,/, '')

        return resolve(base64String)
      }
    }

    reader.onerror = (error) => reject(error)
  })
}

export { convertFileToBase64 }
