import React, {useState} from "react";
import "../../App.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Button } from "@material-ui/core";
import Unsplash, { toJson } from "unsplash-js";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  caixaTexto: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  formControl: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(1.78),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: 1000,
    height: 550,
    borderRadius: 0,
  },

}));

let api_key = process.env.REACT_APP_API_KEY;

const unsplash = new Unsplash({
  accessKey: `${api_key}`,
});

export default function SearchPhotos(keyword, page, per_page, filters) {
  const classes = useStyles();
  const [busca, setBusca] = useState("");
  const [Fotos, setFotos] = useState([]);
  const [cor, setCor] = React.useState("");
  const [nmr, setNmr] = useState(0);

  const searchFotos = async (e) => {
    e.preventDefault();
    unsplash.search
      .photos(busca, 1, 10, { color: `${cor}` })
      .then(toJson)
      .then((json) => {
        setFotos(json.results);
        console.log(json.total);
        setNmr(parseInt(json.total));
      });
  };

  const handleChange = (event) => {
    setCor(event.target.value);
  };

  return (
    <>
      <form className="animate-up">
        <label className="label"></label>
        <Container className={classes.container}>
          <TextField
            className={classes.caixaTexto}
            id="animate-up"
            required
            fullWidth
            variant="outlined"
            color="secondary"
            type="text"
            name="query"
            placeholder={`Começe a Buscar...`}
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel
              style={{ color: grey[50] }}
              id="demo-simple-select-filled-label"
            >
              Cor
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={cor}
              onChange={handleChange}
              style={{ color: grey[50] }}
            >
              <MenuItem value="blue">Azul</MenuItem>
              <MenuItem value="green">Verde</MenuItem>
              <MenuItem value="black">Preto</MenuItem>
              <MenuItem value="black_and_white">Preto e Branco</MenuItem>
              <MenuItem value="white">Branco</MenuItem>
              <MenuItem value="yellow">Amarelo</MenuItem>
              <MenuItem value="orange">Laranja</MenuItem>
              <MenuItem value="red">Vermelho</MenuItem>
              <MenuItem value="purple">Roxo</MenuItem>
              <MenuItem value="magenta">Magenta</MenuItem>
              <MenuItem value="teal">Azul-petróleo</MenuItem>
              <MenuItem value="">Todas</MenuItem>
            </Select>
          </FormControl>
        </Container>
        <Button 
          style={{ marginBottom: 60, backgroundColor: '#FFDE59', color: 'black'}}
          type="button"
          onClick={searchFotos}
          variant="contained"
          color="primary"
          className="botao"
        >
          Pesquisar Imagens
        </Button>
      </form>
      {nmr > 0 ? (
        <div className="grid">
          <div className="card-list">
            {Fotos.map((foto) => (
              <div className="card" key={foto.id}>
                <img
                  className="card--image animate-up"
                  alt={foto.alt_description}
                  src={foto.urls.full}
                  width="50%"
                  height="50%"
                ></img>
              </div>
            ))}
          </div>
        </div>
      ) 
      : (<h2 className="animate-up">Aguardando</h2>)
      }

    </>
  );
}
