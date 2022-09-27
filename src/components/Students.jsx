import { useState, useEffect } from "react";
import { Form, Table, Button } from "react-bootstrap";

const Students = () => {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        searchStudent();
    }, []);

    //buscar estudante
    const searchStudent = () => {
        fetch("http://localhost:3000/students")
            .then((resp) => resp.json())
            .then((date) => {
                setStudents(date);
            });
    };

    //deletar estudante
    const deleteStudent = (id) => {
        fetch(`http://localhost:3000/students/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then(() => {
                setStudents(students.filter((student) => student.id !== id));
                searchStudent();
            })
            .catch((err) => console.log(err));
    };

    //cadastrar aluno
    const registerStudent = (student) => {
        fetch("http://localhost:3000/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(student),
        })
            .then((resp) => resp.json())
            .then(() => {
                searchStudent();
            })
            .catch((err) => console.log(err));
    };

    const onNameHandler = (e) => {
        setName(e.target.value);
    };

    const onEmailHandler = (e) => {
        setEmail(e.target.value);
    };

    const onSubmitHandler = () => {
        const student = {
            name: name,
            email: email,
        };

        registerStudent(student);
    };

    return (
        <>
            <>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o nome do aluno"
                            value={name}
                            onChange={onNameHandler}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Digite o e-mail do aluno"
                            value={email}
                            onChange={onEmailHandler}
                        />
                        <Form.Text className="text-muted">
                            Utilize o melhor e-mail do aluno.
                        </Form.Text>
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="button"
                        onClick={onSubmitHandler}
                    >
                        Cadastrar
                    </Button>
                </Form>
                <br />
            </>
            <>
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
            </>
        </>
    );
};

export default Students;
