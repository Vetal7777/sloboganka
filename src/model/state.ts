export interface initialStateI {
  error: null | string
  isLoading: boolean
  showMenu: boolean
  content: null | ContentI
}

export interface ContentI {
  header: HeaderItemI[]
  article: ArticleI
  goods: GoodI[]
  benefits: BenefitI[]
  history: HistoryItemI[]
  contacts: ContactsI
}

export interface HeaderItemI {
  title: string
  link: string
}

interface ArticleI {
  title_h1: string
  title_h2: string
  preview_video_link: string
}

export interface GoodI {
  pic_length: number | string
  id: string | number
  title: string
  content: string[]
}

export interface BenefitI {
  title: string
  content: string
  ico?: JSX.Element
}

export interface HistoryItemI {
  ico?: JSX.Element
  title: string
  content: string
  print: string
}

interface ContactsI {
  phones: string[]
  mail: string
  location: string
}
