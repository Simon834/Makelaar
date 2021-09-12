
export function uploadConection(arr, setArr){

    var myWidget = window.cloudinary.createUploadWidget({
    cloudName: 'makelaar',
    uploadPreset: 'amojar0m'
}, (error, result) => {
    if (!error && result && result.event === "success") {
        arr.push(result.info.url)
        setArr([...arr])
    }
}
)
return myWidget

}