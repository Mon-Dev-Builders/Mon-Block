import { Container } from "./assets";
const products = [
  {
    name: "lightBlock",
    title: "Хөнгөн блок",
    description: `Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33`,
    image: "hongonBlock.png",
  },
  {
    name: "plateBlock",
    title: "Хавтан блок",
    description: `Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33`,
    image: "havtanBlock.png",
  },
];
export const ProductsDetail = () => {
  return (
    <Container>
      <div className="flex flex-col items-center py-16">
        <p className="text-[50px]">БҮТЭЭГДЭХҮҮН</p>
        <div className="flex flex-col w-full my-32 items-center">
          {products.map((product, index) => (
            <div
              key={product.name}
              id={product.name}
              className="w-full flex flex-col items-center"
            >
              {index !== 0 ? (
                <div className="h-[3px] my-20 bg-red-500 w-full"></div>
              ) : null}
              <div className="flex gap-16">
                <div
                  className="w-[672px] h-[672px] bg-cover bg-center rounded-xl"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
                <div className="flex flex-col max-w-[915px] h-[672px] text-[30px] font-medium gap-10 ">
                  <p className="text-[50px]">{product.title}</p>
                  <p className="text-[30px]">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
