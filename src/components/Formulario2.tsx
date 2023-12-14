import { useForm } from "../hooks/useForm";

interface FormData {
  postal: string;
  city: string;
}

const Formulario2 = () => {
  const { postal, city, form, handleChange } = useForm<FormData>({
    postal: "ABC",
    city: "Las Varillas"
  });

//   const { postal, city } = form


  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Códiigo postal:</label>
        <input
          type="text"
          className="form-control"
          name="email"
          value={ postal }
          onChange={ handleChange }
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Ciudad:</label>
        <input
          type="text"
          className="form-control"
          name="city"
          value={ city }
          onChange={ handleChange }
        />
      </div>

      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};

export default Formulario2;
