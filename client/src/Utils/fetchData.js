const fetchData=async(url,option={})=>{
    try {
        const res=await fetch(url,option)
        const data=await res.json()
        return data
    } catch (error) {
        return {success:false,message:error}
    }
}

export default fetchData