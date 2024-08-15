import { Container } from "./assets";

export const LoginContent = () => {
  return (
    <Container>
      <div className="flex w-[557px] m-auto bg-green-200 justify-center items-center">
        <div className="flex flex-col">
          <label htmlFor="">Нэвтрэх</label>
          <input type="text" className="px-4 w-[300px]" placeholder="И-мэйл хаягаа оруулна уу" />
        </div>
      </div>
    </Container>
  );
};
