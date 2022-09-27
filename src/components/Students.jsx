import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        searchStudent();
    }, []);

    const searchStudent = () => {
        fetch("http://localhost:3000/students")
            .then((resp) => resp.json())
            .then((date) => {
                setStudents(date);
            });
    };

    const deleteStudent = (id) => {
        fetch(`http://localhost:3000/students/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json)
            .then(() => {
                setStudents(students.filter((student) => student.id !== id));
                searchStudent();
            })
            .catch((err) => console.log(err));
    };

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => {
                    return (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>
                                Atualizar{" "}
                                <Button
                                    variant="danger"
                                    onClick={() => {
                                        deleteStudent(student.id);
                                    }}
                                >
                                    Excluir
                                </Button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default Students;
