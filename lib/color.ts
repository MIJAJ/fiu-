export const switchBackgroundColor = (color: string) => {
  switch (color) {
    case 'gray':
      return 'bg-gray-line'
    case 'orange':
      return 'bg-orange'
    case 'blue':
      return 'bg-blue'
    default:
      return ''
  }
}

export const switchBorderColor = (color: string) => {
  switch (color) {
    case 'orange':
      return 'border-orange'
    case 'blue':
      return 'border-blue'
    case 'gray':
      return 'border-gray-line'
    default:
      return ''
  }
}

export const switchTextColor = (color: string) => {
  switch (color) {
    case 'gray':
      return 'text-gray-text'
    case 'white':
      return 'text-white'
    case 'blue':
      return 'text-blue'
    case 'orange':
      return 'text-orange'
    default:
      return ''
  }
}
