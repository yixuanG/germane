export type FontSizePreference = 'regular' | 'large' | 'xlarge'

const FONT_SIZE_KEY = 'font-size'

export const getSavedFontSize = (): FontSizePreference => {
  const saved = localStorage.getItem(FONT_SIZE_KEY)
  if (saved === 'large' || saved === 'xlarge') {
    return saved
  }
  return 'regular'
}

export const applyFontSize = (fontSize: FontSizePreference) => {
  document.documentElement.dataset.fontSize = fontSize
}

export const saveFontSize = (fontSize: FontSizePreference) => {
  localStorage.setItem(FONT_SIZE_KEY, fontSize)
  applyFontSize(fontSize)
}
