interface ITable {
    id: string,
    schemeId: string,
    x: number,
    y: number,
    width: number,
    height: number,
    type: 'rect' | 'circle',
    fill: string,
    scaleY?: number,
    scaleX?: number,
    rotation?: number,
    numberOfPeople: number
    radius?: number
}