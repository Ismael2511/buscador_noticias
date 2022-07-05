import {Grid, Typography, Pagination, Stack} from '@mui/material'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'

const ListadoNoticias = () => {
    const {noticias, totalNoticias,handleChangePagina, pagina} = useNoticias()
    const totalPaginas = Math.ceil(totalNoticias / 20)

  return (
    <>
        <Typography
            textAlign="center"
            marginY={5}
            variant="h3"
            component="h2"
        >
            Ultimas Noticias
        </Typography>

        <Grid 
            container
            spacing
        >
            {noticias.map(el => 
                <Noticia 
                    noticia={el}
                    key={el.url}
                />
            )}
        </Grid>

        <Stack 
            spacing="2"
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{marginY: 10}}
            page={pagina}
        >
            <Pagination count={totalPaginas} color="primary" onChange={handleChangePagina}></Pagination>
        </Stack>
    </>
  )
}

export default ListadoNoticias