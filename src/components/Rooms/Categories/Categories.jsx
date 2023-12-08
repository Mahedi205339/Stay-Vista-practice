import { useSearchParams } from "react-router-dom";
import Container from "../../Shared/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";

const Categories = () => {
    const [params, setParams] = useSearchParams()
    const category = params.get('category')
    return (
        <Container>
            <div className="my-6 flex justify-between overflow-x-auto">

                {categories.map(item => <CategoryBox
                    key={item.label}
                    icon={item.icon}
                    description={item.description}
                    label={item.label}
                    selected={category === item.label}
                ></CategoryBox>)}
            </div>
        </Container>
    );
};

export default Categories;