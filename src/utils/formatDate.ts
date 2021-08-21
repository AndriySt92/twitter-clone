import formatDistance from 'date-fns/formatDistance'
import format from 'date-fns/format'
import ruLand from 'date-fns/locale/ru'

export const formatDate = (date: Date) => {
    return formatDistance(
        date,
        new Date(),
        {locale: ruLand}
    )
}

export const formatDateMonthYear = (date: string) => {
    const year = date.slice(0,4)
    const month = date.slice(4, 6)
 
    return format(new Date(+year, +month), 'yyyy/MMMM', { locale: ruLand }).split('/')
}