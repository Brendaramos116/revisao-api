import Pagina from '@/Components/Pagina'
import apiDeputados from '@/services/apiDeputados'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap'

const Deputados = ({ deputados, despesas, profissao }) => {
    return (
        <>
            <Pagina titulo={deputados.ultimoStatus.nome}> 
                <Row>                    
                        <Col mb={3}>
                            <Card>
                            <Card.Img variant='top' src={deputados.ultimoStatus.urlFoto} />
                            <Card.Body>
                            <Card.Title className='text-center'><p><strong>{deputados.nomeCivil}</strong></p></Card.Title>
                            <p><strong>Partido:</strong> {deputados.ultimoStatus.siglaPartido}</p>
                            <p><strong>UF Partido:</strong> {deputados.ultimoStatus.siglaUf}</p>
                            <p><strong>Condição Eleitoral:</strong> {deputados.ultimoStatus.condicaoEleitoral}</p>
                            <Link href={'/deputados/'} className='btn btn-danger'>Voltar</Link>
                            </Card.Body>
                            </Card>
                        </Col>                    
                    <Col>
                        <h1>Despesas</h1>
                        <Table striped bordered hover>
                            <thead>                                
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Valor</th>
                                </tr>

                            </thead>
                            <tbody>
                                {despesas.map(item => (
                                    <tr>
                                        <td>{item.dataDocumento}</td>
                                        <td>{item.tipoDespesa}</td>
                                        <td>{item.valorLiquido}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <h1>Profissões 2</h1>
                        <ul>
                            {profissao.map(item => (
                                <li>{item.titulo}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Pagina>
        </>
    )
}

export default Deputados
export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apiDeputados.get('/deputados/' + id)
    const deputados = resultado.data.dados

    const resDespesas = await apiDeputados.get('/deputados/' + id + '/despesas')
    const despesas = resDespesas.data.dados

    const resProfissao = await apiDeputados.get('/deputados/' + id + '/profissoes')
    const profissao = resProfissao.data.dados

    return {
        props: { deputados, despesas, profissao }
    }
}