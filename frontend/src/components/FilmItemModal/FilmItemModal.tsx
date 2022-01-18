import React, {useEffect} from "react";
import Modal from 'react-modal';
import {useDispatch} from "react-redux";

import './FilmItemModal.scss';
import {getFilmDetailsActionCreator} from "../../store/action-creators";
import {constants} from "../../constants";
import {useSelectorWithTypes} from "../../hooks";
import {addFilmToCartActionCreator} from "../../store/action-creators/cart.action-creator";

type Props = {
    filmId: number;
    isOpen: boolean;
    setOpen: (open: boolean) => void
}

const FilmItemModal: React.FC<Props> = ({ filmId, isOpen, setOpen }) => {
    const dispatch = useDispatch();
    const { currentFilm } = useSelectorWithTypes(state => state.films);

    useEffect(() => {
        if (filmId) {
            dispatch(getFilmDetailsActionCreator(filmId))
        }

        //eslint-disable-next-line
    }, [filmId]);

    const addToCart = () => {
        dispatch(addFilmToCartActionCreator({ filmId }))
    }

    return <Modal
        isOpen={isOpen}
        style={constants.modalCustomStyles}
    >
        <div className={'modal-header'} >
            <button className={'modal-header-button'} onClick={addToCart}>Add to Cart</button>
            <button className={'modal-header-button'} onClick={() => setOpen(false)} >Close</button>
        </div>
        <div>
            <div className={'modal-body'}>
                { currentFilm?.poster_path ?
                    <img className={'modal-body-image'} src={`${constants.imagesUrl}/${currentFilm?.poster_path}`} alt=""/> :
                    <img className={'modal-body-image'} src="https://wallpapercave.com/wp/wp3494202.jpg" alt=""/>
                }
                <div className={'modal-body-data'} >
                    <div className={'film-title'} >
                        {currentFilm?.title}
                    </div>
                    <div className={'film-description'} >
                        {currentFilm?.overview}
                    </div>
                    <div className={'film-language'} >
                        Original language: {currentFilm?.original_language}
                    </div>
                    <div className={'film-date'} >
                        Release date: {currentFilm?.release_date}
                    </div>
                    <div className={'film-status'} >
                        Status: {currentFilm?.status}
                    </div>
                    <div className={'film-rating'} >
                        Rating: {currentFilm?.vote_average} / 10
                    </div>
                </div>
            </div>
        </div>
    </Modal>
}

export default FilmItemModal;
