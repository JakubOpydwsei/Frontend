import { useForm } from "react-hook-form";

function EditFrom() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

    console.log(watch("example"));

    return (
        <>
        <h2>EDIT FORM</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      <br />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>

        </>
      );
}

export default EditFrom;