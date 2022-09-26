import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/students")
            .then((resp) => resp.json())
            .then((date) => {
                setStudents(date);
            });
    }, []);

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
                            <td>editar</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default Students;
