import { checkCell, getData } from "./methods"

const main = () => {
    const input_data = getData()
    let output_matrix = input_data.matrix.map(
        (v, i, matrix) => v.map(
            (val, ind) => checkCell(ind, i, matrix, val == '*') ? '*' : '.'
        )
    )

    console.log(`Generation: ${input_data.gen + 1}:`)
    console.log(`${input_data.rows} ${input_data.cols}`)
    for (let row of output_matrix) {
        console.log(JSON.stringify(row))
    }
}

main()