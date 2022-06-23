import { useMediaQuery } from "@mui/material";

export const useMaxWidthQuery = (px: number) => useMediaQuery(`(max-width:${px}px)`)
export const useMaxWidth900 = () => useMediaQuery('(max-width: 900px)')