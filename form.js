import "./styles.css";

export default function App() {
  function Submit(e) {
    e.preventDefault(); // Prevents the default form submission behavior

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    // Validate if all required fields are filled
    let isValid = true;
    formEle.querySelectorAll("[required]").forEach((element) => {
      if (!element.value.trim()) {
        isValid = false;
        alert(`${element.name} is required`);
      }
    });

    if (isValid) {
      fetch(
        "https://script.google.com/macros/s/AKfycbzg7-wnhiyMZyFgPUDOOKqNPmG6fv9TVs8eOkUN4cpDh_1rmc0bCw2C1pYyaNoYJfHI/exec",
        {
          method: "POST",
          body: formDatab
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <div className="App">
      <h1>Contact Me form</h1>
      <h2>
        This demonstrates how to send data from a website form to Google sheet
        in React or Vanilla JS
      </h2>
      <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input
            placeholder="Razon Social (Business name)"
            name="razonSocial"
            type="text"
            required
          />
          <input
            placeholder="Numero de Identificacion Fiscal (Tax Identification number)"
            name="numFiscal"
            type="text"
            required
          />

          <select name="tipoIdentificacionF" required>
            <option value="elegir">ELEGIR</option>
            <option value="NIT">NIT</option>
            <option value="NITE">NITE</option>
            <option value="ITIN NUMBER">ITIN NUMBER</option>
            <option value="VAT">VAT</option>
            <option value="OTRO">OTRO (OTHER)</option>
          </select>

          <input
            placeholder="Nombres Completos - Representante Legal(full-names Legal representative)"
            name="nombresCompletosRL"
            type="text"
            required
          />

          <select name="tipoIdentificacionR" required>
            <option value="elegir">ELEGIR</option>
            <option value="cc">Cedula de Ciudadania(Colombian Citizenship Card)</option>
            <option value="ce">Cedula de Extranjeria(Foreigner ID)</option>
            <option value="pasaporte">Pasaporte(Passport)</option>
            <option value="pep">Permiso Especial de Permanencia(Special PEP Permanence Permit)</option>
            <option value="ppt">Permiso por Proteccion Temporal -PPT(Temporary Protection Permit - PPT)</option>
            <option value="OTRO">OTRO (OTHER)</option>
          </select>

          <input
            placeholder="Numero de Identificacion (Number ID)"
            name="numIdentificacion"
            type="text"
            required
          />
          <input
            placeholder="Nacionalidad (Nationality)"
            name="nacionalidad"
            type="text"
            required
          />
          <input
            placeholder="Ciudad de Residencia (City of residence)"
            name="ciudadResidencia"
            type="text"
            required
          />
          <input
            placeholder="Correo Electronico (E-mail):"
            name="correo"
            type="text"
            required
          />
          <input
            placeholder="Telefono Celular (Cell phone):"
            name="telefonoCelular"
            type="text"
            required
          />

          <input name="Name" type="submit" />
        </form>
      </div>
    </div>
  );
}
