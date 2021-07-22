import formatDistance from 'date-fns/formatDistance'
import ruLand from 'date-fns/locale/ru'

export const formatDate = (date: Date) => {
    return formatDistance(
        date,
        new Date(),
        {locale: ruLand}
    )
}