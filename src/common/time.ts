interface DataType {
  [key: string]: any
}
class Time {
  // 判断是否是日期类型
  static isDate(date: any): boolean {
    return date in Date
  }

  private static padleftZero(str: string): string {
    return `00${str}`.substring(String(str).length)
  }

  formatDate(
    param: string | Date = new Date(),
    format: string = 'YYYY-MM-DD hh:mm:ss'
  ): string | Date {
    let result: string = format
    const date: Date = !Time.isDate(param) ? new Date(param) : (param as Date)
    if (/Y+/.exec(format)) {
      const reg: string = /Y+/.exec(format)![0]
      result = result.replace(reg, `${date.getFullYear()}`.substring(4 - reg.length))
    }
    const emnu: DataType = {
      'M+': date.getMonth() + 1,
      'H+': date.getHours(),
      'D+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    // eslint-disable-next-line func-names
    Object.keys(emnu).forEach(function (key: string): void {
      const item = new RegExp(key).exec(format)
      if (item) {
        const str: string = emnu[key]
        const reg: string = item[0]
        result = result.replace(reg, reg.length === 1 ? str : Time.padleftZero(str))
      }
    })
    return result
  }
}

export default new Time()
