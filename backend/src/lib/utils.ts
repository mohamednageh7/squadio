export const generateUrl = (data:any,url:string) => {
    let objectKey = Object.keys(data)
    const includesCheck = (val:string) => objectKey.includes(val) ? `${val}=${data[`${val}`]}`:''
    let newUrl:string = `${url}&${includesCheck("period1")}&${includesCheck("period2")}&${includesCheck("interval")}&${includesCheck("crumb")}`
    return newUrl
}