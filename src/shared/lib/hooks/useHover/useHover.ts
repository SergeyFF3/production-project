import React, {useCallback, useMemo} from "react"

interface UseHoverProps {
    onMouseEnter: () => void
    onMouseLeave: () => void
}

type UseHoverResult = [boolean, UseHoverProps]

export const useHover = () => {
    const [isHover, setIsHover] = React.useState(false)

    const onMouseEnter = useCallback(() => {
        setIsHover(true)
    }, [])

    const onMouseLeave = useCallback(() => {
        setIsHover(false)
    }, [])

    return useMemo(() => [
        isHover,
        {onMouseEnter, onMouseLeave}
    ], [isHover, onMouseEnter, onMouseLeave])
}