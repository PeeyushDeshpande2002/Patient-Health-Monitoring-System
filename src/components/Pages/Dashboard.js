import { Box, Card } from "@mui/material"
import MultiActionAreaCard from "../Dashboard/Card"


export const Dashboard = () => {
  return (
    <div>
      <Box display={"flex"} justifyContent={"space-between"} mt={3}>
      <MultiActionAreaCard/>
      <MultiActionAreaCard/>
      <MultiActionAreaCard/>
      <MultiActionAreaCard/>
      </Box>
    </div>
  )
}


