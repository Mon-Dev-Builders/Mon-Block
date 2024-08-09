import { Container } from "./assets";

export const Products = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-16 py-16">
        <p className="text-[50px]">Бүтээгдэхүүн</p>
        <div className="flex gap-24">
          <div className="flex flex-col items-center">
            <div
              className="w-[672px] h-[672px] bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url("hongonBlock.png")` }}
            ></div>
            <p className="text-[50px] mt-9">Хөнгөн блок</p>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="w-[672px] h-[672px] bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url("havtanBlock.png")` }}
            ></div>
            <p className="text-[50px] mt-9">Хавтан блок</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
