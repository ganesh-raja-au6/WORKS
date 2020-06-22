import _ from 'lodash'

const Paginate = (itemsCount, pageSize, currentPage)=> {
    const StartIndex = (currentPage -1) * pageSize
    return _(itemsCount).slice(StartIndex).take(pageSize).value()
}

export default Paginate