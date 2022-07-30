export const API_URL = process.env.Next_PUBLIC_API || 'http://localhost:1337'


export const fromImageToUrl = image => {
    if(!image){
        return "/favicon.ico"
    }

    if (image.url.indexOf("/") === 0) {
        return `${API_URL}${image.url}`
    }

    return image.url
}