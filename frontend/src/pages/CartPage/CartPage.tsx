import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

import {getFilmsFromCartActionCreator} from "../../store/action-creators/cart.action-creator";
import {useSelectorWithTypes} from "../../hooks";
import FilmItem from "../../components/FilmItem/FilmItem";
import FilmItemModal from "../../components/FilmItemModal/FilmItemModal";

const CartPage: React.FC = () => {
    const [filmId, setFilmId] = useState<number>(0);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const dispatch = useDispatch();

    const {films} = useSelectorWithTypes(state => state.cart);

    useEffect(() => {
        dispatch(getFilmsFromCartActionCreator());

        //eslint-disable-next-line
    }, [])

    return <div className={'page'}>
        <div className={'page-links'}>
            <NavLink to={'/'}>Home</NavLink>
        </div>
        <div className={'page-links'}>
            <div className={'films-list'}>
                { films.length ? films.map((item) => {
                    return <FilmItem
                        {...item}
                        key={item.id}
                        deleteAccess={true}
                        handleClick={(id: number) => {
                            setFilmId(id);
                            setModalOpen(true);
                        }}
                    />
                }) : 'No films in cart now'}
            </div>
            <FilmItemModal filmId={filmId} isOpen={modalOpen} setOpen={setModalOpen}/>
        </div>
    </div>
}

export default CartPage;