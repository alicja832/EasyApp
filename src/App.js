import React from "react";
import { Container, Paper } from "@mui/material";

export default function Home() {
  const paperStyle = {
    padding: "3% 3%",
    width: "70%",
    margin: "1% auto",
    gap: "1%",
    position: "absolute",
    backgroundColor: "#FDF5E6",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    textAlign: "center",
    textShadow: "1px 1px 2px black",
  };

  return (
    <div>
      <div>
        <Paper elevation={3} style={paperStyle}>
          <h1>Kontener</h1>
          <p>
            Kontener Docker to format pakowania, gromadzący całość kodu i
            zależności aplikacji w standardowym formacie, pozwalającym na
            szybkie i niezawodne działanie we wszystkich środowiskach
            obliczeniowych. Kontener Docker jest popularnym, lekkim,
            autonomicznym i wykonywalnym kontenerem, zawierającym wszystko, co
            jest potrzebne do uruchomienia aplikacji, w tym biblioteki,
            narzędzia systemowe, kod i środowisko uruchomieniowe. Docker jest
            także platformą programistyczną, umożliwiającą programistom szybkie
            tworzenie, testowanie i wdrażanie aplikacji kontenerowych.
            Containers as a Service (CaaS) lub Container Services to zarządzane
            usługi chmurowe, zarządzające cyklem życia kontenerów. Usługi
            kontenerowe pomagają organizować (rozpoczynać, zatrzymywać i
            skalować) środowisko uruchomieniowe kontenerów. Korzystając z usług
            kontenerowych, można upraszczać, automatyzować i przyspieszać cykl
            tworzenia i wdrażania aplikacji. Usługi Docker i Container Services
            odniosły ogromny sukces w ciągu ostatnich kilku lat. Z niemal
            nieznanej i dość złożonej technologii open source w 2013 roku,
            Docker przekształcił się w standaryzowane środowisko uruchomieniowe,
            oficjalnie obsługiwane dla wielu produktów biznesowych Oracle.
          </p>
        </Paper>     
      </div>
    </div>
  );
}
