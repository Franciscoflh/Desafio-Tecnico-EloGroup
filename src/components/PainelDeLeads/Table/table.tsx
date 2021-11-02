/* eslint-disable array-callback-return */
/* eslint-disable no-lone-blocks */
import { loadInicialData } from "../../../services/api";
import { Rows } from "../Rows/rows";
import { Column, Container, Head } from "./style_table";

const data = loadInicialData()

let columnNames: string[] = []
let leadStatus: string[] = []
{
    data.columns.map((column) => (
        columnNames.push(column.name)
    ))
}
{
    data.leads.map((lead) => (
        leadStatus.push(lead.status)
    ))
}
console.log(columnNames)
console.log(leadStatus)

{
    columnNames.map((name) => {
        return (
            leadStatus.map((status) => {
                if (name === status)
                    return (
                        console.log(true)
                    )
            })
        )
    })
}



export function Table() {
    return (
        <Container>
            <Head>
                {data.columns.map((column) => (
                    <Column>{column.name}</Column>
                ))}
            </Head>

            {data.columns.map((column) => {
                return (
                    data.leads.map((lead) => {
                        if (column.name === lead.status) {
                            return (
                                <Rows
                                    key={column.id}
                                    column={column}
                                    lead={lead}
                                />
                            )
                        } else {
                        }
                    })
                )
            })}
        </Container>
    );
}