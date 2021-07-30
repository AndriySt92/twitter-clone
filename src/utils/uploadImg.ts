import axios from "axios"


interface ResponseUploadImg {
    height: number,
    size: number,
    url: string,
    width: number
}

export const uploadImg = async (img: any): Promise<ResponseUploadImg> => {
    let formData = new FormData()

    formData.append('img', img)

    const { data } = await axios.post('/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })

    return data
}