import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import "./styles.css";

import { Card } from "../../components/Card";

export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState(() => {
    // Inicializa o estado com os dados do local storage, se existirem
    const storedStudents = localStorage.getItem("students");
    return storedStudents ? JSON.parse(storedStudents) : [];
  });
  const [user, setUser] = useState({ name: "", avatar: "" });

  useEffect(() => {
    // Atualiza o local storage sempre que o estado dos alunos mudar
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
    setStudentName(""); // Limpa o campo de entrada após adicionar o aluno
  }

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>

        <div>
          <strong>{user.name}</strong>
          <img src={logo} alt="Foto de perfil" width={200} />
        </div>
      </header>

      <input
        type="text"
        placeholder="Digite o nome..."
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />

      <button type="button" onClick={handleAddStudent}>
        Aprovar presença
      </button>

      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
}
