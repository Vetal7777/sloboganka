export type BenefitProps = {
  item: Benefit
}

export type Benefit = {
  title: string
  content: string
  icoComponent: JSX.Element
}

export type Good = {
  id: string
  pic_length: number
  title: string
  content: string[]
}

export type GoodProps = {
  item: Good
  index: number
}

export type HeaderNavProps = {
  title: string
  link: string
}

export type HistoryIconProps = { print: string }

export type HistoryPairProps = {
  print: boolean
  pair: [HistoryItem, HistoryItem]
}

export type HistoryItem = {
  content: string
  print: string
  title: string
  icoComponent: JSX.Element
}

export type HistoryItemProps = {
  item: HistoryItem
  way: boolean
}
