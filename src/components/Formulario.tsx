// import { ChangeEvent, useState } from "react";
import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  name: string;
  age: number
}

const Formulario = () => {
  const { name, email, age, form, handleChange } = useForm<FormData>({
    email: "tato@gmail",
    name: "Tato Clemente",
    age: 33
  });

  // const { email, name, age } = form
  // const [form, setForm] = useState({
  //   email: "",
  //   name: "",
  // });

  // const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = target;

  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // };

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Edad:</label>
        <input
          type="number"
          className="form-control"
          name="age"
          value={age}
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};

export default Formulario;
