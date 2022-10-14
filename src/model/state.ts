export interface initialStateI {
    error: null | string,
    isLoading: boolean,
    content: null | ContentI,
}

export interface ContentI {
    header: HeaderItemI[],
    article: ArticleI,
    goods: GoodI[],
    benefits: BenefitsI[],
    history: HistoryItemI[],
    contacts: ContactsI,
}

interface HeaderItemI {
    title: string,
    link: string
}

interface ArticleI {
    title_h1: string,
    title_h2: string,
    preview_video_link: string,
}

export interface GoodI {
    title: string,
    content: string[],
}

interface BenefitsI{
    title: string,
    content: string,
    ico?:JSX.Element,
}

interface HistoryItemI {
    ico?:JSX.Element,
    title: string,
    content: string,
}

interface ContactsI {
    phones: string[],
    mail: string,
    location: string,
}