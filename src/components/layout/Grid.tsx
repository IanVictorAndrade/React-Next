interface GridProps {
    cols?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    xl2?: number
    children: any
}

export default function Grid(props: GridProps) {
    //             grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
    return (
        <div className={`
            grid grid-cols-${props.cols ?? 1}
            gap-4 w-full
        `}>
            {props.children}
        </div>
    )
}