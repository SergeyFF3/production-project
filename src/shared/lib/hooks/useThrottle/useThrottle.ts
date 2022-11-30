import React, {useCallback} from "react";

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const throttleRef = React.useRef(false)

    return useCallback( (...args: any[]) => {
        if (!throttleRef.current) {
            callback(...args)
            throttleRef.current = true

            setTimeout( () => {
                throttleRef.current = false
            }, delay)
        }
    }, [delay, callback])
}