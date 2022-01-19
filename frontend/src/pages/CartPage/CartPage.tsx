import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {getFilmsFromCartActionCreator} from "../../store/action-creators/cart.action-creator";
import {useSelectorWithTypes} from "../../hooks";
import FilmItem from "../../components/FilmItem/FilmItem";
import FilmItemModal from "../../components/FilmItemModal/FilmItemModal";
import './CartPage.scss';

const CartPage: React.FC = () => {
    const dispatch = useDispatch();
    const [filmId, setFilmId] = useState<number>(0);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const {films} = useSelectorWithTypes(state => state.cart);

    useEffect(() => {
        dispatch(getFilmsFromCartActionCreator());

        //eslint-disable-next-line
    }, [])

    return <div className={'page'}>
        <div>
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
                }) : <h1 className={'no-films'} >No films in cart now</h1>}
            </div>
            <FilmItemModal filmId={filmId} isOpen={modalOpen} setOpen={setModalOpen}/>
        </div>
    </div>
}

export default CartPage;