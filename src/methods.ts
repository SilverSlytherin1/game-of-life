import fs from 'fs'
import { InputObj } from './types'

const countNeighbours = (start: number, end: number, array: string[]): number => {
    return array.slice(start, end).reduce((i, v) => v === '*' ? i + 1 : i, 0)
}

export const getData = (): InputObj => {
    const input = fs.readFileSync(`${__dirname}/../input/start.json`)
    return JSON.parse(input.toString('utf-8'))
}

export const checkCell = (x: number, y: number, matrix: string[][], alive: boolean) => {
    const start_x = x > 0 ? (x - 1) : x
    const end_x = x + 2
    let start_y = y > 0 ? (y - 1) : y
    let alive_neighbours = alive ? -1 : 0
    while (start_y <= y + 1) {
        alive_neighbours += countNeighbours(start_x, end_x, (matrix[start_y] || []))
        start_y += 1
    }

    return alive ? (alive_neighbours > 1 && alive_neighbours < 4) : alive_neighbours == 3
}
