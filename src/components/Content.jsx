import { useEffect, useState } from "react";

export default function Content() {
    const URL = "https://fakestoreapi.com/products";
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState("")
    const [filter, setFilter] = useState([])

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const fetch_api = await fetch(URL);
                const fetch_res = await fetch_api.json()
                setData(fetch_res)
                setLoading(false)
            } catch (error) {
                alert(error);
            }
        }
        fetchData()
    }, [])

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    useEffect(() => {
        if (input.trim() === "") {
            setFilter(data)
        }
        else {
            setFilter(
                data.filter((eachVal) => {
                    return eachVal.title.toLowerCase().includes(input.toLowerCase())
                })
            )
        
        }
        
    }, [data, input])
    return (

        <>
            <section>
                <div className="container mx-auto p-5">
                    <div className="text-2xl text-center my-4">
                        <h3 className="my-2">Online Shopping</h3>
                        <form action="post">
                            <div className="flex justify-center align-middle">
                                <input type="text" name="search_post" placeholder="Search..." className="border-2 p-2 rounded-4xl min-w-3/6 font-light placeholder:text-sm placeholder:align-baseline" onChange={handleInput} value={input} />
                            </div>
                        </form>
                    </div>
                    <div>


                        <div className="flex flex-wrap -m-4">
                            {loading ? "Loading..." : filter.length > 0 ? (
                                filter.map((eachVal) => {
                                    const { id, title, image, price, category } = eachVal
                                    return (

                                        <div className="lg:w-1/4 md:w-1/3 p-4 w-full shadow-lg" key={id}>
                                            <a className="block relative h-48 rounded overflow-hidden">
                                                <img alt={title} className="object-contain object-center w-full h-full block" src={image} />
                                            </a>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                                                <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                                                <p className="mt-1">💸{price}</p>
                                            </div>
                                        </div>

                                    )
                                })
                            ) : "Data Not Found"}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}