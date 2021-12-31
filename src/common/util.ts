enum dateEnmu {
  'YYYY' = '',
}
//工具类
class Util {
  //判断是否是日期类型
  isDate(date: any): boolean {
    return date in Date
  }
  formatDate(date: string | Date = new Date(), format: string = 'YYYY-MM-HH hh:mm:ss'): string | Date {
    date = !this.isDate(date) ? new Date(date) : date;

    return date
  }
}

export default new Util()
