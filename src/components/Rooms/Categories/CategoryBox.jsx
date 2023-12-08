import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";
const CategoryBox = ({ label, icon: Icon, selected }) => {
    // console.log(selected);

    const [params, setParams] = useSearchParams()
    const navigate = useNavigate()
    const handleClick = () => {
        // console.log(label);
        let currentQuery = {}
        if (params) {
            currentQuery = qs.parse(params.toString())
            console.log(currentQuery);
        }
        const updatedQuery = { ...currentQuery, category: label }
        console.log(updatedQuery);
        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery,
        })
        navigate(url)
        console.log(url);


    }
    params.get('category')

    return (
        <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer  ${selected ? 'font-bold border-b-neutral-800 text-neutral-800' : ' '}`}>

            <Icon size={30} ></Icon>
            <div className="text-sm font-medium">
                {label}
            </div>
        </div>
    );
};

export default CategoryBox;