import { Grid, IconButton, Typography } from '@mui/material';
import Modal from 'react-modal';
import './stylesModal.css'
import { useUiStore } from '../../hooks';
import { useServices } from '../../hooks/UseServices';

Modal.setAppElement('#root');

export const VerProdModal = (info) => {

    const { isDateModalOpen, closeDateModal } = useUiStore();
    const { savingProductos, VerProducto } = useServices();

    console.log(info)

    const onCloseModal = () => {
        closeDateModal();
    }

    return (
        <Modal
            isOpen={isDateModalOpen}
            onRequestClose={onCloseModal}
            className="modalProducto"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >
            <Typography variant='h5' noWrap component='div' textAlign="center" fontSize='28px' fontWeight='bold' > {info.info.titulo} </Typography>
            <hr />
            <Grid className="page-inner">
                <Grid className="row">
                    <Grid className="el-wrapper">
                        <Grid className="box-up">
                            <img className="img" src={info.info.img} alt=""></img>
                            <Grid className="img-info">
                                <Grid className="info-inner">
                                    <span className="p-name">{info.info.titulo}</span>
                                    <span className="p-cantidad">{info.info.cantidad}</span>
                                </Grid>
                                <Grid className="a-size"><span className="size">{info.info.descripcion}</span></Grid>
                            </Grid>
                        </Grid>
                        <Grid className="box-down">
                            <Grid className="h-bg">
                                <Grid className="h-bg-inner"></Grid>
                            </Grid>

                            <Grid className="cart" >
                                <span className="price">{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COL' }).format(info.info.precio)}</span>
                                <span className="add-to-cart">
                                    <IconButton
                                        className="fa-solid fa-cart-shopping"
                                        sx={{
                                            right: '20%',
                                            color: '#a4ce3e',
                                            backgroundColor: 'white',
                                            margin: '5px',
                                            ':hover': { backgroundColor: 'fourth.main', opacity: 0.8 },
                                        }}>
                                    </IconButton>
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Modal>
    )
}