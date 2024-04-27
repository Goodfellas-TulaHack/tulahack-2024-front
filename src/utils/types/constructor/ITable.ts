interface ITable {
    id: string,
    x: number,
    y: number,
    width: number,
    height: number,
    type: 'rect' | 'circle',
    fill: string,
    scaleXD?: number,
    scaleYD?: number,
    scaleY?: number,
    scaleX?: number,
    rotate?: number,
    numberOfPeople: number
    radius?: number
}