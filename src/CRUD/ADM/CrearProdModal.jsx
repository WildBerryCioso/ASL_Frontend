import { useState } from 'react';
import Modal from 'react-modal';
import './ADMPage.css';
import { useUiStore } from '../../hooks';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const CrearProdModal = () => {

    const {} = useUiStore()

    const [isOpen, setIsOpen] = useState(true);

    const [formValues, setFormValues] = useState({
        titulo:'',
        descripcion: '',
        precio: '',
        cantidad: '',
    })

    const onInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onCloseModal = () => {
        console.log('cerrando modal');
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >
            <h1> Nuevo Producto </h1>
            <hr />
            <form>

                <div className="form-group mb-2">
                    <label>Titulo</label>
                    <input className="form-control" placeholder="Titulo" value={formValues.titulo} onChange={ onInputChange }/>
                </div>
                <div className="form-group mb-2">
                    <label>Descripcion</label>
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Descripcion"
                        rows="5"
                        name="notes"
                        value={formValues.descripcion}
                        onChange={ onInputChange }
                    ></textarea>
                </div>

                <div className="form-group mb-2">
                    <label>Precio</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Precio"
                        name="title"
                        autoComplete="off"
                        value={formValues.precio}
                        onChange={ onInputChange }
                    />
                </div>
                <div className="form-group mb-2">
                    <label>Cantidad</label>
                    <input className="form-control" placeholder="Cantidad" value={formValues.cantidad} onChange={ onInputChange }/>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}