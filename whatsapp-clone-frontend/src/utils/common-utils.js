

export const formatDate = () =>{
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    return `${hours < 10 ? '0' + hours:hours} : ${minutes < 10 ? '0' + minutes:minutes}`
}